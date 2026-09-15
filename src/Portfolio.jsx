import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import gsap from "gsap";
import "./Portfolio.css";

const GITHUB_USER = "LapaluLiyanage";

const NAV = [
  { id: "home", label: "POSTER" },
  { id: "about", label: "DNA" },
  { id: "education", label: "EDUCATION" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "music", label: "MUSIC" },
  { id: "contact", label: "CONTACT" },
];

const TOP_SKILLS = ["React.js", "JavaScript", "Python", "Node.js", "Java", "Tailwind", "AI Agents", "SQL", "Git", "Figma"];

const STATS = [
  { num: "3rd", label: "YEAR OF STUDY" },
  { num: "4+", label: "LIVE PERFORMANCES" },
  { num: "SE", label: "MAJOR FIELD" },
  { num: "01", label: "BAND — FASTUNES" },
];

const JOURNEY = [
  { when: "2022", title: "Started BSc Software Engineering", sub: "Rajarata University of Sri Lanka · Faculty of Applied Sciences" },
  { when: "2023", title: "Pioneered Open Mic on campus", sub: "Fastunes in Rusl · Vol 1.0 and Vol 2.0" },
  { when: "2024", title: "AI agents and full-stack builds", sub: "PEAS study assistant, campus event portal, search agent simulator" },
  { when: "NOW", title: "Year 3 · building and performing", sub: "Open mic series headliner · content for Instagram and TikTok" },
];

const COURSEWORK = [
  "Data Structures",
  "Algorithms",
  "Software Architecture",
  "Artificial Intelligence",
  "Machine Learning",
  "Database Systems",
  "Operating Systems",
  "Web Technologies",
  "Object Oriented Programming",
  "Software Project Management",
];

const EXTRAS = [
  "Core member and performer — Fastunes in Rusl",
  "Founded the campus open mic series (Vol 1.0 → 3.0)",
  "Closing ceremony performance — FASEXPLORE Exhibition",
  "Self-taught React, Node and AI agent design",
];

const SKILLS = [
  {
    cat: "Frontend",
    items: [
      { name: "React.js", level: 85 },
      { name: "HTML / CSS", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "Tailwind CSS", level: 78 },
    ],
  },
  {
    cat: "Backend",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Python", level: 82 },
      { name: "Java", level: 70 },
      { name: "Express.js", level: 72 },
    ],
  },
  {
    cat: "AI / Data",
    items: [
      { name: "Machine Learning", level: 68 },
      { name: "AI Agents / PEAS", level: 75 },
      { name: "SQL / Databases", level: 73 },
      { name: "Data Structures", level: 80 },
    ],
  },
  {
    cat: "Tools & DevOps",
    items: [
      { name: "Git / GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Linux / CLI", level: 70 },
      { name: "Figma", level: 65 },
    ],
  },
];

const FEATURED = [
  { title: "AI Study Assistant", desc: "Intelligent study companion with PEAS-based agent architecture, exam mode and spaced repetition for university students.", tags: ["React", "Python", "AI", "PEAS"] },
  { title: "Fastunes Band Platform", desc: "Full-stack platform for Fastunes in Rusl — event scheduling, open mic registration, performance archive.", tags: ["React", "Node.js", "MongoDB"] },
  { title: "Campus Event Portal", desc: "Event management for Rajarata University with real-time RSVP, notification engine and an admin dashboard.", tags: ["JavaScript", "Express", "MySQL"] },
  { title: "Search Agent Simulator", desc: "Visual simulator for classic search algorithms — step-through states, heuristics and cost comparison.", tags: ["Python", "React", "Algorithms"] },
];

const FALLBACK_REPOS = [
  { name: "lapaluliyanage.github.io", url: "https://github.com/LapaluLiyanage/lapaluliyanage.github.io", desc: "Personal portfolio — React + Vite, deployed to GitHub Pages at lapalu.me.", meta: "JAVASCRIPT · ★ 0 · LIVE" },
  { name: "ai-study-assistant", url: "https://github.com/LapaluLiyanage", desc: "PEAS-based study agent with exam mode and spaced repetition.", meta: "PYTHON · ★ 0 · REPO" },
  { name: "fastunes-platform", url: "https://github.com/LapaluLiyanage", desc: "Band platform for Fastunes in Rusl — events, open mic sign-ups, archive.", meta: "REACT · ★ 0 · REPO" },
];

