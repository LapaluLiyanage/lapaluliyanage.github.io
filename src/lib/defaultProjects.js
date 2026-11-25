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
    keys: "chordarium",
    title: "Chordarium Hub",
    category: "FULL-STACK",
    image: "/projects/chordarium-cover.jpg",
    demoUrl: "https://chordarium.lapalu.me",
    repoUrl: GH + "Chordarium-HUB",
    description: "A music lab of chord tools: Chorder turns a song into synced chords, with Studio and Songbooks on the way, plus an interactive chord ring.",
    tech: ["React", "TypeScript", "three.js", "Flask", "Python"],
    tagline: "Chord tools for people who play",
    overview: "Chordarium is a family of music tools under one hub. Chorder takes a YouTube link or audio file and returns its chords, including 7ths, extensions, sus chords and inversions, synced to the music. Studio, a VST3 plugin that turns a chord sheet into a multi-track MIDI arrangement, and Songbooks are still in progress. The hub site introduces the tools and hosts the interactive Chordarium Ring.",
    features: [
      "Chorder: synced chords from a YouTube link or audio upload",
      "Chorder: loop, slow down, edit and export to ChordPro, PDF, TXT, MIDI or JSON",
      "Chorder pipeline: Demucs stem separation, beat tracking and a transformer chord model",
      "Chordarium Ring: a 3D circle of notes you can play",
      "Music news and articles pages",
      "Studio (in progress): chord sheet to MIDI arrangement inside a DAW",
      "Songbooks (in progress): Sinhala songs with their chords",
    ],
    stack: stack([
      ["React", "Hub and Chorder front ends"],
      ["TypeScript", "Hub application code"],
      ["three.js", "Chordarium Ring and hero visuals"],
      ["Flask", "Chorder API"],
      ["Python", "Chord recognition pipeline"],
      ["PostgreSQL", "Chorder job and song storage"],
    ]),
    screenshots: shots("chordarium", ["Hub home", "Chorder", "Chorder tracker", "The tools", "Chordarium Ring"]),
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
    screenshots: [],
  },
  {
    keys: "devscore, scriptfusion",
    title: "DevScore",
    category: "AI-ML",
    image: "/projects/devscore.jpg",
    repoUrl: "https://github.com/Team-ScriptFusion/DevScore",
    demoUrl: "https://dev-score-one.vercel.app",
    description: "Final-year research (6-person team). Verifies resume skills against real GitHub activity with semantic matching and AST analysis. IEEE-format paper.",
    tech: ["Node/Express", "React", "scikit-learn", "Supabase"],
    tagline: "Verifying resume skills against real GitHub activity",
    overview: "Final-year research project built by a six-person team. DevScore checks the skills a candidate claims on their resume against what they actually build on GitHub, using semantic matching and AST analysis of the code, and turns the result into a 0-100 readiness score. The work is written up as an IEEE-format paper.",
    features: [
      "Semantic matching between resume skills and repository content",
      "AST analysis of source code as evidence of skill",
      "Scoring pipeline backed by scikit-learn",
      "Node/Express API with a React front end",
      "IEEE-format research paper",
    ],
    stack: stack([
      ["Node/Express", "API and GitHub data ingestion"],
      ["React", "Candidate report and score UI"],
      ["scikit-learn", "Scoring and similarity models"],
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
    image: "/projects/smartpos.jpg",
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
    screenshots: [],
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
    const old = replaced.get(p.title);
    if (!old) return p;
    const longText = old.description?.length > CARD_LIMIT ? `

${old.description}` : "";
    return { ...p, image: old.image || p.image, overview: p.overview + longText };
  });
  return [...merged, ...custom];
}
