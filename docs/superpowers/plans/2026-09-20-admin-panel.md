# Portfolio Admin Panel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let the site owner edit all portfolio content (nav, stats, journey, coursework, extras, skills, projects, socials, contact, prose) from a password-protected admin panel, with changes live on the public site immediately, without touching code.

**Architecture:** A new dedicated Supabase project holds one `site_content` row (jsonb) and a `site-images` storage bucket. The public site (`index.html` → `src/Portfolio.jsx`) fetches that row at runtime (anon/public read) with the current hardcoded values kept as a fallback. A second, separate Vite entry (`admin.html` → `src/admin/`) is a small React app, gated by Supabase email/password auth, with one form per content section that reads/writes the same row (write access requires an authenticated session, enforced by Row Level Security).

**Tech Stack:** React 18 + Vite (existing), `@supabase/supabase-js`, Supabase Postgres + Auth + Storage. No new UI framework — admin gets its own minimal CSS, not the public site's poster styling.

**Spec:** `docs/superpowers/specs/2026-09-20-admin-panel-design.md`

## Global Constraints

- Supabase project: create a **new, dedicated** project for this portfolio (not the existing `fastunes` or paused `LapaluLiyanage's Project`) — confirmed by the user.
- Public reads use the Supabase **anon** key only; all writes require an authenticated session and are enforced server-side via Row Level Security, not just hidden UI.
- `site_content` is a **single-row singleton** (`id = 1`). No drafts, no revision history, no multi-user roles — edits are live on save (spec's explicit non-goals).
- `admin.html` builds as a **separate bundle** from `index.html` — no shared runtime state, no router library pulled into the public bundle.
- Prose fields (`prose.aboutBody`, `prose.musicBody`) are edited as **plain text** (paragraphs separated by a blank line). The current JSX has a few inline accent-colored sub-spans inside these paragraphs (e.g. "Rajarata University of Sri Lanka" in accent color) — those are dropped in favor of flat editable text, per the spec's flat prose model. This is an intentional simplification, not a bug.
- **No automated test framework exists in this repo** (no jest/vitest/anything). The spec's own Testing section specifies manual verification. Every task below ends in a manual verification step (dev server check, SQL query, or browser action) instead of an automated test — this matches the codebase's existing pattern (zero test infra) and the spec's explicit choice. Do not introduce a test framework as part of this plan.
- Secrets (Supabase URL/anon key) go in `.env` (gitignored) and are read via Vite's `import.meta.env.VITE_*`. Never commit real keys; `.env.example` holds placeholder names only.
- Do not add a `Co-Authored-By: Claude` (or any Anthropic attribution) line to any commit created while executing this plan.

---

## Task 1: Provision the Supabase project (schema, RLS, storage, auth)

**Files:**
- Create: `supabase/schema.sql` (kept in-repo as the source of truth for the schema, even though it's applied via Supabase tooling, not a migration runner)

**Interfaces:**
- Produces: a live Supabase project with URL + anon key (recorded in step 6, consumed by Task 2), table `public.site_content(id int, data jsonb, updated_at timestamptz)`, storage bucket `site-images`, and one auth user for the owner.

- [ ] **Step 1: Create a new Supabase project**

Use the Supabase MCP tools (or the Supabase dashboard) to create a new project, e.g. named `lapalu-portfolio`, in the same organization as the existing projects, region `ap-southeast-1` (closest to the existing projects). Wait for it to become `ACTIVE_HEALTHY`.

- [ ] **Step 2: Write the schema file**

```sql
-- supabase/schema.sql
create table if not exists public.site_content (
  id int primary key,
  data jsonb not null,
  updated_at timestamptz not null default now(),
  constraint site_content_singleton check (id = 1)
);

alter table public.site_content enable row level security;

create policy "site_content public read"
  on public.site_content for select
  using (true);

create policy "site_content authenticated write"
  on public.site_content for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

insert into storage.buckets (id, name, public)
values ('site-images', 'site-images', true)
on conflict (id) do nothing;

create policy "site-images public read"
  on storage.objects for select
  using (bucket_id = 'site-images');

create policy "site-images authenticated insert"
  on storage.objects for insert
  with check (bucket_id = 'site-images' and auth.role() = 'authenticated');

create policy "site-images authenticated update"
  on storage.objects for update
  using (bucket_id = 'site-images' and auth.role() = 'authenticated');

create policy "site-images authenticated delete"
  on storage.objects for delete
  using (bucket_id = 'site-images' and auth.role() = 'authenticated');
```

- [ ] **Step 3: Apply the schema**

Run `supabase/schema.sql` against the new project via the Supabase MCP `apply_migration` (or `execute_sql`) tool.

- [ ] **Step 4: Verify the table and policies**

Query `select * from pg_policies where tablename in ('site_content','objects');` via the MCP SQL tool. Expected: 4 policies on `site_content`/`objects` matching the names above (2 on `site_content`, 3 on `objects` — the 3rd being insert/update/delete grouped or listed separately depending on how Postgres reports `for all`; confirm `site_content authenticated write` covers insert/update/delete).

- [ ] **Step 5: Create the owner's auth user**

Via the Supabase dashboard (Authentication → Users → Add user), create one user with email `lapaluliyanage@gmail.com` and a password the owner chooses. Do not do this via raw SQL — Supabase Auth manages password hashing itself.

- [ ] **Step 6: Record the project URL and anon key**

From the Supabase dashboard (Project Settings → API), note the Project URL and the `anon` public key. These are consumed in Task 2 — do not commit them to git; they go into a local `.env` file.

- [ ] **Step 7: Commit the schema file**

```bash
git add supabase/schema.sql
git commit -m "Add Supabase schema for site content and image storage"
```

---

## Task 2: Add Supabase client dependency and shared client module

**Files:**
- Modify: `package.json`
- Create: `.env.example`
- Create: `.gitignore`
- Create: `src/lib/supabaseClient.js`

**Interfaces:**
- Produces: `supabase` — a configured `SupabaseClient` instance, imported by both the public site (Task 4) and the admin app (Task 5+).

- [ ] **Step 1: Install the dependency**

```bash
npm install @supabase/supabase-js
```

- [ ] **Step 2: Add `.gitignore`**

```
node_modules
dist
.env
.env.local
```

(This repo currently has no `.gitignore`; this adds the minimum needed so the new `.env` file is never committed. It does not retroactively untrack `node_modules`/`dist`, which are out of scope for this change.)

- [ ] **Step 3: Add `.env.example`**

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

- [ ] **Step 4: Create local `.env` with real values**

Create `.env` (gitignored) in the project root with the URL/anon key recorded in Task 1 Step 6:

```
VITE_SUPABASE_URL=https://<project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-key>
```

- [ ] **Step 5: Create the shared client module**

```js
// src/lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY");
}

export const supabase = createClient(url, anonKey);
```

- [ ] **Step 6: Verify**

Run `npm run dev`, open the browser console, confirm no "Missing VITE_SUPABASE_URL" error is logged (i.e. `.env` is being picked up by Vite).

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json .gitignore .env.example src/lib/supabaseClient.js
git commit -m "Add Supabase client dependency and shared client module"
```

---

## Task 3: Extract default content and seed Supabase

**Files:**
- Create: `src/lib/defaultContent.js`

**Interfaces:**
- Produces: `DEFAULT_CONTENT` — a plain JS object matching the `site_content.data` jsonb shape from the spec. Consumed by Task 4 (public site fallback) and this task's own seed step.

- [ ] **Step 1: Write `defaultContent.js`**

```js
// src/lib/defaultContent.js
export const DEFAULT_CONTENT = {
  nav: [
    { id: "home", label: "POSTER" },
    { id: "about", label: "DNA" },
    { id: "education", label: "EDUCATION" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "music", label: "MUSIC" },
    { id: "contact", label: "CONTACT" },
  ],
  stats: [
    { num: "3rd", label: "YEAR OF STUDY" },
    { num: "4+", label: "LIVE PERFORMANCES" },
    { num: "SE", label: "MAJOR FIELD" },
    { num: "01", label: "BAND — FASTUNES" },
  ],
  journey: [
    { when: "2022", title: "Started BSc Software Engineering", sub: "Rajarata University of Sri Lanka · Faculty of Applied Sciences" },
    { when: "2023", title: "Pioneered Open Mic on campus", sub: "Fastunes in Rusl · Vol 1.0 and Vol 2.0" },
    { when: "2024", title: "AI agents and full-stack builds", sub: "PEAS study assistant, campus event portal, search agent simulator" },
    { when: "NOW", title: "Year 3 · building and performing", sub: "Open mic series headliner · content for Instagram and TikTok" },
  ],
  coursework: [
    "Data Structures",
    "Algorithms",
    "Software Architecture",
    "Artificial Intelligence",
    "Machine Learning",
    "Database Systems",
    "Operating Systems",
    "Web Technologies",
    "Object Oriented Programming",
    "Software Project Management",
  ],
  extras: [
    "Core member and performer — Fastunes in Rusl",
    "Founded the campus open mic series (Vol 1.0 → 3.0)",
    "Closing ceremony performance — FASEXPLORE Exhibition",
    "Self-taught React, Node and AI agent design",
  ],
  skills: [
    {
      cat: "Frontend",
      items: [
        { name: "React.js", level: 85 },
        { name: "HTML / CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "Tailwind CSS", level: 78 },
      ],
    },
    {
      cat: "Backend",
      items: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 82 },
        { name: "Java", level: 70 },
        { name: "Express.js", level: 72 },
      ],
    },
    {
      cat: "AI / Data",
      items: [
        { name: "Machine Learning", level: 68 },
        { name: "AI Agents / PEAS", level: 75 },
        { name: "SQL / Databases", level: 73 },
        { name: "Data Structures", level: 80 },
      ],
    },
    {
      cat: "Tools & DevOps",
      items: [
        { name: "Git / GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Linux / CLI", level: 70 },
        { name: "Figma", level: 65 },
      ],
    },
  ],
  projects: [
    { title: "ClipForge", desc: "Save YouTube video as MP4 or extract MP3/WAV, with full quality control — a Chrome extension backed by a local yt-dlp/ffmpeg helper.", tags: ["Python", "Chrome Extension", "yt-dlp", "ffmpeg"], url: "https://github.com/LapaluLiyanage/ClipForge", image: "/projects/clipforge.jpg" },
    { title: "AudioForge", desc: "Desktop audio downloader and converter built for music production studios — batch format conversion with a fast, focused workflow.", tags: ["Desktop App", "Audio", "Automation"], url: "https://github.com/LapaluLiyanage/AudioForge", image: "/projects/audioforge.jpg" },
    { title: "Full-Frame", desc: "Chrome/Edge extension that lets you download your own Facebook photo albums as individual files or a single ZIP.", tags: ["JavaScript", "Browser Extension", "Privacy"], url: "https://github.com/LapaluLiyanage/Full-Frame", image: "/projects/full-frame.jpg" },
    { title: "CeylonPay", desc: "Spring Boot wallet and payment API with JWT authentication and PostgreSQL — built as internship-prep for real-world fintech backends.", tags: ["Java", "Spring Boot", "JWT", "PostgreSQL"], url: "https://github.com/LapaluLiyanage/ceylonpay", image: "/projects/ceylonpay.jpg" },
    { title: "Civic Insight RAG", desc: "Retrieval-augmented generation assistant that grounds answers about civic and public information in real source documents.", tags: ["Python", "RAG", "LLM", "AI"], url: "https://github.com/LapaluLiyanage/civic-insight-rag", image: "/projects/civic-insight-rag.jpg" },
    { title: "LearnSync", desc: "AI-powered Learning Management System for faculty and students — group study management, AI summarization and discussion forums.", tags: ["Flask", "Python", "Tailwind", "AI"], url: "https://github.com/LapaluLiyanage/LearnSync", image: "/projects/learnsync.jpg" },
  ],
  socials: [
    { label: "GITHUB", url: "https://github.com/LapaluLiyanage" },
    { label: "LINKEDIN", url: "https://www.linkedin.com/in/lapalu-liyanage/" },
    { label: "INSTAGRAM", url: "https://www.instagram.com/lapalu_s/" },
    { label: "TIKTOK", url: "https://www.tiktok.com/@lapalu_0" },
  ],
  contact: {
    email: "lapaluliyanage@gmail.com",
    phone: "0774680396",
  },
  prose: {
    heroRole: "MUSICIAN",
    aboutBody:
      "I am a third-year Software Engineering undergraduate at Rajarata University of Sri Lanka, passionate about building intelligent systems — AI agents, full-stack platforms, and tools that make campus life work better.\n\nAs a core member and performer of Fastunes in Rusl, I helped pioneer the open mic concept on campus — from the very first night to packed-house closing ceremonies. Music taught me timing, and engineering taught me structure; I use both in everything I ship.\n\nOff-stage I create content for Instagram and TikTok — always at the intersection of tech and art.",
    musicBody:
      "As a founding performer of Fastunes in Rusl, I helped build a music culture at Rajarata University — from the first open mic to packed-house closing ceremonies.",
  },
};
```

- [ ] **Step 2: Seed the Supabase table**

Via the Supabase MCP `execute_sql` tool (against the project created in Task 1), run:

```sql
insert into public.site_content (id, data)
values (1, '<DEFAULT_CONTENT as JSON, exact copy of the object above>'::jsonb)
on conflict (id) do update set data = excluded.data, updated_at = now();
```

(Serialize the `DEFAULT_CONTENT` object from Step 1 to JSON exactly — this is a one-time manual seed, not code that ships in the app.)

- [ ] **Step 3: Verify the seed**

Run `select data->'projects'->0->>'title' as first_project from public.site_content where id = 1;` via the SQL tool. Expected: `ClipForge`.

- [ ] **Step 4: Commit**

```bash
git add src/lib/defaultContent.js
git commit -m "Extract hardcoded portfolio content into a shared default-content module"
```

---

## Task 4: Wire the public site to fetch content from Supabase

**Files:**
- Create: `src/lib/content.js`
- Modify: `src/Portfolio.jsx`

**Interfaces:**
- Consumes: `supabase` from `src/lib/supabaseClient.js` (Task 2), `DEFAULT_CONTENT` from `src/lib/defaultContent.js` (Task 3).
- Produces: `fetchSiteContent(): Promise<object>` — resolves with the `data` jsonb from `site_content` row `id=1`, or rejects on any Supabase error (caller decides the fallback).

- [ ] **Step 1: Write `content.js`**

```js
// src/lib/content.js
import { supabase } from "./supabaseClient";

export async function fetchSiteContent() {
  const { data, error } = await supabase
    .from("site_content")
    .select("data")
    .eq("id", 1)
    .single();
  if (error) throw error;
  return data.data;
}
```

- [ ] **Step 2: Replace hardcoded consts in `Portfolio.jsx` with content state**

In `src/Portfolio.jsx`, remove the `NAV`, `STATS`, `JOURNEY`, `COURSEWORK`, `EXTRAS`, `SKILLS`, `FEATURED`, `SOCIALS` top-level consts (lines 8–165 in the current file) and the hardcoded contact email/phone and prose strings used later in the component. Replace their usages with a `content` state object, initialized to `DEFAULT_CONTENT` and refreshed on mount:

```js
import { DEFAULT_CONTENT } from "./lib/defaultContent";
import { fetchSiteContent } from "./lib/content";
// ...
export default function Portfolio() {
  const [content, setContent] = useState(DEFAULT_CONTENT);
  // ...
  useEffect(() => {
    let dead = false;
    fetchSiteContent()
      .then((data) => {
        if (!dead) setContent(data);
      })
      .catch(() => {
        /* offline or misconfigured: DEFAULT_CONTENT fallback stays in place */
      });
    return () => {
      dead = true;
    };
  }, []);
```

Update every reference from the removed consts to `content.nav`, `content.stats`, `content.journey`, `content.coursework`, `content.extras`, `content.skills`, `content.projects` (renamed from `FEATURED`), `content.socials`, `content.contact.email`, `content.contact.phone`, `content.prose.heroRole`, `content.prose.aboutBody`, `content.prose.musicBody`. Where `aboutBody`/`musicBody` are rendered, split on `"\n\n"` and render one `<p>` per paragraph, replacing the current single hardcoded `<p>` elements.

`TOP_SKILLS` stays a hardcoded const (it's a curated subset for the home page chip row, not one of the spec's editable sections) — leave it as-is.

- [ ] **Step 3: Verify in the browser**

Run `npm run dev`, open the site. Confirm: home page stats, About/Education/Skills/Projects/Music/Contact pages all render exactly as before (values now come from Supabase instead of hardcoded consts, but should be identical since Task 3 seeded the same values).

- [ ] **Step 4: Verify the fallback path**

Temporarily set `VITE_SUPABASE_URL` in `.env` to an invalid URL, restart `npm run dev`, confirm the site still renders fully using `DEFAULT_CONTENT` (no blank sections, no thrown errors in the console beyond the expected fetch failure). Restore the correct URL afterward.

- [ ] **Step 5: Commit**

```bash
git add src/Portfolio.jsx src/lib/content.js
git commit -m "Fetch site content from Supabase with hardcoded fallback"
```

---

## Task 5: Set up the admin app's build entry and shell

**Files:**
- Modify: `vite.config.js`
- Create: `admin.html`
- Create: `src/admin/main.jsx`
- Create: `src/admin/AdminApp.jsx`
- Create: `src/admin/admin.css`

**Interfaces:**
- Produces: a working `/admin.html` route that renders a placeholder "Admin" heading, proving the second Vite entry builds and serves correctly. Auth (Task 6) and real content (Task 7+) come later.

- [ ] **Step 1: Add the second build entry**

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin.html'),
      },
    },
  },
})
```

- [ ] **Step 2: Create `admin.html`**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Admin · Lapalu Liyanage</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/admin/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 3: Create the admin entry point**

```jsx
// src/admin/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import AdminApp from './AdminApp.jsx'
import './admin.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdminApp />
  </React.StrictMode>,
)
```

- [ ] **Step 4: Create a placeholder `AdminApp`**

```jsx
// src/admin/AdminApp.jsx
export default function AdminApp() {
  return <h1>Admin</h1>;
}
```

- [ ] **Step 5: Create a minimal admin stylesheet**

```css
/* src/admin/admin.css */
:root {
  color-scheme: light;
  --admin-bg: #f7f7f8;
  --admin-fg: #16161a;
  --admin-border: #d8d8dc;
  --admin-accent: #2f6fed;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  background: var(--admin-bg);
  color: var(--admin-fg);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
```

- [ ] **Step 6: Verify**

Run `npm run dev`, visit `/admin.html`. Expected: page shows "Admin". Run `npm run build`, confirm `dist/admin.html` and `dist/index.html` both exist after the build (`ls dist/*.html`).

- [ ] **Step 7: Commit**

```bash
git add vite.config.js admin.html src/admin/main.jsx src/admin/AdminApp.jsx src/admin/admin.css
git commit -m "Add separate Vite build entry and shell for the admin app"
```

---

## Task 6: Admin authentication

**Files:**
- Create: `src/admin/Login.jsx`
- Modify: `src/admin/AdminApp.jsx`

**Interfaces:**
- Consumes: `supabase` from `src/lib/supabaseClient.js`.
- Produces: `AdminApp` now renders `<Login onSignedIn={...} />` when there's no session, and gates all further UI (built in later tasks) behind a signed-in session. Exposes a `session` value (from `supabase.auth.getSession()` / `onAuthStateChange`) that later tasks don't need directly (all writes go through the same shared `supabase` client, which carries the session).

- [ ] **Step 1: Write the login form**

```jsx
// src/admin/Login.jsx
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setError(error.message);
  }

  return (
    <div className="admin-login">
      <form onSubmit={handleSubmit} className="admin-login-form">
        <h1>Admin sign in</h1>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoFocus />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        {error && <p className="admin-error">{error}</p>}
        <button type="submit" disabled={loading}>{loading ? "Signing in…" : "Sign in"}</button>
      </form>
    </div>
  );
}
```

- [ ] **Step 2: Gate `AdminApp` on session state**

```jsx
// src/admin/AdminApp.jsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Login from "./Login.jsx";

export default function AdminApp() {
  const [session, setSession] = useState(undefined); // undefined = loading, null = signed out

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  if (session === undefined) return <p className="admin-loading">Loading…</p>;
  if (!session) return <Login />;

  return (
    <div className="admin-shell">
      <header className="admin-header">
        <span>Signed in as {session.user.email}</span>
        <button onClick={() => supabase.auth.signOut()}>Sign out</button>
      </header>
      <h1>Admin</h1>
    </div>
  );
}
```

- [ ] **Step 3: Add login/shell styles**

Append to `src/admin/admin.css`:

```css
.admin-login { display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 16px; }
.admin-login-form { display: flex; flex-direction: column; gap: 10px; width: min(360px, 100%); background: #fff; border: 1px solid var(--admin-border); border-radius: 10px; padding: 24px; }
.admin-login-form label { display: flex; flex-direction: column; gap: 4px; font-size: 13px; }
.admin-login-form input { padding: 8px 10px; border: 1px solid var(--admin-border); border-radius: 6px; font-size: 14px; }
.admin-login-form button { margin-top: 8px; padding: 10px; border: none; border-radius: 6px; background: var(--admin-accent); color: #fff; font-weight: 600; cursor: pointer; }
.admin-login-form button:disabled { opacity: 0.6; cursor: default; }
.admin-error { color: #c0392b; font-size: 13px; margin: 0; }
.admin-header { display: flex; justify-content: space-between; align-items: center; padding: 12px 20px; background: #fff; border-bottom: 1px solid var(--admin-border); }
```

- [ ] **Step 4: Verify manually**

Run `npm run dev`, visit `/admin.html`. Confirm: login form shows; submitting wrong credentials shows an inline error; submitting the real owner credentials (created in Task 1 Step 5) shows the signed-in header with "Sign out"; reloading the page keeps the session (still signed in); clicking "Sign out" returns to the login form.

- [ ] **Step 5: Commit**

```bash
git add src/admin/Login.jsx src/admin/AdminApp.jsx src/admin/admin.css
git commit -m "Add Supabase email/password auth to the admin app"
```

---

## Task 7: Content loading, generic save helper, and tabbed shell

**Files:**
- Modify: `src/admin/AdminApp.jsx`
- Create: `src/admin/useSiteContent.js`

**Interfaces:**
- Produces: `useSiteContent()` — a hook returning `{ content, loading, error, saveSection(key, value) }`. `content` mirrors the `site_content.data` shape. `saveSection(key, value)` does a read-modify-write: merges `{ [key]: value }` into the current row and writes it back, updating local `content` on success. Later tasks' section editors (Task 9–12) all consume this hook via `AdminApp`, receiving their section's slice of `content` and a bound save function as props.

- [ ] **Step 1: Write the content hook**

```jsx
// src/admin/useSiteContent.js
import { useCallback, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export function useSiteContent() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const reload = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase.from("site_content").select("data").eq("id", 1).single();
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    setError("");
    setContent(data.data);
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  const saveSection = useCallback(async (key, value) => {
    const { data: current, error: readError } = await supabase.from("site_content").select("data").eq("id", 1).single();
    if (readError) throw readError;
    const next = { ...current.data, [key]: value };
    const { error: writeError } = await supabase.from("site_content").update({ data: next }).eq("id", 1);
    if (writeError) throw writeError;
    setContent(next);
  }, []);

  return { content, loading, error, saveSection };
}
```

- [ ] **Step 2: Wire the hook into a tabbed shell in `AdminApp`**

```jsx
// src/admin/AdminApp.jsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Login from "./Login.jsx";
import { useSiteContent } from "./useSiteContent.js";

const TABS = [
  { key: "nav", label: "Nav" },
  { key: "stats", label: "Hero/Stats" },
  { key: "journey", label: "Journey" },
  { key: "coursework", label: "Coursework" },
  { key: "extras", label: "Extras" },
  { key: "skills", label: "Skills" },
  { key: "projects", label: "Projects" },
  { key: "socials", label: "Socials" },
  { key: "contact", label: "Contact" },
  { key: "prose", label: "Prose" },
];

export default function AdminApp() {
  const [session, setSession] = useState(undefined);
  const [tab, setTab] = useState(TABS[0].key);
  const { content, loading, error, saveSection } = useSiteContent();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => setSession(newSession));
    return () => sub.subscription.unsubscribe();
  }, []);

  if (session === undefined) return <p className="admin-loading">Loading…</p>;
  if (!session) return <Login />;

  return (
    <div className="admin-shell">
      <header className="admin-header">
        <span>Signed in as {session.user.email}</span>
        <button onClick={() => supabase.auth.signOut()}>Sign out</button>
      </header>
      <div className="admin-body">
        <nav className="admin-sidebar">
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`admin-tab${tab === t.key ? " active" : ""}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </nav>
        <main className="admin-main">
          {loading && <p>Loading content…</p>}
          {error && <p className="admin-error">{error}</p>}
          {content && <p>Section "{tab}" editor goes here (added in later tasks).</p>}
        </main>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Add shell layout styles**

Append to `src/admin/admin.css`:

```css
.admin-body { display: flex; min-height: calc(100vh - 49px); }
.admin-sidebar { display: flex; flex-direction: column; width: 180px; background: #fff; border-right: 1px solid var(--admin-border); padding: 12px 0; }
.admin-tab { text-align: left; padding: 10px 20px; border: none; background: none; cursor: pointer; font-size: 14px; color: var(--admin-fg); }
.admin-tab.active { background: var(--admin-bg); font-weight: 600; border-left: 3px solid var(--admin-accent); }
.admin-main { flex: 1; padding: 24px; }
```

- [ ] **Step 4: Verify manually**

Run `npm run dev`, sign in at `/admin.html`. Confirm: sidebar shows all 10 tabs; clicking each tab updates the main panel text to show that section's key; the "Loading content…" message briefly appears then is replaced (content loaded from Supabase).

- [ ] **Step 5: Commit**

```bash
git add src/admin/AdminApp.jsx src/admin/useSiteContent.js src/admin/admin.css
git commit -m "Add content-loading hook and tabbed admin shell"
```

---

## Task 8: Reusable list-editing and image-upload components

**Files:**
- Create: `src/admin/components/ListEditor.jsx`
- Create: `src/admin/components/ImageUpload.jsx`

**Interfaces:**
- Produces:
  - `ListEditor({ items, onChange, renderFields, newItem, itemLabel })` — generic add/edit/reorder/delete for arrays of objects. `items`: array. `onChange(nextItems)`: called with the full updated array whenever the user adds/edits/reorders/deletes. `renderFields(item, updateItem)`: renders the fields for one item; `updateItem(patch)` merges `patch` into that item. `newItem`: object used as the template when "Add" is clicked. `itemLabel(item)`: returns a short string for the item's header (e.g. its title).
  - `ImageUpload({ value, onChange, pathPrefix })` — `value`: current image URL (string) or `""`. `onChange(url)`: called with the new public URL after a successful upload. `pathPrefix`: folder inside the `site-images` bucket (e.g. `"projects"`).

- [ ] **Step 1: Write `ListEditor`**

```jsx
// src/admin/components/ListEditor.jsx
export default function ListEditor({ items, onChange, renderFields, newItem, itemLabel }) {
  function updateAt(index, patch) {
    const next = items.map((it, i) => (i === index ? { ...it, ...patch } : it));
    onChange(next);
  }

  function removeAt(index) {
    onChange(items.filter((_, i) => i !== index));
  }

  function moveAt(index, dir) {
    const target = index + dir;
    if (target < 0 || target >= items.length) return;
    const next = items.slice();
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  }

  function add() {
    onChange([...items, { ...newItem }]);
  }

  return (
    <div className="list-editor">
      {items.map((item, i) => (
        <div className="list-editor-row" key={i}>
          <div className="list-editor-row-head">
            <span>{itemLabel(item) || `Item ${i + 1}`}</span>
            <div className="list-editor-row-actions">
              <button type="button" onClick={() => moveAt(i, -1)} disabled={i === 0}>↑</button>
              <button type="button" onClick={() => moveAt(i, 1)} disabled={i === items.length - 1}>↓</button>
              <button type="button" onClick={() => removeAt(i)}>Delete</button>
            </div>
          </div>
          <div className="list-editor-row-fields">
            {renderFields(item, (patch) => updateAt(i, patch))}
          </div>
        </div>
      ))}
      <button type="button" className="list-editor-add" onClick={add}>+ Add</button>
    </div>
  );
}
```

- [ ] **Step 2: Write `ImageUpload`**

```jsx
// src/admin/components/ImageUpload.jsx
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function ImageUpload({ value, onChange, pathPrefix }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    const path = `${pathPrefix}/${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from("site-images").upload(path, file, { upsert: false });
    setUploading(false);
    if (uploadError) {
      setError(uploadError.message);
      return;
    }
    const { data } = supabase.storage.from("site-images").getPublicUrl(path);
    onChange(data.publicUrl);
  }

  return (
    <div className="image-upload">
      {value && <img src={value} alt="" className="image-upload-preview" />}
      <input type="file" accept="image/*" onChange={handleFile} disabled={uploading} />
      {uploading && <span>Uploading…</span>}
      {error && <p className="admin-error">{error}</p>}
    </div>
  );
}
```

- [ ] **Step 3: Add component styles**

Append to `src/admin/admin.css`:

```css
.list-editor-row { border: 1px solid var(--admin-border); border-radius: 8px; padding: 12px; margin-bottom: 10px; background: #fff; }
.list-editor-row-head { display: flex; justify-content: space-between; align-items: center; font-weight: 600; margin-bottom: 8px; }
.list-editor-row-actions button { margin-left: 6px; }
.list-editor-row-fields { display: flex; flex-direction: column; gap: 8px; }
.list-editor-row-fields input, .list-editor-row-fields textarea { padding: 6px 8px; border: 1px solid var(--admin-border); border-radius: 6px; font-size: 13px; width: 100%; }
.list-editor-add { margin-top: 4px; padding: 8px 14px; border: 1px dashed var(--admin-accent); background: none; color: var(--admin-accent); border-radius: 6px; cursor: pointer; }
.image-upload-preview { display: block; max-width: 160px; max-height: 100px; object-fit: cover; border-radius: 6px; margin-bottom: 6px; }
```

- [ ] **Step 4: Verify**

These are consumed by the next tasks — verification happens there (a component with no caller can't be exercised). Run `npm run build` now to confirm no syntax errors in the two new files (build should succeed even though nothing imports them yet).

- [ ] **Step 5: Commit**

```bash
git add src/admin/components/ListEditor.jsx src/admin/components/ImageUpload.jsx src/admin/admin.css
git commit -m "Add reusable list-editor and image-upload components for the admin app"
```

---

## Task 9: Nav and Stats section editors

**Files:**
- Create: `src/admin/sections/NavEditor.jsx`
- Create: `src/admin/sections/StatsEditor.jsx`
- Modify: `src/admin/AdminApp.jsx`

**Interfaces:**
- Consumes: `ListEditor` (Task 8).
- Produces: `NavEditor({ items, onSave })`, `StatsEditor({ items, onSave })` — each renders a `ListEditor` for its array plus a "Save" button that calls `onSave(items)` (bound to `saveSection("nav", …)` / `saveSection("stats", …)` in `AdminApp`) and shows a save confirmation/error.

- [ ] **Step 1: Write a shared save-button pattern inline in each editor**

```jsx
// src/admin/sections/NavEditor.jsx
import { useState } from "react";
import ListEditor from "../components/ListEditor.jsx";

export default function NavEditor({ items, onSave }) {
  const [draft, setDraft] = useState(items);
  const [status, setStatus] = useState("");

  async function handleSave() {
    setStatus("Saving…");
    try {
      await onSave(draft);
      setStatus("Saved.");
    } catch (e) {
      setStatus(`Error: ${e.message}`);
    }
  }

  return (
    <div>
      <h2>Nav</h2>
      <ListEditor
        items={draft}
        onChange={setDraft}
        newItem={{ id: "", label: "" }}
        itemLabel={(item) => item.label}
        renderFields={(item, update) => (
          <>
            <input placeholder="id (e.g. home)" value={item.id} onChange={(e) => update({ id: e.target.value })} />
            <input placeholder="label (e.g. POSTER)" value={item.label} onChange={(e) => update({ label: e.target.value })} />
          </>
        )}
      />
      <button onClick={handleSave}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
```

```jsx
// src/admin/sections/StatsEditor.jsx
import { useState } from "react";
import ListEditor from "../components/ListEditor.jsx";

export default function StatsEditor({ items, onSave }) {
  const [draft, setDraft] = useState(items);
  const [status, setStatus] = useState("");

  async function handleSave() {
    setStatus("Saving…");
    try {
      await onSave(draft);
      setStatus("Saved.");
    } catch (e) {
      setStatus(`Error: ${e.message}`);
    }
  }

  return (
    <div>
      <h2>Hero Stats</h2>
      <ListEditor
        items={draft}
        onChange={setDraft}
        newItem={{ num: "", label: "" }}
        itemLabel={(item) => item.label}
        renderFields={(item, update) => (
          <>
            <input placeholder="num (e.g. 3rd)" value={item.num} onChange={(e) => update({ num: e.target.value })} />
            <input placeholder="label (e.g. YEAR OF STUDY)" value={item.label} onChange={(e) => update({ label: e.target.value })} />
          </>
        )}
      />
      <button onClick={handleSave}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
```

- [ ] **Step 2: Wire both into `AdminApp`'s main panel**

In `src/admin/AdminApp.jsx`, replace the placeholder `<p>Section "{tab}" editor goes here…</p>` with a switch over `tab`:

```jsx
import NavEditor from "./sections/NavEditor.jsx";
import StatsEditor from "./sections/StatsEditor.jsx";
// ...
{content && tab === "nav" && (
  <NavEditor items={content.nav} onSave={(v) => saveSection("nav", v)} />
)}
{content && tab === "stats" && (
  <StatsEditor items={content.stats} onSave={(v) => saveSection("stats", v)} />
)}
{content && !["nav", "stats"].includes(tab) && (
  <p>Section "{tab}" editor goes here (added in later tasks).</p>
)}
```

- [ ] **Step 3: Add save-status style**

Append to `admin.css`: `.admin-save-status { margin-left: 10px; font-size: 13px; }`

- [ ] **Step 4: Verify manually**

Run `npm run dev`, sign in, open the Nav tab: edit a label, click Save, confirm "Saved." appears. Reload the admin page, confirm the edited label persisted. Open the public site (`/`), confirm the nav bar shows the edited label. Repeat for Stats (edit a stat, confirm it reflects on the home/about page). Revert your test edits back to the original values afterward (or leave them — confirm the round-trip works either way).

- [ ] **Step 5: Commit**

```bash
git add src/admin/sections/NavEditor.jsx src/admin/sections/StatsEditor.jsx src/admin/AdminApp.jsx src/admin/admin.css
git commit -m "Add Nav and Stats section editors to the admin app"
```

---

## Task 10: Journey, Coursework, Extras, Skills section editors

**Files:**
- Create: `src/admin/sections/JourneyEditor.jsx`
- Create: `src/admin/sections/StringListEditor.jsx` (shared by Coursework and Extras — both are flat string arrays)
- Create: `src/admin/sections/SkillsEditor.jsx`
- Modify: `src/admin/AdminApp.jsx`

**Interfaces:**
- Consumes: `ListEditor` (Task 8).
- Produces: `JourneyEditor({ items, onSave })`, `StringListEditor({ title, items, onSave })` (generic, takes a section title since it's reused for two different keys), `SkillsEditor({ categories, onSave })`.

- [ ] **Step 1: Write `JourneyEditor`**

```jsx
// src/admin/sections/JourneyEditor.jsx
import { useState } from "react";
import ListEditor from "../components/ListEditor.jsx";

export default function JourneyEditor({ items, onSave }) {
  const [draft, setDraft] = useState(items);
  const [status, setStatus] = useState("");

  async function handleSave() {
    setStatus("Saving…");
    try {
      await onSave(draft);
      setStatus("Saved.");
    } catch (e) {
      setStatus(`Error: ${e.message}`);
    }
  }

  return (
    <div>
      <h2>Journey</h2>
      <ListEditor
        items={draft}
        onChange={setDraft}
        newItem={{ when: "", title: "", sub: "" }}
        itemLabel={(item) => item.title}
        renderFields={(item, update) => (
          <>
            <input placeholder="when (e.g. 2022 or NOW)" value={item.when} onChange={(e) => update({ when: e.target.value })} />
            <input placeholder="title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
            <input placeholder="sub" value={item.sub} onChange={(e) => update({ sub: e.target.value })} />
          </>
        )}
      />
      <button onClick={handleSave}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
```

- [ ] **Step 2: Write the generic `StringListEditor`**

```jsx
// src/admin/sections/StringListEditor.jsx
import { useState } from "react";

export default function StringListEditor({ title, items, onSave }) {
  const [draft, setDraft] = useState(items);
  const [status, setStatus] = useState("");

  function updateAt(i, value) {
    setDraft(draft.map((v, idx) => (idx === i ? value : v)));
  }
  function removeAt(i) {
    setDraft(draft.filter((_, idx) => idx !== i));
  }
  function add() {
    setDraft([...draft, ""]);
  }

  async function handleSave() {
    setStatus("Saving…");
    try {
      await onSave(draft.filter((v) => v.trim() !== ""));
      setStatus("Saved.");
    } catch (e) {
      setStatus(`Error: ${e.message}`);
    }
  }

  return (
    <div>
      <h2>{title}</h2>
      <div className="string-list-editor">
        {draft.map((value, i) => (
          <div className="string-list-row" key={i}>
            <input value={value} onChange={(e) => updateAt(i, e.target.value)} />
            <button type="button" onClick={() => removeAt(i)}>Delete</button>
          </div>
        ))}
        <button type="button" className="list-editor-add" onClick={add}>+ Add</button>
      </div>
      <button onClick={handleSave}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
```

- [ ] **Step 3: Write `SkillsEditor` (nested lists — categories, each with a list of items)**

```jsx
// src/admin/sections/SkillsEditor.jsx
import { useState } from "react";
import ListEditor from "../components/ListEditor.jsx";

function CategoryFields({ category, updateCategory }) {
  return (
    <>
      <input placeholder="category name" value={category.cat} onChange={(e) => updateCategory({ cat: e.target.value })} />
      <ListEditor
        items={category.items}
        onChange={(items) => updateCategory({ items })}
        newItem={{ name: "", level: 50 }}
        itemLabel={(item) => item.name}
        renderFields={(item, update) => (
          <>
            <input placeholder="skill name" value={item.name} onChange={(e) => update({ name: e.target.value })} />
            <input
              type="number" min="0" max="100"
              placeholder="level (0-100)"
              value={item.level}
              onChange={(e) => update({ level: Number(e.target.value) })}
            />
          </>
        )}
      />
    </>
  );
}

export default function SkillsEditor({ categories, onSave }) {
  const [draft, setDraft] = useState(categories);
  const [status, setStatus] = useState("");

  async function handleSave() {
    setStatus("Saving…");
    try {
      await onSave(draft);
      setStatus("Saved.");
    } catch (e) {
      setStatus(`Error: ${e.message}`);
    }
  }

  return (
    <div>
      <h2>Skills</h2>
      <ListEditor
        items={draft}
        onChange={setDraft}
        newItem={{ cat: "", items: [] }}
        itemLabel={(item) => item.cat}
        renderFields={(item, update) => <CategoryFields category={item} updateCategory={update} />}
      />
      <button onClick={handleSave}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
```

- [ ] **Step 4: Wire all three into `AdminApp`**

```jsx
import JourneyEditor from "./sections/JourneyEditor.jsx";
import StringListEditor from "./sections/StringListEditor.jsx";
import SkillsEditor from "./sections/SkillsEditor.jsx";
// ...
{content && tab === "journey" && (
  <JourneyEditor items={content.journey} onSave={(v) => saveSection("journey", v)} />
)}
{content && tab === "coursework" && (
  <StringListEditor title="Coursework" items={content.coursework} onSave={(v) => saveSection("coursework", v)} />
)}
{content && tab === "extras" && (
  <StringListEditor title="Extras" items={content.extras} onSave={(v) => saveSection("extras", v)} />
)}
{content && tab === "skills" && (
  <SkillsEditor categories={content.skills} onSave={(v) => saveSection("skills", v)} />
)}
{content && !["nav", "stats", "journey", "coursework", "extras", "skills"].includes(tab) && (
  <p>Section "{tab}" editor goes here (added in later tasks).</p>
)}
```

- [ ] **Step 5: Add string-list style**

Append to `admin.css`: `.string-list-row { display: flex; gap: 8px; margin-bottom: 6px; } .string-list-row input { flex: 1; padding: 6px 8px; border: 1px solid var(--admin-border); border-radius: 6px; }`

- [ ] **Step 6: Verify manually**

For each of Journey, Coursework, Extras, Skills: edit an item, add one, delete one, reorder (Journey/Skills via ↑/↓), save, reload the admin page to confirm persistence, then check the public site's corresponding page (About for Journey/Stats, Education for Coursework/Extras, Skills page for Skills) shows the change.

- [ ] **Step 7: Commit**

```bash
git add src/admin/sections/JourneyEditor.jsx src/admin/sections/StringListEditor.jsx src/admin/sections/SkillsEditor.jsx src/admin/AdminApp.jsx src/admin/admin.css
git commit -m "Add Journey, Coursework, Extras and Skills section editors"
```

---

## Task 11: Projects and Socials section editors

**Files:**
- Create: `src/admin/sections/ProjectsEditor.jsx`
- Create: `src/admin/sections/SocialsEditor.jsx`
- Modify: `src/admin/AdminApp.jsx`

**Interfaces:**
- Consumes: `ListEditor`, `ImageUpload` (Task 8).
- Produces: `ProjectsEditor({ items, onSave })`, `SocialsEditor({ items, onSave })`.

- [ ] **Step 1: Write `ProjectsEditor`**

```jsx
// src/admin/sections/ProjectsEditor.jsx
import { useState } from "react";
import ListEditor from "../components/ListEditor.jsx";
import ImageUpload from "../components/ImageUpload.jsx";

export default function ProjectsEditor({ items, onSave }) {
  const [draft, setDraft] = useState(items);
  const [status, setStatus] = useState("");

  async function handleSave() {
    setStatus("Saving…");
    try {
      await onSave(draft);
      setStatus("Saved.");
    } catch (e) {
      setStatus(`Error: ${e.message}`);
    }
  }

  return (
    <div>
      <h2>Projects</h2>
      <ListEditor
        items={draft}
        onChange={setDraft}
        newItem={{ title: "", desc: "", tags: [], url: "", image: "" }}
        itemLabel={(item) => item.title}
        renderFields={(item, update) => (
          <>
            <input placeholder="title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
            <textarea placeholder="description" value={item.desc} onChange={(e) => update({ desc: e.target.value })} rows={3} />
            <input
              placeholder="tags, comma separated"
              value={item.tags.join(", ")}
              onChange={(e) => update({ tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) })}
            />
            <input placeholder="repo URL" value={item.url} onChange={(e) => update({ url: e.target.value })} />
            <ImageUpload value={item.image} onChange={(url) => update({ image: url })} pathPrefix="projects" />
          </>
        )}
      />
      <button onClick={handleSave}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
```

- [ ] **Step 2: Write `SocialsEditor`**

```jsx
// src/admin/sections/SocialsEditor.jsx
import { useState } from "react";
import ListEditor from "../components/ListEditor.jsx";

export default function SocialsEditor({ items, onSave }) {
  const [draft, setDraft] = useState(items);
  const [status, setStatus] = useState("");

  async function handleSave() {
    setStatus("Saving…");
    try {
      await onSave(draft);
      setStatus("Saved.");
    } catch (e) {
      setStatus(`Error: ${e.message}`);
    }
  }

  return (
    <div>
      <h2>Socials</h2>
      <ListEditor
        items={draft}
        onChange={setDraft}
        newItem={{ label: "", url: "" }}
        itemLabel={(item) => item.label}
        renderFields={(item, update) => (
          <>
            <input placeholder="label (e.g. GITHUB)" value={item.label} onChange={(e) => update({ label: e.target.value })} />
            <input placeholder="url" value={item.url} onChange={(e) => update({ url: e.target.value })} />
          </>
        )}
      />
      <button onClick={handleSave}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
```

- [ ] **Step 3: Wire into `AdminApp`**

```jsx
import ProjectsEditor from "./sections/ProjectsEditor.jsx";
import SocialsEditor from "./sections/SocialsEditor.jsx";
// ...
{content && tab === "projects" && (
  <ProjectsEditor items={content.projects} onSave={(v) => saveSection("projects", v)} />
)}
{content && tab === "socials" && (
  <SocialsEditor items={content.socials} onSave={(v) => saveSection("socials", v)} />
)}
{content && !["nav", "stats", "journey", "coursework", "extras", "skills", "projects", "socials"].includes(tab) && (
  <p>Section "{tab}" editor goes here (added in later tasks).</p>
)}
```

- [ ] **Step 4: Verify manually**

Open the Projects tab: edit a title/description/tags/URL, upload a new image (confirm the preview updates and the upload completes), save, reload to confirm persistence, check the public Projects page shows the change including the new image. Open Socials: edit a URL, save, confirm the Contact page's social card link updates.

- [ ] **Step 5: Commit**

```bash
git add src/admin/sections/ProjectsEditor.jsx src/admin/sections/SocialsEditor.jsx src/admin/AdminApp.jsx
git commit -m "Add Projects and Socials section editors, with image upload for projects"
```

---

## Task 12: Contact and Prose section editors

**Files:**
- Create: `src/admin/sections/ContactEditor.jsx`
- Create: `src/admin/sections/ProseEditor.jsx`
- Modify: `src/admin/AdminApp.jsx`

**Interfaces:**
- Produces: `ContactEditor({ contact, onSave })` where `contact` is `{ email, phone }`; `ProseEditor({ prose, onSave })` where `prose` is `{ heroRole, aboutBody, musicBody }`.

- [ ] **Step 1: Write `ContactEditor`**

```jsx
// src/admin/sections/ContactEditor.jsx
import { useState } from "react";

export default function ContactEditor({ contact, onSave }) {
  const [draft, setDraft] = useState(contact);
  const [status, setStatus] = useState("");

  async function handleSave() {
    setStatus("Saving…");
    try {
      await onSave(draft);
      setStatus("Saved.");
    } catch (e) {
      setStatus(`Error: ${e.message}`);
    }
  }

  return (
    <div>
      <h2>Contact</h2>
      <div className="scalar-form">
        <label>
          Email
          <input value={draft.email} onChange={(e) => setDraft({ ...draft, email: e.target.value })} />
        </label>
        <label>
          Phone
          <input value={draft.phone} onChange={(e) => setDraft({ ...draft, phone: e.target.value })} />
        </label>
      </div>
      <button onClick={handleSave}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
```

- [ ] **Step 2: Write `ProseEditor`**

```jsx
// src/admin/sections/ProseEditor.jsx
import { useState } from "react";

export default function ProseEditor({ prose, onSave }) {
  const [draft, setDraft] = useState(prose);
  const [status, setStatus] = useState("");

  async function handleSave() {
    setStatus("Saving…");
    try {
      await onSave(draft);
      setStatus("Saved.");
    } catch (e) {
      setStatus(`Error: ${e.message}`);
    }
  }

  return (
    <div>
      <h2>Prose</h2>
      <div className="scalar-form">
        <label>
          Hero role (e.g. MUSICIAN)
          <input value={draft.heroRole} onChange={(e) => setDraft({ ...draft, heroRole: e.target.value })} />
        </label>
        <label>
          About page body (paragraphs separated by a blank line)
          <textarea rows={8} value={draft.aboutBody} onChange={(e) => setDraft({ ...draft, aboutBody: e.target.value })} />
        </label>
        <label>
          Music page body (paragraphs separated by a blank line)
          <textarea rows={5} value={draft.musicBody} onChange={(e) => setDraft({ ...draft, musicBody: e.target.value })} />
        </label>
      </div>
      <button onClick={handleSave}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
```

- [ ] **Step 3: Wire into `AdminApp`, removing the placeholder fallback entirely**

```jsx
import ContactEditor from "./sections/ContactEditor.jsx";
import ProseEditor from "./sections/ProseEditor.jsx";
// ...
{content && tab === "contact" && (
  <ContactEditor contact={content.contact} onSave={(v) => saveSection("contact", v)} />
)}
{content && tab === "prose" && (
  <ProseEditor prose={content.prose} onSave={(v) => saveSection("prose", v)} />
)}
```

Remove the now-unreachable `!["nav", ...].includes(tab)` placeholder block from Task 11 Step 3 — every tab now has a real editor.

- [ ] **Step 4: Add scalar-form style**

Append to `admin.css`: `.scalar-form { display: flex; flex-direction: column; gap: 12px; max-width: 480px; margin-bottom: 14px; } .scalar-form label { display: flex; flex-direction: column; gap: 4px; font-size: 13px; } .scalar-form input, .scalar-form textarea { padding: 8px; border: 1px solid var(--admin-border); border-radius: 6px; font-size: 14px; font-family: inherit; }`

- [ ] **Step 5: Verify manually**

Open Contact: edit email/phone, save, confirm the public Contact page and home hero contact block reflect the change. Open Prose: edit `heroRole`, `aboutBody` (try two paragraphs separated by a blank line), `musicBody`, save, confirm the About and Music pages render the updated text as separate paragraphs and the hero role badge updates.

- [ ] **Step 6: Commit**

```bash
git add src/admin/sections/ContactEditor.jsx src/admin/sections/ProseEditor.jsx src/admin/AdminApp.jsx src/admin/admin.css
git commit -m "Add Contact and Prose section editors, completing all admin tabs"
```

---

## Task 13: RLS security verification and documentation

**Files:**
- Modify: `README.md`

**Interfaces:** None (verification + docs task).

- [ ] **Step 1: Verify unauthenticated writes are actually blocked**

Using the Supabase MCP `execute_sql` tool (which runs with elevated privileges, so instead use a plain `curl` against the REST API with only the anon key, from a terminal):

```bash
curl -X PATCH "https://<project-ref>.supabase.co/rest/v1/site_content?id=eq.1" \
  -H "apikey: <anon-key>" \
  -H "Authorization: Bearer <anon-key>" \
  -H "Content-Type: application/json" \
  -d '{"data": {"hacked": true}}'
```

Expected: the request is rejected (empty result / RLS violation), and a subsequent `select` confirms `site_content.data` is unchanged. If it succeeds, the RLS policy from Task 1 is wrong — fix it before proceeding.

- [ ] **Step 2: Verify the public site survives Supabase being fully unreachable**

Repeat Task 4 Step 4's fallback check as a final pass: block or misconfigure the Supabase URL, confirm the public site still fully renders via `DEFAULT_CONTENT`.

- [ ] **Step 3: Document the admin panel in `README.md`**

Add a short section (append to the existing `README.md`):

```markdown
## Admin panel

Content (projects, skills, bio, contact, etc.) is editable at `/admin.html`,
backed by Supabase. See `docs/superpowers/specs/2026-09-20-admin-panel-design.md`
for the full design.

Local setup:
1. Copy `.env.example` to `.env` and fill in `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`
   from the Supabase project dashboard.
2. `npm run dev`, visit `/admin.html`, sign in with the owner account.

The public site (`/`) fetches content from Supabase at runtime and falls back
to `src/lib/defaultContent.js` if Supabase is unreachable.
```

- [ ] **Step 4: Confirm the deploy workflow needs no changes**

Re-read `.github/workflows/deploy.yml` — it runs `npm run build` and uploads `dist/`. Since Task 5 made `npm run build` produce both `dist/index.html` and `dist/admin.html`, no workflow changes are needed. Note: the deployed `.env` values must exist at build time — since this project builds in GitHub Actions (not locally), add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as repository secrets (GitHub repo → Settings → Secrets and variables → Actions) and reference them in the workflow's `Build` step:

```yaml
      - name: Build
        run: npm run build
        env:
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
```

Add these two secrets in the GitHub repo settings (values from Task 1 Step 6), then apply this one-line-context edit to `.github/workflows/deploy.yml`.

- [ ] **Step 5: Commit**

```bash
git add README.md .github/workflows/deploy.yml
git commit -m "Document the admin panel and wire Supabase env vars into the deploy workflow"
```

- [ ] **Step 6: Push and confirm a real deploy works**

```bash
git push origin main
```

Watch the GitHub Actions run (Actions tab) to completion, then visit the live site's `/admin.html` and confirm sign-in and a save round-trip work against production.
