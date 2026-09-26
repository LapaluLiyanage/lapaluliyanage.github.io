import { useState } from "react";
import ListEditor from "../components/ListEditor.jsx";
import { useSectionSave } from "../useSectionSave.js";

export default function ContactEditor({ items, onSave }) {
  const [draft, setDraft] = useState(items);
  const { status, save } = useSectionSave(onSave);

  return (
    <div>
      <h2>Contact links</h2>
      <ListEditor
        items={draft}
        onChange={setDraft}
        newItem={{ label: "", value: "", href: "" }}
        itemLabel={(item) => item.label}
        renderFields={(item, update) => (
          <>
            <input placeholder="label (e.g. EMAIL)" value={item.label} onChange={(e) => update({ label: e.target.value })} />
            <input placeholder="displayed value" value={item.value} onChange={(e) => update({ value: e.target.value })} />
            <input placeholder="href (e.g. mailto:...)" value={item.href} onChange={(e) => update({ href: e.target.value })} />
          </>
        )}
      />
      <button className="primary-btn" onClick={() => save(draft)}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