const GIGS = [
  { no: "01", title: "Open Mic Vol 1.0", sub: "Fastunes in Rusl · Rajarata University", tag: "FIRST NIGHT" },
  { no: "02", title: "Open Mic Vol 2.0", sub: "Fastunes in Rusl · Pioneered the concept on campus", tag: "SOLD OUT" },
  { no: "03", title: "Open Mic Vol 3.0", sub: "Fastunes in Rusl · Series headliner", tag: "HEADLINE" },
  { no: "04", title: "FASEXPLORE Exhibition", sub: "Closing ceremony performance", tag: "CLOSING SET" },
];

const ALBUM = [
  { kind: "PHOTO", label: "open mic vol 1.0 — stage" },
  { kind: "VIDEO", label: "vol 2.0 full set clip" },
  { kind: "PHOTO", label: "band portrait — fastunes" },
  { kind: "VIDEO", label: "fasexplore closing song" },
  { kind: "PHOTO", label: "crowd, vol 3.0" },
  { kind: "PHOTO", label: "backstage / rehearsal" },
];

const SOCIALS = [
  { label: "GITHUB", url: "https://github.com/LapaluLiyanage" },
  { label: "LINKEDIN", url: "https://www.linkedin.com/in/lapalu-liyanage/" },
  { label: "INSTAGRAM", url: "https://www.instagram.com/lapalu_s/" },
  { label: "TIKTOK", url: "https://www.tiktok.com/@lapalu_0" },
];

const ACCENT = "#c2f24a";

