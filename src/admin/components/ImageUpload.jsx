import { useRef, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import ImageCropper from "./ImageCropper.jsx";

// aspect: target width/height ratio for the crop (e.g. 3/2, 1). outW: pixel
// width to render the cropped output at (height derived from aspect).
export default function ImageUpload({ value, onChange, pathPrefix, aspect = 3 / 2, outW = 900 }) {
  const [cropSrc, setCropSrc] = useState(null); // object URL or existing value, while cropper is open
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const fileInput = useRef(null);

  function pickFile() {
    fileInput.current?.click();
  }

  function onFileChosen(e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setCropSrc(URL.createObjectURL(file));
  }

  async function onCropped(blob) {
    setCropSrc(null);
    setUploading(true);
    setError("");
    const path = `${pathPrefix}/${Date.now()}.jpg`;
    const { error: uploadError } = await supabase.storage.from("site-images").upload(path, blob, {
      upsert: false,
      contentType: "image/jpeg",
    });
    setUploading(false);
    if (uploadError) {
      setError(uploadError.message);
      return;
    }
    const { data } = supabase.storage.from("site-images").getPublicUrl(path);
    onChange(data.publicUrl);
  }

  return (
    <div className="image-upload">
      {value && <img src={value} alt="" className="image-upload-preview" style={{ aspectRatio: aspect }} />}
      <div className="image-upload-actions">
        <button type="button" onClick={pickFile} disabled={uploading}>{value ? "Replace" : "Upload"} image</button>
        {value && (
          <button type="button" onClick={() => setCropSrc(value)} disabled={uploading}>
            Re-crop
          </button>
        )}
      </div>
      <input ref={fileInput} type="file" accept="image/*" onChange={onFileChosen} hidden />
      {uploading && <span className="image-upload-status">Uploading…</span>}
      {error && <p className="admin-error">{error}</p>}
      {cropSrc && (
        <ImageCropper src={cropSrc} aspect={aspect} outW={outW} onCancel={() => setCropSrc(null)} onCropped={onCropped} />
      )}
    </div>
  );
}
