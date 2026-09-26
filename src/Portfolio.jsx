import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DEFAULT_CONTENT } from "./lib/defaultContent";
import { fetchSiteContent } from "./lib/content";
import "./Portfolio.css";

gsap.registerPlugin(ScrollTrigger);

const GITHUB_USER = "LapaluLiyanage";
const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "about", label: "About", icon: "◐" },
  { id: "work", label: "Work", icon: "◆" },
  { id: "education", label: "Education", icon: "▲" },
  { id: "projects", label: "Projects", icon: "▦" },
  { id: "skills", label: "Skills", icon: "✦" },
  { id: "music", label: "Music", icon: "♪" },
  { id: "contact", label: "Contact", icon: "✉" },
];

const ICON_MAP = {
  Java: "java/java-original.svg",
  "Spring Boot": "spring/spring-original.svg",
  "Spring Security": "spring/spring-original.svg",
  Python: "python/python-original.svg",
  Flask: ["flask/flask-original.svg", true],
  JavaScript: "javascript/javascript-original.svg",
  React: "react/react-original.svg",
  "React (Vite)": "react/react-original.svg",
  "Node.js": "nodejs/nodejs-original.svg",
  "Node/Express": "nodejs/nodejs-original.svg",
  "C++": "cplusplus/cplusplus-original.svg",
  Android: "android/android-original.svg",
  Express: ["express/express-original.svg", true],
  PostgreSQL: "postgresql/postgresql-original.svg",
  MySQL: "mysql/mysql-original.svg",
  Supabase: "supabase/supabase-original.svg",
  "JPA/Hibernate": ["hibernate/hibernate-original.svg", true],
  Docker: "docker/docker-original.svg",
  "GitHub Actions": "githubactions/githubactions-original.svg",
  Postman: "postman/postman-original.svg",
  Vercel: ["vercel/vercel-original.svg", true],
  "Git/GitHub": "git/git-original.svg",
  Git: "git/git-original.svg",
  "scikit-learn": "scikitlearn/scikitlearn-original.svg",
  NumPy: "numpy/numpy-original.svg",
  Pandas: ["pandas/pandas-original.svg", true],
  pgAdmin: "postgresql/postgresql-original.svg",
};

function skillIcon(name) {
  const v = ICON_MAP[name];
  const path = Array.isArray(v) ? v[0] : v;
  const invert = Array.isArray(v) && v[1];
  return path ? { src: DEV + path, invert } : null;
}

const ROW_A = ["Java", "Spring Boot", "Python", "Flask", "JavaScript", "React", "Node.js", "C++", "Android", "Express"];
const ROW_B = ["PostgreSQL", "MySQL", "Supabase", "Docker", "GitHub Actions", "Postman", "Vercel", "Git", "scikit-learn", "NumPy", "Gemini API"];

const SKILL_GROUPS = [
  { title: "LANGUAGES", items: ["Java", "Python", "JavaScript", "C++"] },
  { title: "BACKEND", items: ["Spring Boot", "Spring Security", "Flask", "Node/Express", "REST APIs", "JWT auth"] },
  { title: "FRONTEND & MOBILE", items: ["React (Vite)", "Context API", "Android", "MVVM", "Room", "WorkManager"] },
  { title: "DATABASES", items: ["PostgreSQL", "MySQL", "Supabase", "JPA/Hibernate"] },
  { title: "TOOLS & DEVOPS", items: ["Git/GitHub", "Docker", "Postman", "pgAdmin", "Render", "Vercel", "GitHub Actions"] },
  { title: "ML / AI", items: ["Gemini API", "scikit-learn", "sentence-transformers", "NLP scoring"] },
];

const FILTER_TABS = ["All", "Full-Stack", "Backend", "AI-ML", "Mobile", "Tools"];
const TYPE_PHRASES = ["./mvnw spring-boot:run", "docker compose up", "git push origin main"];
const STATUS_BADGE_CLASS = { current: " solid", notable: "", past: " muted" };

const ago = (d) => {
  const x = Math.floor((Date.now() - new Date(d)) / 864e5);
  return x < 1 ? "today" : x < 30 ? x + "d" : x < 365 ? Math.floor(x / 30) + "mo" : Math.floor(x / 365) + "y";
};

function GithubMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.7.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

function LinkedinMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function useNarrow(bp = 860) {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const onResize = () => setNarrow(window.innerWidth < bp);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [bp]);
  return narrow;
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.querySelector(`[data-section="${id}"]`)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.getAttribute("data-section"))),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

