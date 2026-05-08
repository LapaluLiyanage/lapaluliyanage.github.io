import { useState, useEffect, useRef } from "react";

// ─── CSS injected globally ───────────────────────────────────────────────────
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@300;400;600&family=Rajdhani:wght@300;400;600;700&display=swap');

:root {
  --bg: #050507;
  --bg2: #0a0a0f;
  --bg3: #0f0f18;
  --crimson: #c0392b;
  --flame: #e74c3c;
  --ember: #ff6b35;
  --gold: #f39c12;
  --white: #f0e6e6;
  --muted: #7a6a6a;
  --border: rgba(192,57,43,0.25);
  --glow: 0 0 20px rgba(231,76,60,0.4);
  --glow2: 0 0 40px rgba(231,76,60,0.2);
}

* { margin:0; padding:0; box-sizing:border-box; }

body {
  background: var(--bg);
  color: var(--white);
  font-family: 'Rajdhani', sans-serif;
  overflow-x: hidden;
  cursor: none;
}

/* Custom cursor */
.cursor {
  position: fixed;
  width: 12px; height: 12px;
  background: var(--flame);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%,-50%);
  transition: transform 0.1s, width 0.2s, height 0.2s;
  mix-blend-mode: difference;
}
.cursor-ring {
  position: fixed;
  width: 36px; height: 36px;
  border: 1.5px solid var(--ember);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%,-50%);
  transition: transform 0.15s ease, opacity 0.3s;
  opacity: 0.6;
}

/* Scrollbar */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--crimson); border-radius: 2px; }

/* Keyframes */
@keyframes flicker {
  0%,100% { opacity:1; }
  92% { opacity:1; }
  93% { opacity:0.4; }
  94% { opacity:1; }
  96% { opacity:0.6; }
  97% { opacity:1; }
}
@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}
@keyframes float {
  0%,100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}
@keyframes pulse-glow {
  0%,100% { box-shadow: 0 0 10px rgba(231,76,60,0.3); }
  50% { box-shadow: 0 0 30px rgba(231,76,60,0.7), 0 0 60px rgba(231,76,60,0.3); }
}
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes data-flow {
  0% { transform: translateY(0); opacity:0; }
  10% { opacity:1; }
  90% { opacity:1; }
  100% { transform: translateY(-600px); opacity:0; }
}
@keyframes type-cursor {
  0%,100% { opacity:1; }
  50% { opacity:0; }
}
@keyframes flame-rise {
  0% { transform: scaleY(1) translateY(0); opacity:0.8; }
  50% { transform: scaleY(1.2) translateY(-8px); opacity:1; }
  100% { transform: scaleY(1) translateY(0); opacity:0.8; }
}
@keyframes slide-in-left {
  from { transform: translateX(-60px); opacity:0; }
  to { transform: translateX(0); opacity:1; }
}
@keyframes slide-in-right {
  from { transform: translateX(60px); opacity:0; }
  to { transform: translateX(0); opacity:1; }
}
@keyframes fade-up {
  from { transform: translateY(40px); opacity:0; }
  to { transform: translateY(0); opacity:1; }
}
@keyframes matrix-rain {
  0% { transform: translateY(-20px); opacity:0; }
  10% { opacity:1; }
  90% { opacity:0.6; }
  100% { transform: translateY(100vh); opacity:0; }
}
@keyframes border-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Noise overlay */
.noise::before {
  content:'';
  position:fixed; inset:0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events:none; z-index:1000; opacity:0.4;
}

/* Nav */
.nav {
  position: fixed; top:0; left:0; right:0; z-index:900;
  display:flex; justify-content:space-between; align-items:center;
  padding: 16px 48px;
  background: linear-gradient(180deg, rgba(5,5,7,0.95) 0%, transparent 100%);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}
.nav-logo {
  font-family: 'Orbitron', monospace;
  font-size: 1.2rem;
  font-weight: 900;
  color: var(--flame);
  letter-spacing: 4px;
  text-shadow: var(--glow);
  animation: flicker 8s infinite;
}
.nav-links { display:flex; gap:32px; }
.nav-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: var(--muted);
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s, text-shadow 0.3s;
  cursor: none;
}
.nav-link:hover { color: var(--flame); text-shadow: var(--glow); }

