# Admin panel for portfolio content

## Problem

The portfolio (`src/Portfolio.jsx`) is a static React SPA deployed to GitHub
Pages via GitHub Actions. All content — nav labels, hero stats, education
timeline, coursework, extras, skills, featured projects, socials, contact
info, and prose blocks (about/music blurbs) — is hardcoded as JS constants
in that one file. Changing any of it requires editing code and pushing a
commit. The owner wants a web-based admin panel that gives full control over
all of this content without touching code.

## Goals

- Edit every content section of the site (nav, stats, journey, coursework,
  extras, skills, projects, socials, contact, prose) from a browser UI.
- Changes go live on the public site without a rebuild/redeploy.
- Only the owner can access the admin panel or change content.
- Upload images (avatar, project thumbnails) directly from the admin panel.

## Non-goals

- Multiple admin users or roles.
- Revision history, drafts, or undo — one row, edits are live on save.
- Editing site code, layout, or styling from the admin panel.

## Architecture

Two separate Vite entry points built from this one repo:

- `index.html` → `src/Portfolio.jsx` — existing public site, unchanged in
  structure, but now sources content from Supabase instead of hardcoded
  consts (see below).
- `admin.html` → `src/admin/` — new admin app, its own bundle, containing
  the login screen, editor forms, and the Supabase client configured for
  authenticated writes.

`vite.config.js` gets a second `build.rollupOptions.input` entry so both
pages build and land in `dist/`, and the existing GitHub Actions deploy
workflow (`npm run build` → upload `dist/`) needs no changes — GitHub Pages
serves `admin.html` as a normal static route (e.g.
`https://<site>/admin.html`).

Splitting into a separate bundle (rather than adding client-side routing to
the existing state-based page-switcher in `Portfolio.jsx`) keeps all admin
code — forms, auth logic, the write-capable Supabase client — out of the
public bundle entirely.

## Data model (Supabase)

**Table `site_content`**: single row, single `jsonb` column (`data`) holding
the whole content object, shaped to match what's currently hardcoded:

```json
{
  "nav": [{ "id": "home", "label": "POSTER" }, ...],
  "stats": [{ "num": "3rd", "label": "YEAR OF STUDY" }, ...],
  "journey": [{ "when": "2022", "title": "...", "sub": "..." }, ...],
  "coursework": ["Data Structures", ...],
  "extras": ["Core member and performer — Fastunes in Rusl", ...],
  "skills": [{ "cat": "Frontend", "items": [{ "name": "React.js", "level": 85 }, ...] }, ...],
  "projects": [{ "title": "ClipForge", "desc": "...", "image": "...", "url": "..." }, ...],
  "socials": [{ "label": "LINKEDIN", "url": "..." }, ...],
  "contact": { "email": "...", "phone": "..." },
  "prose": { "aboutBody": "...", "musicBody": "...", "heroRole": "MUSICIAN" }
}
```

Row Level Security:
- `select`: public (`anon` role) — the live site reads with the public
  anon key.
- `insert` / `update` / `delete`: `authenticated` role only.

**Storage bucket `site-images`**: public read, authenticated write. Admin
image fields upload here and store the resulting public URL in the JSON
above (e.g. `projects[].image`, an `avatarUrl` field).

## Auth

Supabase Auth, email/password, single account for the owner
(lapaluliyanage@gmail.com), created directly via Supabase (dashboard/MCP) —
no public sign-up flow exists anywhere in the admin app. `admin.html` shows
a login form when there's no session; Supabase's client SDK persists the
session in the browser across reloads. All write operations (content saves,
image uploads) require an authenticated session; RLS enforces this
server-side too, so a stolen anon key alone can't write.

## Admin UI

Single-page app inside `admin.html`, sectioned via sidebar/tabs, one tab per
content area: Nav, Hero/Stats, Journey, Coursework, Extras, Skills,
Projects, Socials, Contact, Prose.

- **List sections** (journey, coursework, extras, skills, projects,
  socials): add / edit / reorder / delete rows, each with fields matching
  its shape above (e.g. a project row has title, description, image
  upload, and URL fields).
- **Scalar sections** (contact, prose): plain form fields.
- **Save**: each section's Save button does a read-modify-write of the
  single `site_content` row — fetch current `data`, merge in the edited
  section's slice, write back. Optimistic UI with a save confirmation /
  error toast.
- **Images**: a file input uploads to the `site-images` bucket via the
  Supabase client SDK; on success the returned public URL is written into
  the relevant field automatically.

## Public site changes

`Portfolio.jsx` drops the hardcoded `NAV`, `STATS`, `JOURNEY`, `COURSEWORK`,
`EXTRAS`, `SKILLS`, `FEATURED`, `SOCIALS` consts and the inline contact/prose
strings. On mount, it fetches the `site_content` row from Supabase (anon
key, public read) and renders from that. The current hardcoded values become
the initial state / fallback, so the page still renders fully (not blank)
if the fetch is slow, offline, or fails — same values as today, just as a
fallback instead of the source of truth.

## Error handling

- Public site: Supabase fetch failure → keep fallback content, no error
  shown to visitors (silent degrade).
- Admin site: failed login → inline error message. Failed save/upload →
  toast with the error, edited form state is preserved (not cleared) so
  the owner doesn't lose in-progress edits.

## Testing

- Manual verification: log in, edit each section type (list and scalar),
  confirm the public site reflects changes after a refresh, confirm image
  upload round-trips to a working URL.
- Confirm RLS actually blocks unauthenticated writes (e.g. anon key insert
  attempt fails).
- Confirm the public site still renders correctly with Supabase unreachable
  (fallback path).
