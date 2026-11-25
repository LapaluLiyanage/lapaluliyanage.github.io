// Built-in project list: the fallback when Supabase is unreachable, and the
// source for the admin panel's "Add missing projects" button.
// The live site reads the database, so edit projects in the admin panel.

const GH = "https://github.com/LapaluLiyanage/";

const stack = (pairs) => pairs.map(([name, role]) => ({ name, role }));

const shots = (folder, captions) =>
  captions.map((caption, i) => ({ image: `/projects/${folder}/${i + 1}.jpg`, caption }));

export const DEFAULT_PROJECTS = [
  {
    keys: "setsmith",
    title: "Setsmith",
    category: "FULL-STACK",
    image: "/projects/setsmith-cover.jpg",
    demoUrl: "https://setsmith.lapalu.me",
    repoUrl: GH + "setsmith",
    description: "Setlist planner for live bands. Sessions, singers, BPM and key, drag-and-drop ordering, a stage view for the gig and PDF export.",
    tech: ["React", "Supabase", "Capacitor", "PWA"],
    tagline: "Setlist planner for live bands",
    overview: "Setsmith replaces the chat-and-spreadsheet routine of planning a gig. A manager books a show, splits the night into sessions, adds songs from YouTube and assigns singers. The app keeps running time against the booked slot and flags awkward key jumps. On the night the same data becomes a phone-friendly stage view with chord sheets. It was first used by FASTUNES for three shows.",
    features: [
      "Sessions with target times and live totals",
      "BPM and key per song, with Camelot codes and key-jump warnings",
      "Drag-and-drop, quick swap and auto-arrange by tempo",
      "Stage view with chord sheets and page-turner pedal support",
      "PDF export with a QR code per song",
      "Accounts, live sync between devices and invite links",
      "Installable PWA, wrapped for iOS and Android",
    ],
    stack: stack([
      ["React", "Planner, library and stage view"],
      ["Supabase", "Auth and live band data sync"],
      ["Capacitor", "iOS and Android apps"],
      ["PWA", "Installable and works from the browser"],
    ]),
    screenshots: shots("setsmith", ["Setlist editor", "Stage view", "Song library"]),
  },
  {
    keys: "ceylonpay",
    title: "CeylonPay",
    category: "FULL-STACK",
    image: "/projects/ceylonpay-cover.jpg",
    demoUrl: "https://ceylonpay.vercel.app",
    repoUrl: GH + "ceylonpay",
    description: "Wallet and P2P payment API. Registration, deposits and phone-number transfers with atomic @Transactional logic and a full audit log. Live on Vercel + Render.",
    tech: ["Java 21", "Spring Boot", "PostgreSQL", "JWT", "React", "Docker"],
    tagline: "Wallet and peer-to-peer payments",
    overview: "CeylonPay is a wallet and P2P payment system. Users register with a Sri Lankan phone number, top up their wallet and send money to other users by phone number. Every transfer runs inside an atomic transaction so balances never drift, and operations are written to an audit log. The API runs on a free host, so the first request may take a little while to wake it.",
    features: [
      "Registration and JWT-secured login",
      "Wallet deposits and phone-number transfers",
      "Atomic @Transactional logic: debit and credit succeed or fail together",
      "Combined history of sent and received money",
      "Audit log of financial operations",
      "React front end on Vercel, API on Render",
    ],
    stack: stack([
      ["Java 21", "Core language for the API"],
      ["Spring Boot", "REST controllers, services and transactions"],
      ["PostgreSQL", "Wallets, transactions and audit records"],
      ["JWT", "Stateless authentication"],
      ["React", "Wallet dashboard and transfer UI"],
      ["Docker", "Containerised builds and deployment"],
    ]),
    screenshots: shots("ceylonpay", ["Log in"]),
  },
  {
    keys: "fullframe, album",
    title: "Full-Frame",
    category: "TOOLS",
    image: "/projects/full-frame-cover.jpg",
    demoUrl: "https://chromewebstore.google.com/detail/facebook-album-download-k/pfpifcnmbhnhjpoflkejkeeoaaiifggf",
    repoUrl: GH + "Full-Frame",
    description: "Facebook Album Download Kit, a published Chrome extension with 500+ users and a 5.0 rating. Saves albums as files or one ZIP.",
    tech: ["JavaScript", "Manifest V3", "Node"],
    tagline: "Facebook Album Download Kit · 500+ users · 5.0★ on the Chrome Web Store",
    overview: "Full-Frame is a Chrome and Edge extension (Manifest V3) that downloads a Facebook album your account can already see, as individual files or a single ZIP. Everything happens in your browser: nothing is uploaded. The ZIP writer is hand-written with no dependencies. It is published on the Chrome Web Store, where in late November 2026 it had 503 users and a 5.0 rating from 5 ratings, with 935 installs in the 30 days to 24 November.",
    features: [
      "Download an album as separate files or one ZIP",
      "Runs entirely in the browser, with no sign-up or server",
      "Published on the Chrome Web Store: 503 users, 5.0 rating from 5 ratings (November 2026)",
      "935 installs from 26 October to 24 November 2026, up 204% on the previous 30 days",
      "Dependency-free ZIP writer",
      "Unit tests run with Node",
    ],
    stack: stack([
      ["JavaScript", "Extension and ZIP logic"],
      ["Manifest V3", "Chrome and Edge extension platform"],
      ["Node", "Test runner"],
    ]),
    screenshots: shots("full-frame", ["Website", "Store artwork"]),
  },
  {
    keys: "chordariumhub",
    title: "Chordarium Hub",
    category: "FULL-STACK",
    image: "/projects/chordarium-hub-card.jpg",
    demoUrl: "https://chordarium.lapalu.me",
    repoUrl: GH + "Chordarium-HUB",
    description: "A music lab for people who play: an interactive chord ring, live music news and articles, and the Studio VST plugin in development.",
    tech: ["React", "TypeScript", "three.js", "Vercel"],
    tagline: "The home of the Chordarium tools",
    overview: "Chordarium is a music lab of tools for people who play. The hub site introduces the tools and hosts the Chordarium Ring, music news and articles.\n\nCHORDARIUM CHORDER\nTurns a YouTube link or audio file into synced chords. It has its own project page, linked below.\n\nCHORDARIUM RING\nA 3D ring of the twelve notes. Drag to turn it, tap a note to build its chord, or choose a chord to see its notes and hear it through the Web Audio API. It can play through chords on its own, and falls back to a flat SVG ring without WebGL.\n\nCHORDARIUM STUDIO (VST3 PLUGIN, IN DEVELOPMENT)\nA VST is a plugin that runs inside music production software such as Cubase. Studio takes a chord sheet, in Sinhala or English, and a plain-language request such as \"soft piano with bass and light drums\", and creates MIDI parts for piano, bass, pad and drums. The AI only plans the arrangement; fixed rules write the notes. You can use your own AI service, or none at all.\n\nMUSIC NEWS\nA serverless function reads RSS feeds for six regions (World, Sri Lanka, India, UK, USA and Japan) from sources such as Billboard, The Guardian and Google News. It keeps the last seven days, removes duplicates and sorts by date. If one feed fails, the others still load. Readers can filter by region and section, search and sort.\n\nARTICLES\nShort reads on theory, guitar, Sinhala music, band life and ear training. Each topic's summary, image and link come from the Wikipedia REST API, cached for six hours and credited under CC BY-SA.\n\nSONGBOOKS\nSinhala songs with their chords, organised for a band to play from. In progress.",
    features: [
      "Chordarium Ring: interactive 3D chord circle with sound",
      "Music News from six regions, refreshed from RSS feeds",
      "Articles with Wikipedia summaries, tags and search",
      "Studio (in development): VST3 plugin that turns a chord sheet into MIDI parts",
      "Songbooks (in progress)",
    ],
    stack: stack([
      ["React", "Hub front end"],
      ["TypeScript", "Application code"],
      ["three.js", "Chordarium Ring and hero visuals"],
      ["Vercel", "Hosting and serverless news and article APIs"],
      ["C++", "Studio VST3 plugin"],
      ["JUCE", "Studio plugin framework"],
      ["Python", "Studio arrangement engine and local service"],
    ]),
    screenshots: [
      { image: "/projects/chordarium/1.jpg", caption: "Hub home" },
      { image: "/projects/chordarium/4.jpg", caption: "The tools" },
      { image: "/projects/chordarium/5.jpg", caption: "Chordarium Ring" },
      { image: "/projects/chordarium/6.jpg", caption: "Music News" },
      { image: "/projects/chordarium/7.jpg", caption: "Articles" },
    ],
    related: ["Chordarium Chorder", "Setsmith"],
  },
  {
    keys: "chordariumchorder",
    title: "Chordarium Chorder",
    category: "FULL-STACK",
    image: "/projects/chordarium-cover.jpg",
    demoUrl: "https://chordariumchorder.lapalu.me",
    repoUrl: GH + "Chordarium-Chorder",
    description: "Turns a YouTube link or audio file into synced chords, with 7ths, sus chords and inversions, practice tools and chord-sheet export.",
    tech: ["Python", "Flask", "React", "PostgreSQL"],
    tagline: "A song to synced chords",
    overview: "Paste a YouTube link or upload an audio file and get its chords in time with the music, including 7ths, extensions, sus chords, inversions and slash chords. Chords can be edited by hand and exported as a chord sheet.\n\nTHE ANALYSIS PIPELINE\nA Flask API takes the request and a separate worker runs these steps:\n1. Audio: yt-dlp and ffmpeg turn the link or file into mono 22.05 kHz WAV, up to 15 minutes.\n2. Stems (Accurate mode): Demucs separates vocals, drums, bass and the rest, so chords are read without drums and vocals.\n3. Beats: beat_this finds beats and downbeats, and tempo is taken from the median beat gap.\n4. Chords: a pretrained bi-directional transformer (BTC) reads a constant-Q transform. If its weights are missing, a 144-template chroma matcher with Viterbi smoothing takes over.\n5. Clean-up: chord changes are snapped to beats and repeats are merged.\n6. Bass: the strongest bass note turns a chord into a slash chord when it belongs to that chord.\n7. Key: Krumhansl-Schmuckler key estimation.\n8. Sections: SongFormer labels intro, verse, chorus and bridge in Accurate mode, with a repetition-based method otherwise.\n\nThe models are pretrained open-source models; my work is the pipeline around them and the app.",
    features: [
      "Chords from a YouTube link or an uploaded audio file",
      "Fast and Accurate analysis modes",
      "Synced tracker with the current chord, sections and beat ruler",
      "Loop a section, slow it down and follow the chord wheel",
      "Edit chords and song sections by hand",
      "Export to ChordPro, PDF, TXT, MIDI and JSON",
    ],
    stack: stack([
      ["Python", "Analysis pipeline"],
      ["Flask", "API, with a separate worker"],
      ["Demucs", "Stem separation"],
      ["beat_this", "Beat and downbeat tracking"],
      ["BTC transformer", "Chord recognition"],
      ["librosa", "Audio features, bass and key"],
      ["React", "Tracker and editor"],
      ["PostgreSQL", "Songs and analysis jobs"],
    ]),
    screenshots: [
      { image: "/projects/chordarium/2.jpg", caption: "Home" },
      { image: "/projects/chordarium/3.jpg", caption: "Chord tracker" },
    ],
    related: ["Chordarium Hub"],
  },
  {
    keys: "parking",
    title: "Smart Parking AI",
    category: "BACKEND",
    image: "/projects/smart-parking-ai.jpg",
    repoUrl: GH + "AI-Enhanced-Smart-Parking-System",
    description: "Slot booking with real-time availability, JWT reservations and dynamic pricing. Gemini demand prediction. Race conditions solved with pessimistic row locks.",
    tech: ["Spring Boot 3", "PostgreSQL", "Gemini", "Testcontainers"],
    tagline: "Real-time slot booking with dynamic pricing",
    overview: "A parking reservation backend with live slot availability, JWT-protected bookings and prices that adjust to demand. Gemini predicts demand and powers a natural-language booking assistant, and concurrent bookings of the same slot are made safe with pessimistic row locks.",
    features: [
      "Real-time slot availability",
      "JWT-authenticated reservations",
      "Dynamic pricing with Gemini demand prediction",
      "Natural-language booking assistant",
      "Pessimistic row locks against double booking",
      "Integration tests against a real database with Testcontainers",
    ],
    stack: stack([
      ["Spring Boot 3", "REST API, security and scheduling"],
      ["PostgreSQL", "Slots, bookings and row-level locking"],
      ["Gemini", "Demand prediction and booking assistant"],
      ["Testcontainers", "Throwaway Postgres for realistic tests"],
    ]),
    screenshots: shots("parking", ["Booking flow (diagram)", "REST API overview (diagram)"]),
  },
  {
    keys: "devscore, scriptfusion",
    title: "DevScore",
    category: "AI-ML",
    image: "/projects/devscore.jpg",
    repoUrl: "https://github.com/Team-ScriptFusion/DevScore",
    demoUrl: "https://dev-score-one.vercel.app",
    description: "Checks resume skills against real GitHub code. Our paper was accepted at ICATC 2026. My part was AI/ML: skill matching, code analysis and readiness scoring.",
    tech: ["Python", "scikit-learn", "sentence-transformers", "Node/Express", "React", "Supabase"],
    tagline: "Paper accepted at ICATC 2026 · My role: AI and machine learning",
    overview: "DevScore is a final-year research project built by a team at Rajarata University of Sri Lanka. It checks the skills a candidate claims on their resume against what they actually build on GitHub and turns the result into a 0-100 job-readiness score.\n\nOur paper, \"DevScore: AI-Driven Job Readiness Scoring Using Semantic GitHub Analysis and Resume Verification for Software Engineering Job Roles\", was accepted at the 11th International Conference on Advances in Technology and Computing (ICATC 2026), Computing Technology track, as paper 312. I am one of its co-authors.\n\nMy part was the AI and machine learning side. I built the scoring model: a weighted verification formula, non-negative weight fitting with k-fold cross-validation, and validation with rank correlation, mean error and inter-rater agreement. This pipeline was tested on synthetic expert scores while real expert scores were not available.\n\nI also trained a readiness predictor on a 97-candidate dataset, comparing linear regression and random forest models with 5-fold cross-validation. Its labels come from the project's own scoring engine, so it is stored beside the rule-based score as a comparison, not as a replacement.\n\nEarlier in the project I built first versions of semantic skill verification, using sentence embeddings and cosine similarity, and of static code analysis. The team's later engine superseded these two.",
    features: [
      "Paper accepted at the 11th ICATC 2026 (paper 312), as co-author",
      "My work: weighted readiness scoring with weights fitted by non-negative least squares",
      "My work: k-fold cross-validation, Spearman correlation, MAE and inter-rater agreement",
      "My work: readiness predictor comparing linear regression and random forest",
      "My work: scoring service in Flask, connected to the Node API",
      "My early prototypes: embedding-based skill matching and static code analysis",
      "Team: resume parsing, GitHub evidence engine and role-based web app",
    ],
    stack: stack([
      ["Python", "Scoring and analysis services"],
      ["scikit-learn", "Linear regression and random forest predictors"],
      ["SciPy", "Weight fitting and validation statistics"],
      ["sentence-transformers", "all-MiniLM-L6-v2 embeddings for skill matching"],
      ["Flask", "Service APIs"],
      ["Node/Express", "Main API and GitHub data"],
      ["React", "Candidate report and score UI"],
      ["Supabase", "Storage and authentication"],
    ]),
    screenshots: shots("devscore", ["Landing page (sample profile)"]),
  },
  {
    keys: "slyhs",
    title: "SLYHS",
    category: "FULL-STACK",
    image: "/projects/slyhs.jpg",
    demoUrl: "https://slyhs-web.vercel.app",
    repoUrl: GH + "SLYHS_WEB",
    description: "Website for the Sri Lankan Young Herpetologists' Society. Animated hero, 3D serpent, species guide, member registration and an admin panel, in Sinhala, Tamil and English.",
    tech: ["React", "Vite", "three.js", "Supabase"],
    tagline: "Website for Sri Lanka's young herpetologists",
    overview: "The website for the Sri Lankan Young Herpetologists' Society, a group for young people who want to study, protect and share Sri Lanka's snakes, reptiles and amphibians. It combines an animated, scroll-driven front end with a Supabase back end and an admin panel the society can run itself.",
    features: [
      "Animated hero with a 3D serpent that follows the scroll",
      "Species guide and snakebite first-aid guide",
      "Four-step membership registration",
      "Available in Sinhala, Tamil and English",
      "Admin panel for events, animals, blog, policies, members and subscribers",
    ],
    stack: stack([
      ["React 18", "Component-based front end with React Router"],
      ["Vite", "Build tooling"],
      ["GSAP", "Scroll animation with Lenis"],
      ["three.js", "3D serpent"],
      ["Supabase", "Postgres, Auth and Edge Functions"],
      ["Vercel", "Hosting"],
    ]),
    screenshots: shots("slyhs", ["Home", "Learn", "Join the society"]),
  },
  {
    keys: "smartpos",
    title: "MRA SmartPOS Pro",
    category: "FULL-STACK",
    image: "/projects/smartpos-cover.jpg",
    hideRepo: true,
    description: "POS, installment, warranty and profit system for a furniture and electricals shop. Keeps selling when the internet is down.",
    tech: ["React", "TypeScript", "Supabase", "Tauri", "PWA"],
    tagline: "Point of sale and installment system for MRA Electronics",
    overview: "An online POS, installment tracking, warranty and business system built for MRA Electronics, a furniture and electricals business in Sri Lanka. It tracks installment plans, works out real month-end cash profit, forecasts the next month and queues sales offline until the connection returns. Screenshots show test data.",
    features: [
      "Cash and installment sales with guarantors and receipts",
      "Offline sales and collections with ordered, duplicate-safe sync",
      "Warranty cards with a public warranty check page",
      "Month-end profit reports, expenses and day close",
      "Collector routes, risk score and SMS reminders",
      "AI assistant with confirmation before any change",
      "English and Sinhala interface",
      "Web app and Windows desktop app",
    ],
    stack: stack([
      ["React", "PWA front end"],
      ["TypeScript", "Typed application code"],
      ["Supabase", "Postgres with row-level security, Auth, Realtime, Edge Functions"],
      ["Tauri", "Windows desktop app"],
      ["Gemini", "AI assistant, with Groq fallback"],
      ["Playwright", "End-to-end tests, alongside Vitest and pgTAP"],
    ]),
    screenshots: shots("smartpos", [
      "Cashier home",
      "New sale",
      "Collect payments",
      "Owner report",
      "Offline sale saved",
      "Held sales to check",
      "Public warranty check",
      "Mobile home",
    ]),
  },
  {
    keys: "pothalens",
    title: "PothaLens",
    category: "TOOLS",
    image: "/projects/pothalens.jpg",
    hideRepo: true,
    description: "A free, lightweight Windows PDF reader for university students: select to translate or explain, then turn past papers into notes and practice.",
    tech: ["Tauri", "Rust", "Preact", "TypeScript", "PDF.js"],
    tagline: "A PDF reader built for studying",
    overview: "PothaLens is a Windows PDF reader for university students. Read a lecture, select a confusing sentence and translate or explain it, then turn past papers into exam notes, practice questions and flashcards. Files stay on your computer, and AI help works with your own API key or a local model. It is a pre-release: it works and is tested, but has no installer or signed build yet.",
    features: [
      "Reading with thumbnails, outline, search, tabs and annotations saved into the PDF",
      "Select text to translate, explain, copy or hear it",
      "AI answers with page references, using your own key or a local model",
      "Course workspace that matches past paper questions to lecture topics",
      "Practice, quizzes and spaced-repetition flashcards",
      "PDF tools: merge, split, rotate, convert, fill forms and sign",
      "Reader-only mode that turns off every network feature",
    ],
    stack: stack([
      ["Tauri", "Small desktop shell with a Rust core"],
      ["Rust", "File access and keychain storage"],
      ["Preact", "User interface"],
      ["TypeScript", "Typed application code"],
      ["PDF.js", "Page rendering and text layer"],
      ["pdf-lib", "Annotations and page tools"],
    ]),
    screenshots: shots("pothalens", ["Reader", "AI chat panel", "PDF tools", "Course workspace", "Start screen"]),
  },
  {
    keys: "clipforge",
    title: "ClipForge",
    category: "TOOLS",
    image: "/projects/clipforge.jpg",
    repoUrl: GH + "ClipForge",
    description: "Chrome extension with a local helper that saves video as MP4 or extracts MP3/WAV with quality control.",
    tech: ["JavaScript", "Manifest V3", "Python", "FastAPI", "ffmpeg"],
    tagline: "Video and audio saving with real quality control",
    overview: "ClipForge pairs a Chrome extension with a small Python helper that runs only on your machine. A browser extension alone cannot merge separate video and audio streams or encode audio, so the helper does that work with yt-dlp and ffmpeg while the extension shows live progress. It is built for personal use and loaded unpacked.",
    features: [
      "Save MP4 video, or extract MP3 or WAV audio",
      "Choose quality before downloading",
      "Live progress from the local helper",
      "Helper listens on the loopback address only",
      "Reports exactly which requirement is missing",
    ],
    stack: stack([
      ["JavaScript", "Extension popup and floating button"],
      ["Manifest V3", "Chrome extension platform"],
      ["FastAPI", "Local helper API"],
      ["Python", "Helper process with yt-dlp"],
      ["ffmpeg", "Merging and audio encoding"],
    ]),
    screenshots: shots("clipforge", ["Extension popup"]),
  },
  {
    keys: "portfolio",
    title: "Personal Portfolio",
    category: "FULL-STACK",
    image: "/projects/portfolio.jpg",
    demoUrl: "https://lapalu.me",
    repoUrl: GH + "portfolio",
    description: "This site, lapalu.me: an animated React portfolio with a Supabase-backed admin panel for editing every section.",
    tech: ["React", "Vite", "GSAP", "three.js", "Supabase"],
    tagline: "lapalu.me",
    overview: "The site you are reading. It is a React single-page app with scroll animation and a 3D background, live GitHub stats, and its own admin panel so content and images can be changed without touching code.",
    features: [
      "Admin panel with login for every content section",
      "Image upload and cropping",
      "Project details with screenshot galleries",
      "Live repository stats from GitHub",
      "Deployed to GitHub Pages with GitHub Actions",
    ],
    stack: stack([
      ["React", "Site and admin panel"],
      ["Vite", "Build tooling"],
      ["GSAP", "Animation with Lenis smooth scrolling"],
      ["three.js", "3D background"],
      ["Supabase", "Content, auth and image storage"],
      ["GitHub Actions", "Automatic deployment"],
    ]),
    screenshots: shots("portfolio", ["Home"]),
  },
  {
    keys: "audition",
    title: "Fastunes Auditions 2026",
    category: "FULL-STACK",
    image: "/projects/fastunes-auditions.jpg",
    demoUrl: "https://fastunes.lapalu.me",
    repoUrl: GH + "FASTUNES-Online-Audition-2026",
    description: "Live recruitment site for the Fastunes Music Society: animated hero, photo reel and a four-step audition entry form.",
    tech: ["JavaScript", "GSAP", "three.js"],
    tagline: "Online audition drive for the Fastunes Music Society",
    overview: "A one-page site used to recruit new student musicians into the Fastunes Music Society at Rajarata University of Sri Lanka. It has an animated hero, a photo reel with a built-in manager and a four-step entry form that hands the entry to WhatsApp. No framework, build step or server.",
    features: [
      "Four-step audition form that opens a pre-filled WhatsApp message",
      "Auto-scrolling photo reel that respects reduced motion",
      "Built-in photo reel manager",
      "Static page with no build step",
    ],
    stack: stack([
      ["JavaScript", "Form and photo reel"],
      ["GSAP", "Scroll animation"],
      ["three.js", "Hero wave field"],
    ]),
    screenshots: shots("fastunes-auditions", ["Hero"]),
  },
  {
    keys: "fastunesofficial",
    title: "Fastunes Website v2",
    category: "FULL-STACK",
    image: "/projects/fastunes-web.jpg",
    hideRepo: true,
    description: "Multi-page website for the Fastunes Music Society with its own monochrome Spotlight design system and an admin panel.",
    tech: ["React", "GSAP", "Supabase", "Firebase"],
    tagline: "Official band website with its own design system",
    overview: "The second version of the Fastunes website: seven public pages built around a monochrome Spotlight design system with a cursor spotlight, plus a protected committee admin panel. It is still in development, so some pages show placeholder media.",
    features: [
      "Home, Story, Photos, Videos, Band, Shows and Contact pages",
      "Spotlight design tokens for colour, type and motion",
      "Committee sign-in with Google",
      "Admin panel for media, members, shows and bookings",
      "Database rules limit writes to committee members",
    ],
    stack: stack([
      ["React", "Multi-page front end with React Router"],
      ["GSAP", "ScrollTrigger and FLIP animation"],
      ["Supabase", "Postgres with row-level security"],
      ["Firebase", "Google sign-in"],
    ]),
    screenshots: shots("fastunes-web", ["Shows", "Contact"]),
  },
  {
    keys: "antcolony, aco",
    title: "Enhanced Ant Colony",
    category: "AI-ML",
    image: "/projects/antcolony-cover.jpg",
    demoUrl: "https://enhancedantcolonyalgorithm.streamlit.app/",
    repoUrl: GH + "ENHANCED_ANT_COLONY_ALGORITHM",
    description: "Multi-objective transportation research. A MAX–MIN ant colony with local search matches the exact LP compromise across a 60-instance benchmark. Live Streamlit planner, 322 tests.",
    tech: ["Python", "NumPy", "SciPy", "Streamlit"],
    tagline: "Multi-objective transportation optimisation research",
    overview: "Research on the multi-objective transportation problem. A MAX–MIN ant colony algorithm with local search matches the exact LP compromise solution across a 60-instance benchmark. A live Streamlit planner lets anyone try it, backed by 322 tests.",
    features: [
      "MAX–MIN ant colony optimiser with local search",
      "Matches the exact LP compromise on a 60-instance benchmark",
      "Interactive Streamlit planner",
      "322 automated tests",
    ],
    stack: stack([
      ["Python", "Algorithm implementation"],
      ["NumPy", "Vectorised pheromone and cost matrices"],
      ["SciPy", "Exact LP baseline"],
      ["Streamlit", "Interactive planner"],
    ]),
    screenshots: shots("antcolony", ["Transportation planner"]),
  },
  {
    keys: "sentinel",
    title: "Project Sentinel",
    category: "AI-ML",
    image: "/projects/sentinel.jpg",
    demoUrl: "https://loopcode.streamlit.app/",
    repoUrl: GH + "Project-Sentinel---Zebra",
    description: "InnovateX 2025 finale entry by Team LoopCode: detects self-checkout events from sensor data and shows them on a Streamlit dashboard.",
    tech: ["Python", "Streamlit"],
    tagline: "Smart-checkout event detection (InnovateX 2025)",
    overview: "Team LoopCode's solution for the Project Sentinel challenge at the InnovateX 2025 finale. It analyses data from self-checkout stations to detect fraud, queue, inventory and anomaly events, and presents them on an interactive dashboard.",
    features: [
      "Detects scanner avoidance, barcode switching and weight discrepancies",
      "Queue, staffing and inventory analysis",
      "Ten event types",
      "Dashboard with station, timeline and fraud views",
      "CSV and JSON export",
    ],
    stack: stack([
      ["Python", "Detection algorithms"],
      ["Streamlit", "Interactive dashboard"],
    ]),
    screenshots: shots("sentinel", ["Station analysis", "Fraud analysis", "Timeline"]),
  },
  {
    keys: "medibloom",
    title: "MediBloom",
    category: "MOBILE",
    image: "/projects/medibloom.jpg",
    repoUrl: GH + "MediBloom_Mobile_Application",
    description: "Offline-first Android medication manager. Reminders that survive reboot, adherence calendar, mood tracking and a Gemini health-assistant chat.",
    tech: ["Java", "Android MVVM", "Room", "Gemini"],
    tagline: "Offline-first Android medication manager",
    overview: "An Android app for managing daily medication. It works offline, its reminders survive device reboots, and it tracks adherence and mood over time. A Gemini-powered chat gives general health-assistant answers.",
    features: [
      "Medication reminders that survive reboot",
      "Adherence calendar",
      "Mood tracking",
      "Gemini health-assistant chat",
      "Offline-first local storage",
    ],
    stack: stack([
      ["Java", "Application code"],
      ["Android MVVM", "ViewModel and LiveData architecture"],
      ["Room", "Local database"],
      ["Gemini", "Health-assistant chat"],
    ]),
    screenshots: shots("medibloom", ["UI design: home, add medicine, calendar, history", "UI design: assistant, mood, profile, login"]),
  },
  {
    keys: "smartplanner",
    title: "SmartPlanner",
    category: "TOOLS",
    image: "/projects/smartplanner.jpg",
    repoUrl: GH + "SmartPlanner_PersonalOrganizerApp",
    description: "Object-oriented personal organizer in C++, structured around encapsulated task and schedule classes.",
    tech: ["C++", "OOP"],
    tagline: "Object-oriented personal organiser in C++",
    overview: "A personal planner written in C++ and structured around encapsulated task and schedule classes, built to practise clean object-oriented design.",
    features: ["Encapsulated Task and Schedule classes", "Object-oriented design with clear responsibilities"],
    stack: stack([
      ["C++", "Implementation language"],
      ["OOP", "Encapsulation and class design"],
    ]),
    screenshots: [],
  },
];

