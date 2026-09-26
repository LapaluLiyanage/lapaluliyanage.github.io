import { useState } from "react";
import ListEditor from "../components/ListEditor.jsx";
import { useSectionSave } from "../useSectionSave.js";

export default function EducationEditor({ items, onSave }) {
  const [draft, setDraft] = useState(items);
  const { status, save } = useSectionSave(onSave);

  return (
    <div>
      <h2>Education</h2>
      <ListEditor
        items={draft}
        onChange={setDraft}
        newItem={{ degree: "", school: "", detail: "", dates: "", status: "" }}
        itemLabel={(item) => item.degree}
        renderFields={(item, update) => (
          <>
            <input placeholder="degree" value={item.degree} onChange={(e) => update({ degree: e.target.value })} />
            <input placeholder="school" value={item.school} onChange={(e) => update({ school: e.target.value })} />
            <input placeholder="detail" value={item.detail} onChange={(e) => update({ detail: e.target.value })} />
            <input placeholder="dates (e.g. 2022 — PRESENT)" value={item.dates} onChange={(e) => update({ dates: e.target.value })} />
            <input placeholder="status (e.g. ● ONGOING)" value={item.status} onChange={(e) => update({ status: e.target.value })} />
          </>
        )}
      />
      <button onClick={() => save(draft)}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