/* Hero */
.hero {
  min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
  padding: 80px 48px 40px;
}
.hero-bg {
  position:absolute; inset:0;
  background: 
    radial-gradient(ellipse 60% 50% at 20% 50%, rgba(192,57,43,0.12) 0%, transparent 70%),
    radial-gradient(ellipse 40% 60% at 80% 30%, rgba(243,156,18,0.06) 0%, transparent 60%),
    linear-gradient(180deg, #050507 0%, #080810 100%);
}
.hero-grid {
  position:absolute; inset:0;
  background-image: 
    linear-gradient(rgba(192,57,43,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(192,57,43,0.06) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%);
}
.hero-content { position:relative; z-index:2; max-width:900px; }
.hero-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 6px;
  color: var(--ember);
  text-transform: uppercase;
  margin-bottom: 16px;
  animation: fade-up 0.8s ease both;
}
.hero-name {
  font-family: 'Orbitron', monospace;
  font-size: clamp(2.8rem, 7vw, 6rem);
  font-weight: 900;
  line-height: 0.95;
  color: var(--white);
  letter-spacing: -2px;
  animation: fade-up 0.8s 0.15s ease both;
}
.hero-name span {
  color: transparent;
  -webkit-text-stroke: 1.5px var(--flame);
  display: block;
  text-shadow: none;
}
.hero-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(0.85rem, 2vw, 1.1rem);
  color: var(--flame);
  margin-top: 20px;
  letter-spacing: 2px;
  animation: fade-up 0.8s 0.3s ease both;
}
.hero-title::after {
  content: '|';
  animation: type-cursor 1s infinite;
  margin-left: 4px;
}
.hero-desc {
  margin-top: 24px;
  font-size: 1.1rem;
  color: var(--muted);
  line-height: 1.7;
  max-width: 560px;
  font-weight: 300;
  animation: fade-up 0.8s 0.45s ease both;
}
.hero-ctas {
  margin-top: 40px;
  display: flex; gap:16px; flex-wrap:wrap;
  animation: fade-up 0.8s 0.6s ease both;
}
.btn-primary {
  font-family: 'Orbitron', monospace;
  font-size: 0.7rem;
  letter-spacing: 3px;
  padding: 14px 32px;
  background: var(--crimson);
  color: var(--white);
  border: none;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
  cursor: none;
  text-transform: uppercase;
  transition: background 0.3s, box-shadow 0.3s;
  animation: pulse-glow 3s infinite;
}
.btn-primary:hover { background: var(--flame); box-shadow: var(--glow); }
.btn-ghost {
  font-family: 'Orbitron', monospace;
  font-size: 0.7rem;
  letter-spacing: 3px;
  padding: 13px 32px;
  background: transparent;
  color: var(--flame);
  border: 1px solid var(--crimson);
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
  cursor: none;
  text-transform: uppercase;
  transition: background 0.3s, color 0.3s;
}
.btn-ghost:hover { background: rgba(192,57,43,0.15); }

/* Floating particles */
.particles { position:absolute; inset:0; pointer-events:none; overflow:hidden; }
.particle {
  position:absolute;
  width: 2px; height: 2px;
  background: var(--ember);
  border-radius:50%;
  animation: float linear infinite;
}

/* Sections */
.section {
  padding: 100px 48px;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
.section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 6px;
  color: var(--crimson);
  text-transform: uppercase;
  margin-bottom: 8px;
}
.section-title {
  font-family: 'Orbitron', monospace;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: var(--white);
  margin-bottom: 48px;
  position: relative;
}
.section-title::after {
  content:'';
  position:absolute;
  bottom:-12px; left:0;
  width:60px; height:2px;
  background: linear-gradient(90deg, var(--crimson), var(--ember));
}

