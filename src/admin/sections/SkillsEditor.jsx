import { useState } from "react";
import ListEditor from "../components/ListEditor.jsx";
import { toCsv, fromCsv } from "../csv.js";
import { useSectionSave } from "../useSectionSave.js";

export default function SkillsEditor({ groups, onSave }) {
  const [draft, setDraft] = useState(groups);
  const { status, save } = useSectionSave(onSave);

  return (
    <div>
      <h2>Skills</h2>
      <p className="admin-hint">
        Known skill names (e.g. "React", "Docker", "PostgreSQL") automatically get a logo on the public site. Unrecognized names
        just show as plain text — that's fine.
      </p>
      <ListEditor
        items={draft}
        onChange={setDraft}
        newItem={{ title: "", items: [] }}
        itemLabel={(item) => item.title}
        renderFields={(item, update) => (
          <>
            <input placeholder="group title (e.g. LANGUAGES)" value={item.title} onChange={(e) => update({ title: e.target.value })} />
            <textarea
              placeholder="skills, comma separated"
              rows={2}
              value={toCsv(item.items)}
              onChange={(e) => update({ items: fromCsv(e.target.value) })}
            />
          </>
        )}
      />
      <button onClick={() => save(draft)}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
