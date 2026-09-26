import { useState } from "react";
import ListEditor from "../components/ListEditor.jsx";
import { useSectionSave } from "../useSectionSave.js";

const STATUSES = ["current", "notable", "past"];

export default function WorkEditor({ items, onSave }) {
  const [draft, setDraft] = useState(items);
  const { status, save } = useSectionSave(onSave);

  return (
    <div>
      <h2>Experience</h2>
      <ListEditor
        items={draft}
        onChange={setDraft}
        newItem={{ icon: "◆", role: "", badge: "", status: "notable", org: "", location: "", dates: "", description: "" }}
        itemLabel={(item) => item.role}
        renderFields={(item, update) => (
          <>
            <input placeholder="role" value={item.role} onChange={(e) => update({ role: e.target.value })} />
            <input placeholder="icon (single glyph, e.g. ♪)" value={item.icon} onChange={(e) => update({ icon: e.target.value })} />
            <div className="two-col-inline">
              <input placeholder="badge text (e.g. CURRENT)" value={item.badge} onChange={(e) => update({ badge: e.target.value })} />
              <select value={item.status} onChange={(e) => update({ status: e.target.value })}>
                {STATUSES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <input placeholder="organization" value={item.org} onChange={(e) => update({ org: e.target.value })} />
            <input placeholder="location" value={item.location} onChange={(e) => update({ location: e.target.value })} />
            <input placeholder="dates (e.g. 2025 or NOW)" value={item.dates} onChange={(e) => update({ dates: e.target.value })} />
            <textarea placeholder="description" value={item.description} onChange={(e) => update({ description: e.target.value })} rows={3} />
          </>
        )}
      />
      <button onClick={() => save(draft)}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