/* About */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}
.about-text { font-size: 1.05rem; line-height: 1.8; color: #b0a0a0; font-weight: 300; }
.about-text p { margin-bottom: 16px; }
.highlight { color: var(--flame); font-weight: 600; }
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.stat-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  padding: 20px;
  clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
  text-align: center;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.stat-card:hover { border-color: var(--flame); box-shadow: var(--glow2); }
.stat-num {
  font-family: 'Orbitron', monospace;
  font-size: 2rem;
  font-weight: 900;
  color: var(--flame);
}
.stat-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 2px;
  color: var(--muted);
  margin-top: 4px;
  text-transform: uppercase;
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.skill-category {
  background: var(--bg2);
  border: 1px solid var(--border);
  padding: 28px;
  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px));
  transition: border-color 0.3s, transform 0.3s;
}
.skill-category:hover { border-color: var(--flame); transform: translateY(-4px); }
.skill-cat-title {
  font-family: 'Orbitron', monospace;
  font-size: 0.75rem;
  letter-spacing: 3px;
  color: var(--ember);
  margin-bottom: 20px;
  text-transform: uppercase;
}
.skill-item {
  margin-bottom: 14px;
}
.skill-name {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: var(--white);
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}
.skill-bar {
  height: 3px;
  background: rgba(192,57,43,0.2);
  border-radius: 2px;
  overflow: hidden;
}
.skill-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--crimson), var(--ember));
  border-radius: 2px;
  transition: width 1.5s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 0 8px rgba(231,76,60,0.5);
}

/* Projects */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 24px;
}
.project-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
  clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
}
.project-card:hover {
  border-color: var(--flame);
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(192,57,43,0.2);
}
.project-header {
  padding: 24px 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.project-icon {
  font-size: 1.8rem;
  filter: drop-shadow(0 0 8px rgba(231,76,60,0.6));
}
.project-links { display:flex; gap:8px; }
.project-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 1px;
  padding: 5px 12px;
  border: 1px solid var(--border);
  color: var(--muted);
  text-decoration: none;
  transition: color 0.3s, border-color 0.3s;
  cursor: none;
}
.project-link:hover { color: var(--flame); border-color: var(--flame); }
.project-body { padding: 16px 24px 24px; }
.project-title {
  font-family: 'Orbitron', monospace;
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 10px;
  letter-spacing: 1px;
}
.project-desc {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 16px;
}
.project-tags { display:flex; flex-wrap:wrap; gap:8px; }
.tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 1px;
  padding: 3px 10px;
  background: rgba(192,57,43,0.1);
  border: 1px solid rgba(192,57,43,0.3);
  color: var(--ember);
  text-transform: uppercase;
}

/* GitHub */
.github-section {
  background: var(--bg2);
  border: 1px solid var(--border);
  padding: 40px;
  clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px));
}
.github-header { display:flex; align-items:center; gap:16px; margin-bottom:32px; }
.github-avatar {
  width: 64px; height: 64px;
  border-radius: 50%;
  border: 2px solid var(--flame);
  box-shadow: var(--glow);
  object-fit: cover;
}
.github-name {
  font-family: 'Orbitron', monospace;
  font-size: 1.1rem;
  color: var(--white);
}
.github-bio { font-size: 0.85rem; color: var(--muted); margin-top: 4px; }
.repos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
.repo-card {
  background: var(--bg3);
  border: 1px solid var(--border);
  padding: 20px;
  transition: border-color 0.3s;
}
.repo-card:hover { border-color: var(--crimson); }
.repo-name {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  color: var(--flame);
  margin-bottom: 8px;
}
.repo-desc { font-size: 0.8rem; color: var(--muted); margin-bottom: 12px; }
.repo-meta { display:flex; gap:16px; }
.repo-meta span {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  color: var(--muted);
  letter-spacing: 1px;
}
.loading-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: var(--muted);
  letter-spacing: 2px;
}
.error-text { color: var(--crimson); font-family: 'JetBrains Mono', monospace; font-size:0.8rem; }

