import { useState } from "react";
import ListEditor from "../components/ListEditor.jsx";
import ImageUpload from "../components/ImageUpload.jsx";
import ScreenshotsEditor from "../components/ScreenshotsEditor.jsx";
import { useSectionSave } from "../useSectionSave.js";
import { DEFAULT_ALBUMS } from "../../lib/musicAlbums.js";

export default function MusicEditor({ music, onSave }) {
  const [draft, setDraft] = useState(() => ({ ...music, albums: music.albums || DEFAULT_ALBUMS }));
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

      <h3>Shows &amp; albums</h3>
      <p className="admin-hint">
        One album per show. Its photos also appear in the shuffling grid. The first three photos make the album cover.
      </p>
      <ListEditor
        items={draft.albums}
        onChange={(albums) => setDraft({ ...draft, albums })}
        newItem={{ title: "", nativeName: "", date: "", organiser: "", description: "", credit: "", photos: [] }}
        itemLabel={(item) => (item.hidden ? `${item.title} (hidden)` : item.title)}
        collapsible
        rowActions={(item, update) => (
          <button type="button" aria-pressed={!!item.hidden} onClick={() => update({ hidden: !item.hidden })}>
            {item.hidden ? "Show" : "Hide"}
          </button>
        )}
        renderFields={(item, update) => (
          <>
            <input placeholder="show name" value={item.title} onChange={(e) => update({ title: e.target.value })} />
            <input placeholder="name in Sinhala or Tamil (optional)" value={item.nativeName || ""} onChange={(e) => update({ nativeName: e.target.value })} />
            <input placeholder="date or year" value={item.date || ""} onChange={(e) => update({ date: e.target.value })} />
            <input placeholder="organised by" value={item.organiser || ""} onChange={(e) => update({ organiser: e.target.value })} />
            <textarea placeholder="what the show was" rows={3} value={item.description || ""} onChange={(e) => update({ description: e.target.value })} />
            <input placeholder="photo credit" value={item.credit || ""} onChange={(e) => update({ credit: e.target.value })} />
            <ScreenshotsEditor items={item.photos || []} onChange={(photos) => update({ photos })} folder="music/albums" label="Add photos" />
          </>
        )}
      />

      <h3>Other photos</h3>
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