export default function Portfolio() {
  const [page, setPage] = useState("home");
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  const bgRef = useRef(null);
  const wipeRef = useRef(null);
  const busyRef = useRef(false);
  const mainRef = useRef(null);

  const animIn = useCallback((delay = 40) => {
    setTimeout(() => {
      const els = mainRef.current ? mainRef.current.querySelectorAll("[data-anim]") : [];
      if (els.length) {
        gsap.fromTo(els, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.05, ease: "power3.out", overwrite: true });
      }
      const bars = mainRef.current ? mainRef.current.querySelectorAll("[data-bar]") : [];
      bars.forEach((b) => gsap.fromTo(b, { scaleX: 0 }, { scaleX: 1, duration: 1, ease: "power3.out", transformOrigin: "left center" }));
    }, delay);
  }, []);

  const goTo = useCallback(
    (next) => {
      if (busyRef.current || next === page) return;
      const wipe = wipeRef.current;
      if (!wipe) {
        setPage(next);
        window.scrollTo(0, 0);
        return;
      }
      busyRef.current = true;
      gsap
        .timeline({ onComplete: () => (busyRef.current = false) })
        .set(wipe, { display: "block", transformOrigin: "bottom center", scaleY: 0 })
        .to(wipe, { scaleY: 1, duration: 0.42, ease: "power4.inOut" })
        .add(() => {
          setPage(next);
          window.scrollTo(0, 0);
        })
        .to(wipe, { scaleY: 0, transformOrigin: "top center", duration: 0.5, ease: "power4.inOut", delay: 0.06 })
        .set(wipe, { display: "none" })
        .add(() => animIn(30));
    },
    [page, animIn]
  );

  // Fetch GitHub profile + repos
  useEffect(() => {
    let dead = false;
    (async () => {
      try {
        const [p, r] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}`).then((x) => x.json()),
          fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=40`).then((x) => x.json()),
        ]);
        const list = Array.isArray(r) ? r.filter((x) => !x.fork).slice(0, 9) : [];
        if (!dead) {
          setProfile(p && p.login ? p : null);
          setRepos(list);
        }
      } catch {
        /* offline: curated work still shows */
      }
    })();
    return () => {
      dead = true;
    };
  }, []);

  // Initial animate-in
  useEffect(() => {
    animIn(120);
  }, [animIn]);

  // Three.js ambient backdrop
  useEffect(() => {
    let dead = false;
    let raf;
    const host = bgRef.current;
    if (!host) return;

    const w = host.clientWidth || window.innerWidth;
    const h = host.clientHeight || window.innerHeight;
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(55, w / h, 0.1, 100);
    cam.position.z = 12;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    host.appendChild(renderer.domElement);

    const accent = new THREE.Color(ACCENT);
    const N = 900;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = 6 + Math.random() * 9;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(p) * Math.cos(t);
      pos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t) * 0.7;
      pos[i * 3 + 2] = r * Math.cos(p);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const dust = new THREE.Points(geo, new THREE.PointsMaterial({ color: accent, size: 0.05, transparent: true, opacity: 0.55 }));
    scene.add(dust);

    const shell = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(4.6, 1)),
      new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.12 })
    );
    scene.add(shell);

    const core = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.TorusGeometry(2.6, 0.9, 8, 14)),
      new THREE.LineBasicMaterial({ color: 0x6f7563, transparent: true, opacity: 0.22 })
    );
    core.rotation.x = 1.1;
    scene.add(core);

    let mx = 0;
    let my = 0;
    const onMove = (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onMove);

    const onResize = () => {
      const nw = host.clientWidth || window.innerWidth;
      const nh = host.clientHeight || window.innerHeight;
      cam.aspect = nw / nh;
      cam.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();
    const loop = () => {
      if (dead) return;
      const t = clock.getElapsedTime();
      dust.rotation.y = t * 0.03;
      dust.rotation.x = Math.sin(t * 0.1) * 0.12;
      shell.rotation.y = t * 0.07;
      shell.rotation.x = t * 0.04;
      core.rotation.z = t * 0.12;
      cam.position.x += (mx * 2.2 - cam.position.x) * 0.04;
      cam.position.y += (-my * 1.6 - cam.position.y) * 0.04;
      cam.lookAt(0, 0, 0);
      renderer.render(scene, cam);
      raf = requestAnimationFrame(loop);
    };
    loop();
    gsap.fromTo(host, { opacity: 0 }, { opacity: 0.9, duration: 1.6, ease: "power2.out" });

    return () => {
      dead = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geo.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  const repoList = repos.length
    ? repos.map((r) => ({
        name: r.name,
        url: r.html_url,
        desc: r.description || "No description yet — open the repo to read the code.",
        meta: [r.language || "CODE", `★ ${r.stargazers_count || 0}`, new Date(r.pushed_at || r.updated_at).toISOString().slice(0, 7)].join(" · ").toUpperCase(),
      }))
    : FALLBACK_REPOS;

  const repoCount = profile?.public_repos ? String(profile.public_repos) : String(repos.length || 12);
  const ghLogin = profile ? profile.login : GITHUB_USER;
  const ghStats = profile
    ? [`${profile.public_repos} REPOS`, `${profile.followers} FOLLOWERS`, (profile.location || "SRI LANKA").toUpperCase()].join(" · ")
    : "LIVE FROM THE GITHUB API";

  return (
    <div className="pf-page">
      <div ref={bgRef} className="pf-bg" />
      <div ref={wipeRef} className="pf-wipe" />

      <nav className="pf-nav">
        <button className="pf-logo" onClick={() => goTo("home")}>
          <span className="pf-dot" />
          LAPALU.ME
        </button>
        <div className="pf-navlinks">
          {NAV.map((n) => (
            <button key={n.id} className={`pf-navlink${page === n.id ? " active" : ""}`} onClick={() => goTo(n.id)}>
              {n.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="pf-main" ref={mainRef}>
        {page === "home" && (
          <div>
            <section className="pf-hero">
              <div data-anim="">
                <div className="pf-eyebrow">// PORTFOLIO — SRI LANKA</div>
                <h1 className="pf-h1">
                  LAPALU
                  <br />
                  <span className="pf-h1-outline">LIYANAGE</span>
                </h1>
                <div className="pf-role-row">
                  <span className="pf-role">SOFTWARE ENGINEER</span>
                  <span className="pf-role-sep" />
                  <span className="pf-role2">MUSICIAN</span>
                </div>
                <p className="pf-bio">Building intelligent systems by day, performing on stage by night. 3rd year Software Engineering at Rajarata University of Sri Lanka.</p>
              </div>
              <div data-anim="" className="pf-photo-wrap">
                <div className="pf-photo-glow" />
                <div className="pf-photo-badge">
                  <span>FASTUNES</span>
                </div>
                <div className="pf-photo-frame">
                  <img src="/avatar.jpg" alt="Lapalu Liyanage" />
                  <div className="pf-photo-fade" />
                  <div className="pf-photo-caption">EST. RAJARATA · SRI LANKA</div>
                </div>
              </div>
            </section>

            <div className="pf-hint">// SELECT A BLOCK — EACH OPENS ITS OWN PAGE</div>

            <section className="pf-block-grid">
              <button className="pf-block pf-block-wide" onClick={() => goTo("about")} data-anim="">
                <div className="pf-block-head">
                  <h2 className="pf-block-title pf-block-title-lg">Creative DNA</h2>
                  <span className="pf-block-arrow">↗</span>
                </div>
                <div className="pf-stat-row">
                  <div>
                    <div className="pf-stat-num ac">3rd</div>
                    <div className="pf-stat-label">YEAR OF STUDY</div>
                  </div>
                  <div>
                    <div className="pf-stat-num">4+</div>
                    <div className="pf-stat-label">LIVE SHOWS</div>
                  </div>
                  <div>
                    <div className="pf-stat-num">{repoCount}</div>
                    <div className="pf-stat-label">PUBLIC REPOS</div>
                  </div>
                </div>
                <p className="pf-p">An engineer who found a second language in music. I build AI agents, full-stack apps and campus platforms — then take the stage with Fastunes in Rusl, the open-mic culture we started at university.</p>
              </button>

              <button className="pf-block" onClick={() => goTo("education")} data-anim="">
                <div className="pf-block-head">
                  <h2 className="pf-block-title">Education</h2>
                  <span className="pf-block-arrow">↗</span>
                </div>
                <div className="pf-mini-body">
                  BSc (Hons) Software Engineering
                  <br />
                  Rajarata University of Sri Lanka
                  <br />
                  Faculty of Applied Sciences
                </div>
                <div className="pf-mini-tag">2022 — PRESENT · YEAR 3</div>
              </button>

              <button className="pf-block" onClick={() => goTo("skills")} data-anim="">
                <div className="pf-block-head">
                  <h2 className="pf-block-title">Skills</h2>
                  <span className="pf-block-arrow">↗</span>
                </div>
                <div className="pf-chip-row">
                  {TOP_SKILLS.map((s) => (
                    <span key={s} className="pf-chip">
                      {s}
                    </span>
                  ))}
                </div>
              </button>

              <button className="pf-block pf-block-wide" onClick={() => goTo("projects")} data-anim="">
                <div className="pf-block-head">
                  <h2 className="pf-block-title">Projects · Live from GitHub</h2>
                  <span className="pf-block-arrow">↗</span>
                </div>
                <div className="pf-mini-repo-grid">
                  {repoList.slice(0, 3).map((r) => (
                    <div key={r.name} className="pf-mini-repo">
                      <div className="pf-mini-repo-name">{r.name}</div>
                      <div className="pf-mini-repo-meta">{r.meta}</div>
                    </div>
                  ))}
                </div>
              </button>

              <button className="pf-block pf-block-alt" onClick={() => goTo("music")} data-anim="">
                <div className="pf-block-head">
                  <h2 className="pf-block-title">Music</h2>
                  <span className="pf-block-arrow">↗</span>
                </div>
                <div className="pf-mini-body">Fastunes in Rusl — open mic series, exhibition closings, and the photo &amp; video album from every night on stage.</div>
                <div className="pf-mini-tag">4 SETS · ALBUM INSIDE</div>
              </button>

              <button className="pf-block pf-block-cta" onClick={() => goTo("contact")} data-anim="">
                <div className="pf-block-head">
                  <h2 className="pf-block-title">Contact</h2>
                  <span className="pf-block-arrow">↗</span>
                </div>
                <div className="pf-contact-mono">
                  lapaluliyanage@gmail.com
                  <br />
                  0774680396
                </div>
              </button>
            </section>
          </div>
        )}

        {page === "about" && (
          <div>
            <button className="pf-back" onClick={() => goTo("home")}>
              ← BACK TO POSTER
            </button>
            <h1 data-anim="" className="pf-sub-h1">
              Creative
              <br />
              <span className="ac" style={{ color: ACCENT }}>
                DNA
              </span>
            </h1>
            <div className="pf-two-col">
              <div data-anim="">
                <p className="pf-lead">
                  I am a third-year Software Engineering undergraduate at <span className="ac" style={{ color: ACCENT }}>Rajarata University of Sri Lanka</span>, passionate about building intelligent systems — AI agents, full-stack platforms, and tools that make campus life work better.
                </p>
                <p className="pf-body-p">
                  As a core member and performer of <span className="ac" style={{ color: ACCENT }}>Fastunes in Rusl</span>, I helped pioneer the open mic concept on campus — from the very first night to packed-house closing ceremonies. Music taught me timing, and engineering taught me structure; I use both in everything I ship.
                </p>
                <p className="pf-body-p">Off-stage I create content for Instagram and TikTok — always at the intersection of tech and art.</p>
              </div>
              <div data-anim="" className="pf-stat-grid">
                {STATS.map((st) => (
                  <div key={st.label} className="pf-stat-card">
                    <div className="num">{st.num}</div>
                    <div className="label">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div data-anim="" className="pf-journey-wrap">
              <div className="pf-label">// JOURNEY</div>
              {JOURNEY.map((j) => (
                <div key={j.when + j.title} className="pf-journey-row">
                  <div className="pf-journey-when">{j.when}</div>
                  <div>
                    <div className="pf-journey-title">{j.title}</div>
                    <div className="pf-journey-sub">{j.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "education" && (
          <div>
            <button className="pf-back" onClick={() => goTo("home")}>
              ← BACK TO POSTER
            </button>
            <h1 data-anim="" className="pf-sub-h1">
              Edu<span style={{ color: ACCENT }}>cation</span>
            </h1>
            <div data-anim="" className="pf-edu-card">
              <div className="pf-edu-date">2022 — PRESENT</div>
              <h2 className="pf-edu-title">BSc (Hons) Software Engineering</h2>
              <div className="pf-edu-sub">Rajarata University of Sri Lanka · Faculty of Applied Sciences · Currently Year 3</div>
            </div>
            <div className="pf-edu-grid">
              <div data-anim="" className="pf-edu-panel">
                <div className="pf-label">// CORE COURSEWORK</div>
                <div className="pf-chip-row" style={{ marginTop: 0 }}>
                  {COURSEWORK.map((c) => (
                    <span key={c} className="pf-course-chip">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div data-anim="" className="pf-edu-panel">
                <div className="pf-label">// BEYOND THE CURRICULUM</div>
                {EXTRAS.map((e) => (
                  <div key={e} className="pf-extra-row">
                    {e}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {page === "skills" && (
          <div>
            <button className="pf-back" onClick={() => goTo("home")}>
              ← BACK TO POSTER
            </button>
            <h1 data-anim="" className="pf-sub-h1">
              Skill<span style={{ color: ACCENT }}>set</span>
            </h1>
            <div className="pf-skill-grid">
              {SKILLS.map((cat) => (
                <div key={cat.cat} data-anim="" className="pf-edu-panel">
                  <h2 className="pf-skill-cat-title">{cat.cat}</h2>
                  {cat.items.map((s) => (
                    <div key={s.name} className="pf-skill-item">
                      <div className="pf-skill-item-head">
                        <span>{s.name}</span>
                        <span>{s.level}%</span>
                      </div>
                      <div className="pf-skill-track">
                        <div data-bar="" className="pf-skill-bar" style={{ width: `${s.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "projects" && (
          <div>
            <button className="pf-back" onClick={() => goTo("home")}>
              ← BACK TO POSTER
            </button>
            <h1 data-anim="" className="pf-sub-h1">
              Pro<span style={{ color: ACCENT }}>jects</span>
            </h1>
            <div data-anim="" className="pf-gh-bar">
              <div className="pf-gh-login">@{ghLogin}</div>
              <div className="pf-gh-stats">{ghStats}</div>
              <a href="https://github.com/LapaluLiyanage" target="_blank" rel="noopener noreferrer" className="pf-gh-open">
                OPEN GITHUB ↗
              </a>
            </div>
            <div className="pf-label" style={{ margin: "clamp(28px, 4vw, 44px) 0 16px" }}>
              // LIVE REPOSITORIES
            </div>
            <div className="pf-repo-grid">
              {repoList.map((r) => (
                <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" data-anim="" className="pf-repo-card">
                  <div className="pf-repo-name">{r.name}</div>
                  <div className="pf-repo-desc">{r.desc}</div>
                  <div className="pf-repo-meta">{r.meta}</div>
                </a>
              ))}
            </div>
            <div className="pf-label" style={{ margin: "clamp(32px, 5vw, 56px) 0 16px" }}>
              // SELECTED WORK
            </div>
            <div className="pf-featured-grid">
              {FEATURED.map((f) => (
                <div key={f.title} data-anim="" className="pf-featured-card">
                  <h3 className="pf-featured-title">{f.title}</h3>
                  <p className="pf-featured-desc">{f.desc}</p>
                  <div className="pf-tag-row">
                    {f.tags.map((t) => (
                      <span key={t} className="pf-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "music" && (
          <div>
            <button className="pf-back" onClick={() => goTo("home")}>
              ← BACK TO POSTER
            </button>
            <h1 data-anim="" className="pf-sub-h1">
              Mu<span style={{ color: ACCENT }}>sic</span>
            </h1>
            <p data-anim="" className="pf-lead" style={{ maxWidth: "60ch", marginTop: 22 }}>
              As a founding performer of <span style={{ color: ACCENT }}>Fastunes in Rusl</span>, I helped build a music culture at Rajarata University — from the first open mic to packed-house closing ceremonies.
            </p>
            <div className="pf-label" style={{ margin: "clamp(28px, 4vw, 44px) 0 16px" }}>
              // SETLIST
            </div>
            {GIGS.map((g) => (
              <div key={g.no} data-anim="" className="pf-gig-row">
                <div className="pf-gig-no">{g.no}</div>
                <div>
                  <div className="pf-gig-title">{g.title}</div>
                  <div className="pf-gig-sub">{g.sub}</div>
                </div>
                <div className="pf-gig-tag">{g.tag}</div>
              </div>
            ))}
            <div className="pf-label" style={{ margin: "clamp(32px, 5vw, 56px) 0 16px" }}>
              // PHOTO &amp; VIDEO ALBUM
            </div>
            <div className="pf-album-grid">
              {ALBUM.map((a) => (
                <div key={a.label} data-anim="" className="pf-album-tile">
                  <div className="pf-album-kind">{a.kind}</div>
                  <div className="pf-album-label">{a.label}</div>
                </div>
              ))}
            </div>
            <div className="pf-album-hint">drop your performance photos and clips into these slots</div>
          </div>
        )}

        {page === "contact" && (
          <div>
            <button className="pf-back" onClick={() => goTo("home")}>
              ← BACK TO POSTER
            </button>
            <h1 data-anim="" className="pf-sub-h1">
              Let's
              <br />
              <span style={{ color: ACCENT }}>Build</span>
            </h1>
            <div className="pf-contact-grid">
              <a href="mailto:lapaluliyanage@gmail.com" data-anim="" className="pf-contact-email">
                <div className="pf-contact-label">EMAIL</div>
                <div className="pf-contact-value">lapaluliyanage@gmail.com</div>
              </a>
              <a href="tel:0774680396" data-anim="" className="pf-contact-phone">
                <div className="pf-contact-label">PHONE</div>
                <div className="pf-contact-value">0774680396</div>
                <div className="pf-contact-tz">SRI LANKA · GMT+5:30</div>
              </a>
            </div>
            <div className="pf-social-grid">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" data-anim="" className="pf-social-card">
                  <span className="pf-social-label">{s.label}</span>
                  <span className="pf-social-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="pf-footer">
          <span>© 2026 LAPALU LIYANAGE</span>
          <span>SOFTWARE ENGINEER + MUSICIAN</span>
        </div>
      </main>
    </div>
  );
}
