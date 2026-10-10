import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "ZahidRajper.com",
    category: "Portfolio",
    icon: "👨‍💻",
    description:
      "A modern personal portfolio website built with React, featuring a clean UI, smooth sections and a fully responsive layout.",
    tags: ["React", "Responsive", "Portfolio"],
    url: "https://zahidrajper.com",
  },
  {
    id: 2,
    title: "Royal Law Associates",
    category: "Business",
    icon: "⚖️",
    description:
      "A professional law firm website presenting practice areas, team and contact details with a trustworthy, elegant design.",
    tags: ["Law Firm", "Business", "Responsive"],
    url: "https://royallawassociates.com",
  },
  {
    id: 3,
    title: "Sindh Indigenous Rights Alliance",
    category: "Non-Profit",
    icon: "🌍",
    description:
      "An awareness and advocacy website for the Sindh Indigenous Rights Alliance, built to share its mission, work and community voice.",
    tags: ["Non-Profit", "Vercel", "Advocacy"],
    url: "https://sindh-indegenous-rights-alliance.vercel.app/",
  },
  {
    id: 4,
    title: "Landing Page",
    category: "Web App",
    icon: "🚀",
    description:
      "A responsive landing page with a modern UI, smooth animations and clear call-to-action sections.",
    tags: ["React", "Animations", "Vercel"],
    url: "https://aatifarbab.vercel.app",
  },
  {
    id: 5,
    title: "Todo App",
    category: "Web App",
    icon: "✅",
    description:
      "A React todo application with add, delete and update features to manage daily tasks easily.",
    tags: ["React", "CRUD", "State"],
    url: "", // apna todo app ka link yahan daal dein
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

      {/* background glow */}
      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />

      <div style={styles.container}>
        <span style={styles.badge}>Portfolio</span>
        <h2 style={styles.title}>
          My <span style={styles.titleAccent}>Projects</span>
        </h2>
        <p style={styles.subtitle}>
          Some of the work I have designed and built with passion
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

        {/* Cards */}
        <div style={styles.grid}>
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ ...styles.card, animationDelay: `${index * 0.1}s` }}
            >
              <div style={styles.cardTop}>
                <div style={styles.iconBox}>{project.icon}</div>
                <span style={styles.category}>{project.category}</span>
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
                  View Project <span style={styles.arrow}>→</span>
                </a>
              ) : (
                <span style={styles.buttonDisabled}>Coming Soon</span>
              )}
            </div>
          ))}
        </div>

        <p style={styles.footerNote}>
          More projects are on the way. Stay tuned! ✨
        </p>
      </div>
    </section>
  );
}

const css = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .project-card {
    animation: fadeUp 0.6s ease both;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }
  .project-card:hover {
    transform: translateY(-8px);
    border-color: rgba(56, 189, 248, 0.6) !important;
    box-shadow: 0 20px 45px rgba(56, 189, 248, 0.18) !important;
  }

  .view-btn {
    transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  }
  .view-btn:hover {
    transform: translateY(-2px);
    filter: brightness(1.08);
    box-shadow: 0 8px 20px rgba(56, 189, 248, 0.4);
  }

  .filter-btn {
    transition: all 0.25s ease;
  }
  .filter-btn:hover {
    border-color: #38bdf8 !important;
    color: #38bdf8 !important;
  }

  @media (max-width: 600px) {
    #projects h2 { font-size: 36px !important; }
  }
`;

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 20px",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  },

  glowOne: {
    position: "absolute",
    top: "-120px",
    left: "-120px",
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    background: "rgba(56, 189, 248, 0.15)",
    filter: "blur(90px)",
    pointerEvents: "none",
  },

  glowTwo: {
    position: "absolute",
    bottom: "-120px",
    right: "-120px",
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    background: "rgba(129, 140, 248, 0.15)",
    filter: "blur(90px)",
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
    borderRadius: "999px",
    background: "rgba(56, 189, 248, 0.12)",
    border: "1px solid rgba(56, 189, 248, 0.3)",
    color: "#38bdf8",
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "1px",
    textTransform: "uppercase",
    marginBottom: "16px",
  },

  title: {
    fontSize: "50px",
    fontWeight: "800",
    margin: "0 0 10px",
  },

  titleAccent: {
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    color: "#94a3b8",
    marginBottom: "35px",
    fontSize: "18px",
  },

  filters: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "45px",
  },

  filterBtn: {
    padding: "9px 20px",
    borderRadius: "999px",
    border: "1px solid rgba(148, 163, 184, 0.3)",
    background: "transparent",
    color: "#cbd5e1",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },

  filterBtnActive: {
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
    border: "1px solid transparent",
    color: "#0f172a",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "28px",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    background: "rgba(15, 23, 42, 0.85)",
    backdropFilter: "blur(10px)",
    padding: "30px",
    borderRadius: "20px",
    border: "1px solid rgba(56, 189, 248, 0.2)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    textAlign: "left",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "18px",
  },

  iconBox: {
    width: "52px",
    height: "52px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px",
    borderRadius: "14px",
    background: "rgba(56, 189, 248, 0.12)",
    border: "1px solid rgba(56, 189, 248, 0.25)",
  },

  category: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#818cf8",
    background: "rgba(129, 140, 248, 0.12)",
    padding: "5px 12px",
    borderRadius: "999px",
  },

  cardTitle: {
    fontSize: "22px",
    fontWeight: "700",
    margin: "0 0 10px",
    color: "#f1f5f9",
  },

  cardText: {
    color: "#94a3b8",
    fontSize: "15px",
    lineHeight: "1.65",
    margin: "0 0 18px",
    flexGrow: 1,
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "22px",
  },

  tag: {
    fontSize: "12px",
    color: "#cbd5e1",
    background: "rgba(148, 163, 184, 0.12)",
    padding: "4px 10px",
    borderRadius: "6px",
  },

  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "12px 18px",
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
    color: "#0f172a",
    textDecoration: "none",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "15px",
    cursor: "pointer",
  },

  buttonDisabled: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 18px",
    background: "rgba(148, 163, 184, 0.15)",
    color: "#94a3b8",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "15px",
    cursor: "not-allowed",
  },

  arrow: {
    fontSize: "18px",
  },

  footerNote: {
    marginTop: "50px",
    color: "#64748b",
    fontSize: "15px",
  },
};