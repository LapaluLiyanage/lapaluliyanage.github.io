import { useState } from "react";
import { toCsv, fromCsv } from "../csv.js";
import { useSectionSave } from "../useSectionSave.js";

export default function AboutEditor({ about, onSave }) {
  const [draft, setDraft] = useState(about);
  const { status, save } = useSectionSave(onSave);
  const set = (patch) => setDraft((d) => ({ ...d, ...patch }));

  return (
    <div>
      <h2>About</h2>
      <div className="scalar-form">
        <label>
          Statement (the big highlighted sentence in the About section)
          <textarea rows={3} value={draft.statement} onChange={(e) => set({ statement: e.target.value })} />
        </label>
        <label>
          Highlighted words (comma separated, must match words in the statement exactly, including trailing punctuation — e.g. "systems.")
          <input value={toCsv(draft.highlightWords)} onChange={(e) => set({ highlightWords: fromCsv(e.target.value) })} />
        </label>
        <label>
          Bio name
          <input value={draft.bioName} onChange={(e) => set({ bioName: e.target.value })} />
        </label>
        <label>
          Bio text
          <textarea rows={4} value={draft.bioText} onChange={(e) => set({ bioText: e.target.value })} />
        </label>
        <label>
          Full-stack tags (comma separated)
          <input value={toCsv(draft.fsTags)} onChange={(e) => set({ fsTags: fromCsv(e.target.value) })} />
        </label>
        <label>
          AI/ML tags (comma separated)
          <input value={toCsv(draft.mlTags)} onChange={(e) => set({ mlTags: fromCsv(e.target.value) })} />
        </label>
        <label>
          "What I do"
          <textarea rows={3} value={draft.whatIDo} onChange={(e) => set({ whatIDo: e.target.value })} />
        </label>
        <label>
          "Why choose me"
          <textarea rows={3} value={draft.whyChooseMe} onChange={(e) => set({ whyChooseMe: e.target.value })} />
        </label>
        <div className="two-col">
          <label>
            Stat: projects shipped
            <input value={draft.statProjectsShipped} onChange={(e) => set({ statProjectsShipped: e.target.value })} />
          </label>
          <label>
            Stat: papers co-authored
            <input value={draft.statPapers} onChange={(e) => set({ statPapers: e.target.value })} />
          </label>
        </div>
      </div>
      <button onClick={() => save(draft)}>Save</button>
      {status && <span className="admin-save-status">{status}</span>}
    </div>
  );
}
