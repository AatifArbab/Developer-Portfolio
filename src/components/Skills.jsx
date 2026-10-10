const skillGroups = [
  {
    id: 1,
    icon: "💻",
    title: "Frontend",
    description: "Building fast, interactive and user-friendly interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: 2,
    icon: "🎨",
    title: "Styling",
    description: "Clean, modern and fully responsive designs.",
    skills: ["CSS3", "Flexbox", "Grid", "Responsive Design"],
  },
  {
    id: 3,
    icon: "🛠️",
    title: "Tools",
    description: "Everyday tools for a smooth development workflow.",
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
  },
  {
    id: 4,
    icon: "📚",
    title: "Learning",
    description: "Currently growing my backend knowledge.",
    skills: ["Node.js", "Express", "APIs"],
  },
];

// Levels (0-100) apni marzi se change kar lein
const topSkills = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 80 },
  { name: "Git & GitHub", level: 75 },
  { name: "Node.js & Express", level: 50 },
];

export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <style>{css}</style>

      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />

      <div style={styles.container}>
        <span style={styles.badge}>What I Do</span>
        <h2 style={styles.title}>
          My <span style={styles.titleAccent}>Skills</span>
        </h2>
        <p style={styles.subtitle}>Technologies I work with every day</p>

        {/* Skill cards */}
        <div style={styles.grid}>
          {skillGroups.map((group, index) => (
            <div
              key={group.id}
              className="skill-card"
              style={{ ...styles.card, animationDelay: `${index * 0.1}s` }}
            >
              <div style={styles.iconBox}>{group.icon}</div>
              <h3 style={styles.cardTitle}>{group.title}</h3>
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

        {/* Progress bars */}
        <div style={styles.barsWrapper}>
          <h3 style={styles.barsTitle}>Proficiency</h3>

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
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes growBar {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }

  .skill-card {
    animation: fadeUp 0.6s ease both;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }
  .skill-card:hover {
    transform: translateY(-8px);
    border-color: rgba(56, 189, 248, 0.6) !important;
    box-shadow: 0 20px 45px rgba(56, 189, 248, 0.18) !important;
  }

  .skill-tag {
    transition: all 0.2s ease;
  }
  .skill-tag:hover {
    background: rgba(56, 189, 248, 0.2) !important;
    color: #38bdf8 !important;
  }

  .bar-fill {
    transform-origin: left;
    animation: growBar 1.2s ease both;
  }

  @media (max-width: 600px) {
    #skills h2 { font-size: 36px !important; }
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
    right: "-120px",
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
    left: "-120px",
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
    maxWidth: "1100px",
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
    marginBottom: "50px",
    fontSize: "18px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "25px",
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

  iconBox: {
    width: "54px",
    height: "54px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px",
    borderRadius: "14px",
    background: "rgba(56, 189, 248, 0.12)",
    border: "1px solid rgba(56, 189, 248, 0.25)",
    marginBottom: "18px",
  },

  cardTitle: {
    fontSize: "21px",
    fontWeight: "700",
    margin: "0 0 8px",
    color: "#f1f5f9",
  },

  cardText: {
    color: "#94a3b8",
    fontSize: "14.5px",
    lineHeight: "1.6",
    margin: "0 0 18px",
    flexGrow: 1,
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  tag: {
    fontSize: "12.5px",
    color: "#cbd5e1",
    background: "rgba(148, 163, 184, 0.12)",
    padding: "5px 11px",
    borderRadius: "8px",
    cursor: "default",
  },

  barsWrapper: {
    marginTop: "60px",
    padding: "35px",
    borderRadius: "20px",
    background: "rgba(15, 23, 42, 0.85)",
    border: "1px solid rgba(56, 189, 248, 0.2)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    textAlign: "left",
  },

  barsTitle: {
    fontSize: "22px",
    fontWeight: "700",
    margin: "0 0 25px",
    color: "#f1f5f9",
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
    fontSize: "15px",
    fontWeight: "600",
    color: "#e2e8f0",
  },

  barPercent: {
    fontSize: "14px",
    color: "#38bdf8",
    fontWeight: "600",
  },

  barTrack: {
    height: "10px",
    borderRadius: "999px",
    background: "rgba(148, 163, 184, 0.15)",
    overflow: "hidden",
  },

  barFill: {
    height: "100%",
    borderRadius: "999px",
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
  },
};