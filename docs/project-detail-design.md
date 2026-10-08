# Design brief: Project detail view (portfolio)

Paste this whole file into Claude Design to generate the project detail screen.

## Goal
When a visitor clicks a project card in the "Selected Work" grid, show a full project page/modal with the long description, key features, and the tech stack **with logos**. It must feel like the rest of the site: dark, editorial, lime accent.

## Brand and visual system (match exactly)
- Background `#0b0b0a`, surface/card `#141412`, border `#262624` / `#33332f`
- Text: primary `#efeee9`, dim `#b5b4ad`, muted `#9c9b94`, faint `#6d6c66`
- Accent: lime `#c8f542` (hover/highlight `#dcfb7e`). Use it sparingly: eyebrow labels, bullets, borders on hover, primary button.
- Fonts: **Bricolage Grotesque** (800, tight tracking -0.03em) for headings, **Geist** for body, **Geist Mono** for labels, tags and metadata.
- Radius: cards 26-28px, chips/tiles 10-14px, buttons pill.
- Glow: `0 0 80px rgba(200,245,66,0.12)` on the main container. No heavy drop shadows, no gradients except subtle image fades.
- Mood: Swiss-editorial meets developer terminal. Lots of breathing room, mono micro-labels like `PROJECT 01`, `[02] SELECTED WORK`.

## Layout (desktop, 780px wide modal centered over blurred dark backdrop)
1. **Hero image**, 260px tall, full width, cover-fit, fades into the card at the bottom. Category pill top-left (mono, 10px, lime text, lime 40% border, dark translucent fill). Round close button top-right.
2. **Header block**: mono eyebrow `PROJECT 01` in lime, then project title (clamp 30-44px, weight 800), then a one-line tagline in lime mono 12.5px.
3. **Overview**: 15.5px, line-height 1.7, `dim` colour, 2-4 sentences.
4. **Key features**: mono uppercase section label `KEY FEATURES`, then a vertical list. Each item has a small 7px lime rounded-square bullet.
5. **Tech stack**: label `TECH STACK`, then a responsive grid of tiles (min 220px). Each tile: 36px rounded logo box (card colour, 1px border) containing the 22px **technology logo**, next to the tech name (13.5px, 600) and a one-line role underneath (12px, faint), e.g. "PostgreSQL: Wallets, transactions and audit records". When no logo exists, show a 2-letter mono monogram in lime.
6. **Actions**: outline pill `View Project ↗` and solid lime pill `Live Demo` (only if a demo exists).

## Mobile (<= 600px)
Full-width sheet with 12px margin, hero 180px, padding 20px, tech tiles one per column.

## Interaction and motion
- Open: backdrop fades in (250ms), panel rises 18px and scales from 0.98 (300ms, cubic-bezier(.2,.8,.2,1)).
- Close via the X, backdrop click, or Esc. Focus moves to the close button, then returns to the card.
- Card hover on the grid: lime border + soft glow, image zooms 4%.
- Respect `prefers-reduced-motion`.

## Logos
Use the Devicon set: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/<name>/<name>-original.svg`. Logos that are black-on-transparent (Flask, Express, Vercel, Pandas, Hibernate) must be inverted to white on the dark tiles.

## Content to design with (all 8 projects)

### 01 CeylonPay: FULL-STACK
Tagline: Wallet and peer-to-peer payments API
Overview: Wallet and P2P payment system. Users register, top up a wallet and send money by phone number. Every money movement runs in an atomic transaction and is written to an audit log.
Features: JWT login; deposits and phone-number transfers; atomic @Transactional debit+credit; full audit log; React front end on Vercel, API on Render.
Stack: Java 21, Spring Boot, PostgreSQL, JWT, React, Docker

### 02 Smart Parking AI: BACKEND
Tagline: Real-time slot booking with dynamic pricing
Overview: Parking reservation backend with live availability, JWT bookings and demand-based pricing. Gemini predicts demand; concurrent bookings are made safe with pessimistic row locks.
Features: real-time availability; JWT reservations; Gemini dynamic pricing; pessimistic row locks; Testcontainers integration tests.
Stack: Spring Boot 3, PostgreSQL, Gemini, Testcontainers

### 03 DevScore: AI-ML
Tagline: Verifying resume skills against real GitHub activity
Overview: Final-year research by a 6-person team. Checks claimed skills against real GitHub work using semantic matching and AST analysis. IEEE-format paper.
Features: semantic skill matching; AST code analysis; scikit-learn scoring; Node/Express API + React UI; IEEE paper.
Stack: Node/Express, React, scikit-learn, Supabase

### 04 MediBloom: MOBILE
Tagline: Offline-first Android medication manager
Overview: Android app for daily medication that works offline, keeps reminders across reboots, tracks adherence and mood, and has a Gemini health-assistant chat.
Features: reboot-proof reminders; adherence calendar; mood tracking; Gemini chat; offline-first storage.
Stack: Java, Android MVVM, Room, Gemini

### 05 Enhanced Ant Colony: AI-ML (has Live Demo)
Tagline: Multi-objective transportation optimisation research
Overview: A MAX-MIN ant colony with local search matches the exact LP compromise across a 60-instance benchmark. Live Streamlit planner, 322 tests.
Features: MAX-MIN ACO + local search; matches LP compromise on 60 instances; Streamlit planner; 322 tests.
Stack: Python, NumPy, SciPy, Streamlit

### 06 ChordScope: FULL-STACK
Tagline: Advanced chord detection for YouTube songs
Overview: Finds 7ths, extensions, sus chords and inversions in a YouTube song using a 144-chord template-matching recognizer.
Features: advanced chord vocabulary; 144-chord templates; works from a YouTube link; Flask + React.
Stack: Flask, React, Audio DSP

### 07 FB Album Kit: TOOLS
Tagline: Download your own Facebook albums
Overview: Chrome/Edge Manifest V3 extension that downloads your albums as files or a ZIP, using a dependency-free ZIP writer, covered by Node tests.
Features: files or ZIP download; dependency-free ZIP writer; Manifest V3; Node tests.
Stack: JavaScript, Manifest V3, Node

### 08 SmartPlanner: TOOLS
Tagline: Object-oriented personal organiser in C++
Overview: Personal planner built around encapsulated task and schedule classes.
Features: Task and Schedule classes; clean OOP design.
Stack: C++, OOP

## Deliverables
- Desktop (1440) and mobile (390) frames of the detail view for **CeylonPay** (long content) and **SmartPlanner** (short content), to prove the layout holds at both extremes.
- One frame showing the grid card hover state.
- Keep it a single dark theme; no light mode.