function useClock(timeZone) {
  const ref = useRef(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const tick = () => {
      if (ref.current) ref.current.textContent = fmt.format(new Date()) + " IST";
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, [timeZone]);
  return ref;
}

function useTyped(phrases) {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let pi = 0;
    let ci = 0;
    let del = false;
    let timer;
    const type = () => {
      const p = phrases[pi];
      ci += del ? -1 : 1;
      setTyped(p.slice(0, ci));
      let w = del ? 28 : 65;
      if (!del && ci === p.length) {
        del = true;
        w = 1700;
      } else if (del && ci === 0) {
        del = false;
        pi = (pi + 1) % phrases.length;
        w = 350;
      }
      timer = setTimeout(type, w);
    };
    timer = setTimeout(type, 1400);
    return () => clearTimeout(timer);
  }, [phrases]);
  return typed;
}

function useGithub(user) {
  const [state, setState] = useState({ profile: null, repos: [], status: "loading" });
  useEffect(() => {
    let dead = false;
    const u = `https://api.github.com/users/${user}`;
    Promise.all([fetch(u).then((r) => (r.ok ? r.json() : null)), fetch(u + "/repos?per_page=100&sort=pushed").then((r) => (r.ok ? r.json() : null))])
      .then(([profile, repos]) => {
        if (dead) return;
        if (!Array.isArray(repos)) throw new Error("no repos");
        setState({ profile, repos: repos.filter((r) => !r.fork), status: "live" });
      })
      .catch(() => !dead && setState((s) => ({ ...s, status: "offline" })));
    return () => {
      dead = true;
    };
  }, [user]);
  return state;
}

