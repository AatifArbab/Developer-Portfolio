const skillGroups = [
  {
    id: 1,
    title: "Frontend Architecture",
    description: "Building responsive, component-driven user interfaces with modern React ecosystems.",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Vite"],
  },
  {
    id: 2,
    title: "Styling & UI Systems",
    description: "Crafting polished, clean, and fully adaptable layouts with modern CSS workflows.",
    skills: ["Tailwind CSS", "Flexbox", "CSS Grid", "Responsive Design", "Framer Motion"],
  },
  {
    id: 3,
    title: "Tools & Workflow",
    description: "Using standard industry tooling for seamless version control and rapid deployments.",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Chrome DevTools"],
  },
  {
    id: 4,
    title: "Backend & Database",
    description: "Expanding capabilities into server-side logic, APIs, and relational databases.",
    skills: ["Node.js", "Express.js", "Supabase", "PostgreSQL", "REST APIs"],
  },
];

const topSkills = [
  { name: "React.js & Frontend", level: 88 },
  { name: "JavaScript / ES6+", level: 82 },
  { name: "Tailwind CSS & Styling", level: 90 },
  { name: "Git & Version Control", level: 78 },
  { name: "Node.js & Backend Basics", level: 60 },
];

export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <style>{css}</style>

      {/* Atmospheric Glows */}
      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />

      <div style={styles.container}>
        <span style={styles.badge}>Expertise</span>
        <h2 style={styles.title}>
          Core <span style={styles.titleAccent}>Skills</span>
        </h2>
        <p style={styles.subtitle}>Technologies and tools I leverage to build digital solutions</p>

        {/* Skill Cards Grid */}
        <div style={styles.grid}>
          {skillGroups.map((group, index) => (
            <div
              key={group.id}
              className="skill-card"
              style={{ ...styles.card, animationDelay: `${index * 0.1}s` }}
            >
              <div style={styles.cardHeader}>
                <span style={styles.cardId}>0{group.id}</span>
                <h3 style={styles.cardTitle}>{group.title}</h3>
              </div>
              
              <p style={styles.cardText}>{group.description}</p>

              <div style={styles.tags}>
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag" style={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Progress Section */}
        <div style={styles.barsWrapper}>
          <div style={styles.barsHeaderRow}>
            <h3 style={styles.barsTitle}>Technical Proficiency</h3>
            <span style={styles.barsSubtitle}>Estimated skill metrics</span>
          </div>

          {topSkills.map((item, index) => (
            <div key={item.name} style={styles.barItem}>
              <div style={styles.barHeader}>
                <span style={styles.barName}>{item.name}</span>
                <span style={styles.barPercent}>{item.level}%</span>
              </div>
              <div style={styles.barTrack}>
                <div
                  className="bar-fill"
                  style={{
                    ...styles.barFill,
                    width: `${item.level}%`,
                    animationDelay: `${index * 0.15}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
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

  @keyframes growBar {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }

  #skills {
    font-family: 'Plus Jakarta Sans', sans-serif !important;
  }

  .skill-card {
    animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .skill-card:hover {
    transform: translateY(-6px);
    border-color: rgba(56, 189, 248, 0.4) !important;
    background: rgba(15, 23, 42, 0.95) !important;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(56, 189, 248, 0.1) !important;
  }

  .skill-tag {
    transition: all 0.2s ease;
  }
  .skill-tag:hover {
    background: rgba(56, 189, 248, 0.15) !important;
    color: #38bdf8 !important;
    border-color: rgba(56, 189, 248, 0.3) !important;
  }

  .bar-fill {
    transform-origin: left;
    animation: growBar 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  @media (max-width: 600px) {
    #skills h2 { font-size: 32px !important; }
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
    right: "-100px",
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
    left: "-100px",
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
    marginBottom: "45px",
    fontSize: "17px",
    fontWeight: "500",
    letterSpacing: "-0.2px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
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
    textAlign: "left",
  },

  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "14px",
  },

  cardId: {
    fontSize: "12.5px",
    fontFamily: "'JetBrains Mono', monospace",
    color: "#38bdf8",
    fontWeight: "700",
    background: "rgba(56, 189, 248, 0.1)",
    padding: "4px 8px",
    borderRadius: "6px",
  },

  cardTitle: {
    fontSize: "18px",
    fontWeight: "700",
    margin: 0,
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
  },

  tag: {
    fontSize: "12px",
    color: "#cbd5e1",
    background: "rgba(30, 41, 59, 0.6)",
    padding: "5px 10px",
    borderRadius: "6px",
    border: "1px solid rgba(255, 255, 255, 0.06)",
    fontWeight: "600",
  },

  barsWrapper: {
    marginTop: "50px",
    padding: "35px",
    borderRadius: "16px",
    background: "rgba(15, 23, 42, 0.75)",
    backdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    textAlign: "left",
  },

  barsHeaderRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
    flexWrap: "wrap",
    gap: "10px",
  },

  barsTitle: {
    fontSize: "20px",
    fontWeight: "700",
    margin: 0,
    color: "#f8fafc",
    letterSpacing: "-0.3px",
  },

  barsSubtitle: {
    fontSize: "13px",
    color: "#64748b",
    fontFamily: "'JetBrains Mono', monospace",
  },

  barItem: {
    marginBottom: "20px",
  },

  barHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },

  barName: {
    fontSize: "14.5px",
    fontWeight: "600",
    color: "#e2e8f0",
  },

  barPercent: {
    fontSize: "13.5px",
    color: "#38bdf8",
    fontWeight: "700",
    fontFamily: "'JetBrains Mono', monospace",
  },

  barTrack: {
    height: "8px",
    borderRadius: "999px",
    background: "rgba(30, 41, 59, 0.8)",
    overflow: "hidden",
    border: "1px solid rgba(255, 255, 255, 0.04)",
  },

  barFill: {
    height: "100%",
    borderRadius: "999px",
    background: "linear-gradient(90deg, #38bdf8 0%, #818cf8 100%)",
  },
};