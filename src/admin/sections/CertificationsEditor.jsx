import { useState } from "react";
import ListEditor from "../components/ListEditor.jsx";
import { useSectionSave } from "../useSectionSave.js";

export default function CertificationsEditor({ items, onSave }) {
  const [draft, setDraft] = useState(items);
  const { status, save } = useSectionSave(onSave);

  return (
    <div>
      <h2>Certifications</h2>
      <ListEditor
        items={draft}
        onChange={setDraft}
        newItem={{ org: "", title: "", issuer: "", date: "" }}
        itemLabel={(item) => item.title}
        renderFields={(item, update) => (
          <>
            <input placeholder="org (short badge, e.g. IBM)" value={item.org} onChange={(e) => update({ org: e.target.value })} />
            <input placeholder="title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
            <input placeholder="issuer" value={item.issuer} onChange={(e) => update({ issuer: e.target.value })} />
            <input placeholder="date" value={item.date} onChange={(e) => update({ date: e.target.value })} />
          </>
        )}
      />
      <button className="primary-btn" onClick={() => save(draft)}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
