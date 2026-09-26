import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Login from "./Login.jsx";
import { useSiteContent } from "./useSiteContent.js";
import HeroEditor from "./sections/HeroEditor.jsx";
import AboutEditor from "./sections/AboutEditor.jsx";
import ProjectsEditor from "./sections/ProjectsEditor.jsx";
import WorkEditor from "./sections/WorkEditor.jsx";
import EducationEditor from "./sections/EducationEditor.jsx";
import CertificationsEditor from "./sections/CertificationsEditor.jsx";
import SkillsEditor from "./sections/SkillsEditor.jsx";
import MusicEditor from "./sections/MusicEditor.jsx";
import ContactEditor from "./sections/ContactEditor.jsx";

const TABS = [
  { key: "hero", label: "Hero" },
  { key: "about", label: "About" },
  { key: "projects", label: "Projects" },
  { key: "work", label: "Experience" },
  { key: "education", label: "Education" },
  { key: "certifications", label: "Certifications" },
  { key: "skillGroups", label: "Skills" },
  { key: "music", label: "Music" },
  { key: "contactLinks", label: "Contact" },
];

export default function AdminApp() {
  const [session, setSession] = useState(undefined);
  const [tab, setTab] = useState(TABS[0].key);
  const { content, loading, error, saveSection } = useSiteContent();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => setSession(newSession));
    return () => sub.subscription.unsubscribe();
  }, []);

  if (session === undefined) return <p className="admin-loading">Loading…</p>;
  if (!session) return <Login />;

  return (
    <div className="admin-shell">
      <header className="admin-header">
        <div className="admin-brand">
          <span className="admin-brand-badge">LL</span>
          <span className="admin-brand-title">Admin</span>
        </div>
        <div className="admin-header-right">
          <span>{session.user.email}</span>
          <button onClick={() => supabase.auth.signOut()}>Sign out</button>
        </div>
      </header>
      <div className="admin-body">
        <nav className="admin-sidebar">
          {TABS.map((t) => (
            <button key={t.key} className={`admin-tab${tab === t.key ? " active" : ""}`} onClick={() => setTab(t.key)}>
              {t.label}
            </button>
          ))}
          <a className="admin-tab admin-tab-link" href="/" target="_blank" rel="noopener noreferrer">
            View live site ↗
          </a>
        </nav>
        <main className="admin-main">
          {loading && <p>Loading content…</p>}
          {error && <p className="admin-error">{error}</p>}
          {content && tab === "hero" && <HeroEditor hero={content.hero} onSave={(v) => saveSection("hero", v)} />}
          {content && tab === "about" && <AboutEditor about={content.about} onSave={(v) => saveSection("about", v)} />}
          {content && tab === "projects" && <ProjectsEditor items={content.projects} onSave={(v) => saveSection("projects", v)} />}
          {content && tab === "work" && <WorkEditor items={content.work} onSave={(v) => saveSection("work", v)} />}
          {content && tab === "education" && <EducationEditor items={content.education} onSave={(v) => saveSection("education", v)} />}
          {content && tab === "certifications" && (
            <CertificationsEditor items={content.certifications} onSave={(v) => saveSection("certifications", v)} />
          )}
          {content && tab === "skillGroups" && <SkillsEditor groups={content.skillGroups} onSave={(v) => saveSection("skillGroups", v)} />}
          {content && tab === "music" && <MusicEditor music={content.music} onSave={(v) => saveSection("music", v)} />}
          {content && tab === "contactLinks" && (
            <ContactEditor items={content.contactLinks} onSave={(v) => saveSection("contactLinks", v)} />
          )}
        </main>
      </div>
    </div>
  );
}
