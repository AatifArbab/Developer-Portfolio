import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "ZahidRajper.com",
    category: "Portfolio",
    badgeText: "Client Portfolio",
    description:
      "A modern personal portfolio website built with React, featuring a clean UI, smooth sections and a fully responsive layout.",
    tags: ["React", "Responsive", "Portfolio"],
    url: "https://zahidrajper.com",
  },
  {
    id: 2,
    title: "Royal Law Associates",
    category: "Business",
    badgeText: "Law Firm Web",
    description:
      "A professional law firm website presenting practice areas, team and contact details with a trustworthy, elegant design.",
    tags: ["Law Firm", "Business", "Responsive"],
    url: "https://royallawassociates.com",
  },
  {
    id: 3,
    title: "Sindh Indigenous Rights Alliance",
    category: "Non-Profit",
    badgeText: "Advocacy Platform",
    description:
      "An awareness and advocacy website for the Sindh Indigenous Rights Alliance, built to share its mission, work and community voice.",
    tags: ["Non-Profit", "Vercel", "Advocacy"],
    url: "https://sindh-indegenous-rights-alliance.vercel.app/",
  },
  {
    id: 4,
    title: "Aatif Arbab Portfolio",
    category: "Web App",
    badgeText: "Personal v2",
    description:
      "A responsive professional landing page showcasing modern React architecture, clean UI design, and smooth interactions.",
    tags: ["React", "Animations", "Vercel"],
    url: "https://aatifarbab.vercel.app",
  },
  {
    id: 5,
    title: "Task Manager App",
    category: "Web App",
    badgeText: "Productivity",
    description:
      "A dynamic React task management application featuring CRUD operations, persistent local state, and clean UI components.",
    tags: ["React", "State Management", "CRUD"],
    url: "", 
  },
];

const categories = ["All", "Portfolio", "Business", "Non-Profit", "Web App"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" style={styles.section}>
      <style>{css}</style>

      {/* Atmospheric Glows */}
      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />

      <div style={styles.container}>
        <span style={styles.badge}>Portfolio</span>
        <h2 style={styles.title}>
          Featured <span style={styles.titleAccent}>Projects</span>
        </h2>
        <p style={styles.subtitle}>
          Real-world web applications and client platforms engineered with care
        </p>

        {/* Filter tabs */}
        <div style={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className="filter-btn"
              onClick={() => setActive(cat)}
              style={{
                ...styles.filterBtn,
                ...(active === cat ? styles.filterBtnActive : {}),
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div style={styles.grid}>
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ ...styles.card, animationDelay: `${index * 0.1}s` }}
            >
              <div style={styles.cardTop}>
                <span style={styles.projectNumber}>0{project.id}</span>
                <span style={styles.categoryBadge}>{project.badgeText}</span>
              </div>

              <h3 style={styles.cardTitle}>{project.title}</h3>
              <p style={styles.cardText}>{project.description}</p>

              <div style={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} style={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                  style={styles.button}
                >
                  <span>Live Preview</span> <span style={styles.arrow}>↗</span>
                </a>
              ) : (
                <span style={styles.buttonDisabled}>In Development</span>
              )}
            </div>
          ))}
        </div>

        <p style={styles.footerNote}>
          More full-stack applications coming soon. Stay tuned! ✨
        </p>
      </div>
    </section>
  );
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  #projects {
    font-family: 'Plus Jakarta Sans', sans-serif !important;
  }

  .project-card {
    animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .project-card:hover {
    transform: translateY(-6px);
    border-color: rgba(56, 189, 248, 0.4) !important;
    background: rgba(15, 23, 42, 0.95) !important;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(56, 189, 248, 0.1) !important;
  }

  .view-btn {
    transition: all 0.25s ease;
  }
  .view-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(56, 189, 248, 0.3);
  }

  .filter-btn {
    transition: all 0.25s ease;
  }
  .filter-btn:hover {
    border-color: rgba(56, 189, 248, 0.5) !important;
    color: #38bdf8 !important;
  }

  @media (max-width: 600px) {
    #projects h2 { font-size: 32px !important; }
  }
`;

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 20px",
    background: "#0b1220",
    color: "white",
  },

  glowOne: {
    position: "absolute",
    top: "-100px",
    left: "-100px",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "rgba(56, 189, 248, 0.1)",
    filter: "blur(120px)",
    pointerEvents: "none",
  },

  glowTwo: {
    position: "absolute",
    bottom: "-100px",
    right: "-100px",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "rgba(129, 140, 248, 0.1)",
    filter: "blur(120px)",
    pointerEvents: "none",
  },

  container: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1150px",
    width: "100%",
    textAlign: "center",
  },

  badge: {
    display: "inline-block",
    padding: "6px 16px",
    borderRadius: "8px",
    background: "rgba(56, 189, 248, 0.1)",
    border: "1px solid rgba(56, 189, 248, 0.3)",
    color: "#38bdf8",
    fontSize: "12.5px",
    fontWeight: "700",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    marginBottom: "16px",
    fontFamily: "'JetBrains Mono', monospace",
  },

  title: {
    fontSize: "44px",
    fontWeight: "800",
    margin: "0 0 10px",
    letterSpacing: "-1px",
  },

  titleAccent: {
    background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    color: "#94a3b8",
    marginBottom: "35px",
    fontSize: "17px",
    fontWeight: "500",
    letterSpacing: "-0.2px",
  },

  filters: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "40px",
  },

  filterBtn: {
    padding: "8px 18px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    background: "rgba(15, 23, 42, 0.6)",
    color: "#cbd5e1",
    fontSize: "13.5px",
    fontWeight: "600",
    cursor: "pointer",
  },

  filterBtnActive: {
    background: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
    border: "1px solid transparent",
    color: "#0b1220",
    boxShadow: "0 4px 15px rgba(56, 189, 248, 0.25)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
    textAlign: "left",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    background: "rgba(15, 23, 42, 0.75)",
    backdropFilter: "blur(16px)",
    padding: "28px",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },

  projectNumber: {
    fontSize: "12.5px",
    fontFamily: "'JetBrains Mono', monospace",
    color: "#38bdf8",
    fontWeight: "700",
    background: "rgba(56, 189, 248, 0.1)",
    padding: "4px 8px",
    borderRadius: "6px",
  },

  categoryBadge: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#818cf8",
    background: "rgba(129, 140, 248, 0.1)",
    padding: "4px 10px",
    borderRadius: "6px",
    border: "1px solid rgba(129, 140, 248, 0.2)",
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: "700",
    margin: "0 0 10px",
    color: "#f8fafc",
    letterSpacing: "-0.3px",
  },

  cardText: {
    color: "#94a3b8",
    fontSize: "14.5px",
    lineHeight: "1.7",
    margin: "0 0 20px",
    flexGrow: 1,
    fontWeight: "400",
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "24px",
  },

  tag: {
    fontSize: "12px",
    color: "#cbd5e1",
    background: "rgba(30, 41, 59, 0.6)",
    padding: "4px 10px",
    borderRadius: "6px",
    border: "1px solid rgba(255, 255, 255, 0.06)",
    fontWeight: "600",
  },

  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "11px 20px",
    background: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
    color: "#0b1220",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
  },

  buttonDisabled: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "11px 20px",
    background: "rgba(30, 41, 59, 0.4)",
    color: "#64748b",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "14px",
    border: "1px solid rgba(255, 255, 255, 0.04)",
    cursor: "not-allowed",
  },

  arrow: {
    fontSize: "16px",
    fontWeight: "bold",
  },

  footerNote: {
    marginTop: "45px",
    color: "#64748b",
    fontSize: "14.5px",
  },
};