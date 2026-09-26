import { useState } from "react";
import ListEditor from "../components/ListEditor.jsx";
import ImageUpload from "../components/ImageUpload.jsx";
import { useSectionSave } from "../useSectionSave.js";

export default function MusicEditor({ music, onSave }) {
  const [draft, setDraft] = useState(music);
  const { status, save } = useSectionSave(onSave);

  return (
    <div>
      <h2>Music</h2>
      <div className="scalar-form">
        <label>
          Lead paragraph
          <textarea rows={3} value={draft.lead} onChange={(e) => setDraft({ ...draft, lead: e.target.value })} />
        </label>
      </div>

      <h3>Photos</h3>
      <ListEditor
        items={draft.photos}
        onChange={(photos) => setDraft({ ...draft, photos })}
        newItem={{ image: "", caption: "" }}
        itemLabel={(item) => item.caption}
        renderFields={(item, update) => (
          <>
            <input placeholder="caption (e.g. LIVE)" value={item.caption} onChange={(e) => update({ caption: e.target.value })} />
            <ImageUpload value={item.image} onChange={(url) => update({ image: url })} pathPrefix="music" aspect={1} outW={720} />
          </>
        )}
      />

      <h3>Highlights</h3>
      <ListEditor
        items={draft.highlights}
        onChange={(highlights) => setDraft({ ...draft, highlights })}
        newItem={{ icon: "♪", title: "", text: "" }}
        itemLabel={(item) => item.title}
        renderFields={(item, update) => (
          <>
            <input placeholder="icon (single glyph)" value={item.icon} onChange={(e) => update({ icon: e.target.value })} />
            <input placeholder="title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
            <textarea placeholder="text" rows={2} value={item.text} onChange={(e) => update({ text: e.target.value })} />
          </>
        )}
      />

      <button className="primary-btn" onClick={() => save(draft)}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
