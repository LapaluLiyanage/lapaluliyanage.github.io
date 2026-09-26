import { useState } from "react";
import ImageUpload from "../components/ImageUpload.jsx";
import { useSectionSave } from "../useSectionSave.js";

export default function HeroEditor({ hero, onSave }) {
  const [draft, setDraft] = useState(hero);
  const { status, save } = useSectionSave(onSave);
  const set = (patch) => setDraft((d) => ({ ...d, ...patch }));

  return (
    <div>
      <h2>Hero</h2>
      <div className="scalar-form">
        <label>
          Availability badge
          <input value={draft.availability} onChange={(e) => set({ availability: e.target.value })} />
        </label>
        <label>
          Headline line 1 (white)
          <input value={draft.headline1} onChange={(e) => set({ headline1: e.target.value })} />
        </label>
        <label>
          Headline line 2 (accent color)
          <input value={draft.headline2} onChange={(e) => set({ headline2: e.target.value })} />
        </label>
        <label>
          Headline line 3 (muted)
          <input value={draft.headline3} onChange={(e) => set({ headline3: e.target.value })} />
        </label>
        <label>
          Subline
          <textarea rows={2} value={draft.subline} onChange={(e) => set({ subline: e.target.value })} />
        </label>
        <label>
          CV file URL
          <input value={draft.cvUrl} onChange={(e) => set({ cvUrl: e.target.value })} />
        </label>
        <label>
          Based in
          <input value={draft.basedIn} onChange={(e) => set({ basedIn: e.target.value })} />
        </label>
        <label>
          Studying
          <input value={draft.studying} onChange={(e) => set({ studying: e.target.value })} />
        </label>
        <label>
          Photo caption name
          <input value={draft.photoName} onChange={(e) => set({ photoName: e.target.value })} />
        </label>
        <label>
          Photo caption role
          <input value={draft.photoRole} onChange={(e) => set({ photoRole: e.target.value })} />
        </label>
        <div className="two-col">
          <label>
            Coordinates line 1
            <input value={draft.coordsLine1} onChange={(e) => set({ coordsLine1: e.target.value })} />
          </label>
          <label>
            Coordinates line 2
            <input value={draft.coordsLine2} onChange={(e) => set({ coordsLine2: e.target.value })} />
          </label>
        </div>
        <label>
          Hero photo
          <ImageUpload value={draft.photoUrl} onChange={(url) => set({ photoUrl: url })} pathPrefix="hero" aspect={3 / 4} outW={720} />
        </label>
      </div>
      <button onClick={() => save(draft)}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