/* Music section */
.music-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.music-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  padding: 24px;
  display: flex;
  gap: 20px;
  align-items: center;
  transition: border-color 0.3s, transform 0.3s;
  clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
}
.music-card:hover { border-color: var(--flame); transform: translateX(6px); }
.music-icon { font-size: 2rem; flex-shrink: 0; filter: drop-shadow(0 0 10px rgba(231,76,60,0.6)); }
.music-title {
  font-family: 'Orbitron', monospace;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 6px;
}
.music-sub { font-size: 0.8rem; color: var(--muted); }

/* Contact */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}
.contact-info { }
.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  padding: 16px;
  border: 1px solid var(--border);
  background: var(--bg2);
  transition: border-color 0.3s;
}
.contact-item:hover { border-color: var(--flame); }
.contact-icon { font-size: 1.2rem; }
.contact-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 2px;
  color: var(--muted);
  text-transform: uppercase;
}
.contact-value { font-size: 0.95rem; color: var(--white); margin-top: 2px; }
.contact-form { display:flex; flex-direction:column; gap:16px; }
.form-input {
  background: var(--bg2);
  border: 1px solid var(--border);
  color: var(--white);
  padding: 14px 20px;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
}
.form-input:focus { border-color: var(--flame); box-shadow: var(--glow2); }
.form-input::placeholder { color: var(--muted); }
textarea.form-input { min-height: 120px; resize: vertical; clip-path: none; }

/* Footer */
.footer {
  border-top: 1px solid var(--border);
  padding: 32px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-logo {
  font-family: 'Orbitron', monospace;
  font-size: 0.9rem;
  font-weight: 900;
  color: var(--crimson);
  letter-spacing: 4px;
}
.footer-copy {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  color: var(--muted);
  letter-spacing: 2px;
}

/* Divider */
.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--crimson), transparent);
  margin: 0 48px;
  opacity: 0.4;
}

/* Scroll reveal */
.reveal { opacity:0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity:1; transform: translateY(0); }

/* Social bar */
.social-bar {
  position: fixed;
  left: 24px;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 800;
}
.social-link {
  width: 36px; height: 36px;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.3s, border-color 0.3s, box-shadow 0.3s;
  cursor: none;
  background: var(--bg2);
}
.social-link:hover { color: var(--flame); border-color: var(--flame); box-shadow: var(--glow2); }
.social-line {
  width: 1px; height: 60px;
  background: linear-gradient(180deg, var(--crimson), transparent);
}

/* Flame decoration */
.flame-deco {
  position: absolute;
  right: 80px;
  top: 50%;
  transform: translateY(-50%);
  width: 220px; height: 280px;
  animation: fade-up 1s 0.8s both;
}

