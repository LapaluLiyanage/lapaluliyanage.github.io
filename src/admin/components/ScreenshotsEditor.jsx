import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

const MAX_WIDTH = 1600;

// Screenshots keep their own shape (no forced crop); they are only scaled down
// and re-encoded so large captures don't slow the site.
async function shrink(file) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, MAX_WIDTH / bitmap.width);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve, reject) =>
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("Could not read that image"))), "image/jpeg", 0.85)
  );
}

export default function ScreenshotsEditor({ items, onChange }) {
  const [busy, setBusy] = useState("");
  const [error, setError] = useState("");

  async function addFiles(e) {
    const files = Array.from(e.target.files || []);
    e.target.value = "";
    if (!files.length) return;
    setError("");
    const added = [];
    try {
      for (const [i, file] of files.entries()) {
        setBusy(`Uploading ${i + 1} of ${files.length}…`);
        const blob = await shrink(file);
        const path = `projects/shots/${Date.now()}-${i}.jpg`;
        const { error: uploadError } = await supabase.storage.from("site-images").upload(path, blob, { upsert: false, contentType: "image/jpeg" });
        if (uploadError) throw uploadError;
        added.push({ image: supabase.storage.from("site-images").getPublicUrl(path).data.publicUrl, caption: "" });
      }
    } catch (err) {
      setError(err.message);
    }
    setBusy("");
    if (added.length) onChange([...items, ...added]);
  }

  function move(index, dir) {
    const next = items.slice();
    [next[index], next[index + dir]] = [next[index + dir], next[index]];
    onChange(next);
  }

  return (
    <div>
      <div className="shot-list">
        {items.map((shot, i) => (
          <div className="shot-item" key={shot.image + i}>
            <img src={shot.image} alt="" />
            <input
              placeholder="caption"
              value={shot.caption || ""}
              onChange={(e) => onChange(items.map((s, j) => (j === i ? { ...s, caption: e.target.value } : s)))}
            />
            <div className="shot-item-actions">
              <button type="button" onClick={() => move(i, -1)} disabled={i === 0} aria-label="Move earlier">←</button>
              <button type="button" onClick={() => move(i, 1)} disabled={i === items.length - 1} aria-label="Move later">→</button>
              <button type="button" className="danger" onClick={() => onChange(items.filter((_, j) => j !== i))}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <input type="file" accept="image/*" multiple onChange={addFiles} disabled={!!busy} aria-label="Add screenshots" />
      {busy && <span className="image-upload-status">{busy}</span>}
      {error && <p className="admin-error">{error}</p>}
    </div>
  );
}