function useRevealOnScroll(rootRef, deps) {
  const seen = useRef(new WeakSet());
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          gsap.fromTo(e.target, { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", clearProps: "transform,opacity" });
        }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    const root = rootRef.current;
    const els = root ? root.querySelectorAll("[data-rv]") : [];
    els.forEach((el) => {
      if (!seen.current.has(el)) {
        seen.current.add(el);
        io.observe(el);
      }
    });
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default function Portfolio() {
  const rootRef = useRef(null);
  const cursorRef = useRef(null);
  const progressRef = useRef(null);
  const eduLineRef = useRef(null);
  const wordsRef = useRef(null);

  const [content, setContent] = useState(DEFAULT_CONTENT);
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [sent, setSent] = useState(false);

  const narrow = useNarrow();
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));
  const clockRef = useClock("Asia/Colombo");
  const typed = useTyped(TYPE_PHRASES);
  const { profile, repos, status } = useGithub(GITHUB_USER);

  useEffect(() => {
    let dead = false;
    fetchSiteContent()
      .then((data) => {
        if (!dead) setContent(data);
      })
      .catch(() => {
        /* offline or misconfigured: DEFAULT_CONTENT fallback stays in place */
      });
    return () => {
      dead = true;
    };
  }, []);

  const featured = useMemo(() => {
    const used = new Set();
    return content.projects.map((f, i) => {
      const keys = f.keys.split(",").map((k) => k.trim().toLowerCase()).filter(Boolean);
      const r = repos.find((x) => !used.has(x.id) && keys.some((k) => x.name.toLowerCase().replace(/[-_ ]/g, "").includes(k)));
      if (r) used.add(r.id);
      return {
        ...f,
        num: String(i + 1).padStart(2, "0"),
        meta: r ? `★ ${r.stargazers_count} · ${ago(r.pushed_at)}` : "",
        repoUrl: r ? r.html_url : "https://github.com/LapaluLiyanage",
        demoUrl: r && r.homepage ? r.homepage : "",
      };
    });
  }, [repos, content.projects]);

  const catOf = (p) => p.category.toLowerCase();
  const filterTabs = FILTER_TABS.filter((l) => l === "All" || featured.some((p) => catOf(p) === l.toLowerCase()));
  const filtered = filter === "All" ? featured : featured.filter((p) => catOf(p) === filter.toLowerCase());
  const visibleProjects = showAll ? filtered : filtered.slice(0, 6);
  const hasMore = filtered.length > 6;
  const repoCount = profile && profile.public_repos != null ? profile.public_repos : repos.length || null;

  useRevealOnScroll(rootRef, [filter, showAll]);

  useEffect(() => {
    if (!showAll && filter) {
      requestAnimationFrame(() => {
        const cards = rootRef.current ? rootRef.current.querySelectorAll("[data-card]") : [];
        gsap.fromTo(cards, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.035, ease: "power3.out", overwrite: true });
        ScrollTrigger.refresh();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, showAll]);

  useEffect(() => {
    let removeCursorListener = () => {};
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from("[data-hl]", { yPercent: 115, duration: 1.2, stagger: 0.1 }, 0.1)
        .from("[data-photo]", { clipPath: "inset(100% 0 0 0)", y: 40, duration: 1.4, ease: "expo.out" }, 0.3)
        .from("[data-hf]", { y: 26, opacity: 0, duration: 0.9, stagger: 0.07 }, 0.55);

      gsap.to("[data-photo]", { yPercent: -10, ease: "none", scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true } });

      gsap.fromTo(
        "[data-word]",
        { opacity: 0.14 },
        { opacity: 1, stagger: 0.05, ease: "none", scrollTrigger: { trigger: wordsRef.current, start: "top 80%", end: "bottom 45%", scrub: true } }
      );

      gsap.from("[data-big]", { yPercent: 30, opacity: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: "[data-big]", start: "top 90%", once: true } });

      if (progressRef.current) {
        gsap.to(progressRef.current, { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });
      }
      if (eduLineRef.current) {
        gsap.to(eduLineRef.current, { scaleY: 1, ease: "none", scrollTrigger: { trigger: eduLineRef.current, start: "top 80%", end: "bottom 55%", scrub: true } });
      }

      if (cursorRef.current) {
        const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.7, ease: "power3" });
        const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.7, ease: "power3" });
        const onMove = (e) => {
          xTo(e.clientX);
          yTo(e.clientY);
        };
        window.addEventListener("pointermove", onMove);
        removeCursorListener = () => window.removeEventListener("pointermove", onMove);
      }
    }, rootRef);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => {
      ctx.revert();
      removeCursorListener();
      window.removeEventListener("load", onLoad);
    };
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = encodeURIComponent(`${f.get("message")}\n\n${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:lapaluliyanage@gmail.com?subject=${encodeURIComponent("Hello from " + f.get("name"))}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 2600);
  }, []);

  return (
    <div ref={rootRef} className="dv-shell">
      <div className="dv-atmosphere" aria-hidden="true" />
      <div className="dv-noise" aria-hidden="true" />
      <div ref={cursorRef} className="dv-cursor" aria-hidden="true" />
      <div ref={progressRef} className="dv-progress" aria-hidden="true" />

      <a href="#home" className="dv-badge" aria-label="Back to top">LL</a>

      <nav className={`dv-nav${narrow ? " narrow" : ""}`}>
        {NAV_ITEMS.map((n) => {
          const on = active === n.id;
          const showLabel = !narrow || on;
          return (
            <a key={n.id} href={`#${n.id}`} className={`dv-navlink${on ? " on" : ""}`}>
              <span className="dv-navicon">{n.icon}</span>
              {showLabel && <span>{n.label}</span>}
            </a>
          );
        })}
      </nav>

      {/* HERO */}
      <section id="home" data-section="home" className="dv-hero">
        <div className="dv-hero-grid">
          <div className="dv-hero-copy">
            <div data-hf="" className="dv-availability">
              <span className="dv-pulse-dot" />
              <span>{content.hero.availability}</span>
            </div>
            <h1 className="dv-h1">
              <div className="dv-hl-mask"><div data-hl="" className="dv-hl">{content.hero.headline1}</div></div>
              <div className="dv-hl-mask"><div data-hl="" className="dv-hl accent">{content.hero.headline2}</div></div>
              <div className="dv-hl-mask"><div data-hl="" className="dv-hl faint">{content.hero.headline3}</div></div>
            </h1>
            <p data-hf="" className="dv-hero-sub">{content.hero.subline}</p>
            <div data-hf="" className="dv-hero-actions">
              <a href={content.hero.cvUrl} download className="dv-btn-solid">Download CV ↓</a>
              <a href="#projects" className="dv-btn-outline">View Projects →</a>
              <a href="#contact" className="dv-btn-outline">Hire Me</a>
            </div>
            <div data-hf="" className="dv-social-row">
              <a href="https://github.com/LapaluLiyanage" target="_blank" rel="noopener noreferrer" className="dv-social-pill">
                <GithubMark /> LapaluLiyanage
              </a>
              <a href="https://linkedin.com/in/lapalu-liyanage" target="_blank" rel="noopener noreferrer" className="dv-social-pill">
                <LinkedinMark /> lapalu-liyanage
              </a>
            </div>
          </div>

          <div data-photo="" className="dv-photo-col">
            <div className="dv-photo-stage">
              <div className="dv-photo-grid" />
              <div className="dv-photo-frame">
                <img src={content.hero.photoUrl} alt={content.hero.photoName} />
                <div className="dv-photo-fade" />
              </div>
              <span className="dv-corner tl" />
              <span className="dv-corner tr" />
              <span className="dv-corner bl" />
              <span className="dv-corner br" />
              <div className="dv-online-badge">
                <span className="dv-pulse-dot sm" />ONLINE
              </div>
              <div className="dv-photo-caption">
                <div>
                  <div className="dv-photo-name">{content.hero.photoName}</div>
                  <div className="dv-photo-role">{content.hero.photoRole}</div>
                </div>
                <div className="dv-photo-coords">{content.hero.coordsLine1}<br />{content.hero.coordsLine2}</div>
              </div>
              <div className="dv-terminal">
                <span className="accent">~/lapalu $</span> <span>{typed}</span>
                <span className="dv-caret" />
              </div>
            </div>
          </div>
        </div>

        <div data-hf="" className="dv-hero-footer">
          <div className="dv-hf-cell">
            <span>BASED IN</span>
            <span className="dv-hf-val">{content.hero.basedIn}</span>
          </div>
          <div className="dv-hf-cell">
            <span>LOCAL TIME</span>
            <span ref={clockRef} className="dv-hf-val">--:--</span>
          </div>
          <div className="dv-hf-cell">
            <span>STUDYING</span>
            <span className="dv-hf-val">{content.hero.studying}</span>
          </div>
          <a href="#about" className="dv-scroll-hint">
            <span>SCROLL</span>
            <span className="dv-scroll-track"><span className="dv-scroll-dot" /></span>
          </a>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="dv-marquee">
        <div className="dv-marquee-mask">
          <div className="dv-marquee-row">
            {[...ROW_A, ...ROW_A].map((name, i) => {
              const icon = skillIcon(name);
              return (
                <div key={i} className="dv-marquee-chip">
                  {icon && <img src={icon.src} alt="" className={`dv-chip-icon${icon.invert ? " invert" : ""}`} />}
                  <span>{name}</span>
                </div>
              );
            })}
          </div>
          <div className="dv-marquee-row rev">
            {[...ROW_B, ...ROW_B].map((name, i) => {
              const icon = skillIcon(name);
              return (
                <div key={i} className="dv-marquee-chip">
                  {icon && <img src={icon.src} alt="" className={`dv-chip-icon${icon.invert ? " invert" : ""}`} />}
                  <span className="accent">{name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" data-section="about" className="dv-section">
        <div data-rv="" className="dv-eyebrow">[01] ABOUT</div>
        <p ref={wordsRef} className="dv-statement">
          {content.about.statement.split(" ").map((w, i) => (
            <span key={i} data-word="" className={content.about.highlightWords.includes(w) ? "accent" : ""}>
              {w}
            </span>
          ))}
        </p>
        <div className="dv-stats-grid">
          <div data-rv="" className="dv-stat-card">
            <div className="dv-stat-value">{content.about.statProjectsShipped}</div>
            <div className="dv-stat-label">Projects shipped</div>
          </div>
          <div data-rv="" className="dv-stat-card">
            <div className="dv-stat-value">{repoCount != null ? String(repoCount) : "—"}</div>
            <div className="dv-stat-label">Public GitHub repos (live)</div>
          </div>
          <div data-rv="" className="dv-stat-card">
            <div className="dv-stat-value">{content.about.statPapers}</div>
            <div className="dv-stat-label">IEEE-format paper co-authored</div>
          </div>
        </div>
        <div className="dv-about-grid">
          <div data-rv="" className="dv-panel">
            <div className="dv-panel-kicker">HEY, I AM</div>
            <div className="dv-panel-name">{content.about.bioName}</div>
            <p className="dv-panel-text">{content.about.bioText}</p>
            <div className="dv-tag-rows">
              <div className="dv-tag-row">
                <span className="dv-tag solid">Full-Stack Development</span>
                {content.about.fsTags.map((t) => (
                  <span key={t} className="dv-tag">{t}</span>
                ))}
              </div>
              <div className="dv-tag-row">
                <span className="dv-tag outline">AI/ML Learning Path</span>
                {content.about.mlTags.map((t) => (
                  <span key={t} className="dv-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div data-rv="" className="dv-panel dv-panel-split">
            <div>
              <div className="dv-panel-kicker accent">→ WHAT I DO</div>
              <p className="dv-panel-text">{content.about.whatIDo}</p>
            </div>
            <div>
              <div className="dv-panel-kicker accent">→ WHY CHOOSE ME</div>
              <p className="dv-panel-text">{content.about.whyChooseMe}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" data-section="projects" className="dv-section">
        <div className="dv-section-head">
          <div>
            <div className="dv-eyebrow">[02] SELECTED WORK</div>
            <h2 className="dv-h2">Things I've <span className="accent">shipped</span>.</h2>
          </div>
          <div className="dv-filter-tabs">
            {filterTabs.map((label) => {
              const count = label === "All" ? featured.length : featured.filter((p) => catOf(p) === label.toLowerCase()).length;
              const on = filter === label;
              return (
                <button
                  key={label}
                  className={`dv-filter-tab${on ? " on" : ""}`}
                  onClick={() => {
                    setFilter(label);
                    setShowAll(false);
                  }}
                >
                  {label} <span className="dv-filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="dv-projects-grid">
          {visibleProjects.map((p) => (
            <article key={p.title} data-card="" className="dv-project-card">
              <div className="dv-project-media">
                <img
                  src={p.image}
                  alt={p.title}
                  className="dv-project-image"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling.style.display = "flex";
                  }}
                />
                <div className="dv-project-placeholder" style={{ display: "none" }}>
                  <span>{p.title.slice(0, 2).toUpperCase()}</span>
                </div>
                <div className="dv-project-cat">{p.category}</div>
                <div className="dv-project-num">{p.num}</div>
              </div>
              <div className="dv-project-body">
                <div className="dv-project-title-row">
                  <h3>{p.title}</h3>
                  {p.meta && <span className="dv-project-meta">{p.meta}</span>}
                </div>
                <p className="dv-project-desc">{p.description}</p>
                <div className="dv-tech-row">
                  {p.tech.map((t) => (
                    <span key={t} className="dv-tech-chip">{t}</span>
                  ))}
                </div>
                <div className="dv-project-actions">
                  <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="dv-btn-outline sm">View Project ↗</a>
                  {p.demoUrl && (
                    <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="dv-btn-solid sm">Live Demo</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {hasMore && (
          <div className="dv-loadmore-row">
            <button className="dv-btn-outline" onClick={() => setShowAll((s) => !s)}>
              {showAll ? "Show less ↑" : `View all ${filtered.length} projects ↓`}
            </button>
          </div>
        )}
      </section>

      {/* EXPERIENCE */}
      <section id="work" data-section="work" className="dv-section">
        <div data-rv="" className="dv-section-head">
          <div>
            <div className="dv-eyebrow">[03] EXPERIENCE</div>
            <h2 className="dv-h2">Leadership<span className="faint"> &amp; roles</span></h2>
          </div>
        </div>
        <div className="dv-exp-list">
          {content.work.map((w) => (
            <div key={w.role} data-rv="" className="dv-exp-row">
              <div className="dv-exp-date">{w.dates}</div>
              <div className="dv-exp-main">
                <div className="dv-exp-head">
                  <h3>{w.role}</h3>
                  <span className={`dv-exp-badge${STATUS_BADGE_CLASS[w.status] || ""}`}>{w.badge}</span>
                </div>
                <div className="dv-exp-org">{w.org}</div>
                <div className="dv-exp-loc">{w.location}</div>
                <p className="dv-exp-desc">{w.description}</p>
              </div>
              <div className="dv-exp-icon">{w.icon}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" data-section="education" className="dv-section">
        <div data-rv="" className="dv-eyebrow">[04] EDUCATION</div>
        <h2 data-rv="" className="dv-h2 dv-h2-spaced">Always <span className="accent">learning</span>.</h2>
        <div className="dv-timeline">
          <div className="dv-timeline-rail" />
          <div ref={eduLineRef} className="dv-timeline-rail-fill" />
          <div className="dv-timeline-items">
            {content.education.map((e) => (
              <div key={e.degree} data-rv="" className="dv-timeline-item">
                <span className="dv-timeline-dot" />
                <div className="dv-timeline-meta">
                  <span>{e.dates}</span>
                  <span className="accent">{e.status}</span>
                </div>
                <h3>{e.degree}</h3>
                <div className="dv-timeline-school">{e.school}</div>
                <div className="dv-timeline-detail">{e.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" data-section="education" className="dv-section">
        <div data-rv="" className="dv-eyebrow">[05] CERTIFICATIONS</div>
        <h2 data-rv="" className="dv-h2 dv-h2-spaced">Verified <span className="accent">credentials</span>.</h2>
        <div className="dv-cert-grid">
          {content.certifications.map((c) => (
            <div key={c.title} data-rv="" className="dv-cert-card">
              <div className="dv-cert-top">
                <div className="dv-cert-org">{c.org}</div>
                <span className="dv-cert-date">{c.date}</span>
              </div>
              <div className="dv-cert-title">{c.title}</div>
              <div className="dv-cert-bottom">
                <span>{c.issuer}</span>
                <span className="accent">✓</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" data-section="skills" className="dv-section">
        <div data-rv="" className="dv-eyebrow">[06] SKILLS</div>
        <h2 data-rv="" className="dv-h2 dv-h2-spaced">The <span className="accent">toolkit</span>.</h2>
        <div className="dv-skills-grid">
          {content.skillGroups.map((g, i) => (
            <div key={g.title} data-rv="" className="dv-skill-group">
              <div className="dv-skill-group-head">
                <span className="accent">{g.title}</span>
                <span className="faintest">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="dv-skill-chips">
                {g.items.map((name) => {
                  const icon = skillIcon(name);
                  return (
                    <span key={name} className="dv-skill-chip">
                      {icon && <img src={icon.src} alt="" className={`dv-chip-icon sm${icon.invert ? " invert" : ""}`} />}
                      {name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MUSIC */}
      <section id="music" data-section="music" className="dv-section">
        <div className="dv-eyebrow">[07] MUSIC</div>
        <div className="dv-music-head">
          <h2 data-rv="" className="dv-h2">Off the <span className="accent">keyboard</span>.</h2>
          <p data-rv="" className="dv-music-lead">{content.music.lead}</p>
        </div>
        <div className={`dv-music-grid${narrow ? " narrow" : ""}`}>
          {content.music.photos.map((m, i) => (
            <div key={i} data-rv="" className="dv-music-tile">
              <img src={m.image} alt={m.caption} className="dv-music-image" loading="lazy" />
              <div className="dv-music-caption">{m.caption}</div>
            </div>
          ))}
        </div>
        <div className="dv-music-highlights">
          {content.music.highlights.map((x) => (
            <div key={x.title} data-rv="" className="dv-highlight-card">
              <div className="dv-highlight-icon">{x.icon}</div>
              <div className="dv-highlight-title">{x.title}</div>
              <p className="dv-highlight-text">{x.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" data-section="contact" className="dv-section dv-section-contact">
        <div className="dv-eyebrow">[08] CONTACT</div>
        <h2 data-big="" className="dv-h2-big">Let's <span className="accent">talk</span>.</h2>
        <div className="dv-contact-grid">
          <form data-rv="" onSubmit={handleSubmit} className="dv-form">
            <div className="dv-form-row">
              <input name="name" required placeholder="Your name" />
              <input name="email" type="email" required placeholder="Your email" />
            </div>
            <textarea name="message" required rows={5} placeholder="Tell me about the role or project" />
            <button type="submit" className="dv-btn-solid">{sent ? "Opening mail ✓" : "Send message →"}</button>
            <div className="dv-form-hint">Opens your email app with the message ready to send.</div>
          </form>
          <div data-rv="" className="dv-contact-links">
            {content.contactLinks.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="dv-contact-link">
                <span className="dv-contact-label">{l.label}</span>
                <span className="dv-contact-value">{l.value}</span>
                <span>↗</span>
              </a>
            ))}
          </div>
        </div>
        <footer className="dv-footer">
          <span>Built by <span className="accent">Lapalu Liyanage</span></span>
          <span>Kuliyapitiya, Sri Lanka · © 2026</span>
        </footer>
        <div className="dv-giant-name" aria-hidden="true">LAPALU</div>
      </section>
    </div>
  );
}
