// Long-form detail shown in the project modal, keyed by project title.
// Kept separate from DEFAULT_CONTENT / Supabase so the admin editor's
// card data (title, image, short description, tech) is untouched.
export const PROJECT_DETAILS = {
  CeylonPay: {
    tagline: "Wallet and peer-to-peer payments API",
    overview:
      "CeylonPay is a wallet and P2P payment system. Users register, top up their wallet and send money to other users using just a phone number. Every money movement runs inside an atomic transaction so balances never drift, and each operation is written to an audit log.",
    features: [
      "User registration and JWT-secured login",
      "Wallet deposits and phone-number transfers",
      "Atomic @Transactional transfer logic: debit and credit succeed or fail together",
      "Full audit log of every financial operation",
      "React front end deployed on Vercel, API on Render",
    ],
    stack: [
      ["Java 21", "Core language for the API"],
      ["Spring Boot", "REST controllers, services and transaction management"],
      ["PostgreSQL", "Wallets, transactions and audit records"],
      ["JWT", "Stateless authentication"],
      ["React", "Wallet dashboard and transfer UI"],
      ["Docker", "Containerised builds and deployment"],
    ],
  },
  "Smart Parking AI": {
    tagline: "Real-time slot booking with dynamic pricing",
    overview:
      "A parking reservation backend with live slot availability, JWT-protected bookings and prices that adjust to demand. Gemini is used to predict demand, and concurrent bookings of the same slot are made safe with pessimistic row locks.",
    features: [
      "Real-time slot availability",
      "JWT-authenticated reservations",
      "Dynamic pricing driven by Gemini demand prediction",
      "Race conditions solved with pessimistic database row locks",
      "Integration tests against a real database via Testcontainers",
    ],
    stack: [
      ["Spring Boot 3", "REST API, security and scheduling"],
      ["PostgreSQL", "Slots, bookings and row-level locking"],
      ["Gemini", "Demand prediction for pricing"],
      ["Testcontainers", "Throwaway Postgres for realistic tests"],
    ],
  },
  DevScore: {
    tagline: "Verifying resume skills against real GitHub activity",
    overview:
      "Final-year research project built by a six-person team. DevScore checks the skills a candidate claims on their resume against what they actually build on GitHub, using semantic matching and AST analysis of the code. The work is written up as an IEEE-format paper.",
    features: [
      "Semantic matching between resume skills and repository content",
      "AST analysis of real source code as evidence of skill",
      "Scoring pipeline backed by scikit-learn",
      "Node/Express API with a React front end",
      "IEEE-format research paper",
    ],
    stack: [
      ["Node/Express", "API and GitHub data ingestion"],
      ["React", "Candidate report and score UI"],
      ["scikit-learn", "Scoring and similarity models"],
      ["Supabase", "Storage and authentication"],
    ],
  },
  MediBloom: {
    tagline: "Offline-first Android medication manager",
    overview:
      "An Android app for managing daily medication. It works fully offline, its reminders survive device reboots, and it tracks adherence and mood over time. A Gemini-powered chat gives general health-assistant answers.",
    features: [
      "Medication reminders that survive reboot",
      "Adherence calendar",
      "Mood tracking",
      "Gemini health-assistant chat",
      "Offline-first local storage",
    ],
    stack: [
      ["Java", "Application code"],
      ["Android MVVM", "ViewModel + LiveData architecture"],
      ["Room", "Local database for offline-first data"],
      ["Gemini", "Health-assistant chat"],
    ],
  },
  "Enhanced Ant Colony": {
    tagline: "Multi-objective transportation optimisation research",
    overview:
      "Research on the multi-objective transportation problem. A MAX–MIN ant colony algorithm with local search matches the exact LP compromise solution across a 60-instance benchmark. A live Streamlit planner lets anyone try it, backed by 322 tests.",
    features: [
      "MAX–MIN ant colony optimiser with local search",
      "Matches the exact LP compromise on a 60-instance benchmark",
      "Interactive Streamlit planner (live demo)",
      "322 automated tests",
    ],
    stack: [
      ["Python", "Algorithm implementation"],
      ["NumPy", "Vectorised pheromone and cost matrices"],
      ["SciPy", "Exact LP baseline for comparison"],
      ["Streamlit", "Interactive planner UI"],
    ],
  },
  ChordScope: {
    tagline: "Advanced chord detection for YouTube songs",
    overview:
      "ChordScope finds advanced chords (7ths, extensions, sus chords and inversions) in a YouTube song. It uses a template-matching recognizer over a 144-chord vocabulary.",
    features: [
      "Recognises 7ths, extensions, sus chords and inversions",
      "144-chord template-matching recognizer",
      "Works from a YouTube link",
      "Flask audio-processing backend with a React front end",
    ],
    stack: [
      ["Flask", "Audio download and analysis API"],
      ["React", "Chord timeline UI"],
      ["Audio DSP", "Chroma features and template matching"],
    ],
  },
  "FB Album Kit": {
    tagline: "Download your own Facebook albums",
    overview:
      "A Chrome/Edge extension (Manifest V3) that downloads your own Facebook albums as individual files or a single ZIP. The ZIP writer is hand-written with no dependencies, and the logic is covered by Node tests.",
    features: [
      "Download an album as files or one ZIP",
      "Dependency-free ZIP writer",
      "Manifest V3 extension for Chrome and Edge",
      "Unit tests run with Node",
    ],
    stack: [
      ["JavaScript", "Extension and ZIP logic"],
      ["Manifest V3", "Chrome/Edge extension platform"],
      ["Node", "Test runner"],
    ],
  },
  SmartPlanner: {
    tagline: "Object-oriented personal organiser in C++",
    overview:
      "A personal planner written in C++ and structured around encapsulated task and schedule classes, built to practise clean object-oriented design.",
    features: [
      "Encapsulated Task and Schedule classes",
      "Object-oriented design with clear responsibilities",
    ],
    stack: [
      ["C++", "Implementation language"],
      ["OOP", "Encapsulation and class design"],
    ],
  },
};
