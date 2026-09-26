import { useEffect, useState } from "react";
import ListEditor from "../components/ListEditor.jsx";
import ImageUpload from "../components/ImageUpload.jsx";
import { toCsv, fromCsv } from "../csv.js";
import { useSectionSave } from "../useSectionSave.js";

const GITHUB_USER = "LapaluLiyanage";
const CATEGORIES = ["FULL-STACK", "BACKEND", "AI-ML", "MOBILE", "TOOLS"];

function prettifyName(name) {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function guessCategory(repo) {
  const s = `${repo.name || ""} ${repo.description || ""} ${(repo.topics || []).join(" ")}`.toLowerCase();
  if (/(^|[^a-z])(ai|ml|llm|gpt|gemini|model|neural|predict|classif|score|deep|vision|nlp|optimi[sz]|algorithm|colony)/.test(s)) return "AI-ML";
  if (/(android|mobile|kotlin|flutter)/.test(s) || ["Kotlin", "Dart"].includes(repo.language)) return "MOBILE";
  if (/(spring|backend|rest|api|server)/.test(s)) return "BACKEND";
  if (/(web|flask|django|react|next|site|lms|full.?stack|pay)/.test(s) || ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "Vue"].includes(repo.language)) return "FULL-STACK";
  return "TOOLS";
}

function useGithubRepos(user) {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading");
  useEffect(() => {
    let dead = false;
    fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated`)
      .then((r) => (r.ok ? r.json() : []))
      .then((list) => {
        if (dead) return;
        setRepos(Array.isArray(list) ? list.filter((r) => !r.fork) : []);
        setStatus("ready");
      })
      .catch(() => !dead && setStatus("error"));
    return () => {
      dead = true;
    };
  }, [user]);
  return { repos, status };
}

export default function ProjectsEditor({ items, onSave }) {
  const [draft, setDraft] = useState(items);
  const { status, save } = useSectionSave(onSave);
  const { repos, status: reposStatus } = useGithubRepos(GITHUB_USER);
  const [selectedRepo, setSelectedRepo] = useState("");

  const usedKeys = new Set(draft.flatMap((p) => p.keys.split(",").map((k) => k.trim().toLowerCase())));
  const importableRepos = repos.filter((r) => !usedKeys.has(r.name.toLowerCase()));

  function importFromGithub() {
    const repo = repos.find((r) => r.name === selectedRepo);
    if (!repo) return;
    setDraft([
      ...draft,
      {
        title: prettifyName(repo.name),
        category: guessCategory(repo),
        keys: repo.name.toLowerCase(),
        image: "",
        description: repo.description || "",
        tech: repo.language ? [repo.language] : [],
      },
    ]);
    setSelectedRepo("");
  }

  return (
    <div>
      <h2>Projects</h2>
      <p className="admin-hint">
        "Match GitHub repo" is a comma-separated list of substrings matched against your repo names (case-insensitive) to pull in
        live star count and last-pushed date. Leave it close to the real repo name.
      </p>

      <div className="github-import">
        <select value={selectedRepo} onChange={(e) => setSelectedRepo(e.target.value)} disabled={reposStatus !== "ready"}>
          <option value="">
            {reposStatus === "loading" ? "Loading your repos…" : reposStatus === "error" ? "Couldn't load GitHub repos" : "Pick a repo to import…"}
          </option>
          {importableRepos.map((r) => (
            <option key={r.id} value={r.name}>
              {r.name}
              {r.description ? ` — ${r.description}` : ""}
            </option>
          ))}
        </select>
        <button type="button" onClick={importFromGithub} disabled={!selectedRepo}>
          + Import from GitHub
        </button>
        <span className="github-import-status">
          Fills title, category (guessed), description and tech from the repo. Add an image and refine the rest below.
        </span>
      </div>

      <ListEditor
        items={draft}
        onChange={setDraft}
        newItem={{ title: "", category: "FULL-STACK", keys: "", image: "", description: "", tech: [] }}
        itemLabel={(item) => item.title}
        renderFields={(item, update) => (
          <>
            <input placeholder="title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
            <select value={item.category} onChange={(e) => update({ category: e.target.value })}>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <input placeholder="match GitHub repo (comma separated)" value={item.keys} onChange={(e) => update({ keys: e.target.value })} />
            <textarea placeholder="description" value={item.description} onChange={(e) => update({ description: e.target.value })} rows={3} />
            <input placeholder="tech, comma separated" value={toCsv(item.tech)} onChange={(e) => update({ tech: fromCsv(e.target.value) })} />
            <ImageUpload value={item.image} onChange={(url) => update({ image: url })} pathPrefix="projects" aspect={3 / 2} outW={900} />
          </>
        )}
      />
      <button className="primary-btn" onClick={() => save(draft)}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