/* Terminal block */
.terminal {
  background: #080808;
  border: 1px solid var(--border);
  padding: 20px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  line-height: 1.8;
  margin-top: 24px;
}
.terminal-header {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.dot { width:10px; height:10px; border-radius:50%; }
.dot-r { background: #ff5f57; }
.dot-y { background: #febc2e; }
.dot-g { background: #28c840; }
.t-prompt { color: var(--crimson); }
.t-cmd { color: var(--white); }
.t-out { color: var(--muted); }
.t-val { color: var(--ember); }
`;

// ─── Data ────────────────────────────────────────────────────────────────────
const SKILLS = [
  {
    cat: "Frontend", items: [
      { name: "React.js", level: 85 }, { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 80 }, { name: "Tailwind CSS", level: 78 },
    ]
  },
  {
    cat: "Backend", items: [
      { name: "Node.js", level: 75 }, { name: "Python", level: 82 },
      { name: "Java", level: 70 }, { name: "Express.js", level: 72 },
    ]
  },
  {
    cat: "AI / Data", items: [
      { name: "Machine Learning", level: 68 }, { name: "AI Agents / PEAS", level: 75 },
      { name: "SQL / Databases", level: 73 }, { name: "Data Structures", level: 80 },
    ]
  },
  {
    cat: "Tools & DevOps", items: [
      { name: "Git / GitHub", level: 85 }, { name: "VS Code", level: 90 },
      { name: "Linux / CLI", level: 70 }, { name: "Figma", level: 65 },
    ]
  },
];

const PROJECTS = [
  {
    icon: "🔥", title: "AI Study Assistant",
    desc: "Intelligent study companion with PEAS-based agent architecture, exam-mode, and spaced repetition for university students.",
    tags: ["React", "Python", "AI", "PEAS"], gh: "#", live: "#"
  },
  {
    icon: "🎸", title: "Fastunes Band Platform",
    desc: "Full-stack web platform for Fastunes in Rusl band — event scheduling, open mic registration, performance archive.",
    tags: ["React", "Node.js", "MongoDB"], gh: "#", live: "#"
  },
  {
    icon: "🎯", title: "Campus Event Portal",
    desc: "Event management system for Rajarata University with real-time RSVP, notification engine, and admin dashboard.",
    tags: ["JavaScript", "Express", "MySQL"], gh: "#", live: "#"
  },
  {
    icon: "🤖", title: "Search Agent Simulator",
    desc: "Visual simulator for AI search algorithms (BFS, DFS, A*) built as interactive learning tool for AI coursework.",
    tags: ["Python", "React", "Algorithms"], gh: "#", live: "#"
  },
];

const MUSIC_EVENTS = [
  { icon: "🎤", title: "Open Mic Vol 1.0", sub: "Fastunes in Rusl · Rajarata University" },
  { icon: "🎵", title: "Open Mic Vol 2.0", sub: "Fastunes in Rusl · Pioneered the concept on campus" },
  { icon: "🎶", title: "Open Mic Vol 3.0", sub: "Fastunes in Rusl · Series headliner" },
  { icon: "🌟", title: "FASEXPLORE Exhibition", sub: "Closing Ceremony Performance" },
];

// ─── Animated flame SVG ───────────────────────────────────────────────────────
function FlameSVG() {
  return (
    <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <defs>
        <radialGradient id="fg1" cx="50%" cy="80%" r="50%">
          <stop offset="0%" stopColor="#f39c12" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#c0392b" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="fg2" cx="50%" cy="70%" r="50%">
          <stop offset="0%" stopColor="#e74c3c" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#c0392b" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <g style={{animation:'flame-rise 2s ease-in-out infinite'}}>
        <path d="M100 260 C60 240 30 200 40 150 C50 100 70 80 80 40 C85 20 90 5 100 0 C110 5 115 20 120 40 C130 80 150 100 160 150 C170 200 140 240 100 260Z" fill="url(#fg1)" opacity="0.85"/>
      </g>
      <g style={{animation:'flame-rise 2.3s 0.3s ease-in-out infinite'}}>
        <path d="M100 240 C70 220 50 185 58 145 C66 110 80 95 88 65 C92 48 96 30 100 20 C104 30 108 48 112 65 C120 95 134 110 142 145 C150 185 130 220 100 240Z" fill="url(#fg2)" opacity="0.7"/>
      </g>
      <g style={{animation:'flame-rise 1.8s 0.6s ease-in-out infinite'}}>
        <path d="M100 210 C80 195 68 168 74 135 C80 108 92 98 98 78 C99 72 100 60 100 50 C100 60 101 72 102 78 C108 98 120 108 126 135 C132 168 120 195 100 210Z" fill="#febc2e" opacity="0.6"/>
      </g>
      {[...Array(8)].map((_,i) => (
        <circle
          key={i}
          cx={80 + Math.sin(i * 0.8) * 30}
          cy={260 - i * 15}
          r={1.5 + Math.random()}
          fill="#f39c12"
          opacity="0.6"
          style={{animation:`float ${1.5 + i*0.2}s ${i*0.1}s ease-in-out infinite`}}
        />
      ))}
    </svg>
  );
}

// ─── Contact form ────────────────────────────────────────────────────────────
function ContactForm() {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({name:'', email:'', subject:'', message:''});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xpqbydny', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({name:'', email:'', subject:'', message:''});
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input className="form-input" placeholder="Your name" value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})} required/>
      <input className="form-input" placeholder="Your email" type="email" value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})} required/>
      <input className="form-input" placeholder="Subject" value={formData.subject} onChange={(e)=>setFormData({...formData, subject:e.target.value})} required/>
      <textarea className="form-input" placeholder="Your message..." value={formData.message} onChange={(e)=>setFormData({...formData, message:e.target.value})} required/>
      <button className="btn-primary" style={{alignSelf:'flex-start'}} disabled={status==='sending'}>
        {status==='sending'?'SENDING...':status==='success'?'SENT ✓':'SEND MESSAGE'}
      </button>
      {status==='error' && <p style={{color:'var(--crimson)', fontSize:'0.8rem', marginTop:8}}>Error sending message. Try again.</p>}
    </form>
  );
}

// ─── GitHub section ───────────────────────────────────────────────────────────
function GitHubSection() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetch_() {
      try {
        const [pRes, rRes] = await Promise.all([
          fetch('https://api.github.com/users/LapaluLiyanage'),
          fetch('https://api.github.com/users/LapaluLiyanage/repos?sort=updated&per_page=6')
        ]);
        if (!pRes.ok) throw new Error(`GitHub API: ${pRes.status}`);
        const p = await pRes.json();
        const r = await rRes.json();
        setProfile(p);
        setRepos(Array.isArray(r) ? r : []);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetch_();
  }, []);

  return (
    <div className="github-section">
      {loading && <p className="loading-text">[ FETCHING GITHUB DATA... ]</p>}
      {error && (
        <div>
          <p className="error-text">// GitHub profile not yet public or API limit reached</p>
          <p className="error-text" style={{marginTop:8, color:'var(--muted)'}}>// Connect: github.com/LapaluLiyanage</p>
        </div>
      )}
      {profile && (
        <>
          <div className="github-header">
            {profile.avatar_url && <img src={profile.avatar_url} alt="avatar" className="github-avatar"/>}
            <div>
              <div className="github-name">{profile.name || profile.login}</div>
              <div className="github-bio">{profile.bio || 'Software Engineering Student @ Rajarata University'}</div>
              <div style={{display:'flex',gap:24,marginTop:8}}>
                <span style={{fontFamily:"'JetBrains Mono'",fontSize:'0.7rem',color:'var(--ember)'}}>⭐ {profile.public_repos} repos</span>
                <span style={{fontFamily:"'JetBrains Mono'",fontSize:'0.7rem',color:'var(--muted)'}}>👥 {profile.followers} followers</span>
              </div>
            </div>
          </div>
          <div className="repos-grid">
            {repos.map(r => (
              <div key={r.id} className="repo-card">
                <div className="repo-name">📁 {r.name}</div>
                <div className="repo-desc">{r.description || 'No description'}</div>
                <div className="repo-meta">
                  {r.language && <span>◆ {r.language}</span>}
                  <span>⭐ {r.stargazers_count}</span>
                  <span>🍴 {r.forks_count}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Scroll reveal hook ───────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ─── Skill bars ───────────────────────────────────────────────────────────────
function SkillBar({ name, level }) {
  const [w, setW] = useState(0);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setW(level); obs.disconnect(); }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level]);
  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-name"><span>{name}</span><span style={{color:'var(--ember)'}}>{level}%</span></div>
      <div className="skill-bar"><div className="skill-fill" style={{width:`${w}%`}}/></div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const cursorRef = useRef();
  const ringRef = useRef();
  const [activeSection, setActiveSection] = useState('home');

  useReveal();

  useEffect(() => {
    const move = e => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
      setTimeout(() => {
        if (ringRef.current) {
          ringRef.current.style.left = e.clientX + 'px';
          ringRef.current.style.top = e.clientY + 'px';
        }
      }, 80);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // inject CSS
  useEffect(() => {
    const s = document.createElement('style');
    s.textContent = GLOBAL_CSS;
    document.head.appendChild(s);
    return () => s.remove();
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const particles = [...Array(20)].map((_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${3 + Math.random() * 5}s`,
    animationDelay: `${Math.random() * 5}s`,
    opacity: 0.3 + Math.random() * 0.5,
  }));

  return (
    <div className="noise" style={{minHeight:'100vh', background:'var(--bg)'}}>
      {/* Cursor */}
      <div ref={cursorRef} className="cursor"/>
      <div ref={ringRef} className="cursor-ring"/>

      {/* Nav */}
      <nav className="nav">
        <div className="nav-logo">L.L</div>
        <div className="nav-links">
          {['home','about','skills','projects','github','music','contact'].map(s => (
            <a key={s} className="nav-link" onClick={()=>scrollTo(s)}
              style={activeSection===s?{color:'var(--flame)',textShadow:'var(--glow)'}:{}}
            >{s}</a>
          ))}
        </div>
      </nav>

      {/* Social bar */}
      <div className="social-bar">
        <a className="social-link" href="https://github.com/LapaluLiyanage" target="_blank">GH</a>
        <a className="social-link" href="#" title="Instagram">IG</a>
        <a className="social-link" href="#" title="TikTok">TK</a>
        <div className="social-line"/>
      </div>

      {/* ── HERO ── */}
      <section id="home" className="hero">
        <div className="hero-bg"/>
        <div className="hero-grid"/>
        <div className="particles">
          {particles.map((p,i) => (
            <div key={i} className="particle" style={{
              left:p.left, top:p.top,
              animationDuration:p.animationDuration,
              animationDelay:p.animationDelay,
              opacity:p.opacity
            }}/>
          ))}
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow">// software engineer &amp; musician</div>
          <h1 className="hero-name">
            LAPALU<span>LIYANAGE</span>
          </h1>
          <div className="hero-title">
            3rd Year · Rajarata University · Software Engineering
          </div>
          <p className="hero-desc">
            Building intelligent systems by day, performing on stage by night.
            Crafting code that solves real problems — and music that moves people.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={()=>scrollTo('projects')}>VIEW PROJECTS</button>
            <button className="btn-ghost" onClick={()=>scrollTo('contact')}>CONTACT ME</button>
          </div>
          <div className="terminal">
            <div className="terminal-header">
              <div className="dot dot-r"/><div className="dot dot-y"/><div className="dot dot-g"/>
            </div>
            <div><span className="t-prompt">$ </span><span className="t-cmd">whoami</span></div>
            <div><span className="t-out">→ </span><span className="t-val">Lapalu Liyanage</span></div>
            <div><span className="t-prompt">$ </span><span className="t-cmd">cat identity.json</span></div>
            <div><span className="t-out">  role: </span><span className="t-val">"Software Engineer + Musician"</span></div>
            <div><span className="t-out">  uni: </span><span className="t-val">"Rajarata University of Sri Lanka"</span></div>
            <div><span className="t-out">  band: </span><span className="t-val">"Fastunes in Rusl 🎸"</span></div>
            <div><span className="t-out">  status: </span><span className="t-val">"Building · Performing · Growing"</span></div>
          </div>
        </div>
        <div className="flame-deco"><FlameSVG/></div>
      </section>

      <div className="divider"/>

      {/* ── ABOUT ── */}
      <section id="about" style={{padding:'100px 48px', maxWidth:1200, margin:'0 auto'}}>
        <div className="reveal">
          <div className="section-label">// 01. about me</div>
          <h2 className="section-title">WHO AM I</h2>
        </div>
        <div className="about-grid reveal">
          <div className="about-text">
            <p>
              I'm <span className="highlight">Lapalu Liyanage</span>, a 3rd year Software Engineering student at
              <span className="highlight"> Rajarata University of Sri Lanka</span> — passionate about building
              technology that matters and music that resonates.
            </p>
            <p>
              As a core member and performer of <span className="highlight">Fastunes in Rusl</span>, I helped pioneer
              the open mic concept on campus, creating a cultural movement through music across multiple sold-out events.
            </p>
            <p>
              My academic focus spans <span className="highlight">Artificial Intelligence</span>, full-stack development,
              and software architecture. I love bridging the gap between complex technical systems and human experiences.
            </p>
            <p>
              When I'm not coding or studying AI agent models, you'll find me on stage performing or creating content
              for <span className="highlight">Instagram and TikTok</span> — always at the intersection of tech and art.
            </p>
          </div>
          <div>
            <div className="stats-grid">
              {[
                {num:'3rd', label:'Year of Study'},
                {num:'4+', label:'Live Performances'},
                {num:'SE', label:'Major Field'},
                {num:'🔥', label:'Fastunes in Rusl'},
              ].map(s => (
                <div key={s.label} className="stat-card">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider"/>

      {/* ── SKILLS ── */}
      <section id="skills" style={{padding:'100px 48px', maxWidth:1200, margin:'0 auto'}}>
        <div className="reveal">
          <div className="section-label">// 02. skills</div>
          <h2 className="section-title">TECH STACK</h2>
        </div>
        <div className="skills-grid">
          {SKILLS.map(cat => (
            <div key={cat.cat} className="skill-category reveal">
              <div className="skill-cat-title">[ {cat.cat} ]</div>
              {cat.items.map(s => <SkillBar key={s.name} name={s.name} level={s.level}/>)}
            </div>
          ))}
        </div>
      </section>

      <div className="divider"/>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{padding:'100px 48px', maxWidth:1200, margin:'0 auto'}}>
        <div className="reveal">
          <div className="section-label">// 03. projects</div>
          <h2 className="section-title">WHAT I'VE BUILT</h2>
        </div>
        <div className="projects-grid">
          {PROJECTS.map(p => (
            <div key={p.title} className="project-card reveal">
              <div className="project-header">
                <div className="project-icon">{p.icon}</div>
                <div className="project-links">
                  <a className="project-link" href={p.gh}>GH</a>
                  <a className="project-link" href={p.live}>LIVE</a>
                </div>
              </div>
              <div className="project-body">
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"/>

      {/* ── GITHUB ── */}
      <section id="github" style={{padding:'100px 48px', maxWidth:1200, margin:'0 auto'}}>
        <div className="reveal">
          <div className="section-label">// 04. github</div>
          <h2 className="section-title">OPEN SOURCE</h2>
        </div>
        <div className="reveal"><GitHubSection/></div>
      </section>

      <div className="divider"/>

      {/* ── MUSIC ── */}
      <section id="music" style={{padding:'100px 48px', maxWidth:1200, margin:'0 auto'}}>
        <div className="reveal">
          <div className="section-label">// 05. music</div>
          <h2 className="section-title">ON STAGE</h2>
        </div>
        <p className="reveal" style={{color:'var(--muted)', marginBottom:32, maxWidth:560, lineHeight:1.7}}>
          As a founding performer of <span className="highlight">Fastunes in Rusl</span>, I helped create
          a music culture movement at Rajarata University — from the very first open mic to packed-house closing ceremonies.
        </p>
        <div className="music-grid reveal">
          {MUSIC_EVENTS.map(e => (
            <div key={e.title} className="music-card">
              <div className="music-icon">{e.icon}</div>
              <div>
                <div className="music-title">{e.title}</div>
                <div className="music-sub">{e.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"/>

      {/* ── CONTACT ── */}
      <section id="contact" style={{padding:'100px 48px', maxWidth:1200, margin:'0 auto'}}>
        <div className="reveal">
          <div className="section-label">// 06. contact</div>
          <h2 className="section-title">LET'S CONNECT</h2>
        </div>
        <div className="contact-grid reveal">
          <div className="contact-info">
            <p style={{color:'var(--muted)', marginBottom:32, lineHeight:1.7}}>
              Open to collaborations, internship opportunities, or just a good tech/music conversation.
            </p>
            {[
              {icon:'🎓', label:'University', val:'Rajarata University of Sri Lanka'},
              {icon:'💻', label:'GitHub', val:'github.com/LapaluLiyanage'},
              {icon:'🎸', label:'Band', val:'Fastunes in Rusl'},
              {icon:'📍', label:'Location', val:'Sri Lanka'},
            ].map(c => (
              <div key={c.label} className="contact-item">
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <div className="contact-label">{c.label}</div>
                  <div className="contact-value">{c.val}</div>
                </div>
              </div>
            ))}
          </div>
          <ContactForm/>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-logo">LAPALU.DEV</div>
        <div className="footer-copy">© 2025 LAPALU LIYANAGE · BUILT WITH 🔥 + REACT</div>
      </footer>
    </div>
  );
}
