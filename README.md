<div align="center">



# 💻 LAPALU LIYANAGE · PORTFOLIO

**Software Engineer + Musician**

<br/>

<a href="https://lapalu.me" target="_blank">
  <img src="https://img.shields.io/badge/🔥_VIEW_LIVE_WEBSITE-c0392b?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Website" />
</a>

<br/><br/>

*3rd Year · Rajarata University · Software Engineering* <br/>
*Building intelligent systems by day, performing on stage by night.*

</div>

---

## 🚀 The Aesthetic

This portfolio is built with a custom **cyberpunk / terminal aesthetic**. No component libraries were used — every animation, gradient, and layout is crafted with pure CSS to reflect a unique developer identity.

### Features
- **Custom Hardware Cursor**: A reactive flame cursor with a lagging border ring.
- **Intersection Observers**: Smooth fade-up reveals and automatic navbar highlighting as you scroll.
- **Real-time GitHub Stats**: Fetches and displays recent public repositories dynamically via the GitHub API.
- **Animated SVG Vectors**: A continuous, CSS-animated flame SVG built directly into the hero section.
- **Formspree Contact Form**: Fully functional contact form without needing a backend.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler**: [Vite 6](https://vitejs.dev/)
- **Styling**: Pure CSS3 (Grid, Flexbox, Keyframes, Custom Properties)
- **CI/CD**: GitHub Actions (auto-deploying `dist/` to GitHub Pages)
- **Domain**: Custom `lapalu.me` via GitHub Pages

---

## ⚡ Run Locally

1. Clone the repository
   ```bash
   git clone https://github.com/LapaluLiyanage/portfolio.git
   cd portfolio
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm run dev
   ```
4. Build for production
   ```bash
   npm run build
   ```

---

## 🔐 Admin panel

Site content (hero copy, about, projects, experience, education, certifications,
skills, music and contact links) is editable at `/admin.html`, backed by
Supabase (Postgres + Auth + Storage). GitHub-sourced project stats (stars,
last pushed) still come live from the GitHub API regardless of what's edited.

Local setup:
1. Copy `.env.example` to `.env` and fill in `VITE_SUPABASE_URL` /
   `VITE_SUPABASE_ANON_KEY` from the Supabase project dashboard.
2. `npm run dev`, visit `/admin.html`, sign in with the owner account
   (created directly in Supabase → Authentication → Users, not via any
   public sign-up flow).

The public site (`/`) fetches content from Supabase at runtime and falls
back to `src/lib/defaultContent.js` if Supabase is unreachable. Deploys
via GitHub Actions need `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
set as repository secrets (Settings → Secrets and variables → Actions).

---

<div align="center">
  <p><strong>© 2025 LAPALU LIYANAGE · BUILT WITH 🔥 + REACT</strong></p>
  <p>
    <a href="https://github.com/LapaluLiyanage">GitHub</a> •
    <a href="https://www.linkedin.com/in/lapalu-liyanage/">LinkedIn</a> •
    <a href="https://www.instagram.com/lapalu_s/">Instagram</a> •
    <a href="https://www.tiktok.com/@lapalu_0">TikTok</a>
  </p>
</div>
