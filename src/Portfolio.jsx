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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 60px;
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
.about-right {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.about-image-wrapper {
  position: relative;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  aspect-ratio: 3/4;
  clip-path: polygon(24px 0%, 100% 0%, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0% 100%, 0% 24px);
  padding: 4px;
  background: linear-gradient(135deg, var(--crimson), var(--bg3), var(--ember));
  animation: float 6s ease-in-out infinite;
}
.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(22px 0%, 100% 0%, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0% 100%, 0% 22px);
  filter: contrast(1.1) saturate(1.1);
  background: var(--bg2);
}
.about-image-overlay {
  position: absolute;
  inset: 4px;
  background: linear-gradient(0deg, rgba(192,57,43,0.2) 0%, transparent 40%);
  pointer-events: none;
  clip-path: polygon(22px 0%, 100% 0%, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0% 100%, 0% 22px);
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

/* Scroll-to-top button */
.scroll-top {
  position: fixed;
  bottom: 40px;
  right: 32px;
  width: 44px;
  height: 44px;
  background: var(--crimson);
  border: 1px solid var(--flame);
  color: var(--white);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: none;
  z-index: 850;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
  opacity: 0;
  pointer-events: none;
  transform: translateY(16px);
  transition: opacity 0.35s ease, transform 0.35s ease, box-shadow 0.3s;
  animation: pulse-glow 3s infinite;
}
.scroll-top.visible {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0);
}
.scroll-top:hover {
  background: var(--flame);
  box-shadow: var(--glow);
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

/* Loader */
.loader-container {
  position: fixed; inset: 0;
  background: var(--bg);
  z-index: 9990;
  display: flex; align-items: center; justify-content: center;
  flex-direction: column;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}
.loader-container.hidden {
  opacity: 0;
  visibility: hidden;
}
.loader-terminal {
  width: 90%; max-width: 500px;
  background: #080808;
  border: 1px solid var(--border);
  padding: 24px;
  box-shadow: 0 0 40px rgba(231,76,60,0.1);
  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px));
}
.loader-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  color: var(--flame);
  white-space: pre-wrap;
  line-height: 1.8;
  min-height: 100px;
  margin-top: 16px;
}
.loader-cursor {
  animation: type-cursor 1s infinite;
}
.loader-progress {
  width: 100%; height: 3px;
  background: rgba(192,57,43,0.2);
  margin-top: 24px;
  overflow: hidden;
}
.loader-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--crimson), var(--ember));
  width: 0%;
  animation: load-bar 2.2s ease-out forwards;
  box-shadow: 0 0 10px rgba(231,76,60,0.5);
}
@keyframes load-bar {
  0% { width: 0%; }
  30% { width: 35%; }
  50% { width: 45%; }
  80% { width: 80%; }
  100% { width: 100%; }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-name { font-size: 5rem; }
  .flame-deco { right: 20px; opacity: 0.5; }
  .nav { padding: 16px 24px; }
  .social-bar { left: 12px; }
}

@media (max-width: 768px) {
  /* Hide custom cursor on mobile */
  .cursor, .cursor-ring { display: none !important; }
  body, * { cursor: auto !important; }
  
  /* Nav */
  .nav { padding: 12px 20px; flex-direction: column; gap: 12px; }
  .nav-links { gap: 12px; flex-wrap: wrap; justify-content: center; }
  .nav-link { font-size: 0.65rem; }

  /* Hero */
  .hero { padding: 140px 20px 40px; text-align: center; }
  .hero-name { font-size: 3rem; }
  .hero-desc { margin: 24px auto 0; font-size: 1rem; }
  .hero-ctas { justify-content: center; flex-direction: column; align-items: stretch; }
  .btn-primary, .btn-ghost { width: 100%; text-align: center; }
  .flame-deco { display: none; }
  
  /* Sections */
  .section { padding: 60px 20px; }
  
  /* Grids */
  .about-grid, .music-grid, .contact-grid { grid-template-columns: 1fr; gap: 40px; }
  
  /* About Specific */
  .about-right { order: -1; }
  
  /* Social Bar */
  .social-bar { 
    position: static; 
    flex-direction: row; 
    justify-content: center; 
    margin-top: 40px; 
    padding-bottom: 20px;
  }
  .social-line { display: none; }
  .social-link { width: 44px; height: 44px; font-size: 1rem; }
  
  /* Footer */
  .footer { padding: 24px 20px; flex-direction: column; gap: 16px; text-align: center; }
  
  /* GitHub Specific */
  .github-header { flex-direction: column; text-align: center; }
  .github-section { padding: 24px 16px; }
  .github-avatar { margin: 0 auto; }
  .github-header > div > div:last-child { justify-content: center; }
  
  /* Terminal */
  .terminal { text-align: left; font-size: 0.7rem; }
}

