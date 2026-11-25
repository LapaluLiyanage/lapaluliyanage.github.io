import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./music.css";

const SLOTS = 8;
const INTERVAL = 2200;

const shuffled = (list) => {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Resolves with the photo's width / height once it has loaded.
const preload = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img.naturalWidth / img.naturalHeight);
    img.onerror = () => resolve(0);
    img.src = src;
  });

// Upright tiles take upright photos and wide tiles take wide ones; squares suit both.
const fits = (photoRatio, tileRatio) => photoRatio > 0 && (tileRatio < 1 ? photoRatio <= 1.15 : photoRatio >= 0.9);

// Tiles come in columns of two, one upright and one wide, so every column is the same height.
const isTall = (slot) => (Math.floor(slot / 2) % 2 === 0) === (slot % 2 === 0);

const tileAt = (grid, slot) => grid?.querySelectorAll(".mg-tile")[slot];

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// A fixed grid whose tiles flip, one at a time, to photos not currently shown.
function ShuffleGrid({ pool, onOpen, frozen }) {
  const count = Math.min(SLOTS, pool.length);
  const initial = () => pool.slice(0, count).map((p) => ({ faces: [p, p], turn: 0 }));
  const [tiles, setTiles] = useState(initial);
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());
  const [visible, setVisible] = useState(false);
  // the tile under a mouse pointer holds still; the others keep changing
  const hovered = useRef(-1);
  const gridRef = useRef(null);
  const queue = useRef([]);
  const lastSlot = useRef(-1);
  const tilesRef = useRef(tiles);
  const timers = useRef([]);
  tilesRef.current = tiles;

  useEffect(() => {
    queue.current = [];
    setTiles(initial());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pool]);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.15 });
    if (gridRef.current) io.observe(gridRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // Swap out any opening photo that doesn't suit its tile's shape.
  useEffect(() => {
    if (!visible) return;
    tilesRef.current.slice(0, count).forEach(async (t, slot) => {
      const tile = tileAt(gridRef.current, slot);
      if (!tile || pool.length <= count) return;
      const ratio = await preload(t.faces[t.turn % 2].image);
      if (!fits(ratio, tile.clientWidth / tile.clientHeight)) flip(slot);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, pool]);

  // The next photo that is not on screen, cycling through the whole pool.
  const nextPhoto = useCallback(() => {
    const shown = new Set(tilesRef.current.map((t) => t.faces[t.turn % 2].image));
    for (let tries = 0; tries < 2; tries++) {
      while (queue.current.length) {
        const p = queue.current.shift();
        if (!shown.has(p.image)) return p;
      }
      queue.current = shuffled(pool);
    }
    return null;
  }, [pool]);

  const flip = useCallback(
    async (slot) => {
      const tile = tileAt(gridRef.current, slot);
      const tileRatio = tile ? tile.clientWidth / tile.clientHeight : 1;
      let photo = null;
      for (let tries = 0; tries < 8 && !photo; tries++) {
        const candidate = nextPhoto();
        if (!candidate) return;
        if (fits(await preload(candidate.image), tileRatio)) photo = candidate;
      }
      if (!photo) return;
      setTiles((prev) =>
        prev.some((t) => t.faces[t.turn % 2].image === photo.image) ? prev : prev.map((t, i) => {
          if (i !== slot) return t;
          const faces = t.faces.slice();
          faces[(t.turn + 1) % 2] = photo;
          return { faces, turn: t.turn + 1 };
        })
      );
    },
    [nextPhoto]
  );

  const canShuffle = pool.length > count;

  useEffect(() => {
    if (!playing || !visible || frozen || !canShuffle) return;
    const id = setInterval(() => {
      if (document.hidden) return;
      let slot = Math.floor(Math.random() * count);
      if (slot === lastSlot.current) slot = (slot + 1) % count;
      if (slot === hovered.current) slot = (slot + 1) % count;
      lastSlot.current = slot;
      flip(slot);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [playing, visible, frozen, canShuffle, count, flip]);

  // Every tile flips in turn, like a wave running across the grid.
  const shuffleAll = () => {
    timers.current.forEach(clearTimeout);
    timers.current = Array.from({ length: count }, (_, i) => setTimeout(() => flip(i), i * 110));
  };

  return (
    <>
      {canShuffle && (
        <div className="mg-controls">
          <span className={`mg-eq${playing ? " on" : ""}`} aria-hidden="true">
            <i /><i /><i /><i /><i />
          </span>
          <button type="button" className="mg-btn" onClick={shuffleAll}>Shuffle ⤮</button>
          <button type="button" className="mg-btn" aria-pressed={!playing} onClick={() => setPlaying((v) => !v)}>
            {playing ? "Pause" : "Play"}
          </button>
        </div>
      )}
      <div ref={gridRef} className="mg-grid">
        {Array.from({ length: Math.ceil(tiles.length / 2) }, (_, column) => (
          <div key={column} className="mg-column">
            {tiles.slice(column * 2, column * 2 + 2).map((t, n) => {
              const i = column * 2 + n;
              const current = t.faces[t.turn % 2];
              return (
                <button
                  type="button"
                  key={i}
                  className={`dv-music-tile mg-tile ${isTall(i) ? "tall" : "wide"}`}
                  onClick={() => onOpen(current)}
                  onPointerEnter={(e) => e.pointerType === "mouse" && (hovered.current = i)}
                  onPointerLeave={() => (hovered.current = -1)}
                  aria-label={`Open ${current.label || "photo"}`}
                >
                  <span className={`mg-flipper ${i % 3 === 1 ? "x" : "y"}`} style={{ "--turn": `${t.turn * 180}deg` }}>
                    {t.faces.map((f, side) => (
                      <span key={side} className={`mg-face${side ? " back" : ""}`}>
                        {/* blurred copy fills any space, so the photo itself is never cropped */}
                        <img src={f.image} alt="" aria-hidden="true" className="mg-fill" loading="lazy" />
                        <img src={f.image} alt="" className="mg-photo" loading="lazy" />
                      </span>
                    ))}
                  </span>
                  <span className="dv-music-caption">{current.label}</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}

function Lightbox({ photos, index, onIndex, title }) {
  const photo = photos[index];
  const step = (d) => onIndex((index + d + photos.length) % photos.length);
  return (
    <div className="dv-lightbox" role="dialog" aria-label="Photo viewer" onClick={() => onIndex(null)}>
      <img key={photo.image} className="mg-zoom" src={photo.image} alt={photo.caption || title} />
      <div className="dv-lightbox-bar mono" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={() => step(-1)} aria-label="Previous photo">←</button>
        <span>{photo.caption || title} · {index + 1}/{photos.length}</span>
        <button type="button" onClick={() => step(1)} aria-label="Next photo">→</button>
        <button type="button" onClick={() => onIndex(null)} aria-label="Close photo">✕</button>
      </div>
    </div>
  );
}

// A show's details and all of its photos, or just one photo when `album` has no title.
function AlbumModal({ album, start, onClose }) {
  const [index, setIndex] = useState(start);
  const closeRef = useRef(null);

  useEffect(() => {
    const prevFocus = document.activeElement;
    closeRef.current?.focus();
    return () => prevFocus?.focus?.({ preventScroll: true });
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") index === null ? onClose() : setIndex(null);
      else if (index !== null && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
        const d = e.key === "ArrowRight" ? 1 : -1;
        setIndex((index + d + album.photos.length) % album.photos.length);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, album, onClose]);

  return createPortal(
    <div className="dv-modal-backdrop" onClick={onClose} data-lenis-prevent="">
      <div className="dv-modal" role="dialog" aria-modal="true" aria-label={album.title} onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="dv-modal-close" onClick={onClose} aria-label="Close album">✕</button>
        <div className="dv-modal-body">
          <div className="dv-eyebrow">{album.date ? `SHOW · ${album.date}` : "SHOW"}</div>
          <h3 className="dv-modal-title">{album.title}</h3>
          {album.nativeName && <p className="dv-modal-tagline">{album.nativeName}</p>}
          {album.organiser && <p className="mg-meta mono">{album.organiser}</p>}
          {album.description && <p className="dv-modal-text">{album.description}</p>}
          <div className="mg-wall">
            {album.photos.map((p, i) => (
              <button type="button" key={p.image + i} className="mg-shot" style={{ "--i": i }} onClick={() => setIndex(i)}>
                <img src={p.image} alt={p.caption || `${album.title} photo ${i + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
          {album.credit && <p className="mg-credit mono">Photos: {album.credit}</p>}
        </div>
        {index !== null && album.photos[index] && <Lightbox photos={album.photos} index={index} onIndex={setIndex} title={album.title} />}
      </div>
    </div>,
    document.body
  );
}

export default function MusicGallery({ photos, albums }) {
  const [view, setView] = useState("grid");
  const [open, setOpen] = useState(null); // { album, start }
  const close = useCallback(() => setOpen(null), []);

  const shows = useMemo(
    () => (albums || []).filter((a) => !a.hidden).map((a) => ({ ...a, photos: (a.photos || []).filter((p) => p.image) })).filter((a) => a.photos.length),
    [albums]
  );

  // Show photos take turns by album, so neighbouring tiles come from different events.
  const pool = useMemo(() => {
    const lists = shows.map((a) => a.photos.filter((p) => !p.skipGrid).map((p) => ({ image: p.image, label: a.title.toUpperCase() })));
    const mixed = [];
    for (let i = 0; lists.some((l) => i < l.length); i++) lists.forEach((l) => l[i] && mixed.push(l[i]));
    return mixed.concat((photos || []).filter((p) => p.image).map((p) => ({ image: p.image, label: p.caption })));
  }, [shows, photos]);

  const openPhoto = (photo) => {
    const album = shows.find((a) => a.photos.some((p) => p.image === photo.image));
    if (album) setOpen({ album, start: null });
    else setOpen({ album: { title: photo.label || "Photo", photos: [{ image: photo.image }] }, start: 0 });
  };

  return (
    <div className="mg">
      {shows.length > 0 && (
        <div className="mg-tabs" role="tablist" aria-label="Music photos view">
          {[["grid", "Highlights"], ["albums", `Shows & albums (${shows.length})`]].map(([id, label]) => (
            <button key={id} type="button" role="tab" aria-selected={view === id} className={`dv-filter-tab${view === id ? " on" : ""}`} onClick={() => setView(id)}>
              {label}
            </button>
          ))}
        </div>
      )}

      {view === "grid" || !shows.length ? (
        <ShuffleGrid pool={pool} onOpen={openPhoto} frozen={!!open} />
      ) : (
        <div className="mg-albums">
          {shows.map((a, i) => (
            <button type="button" key={a.title + i} className="mg-album" style={{ "--i": i }} onClick={() => setOpen({ album: a, start: null })}>
              <span className="mg-stack">
                {a.photos.slice(0, 3).map((p, n) => (
                  <img key={p.image} src={p.image} alt="" loading="lazy" className={`mg-print p${n}`} />
                ))}
              </span>
              <span className="mg-album-title">{a.title}</span>
              {a.nativeName && <span className="mg-album-native">{a.nativeName}</span>}
              <span className="mg-album-meta mono">
                {[a.date, `${a.photos.length} photos`].filter(Boolean).join(" · ")}
              </span>
              {a.description && <span className="mg-album-text">{a.description}</span>}
            </button>
          ))}
        </div>
      )}

      {open && <AlbumModal album={open.album} start={open.start} onClose={close} />}
    </div>
  );
}
