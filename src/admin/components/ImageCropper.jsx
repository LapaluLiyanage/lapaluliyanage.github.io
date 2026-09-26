import { useEffect, useRef, useState } from "react";

const VIEW_W = 280;

// A minimal pan/zoom cropper: drag to reposition, slider to zoom, "Use crop"
// renders the visible rectangle onto an off-screen canvas at a fixed output
// size and hands back a Blob. No external cropping library needed.
export default function ImageCropper({ src, aspect, outW, onCancel, onCropped }) {
  const viewH = Math.round(VIEW_W / aspect);
  const imgRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [natural, setNatural] = useState({ w: 0, h: 0 });
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const drag = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      setNatural({ w: img.naturalWidth, h: img.naturalHeight });
      imgRef.current = img;
      setReady(true);
    };
    img.src = src;
  }, [src]);

  if (!ready) return <div className="cropper-overlay"><div className="cropper-box">Loading image…</div></div>;

  const baseScale = Math.max(VIEW_W / natural.w, viewH / natural.h);
  const scale = baseScale * zoom;
  const dispW = natural.w * scale;
  const dispH = natural.h * scale;
  const clamp = (p) => ({
    x: Math.min(0, Math.max(VIEW_W - dispW, p.x)),
    y: Math.min(0, Math.max(viewH - dispH, p.y)),
  });

  function onPointerDown(e) {
    drag.current = { startX: e.clientX, startY: e.clientY, panX: pan.x, panY: pan.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  function onPointerMove(e) {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.startX;
    const dy = e.clientY - drag.current.startY;
    setPan(clamp({ x: drag.current.panX + dx, y: drag.current.panY + dy }));
  }
  function onPointerUp() {
    drag.current = null;
  }
  function onZoom(e) {
    const z = Number(e.target.value);
    setZoom(z);
    setPan((p) => clamp(p));
  }

  function useCrop() {
    const sx = -pan.x / scale;
    const sy = -pan.y / scale;
    const sw = VIEW_W / scale;
    const sh = viewH / scale;
    const outH = Math.round(outW / aspect);
    const canvas = document.createElement("canvas");
    canvas.width = outW;
    canvas.height = outH;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(imgRef.current, sx, sy, sw, sh, 0, 0, outW, outH);
    canvas.toBlob((blob) => onCropped(blob), "image/jpeg", 0.9);
  }

  return (
    <div className="cropper-overlay">
      <div className="cropper-box">
        <div
          className="cropper-viewport"
          style={{ width: VIEW_W, height: viewH }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <img
            src={src}
            alt=""
            draggable={false}
            style={{ width: dispW, height: dispH, transform: `translate(${pan.x}px, ${pan.y}px)` }}
          />
        </div>
        <input type="range" min="1" max="3" step="0.01" value={zoom} onChange={onZoom} className="cropper-zoom" />
        <div className="cropper-actions">
          <button type="button" onClick={onCancel}>Cancel</button>
          <button type="button" className="primary" onClick={useCrop}>Use crop</button>
        </div>
      </div>
    </div>
  );
}