// Older titles that may still be saved in the database.
const RENAMED = { "FB Album Kit": "Full-Frame", "Setlist planner for live bands": "Setsmith" };
// Older entries superseded by a wider one: their card image and long text carry over.
const REPLACED = { ChordScope: "Chordarium Hub", Chordarium: "Chordarium Hub" };
// Card descriptions longer than this belong in the details popup.
const CARD_LIMIT = 220;

const byTitle = new Map(DEFAULT_PROJECTS.map((p) => [p.title, p]));
const builtIn = (title) => byTitle.get(RENAMED[title] || title);

// Fills only fields a saved project doesn't have yet, so anything edited (or
// cleared) in the admin panel wins. A long saved description with no overview
// moves into the popup, and the card gets the short built-in one.
export function withDefaults(project) {
  const base = builtIn(project.title);
  if (!base) return { ...project };
  const merged = { ...base, ...project };
  if (project.overview === undefined && project.description?.length > CARD_LIMIT) {
    merged.overview = project.description;
    merged.description = base.description;
  }
  // An empty gallery takes the built-in one; use Hide to remove a project.
  if (!project.screenshots?.length) merged.screenshots = base.screenshots;
  // An address pasted into the repo-match field would never match a repo name.
  if (/^https?:/.test(project.keys || "")) merged.keys = base.keys;
  return merged;
}

// Brings a saved list up to date with the built-in one: built-in order first,
// saved edits kept, projects you added yourself kept at the end.
export function mergeWithDefaults(saved) {
  const current = new Map();
  const replaced = new Map();
  const custom = [];
  for (const p of saved) {
    const base = builtIn(p.title);
    if (REPLACED[p.title]) replaced.set(REPLACED[p.title], p);
    else if (base) current.set(base.title, { ...withDefaults(p), title: base.title });
    else custom.push(p);
  }
  const merged = DEFAULT_PROJECTS.map((p) => {
    if (current.has(p.title)) return current.get(p.title);
    // an old single "Chordarium" entry was the chord finder, so its cover goes to Chorder
    const old = p.title === "Chordarium Chorder" && replaced.get("Chordarium Hub");
    return old?.image ? { ...p, image: old.image } : p;
  });
  return [...merged, ...custom];
}

// Related projects for one title. A link set on either side counts for both.
export function relatedTo(title, projects) {
  const own = projects.find((p) => p.title === title)?.related || [];
  return projects.filter((p) => p.title !== title && (own.includes(p.title) || p.related?.includes(title)));
}
