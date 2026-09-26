import { useState } from "react";
import ListEditor from "../components/ListEditor.jsx";
import ImageUpload from "../components/ImageUpload.jsx";
import { toCsv, fromCsv } from "../csv.js";
import { useSectionSave } from "../useSectionSave.js";

const CATEGORIES = ["FULL-STACK", "BACKEND", "AI-ML", "MOBILE", "TOOLS"];

export default function ProjectsEditor({ items, onSave }) {
  const [draft, setDraft] = useState(items);
  const { status, save } = useSectionSave(onSave);

  return (
    <div>
      <h2>Projects</h2>
      <p className="admin-hint">
        "Match GitHub repo" is a comma-separated list of substrings matched against your repo names (case-insensitive) to pull in
        live star count and last-pushed date. Leave it close to the real repo name.
      </p>
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
      <button onClick={() => save(draft)}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