@media (max-width: 480px) {
  .hero-name { font-size: 2.5rem; }
  .section-title { font-size: 2rem; }
  .stat-card { padding: 16px; }
  .stat-num { font-size: 1.5rem; }
  .skill-category { padding: 20px; }
  .projects-grid { grid-template-columns: 1fr; }
  .repos-grid { grid-template-columns: 1fr; }
  .skills-grid { grid-template-columns: 1fr; }
  .about-image-wrapper { max-width: 260px; }
}
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

// ─── Animated Dev/Music SVG ───────────────────────────────────────────────────
function DevMusicSVG() {
  return (
    <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%', overflow:'visible'}}>
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e74c3c" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#c0392b" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f39c12" />
          <stop offset="100%" stopColor="#e74c3c" />
        </linearGradient>
        
        <style>
          {`
            @keyframes svg-float-up {
              0% { transform: translateY(0) scale(0.8); opacity: 0; }
              20% { opacity: 0.8; transform: translateY(-40px) scale(1); }
              80% { opacity: 0.8; transform: translateY(-160px) scale(1); }
              100% { transform: translateY(-200px) scale(0.8); opacity: 0; }
            }
            .svg-float { animation: svg-float-up 4s linear infinite; }
          `}
        </style>
      </defs>
      
      {/* Animated background glow */}
      <circle cx="100" cy="140" r="90" fill="url(#glow)" style={{animation: 'pulse-glow 4s infinite'}} />
      
      {/* Spinning vinyl/CD tracks */}
      <circle cx="100" cy="140" r="65" fill="none" stroke="#c0392b" strokeWidth="1" opacity="0.4" strokeDasharray="4 8" style={{animation: 'spin-slow 12s linear infinite'}} />
      <circle cx="100" cy="140" r="80" fill="none" stroke="#e74c3c" strokeWidth="1" opacity="0.3" strokeDasharray="12 12" style={{animation: 'spin-slow 18s linear infinite reverse'}} />
      
      {/* Central Code Brackets < > */}
      <g style={{animation: 'float 5s ease-in-out infinite'}}>
        <path d="M 50 100 L 15 140 L 50 180" fill="none" stroke="url(#grad1)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" filter="drop-shadow(0 0 8px rgba(243,156,18,0.4))" />
        <path d="M 150 100 L 185 140 L 150 180" fill="none" stroke="url(#grad1)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" filter="drop-shadow(0 0 8px rgba(243,156,18,0.4))" />
        
        {/* The Slash / disguised as a Guitar Neck */}
        <g transform="rotate(20, 100, 140)">
          {/* Guitar Neck Base */}
          <rect x="94" y="60" width="12" height="160" fill="#e74c3c" rx="4" filter="drop-shadow(0 0 10px rgba(231,76,60,0.5))" />
          {/* Frets */}
          {[...Array(7)].map((_, i) => (
            <line key={`fret-${i}`} x1="92" y1={85 + i*22} x2="108" y2={85 + i*22} stroke="#f39c12" strokeWidth="2" />
          ))}
          {/* Strings */}
          <line x1="97" y1="60" x2="97" y2="220" stroke="#f0e6e6" strokeWidth="1" opacity="0.6" />
          <line x1="100" y1="60" x2="100" y2="220" stroke="#f0e6e6" strokeWidth="1" opacity="0.6" />
          <line x1="103" y1="60" x2="103" y2="220" stroke="#f0e6e6" strokeWidth="1" opacity="0.6" />
          {/* Headstock */}
          <path d="M 92 60 L 108 60 L 112 35 L 88 35 Z" fill="#f39c12" />
          {/* Tuning Pegs */}
          <circle cx="86" cy="42" r="3" fill="#e74c3c" />
          <circle cx="86" cy="52" r="3" fill="#e74c3c" />
          <circle cx="114" cy="42" r="3" fill="#e74c3c" />
          <circle cx="114" cy="52" r="3" fill="#e74c3c" />
        </g>
      </g>

      {/* Floating Music Notes & Tech Symbols */}
      {[...Array(15)].map((_,i) => {
        const isNote = i % 3 === 0;
        const symbols = ['{', '}', '</>', '01', '10', '★'];
        const text = isNote ? '♪' : symbols[i % symbols.length];
        const delay = Math.random() * 4;
        const duration = 3 + Math.random() * 3;
        
        return (
          <text
            key={`float-${i}`}
            x={30 + Math.random() * 140}
            y={260}
            fill={isNote ? "#f39c12" : "#e74c3c"}
            fontSize={isNote ? (16 + Math.random()*12) : (10 + Math.random()*6)}
            fontFamily={isNote ? "sans-serif" : "'JetBrains Mono', monospace"}
            fontWeight="bold"
            className="svg-float"
            style={{
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`
            }}
          >
            {text}
          </text>
        );
      })}
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

// ─── Scroll-to-top button ────────────────────────────────────────────────────
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      id="scroll-to-top"
      className={`scroll-top${visible ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      title="Back to top"
    >
      ↑
    </button>
  );
}

// ─── Loading Screen ───────────────────────────────────────────────────────────
function LoadingScreen({ onComplete }) {
  const [text, setText] = useState('');
  const [hidden, setHidden] = useState(false);
  const fullText = "> INITIALIZING NEURAL LINK...\n> LOADING PORTFOLIO MODULES...\n> BYPASSING SECURITY PROTOCOLS...\n> ACCESS GRANTED.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 25);
    
    const hideTimer = setTimeout(() => {
      setHidden(true);
      setTimeout(onComplete, 500); // Wait for fade out
    }, 2500);

    return () => {
      clearInterval(timer);
      clearTimeout(hideTimer);
    };
  }, [onComplete, fullText]);

  return (
    <div className={`loader-container ${hidden ? 'hidden' : ''}`}>
      <div className="loader-terminal">
        <div className="terminal-header">
          <div className="dot dot-r"/><div className="dot dot-y"/><div className="dot dot-g"/>
        </div>
        <div className="loader-text">{text}<span className="loader-cursor">_</span></div>
        <div className="loader-progress">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const cursorRef = useRef();
  const ringRef = useRef();
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

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

  // Auto-highlight nav based on scroll position
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'github', 'music', 'contact'];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // fires when section crosses the middle band of the screen
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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

      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

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
        {/* GitHub */}
        <a className="social-link" href="https://github.com/LapaluLiyanage" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        {/* LinkedIn */}
        <a className="social-link" href="https://www.linkedin.com/in/lapalu-liyanage/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        {/* Instagram */}
        <a className="social-link" href="https://www.instagram.com/lapalu_s/" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
          </svg>
        </a>
        {/* TikTok */}
        <a className="social-link" href="https://www.tiktok.com/@lapalu_0" target="_blank" rel="noopener noreferrer" title="TikTok" aria-label="TikTok">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.83 1.55V6.79a4.85 4.85 0 0 1-1.06-.1z"/>
          </svg>
        </a>
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
        <div className="flame-deco"><DevMusicSVG/></div>
      </section>

      <div className="divider"/>

      {/* ── ABOUT ── */}
      <section id="about" className="section">
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
          <div className="about-right">
            <div className="about-image-wrapper">
              <img src="/avatar.jpg" alt="Lapalu Liyanage" className="about-image" />
              <div className="about-image-overlay" />
            </div>
          </div>
        </div>
        <div className="stats-grid reveal">
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
      </section>

      <div className="divider"/>

      {/* ── SKILLS ── */}
      <section id="skills" className="section">
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
      <section id="projects" className="section">
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
                  <a className="project-link" href={p.gh} target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="View on GitHub">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}>
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a className="project-link" href={p.live} target="_blank" rel="noopener noreferrer" title="Live Demo" aria-label="View Live Demo">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
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
      <section id="github" className="section">
        <div className="reveal">
          <div className="section-label">// 04. github</div>
          <h2 className="section-title">OPEN SOURCE</h2>
        </div>
        <div className="reveal"><GitHubSection/></div>
      </section>

      <div className="divider"/>

      {/* ── MUSIC ── */}
      <section id="music" className="section">
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
      <section id="contact" className="section">
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

      {/* Scroll to top */}
      <ScrollToTop/>
    </div>
  );
}
