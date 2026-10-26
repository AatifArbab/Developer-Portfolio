const infoItems = [
  { label: "Education", value: "BS Computer Science", sub: "SMIU Karachi" },
  { label: "Core Focus", value: "React & Modern Web", sub: "UI Architecture" },
  { label: "Goal", value: "Full Stack Engineer", sub: "Scalable Systems" },
];

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <style>{css}</style>

      {/* Subtle Ambient Lighting */}
      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />

      <div style={styles.container}>
        {/* Left: Professional Circular Profile Display */}
        <div style={styles.imageContainer}>
          <div className="profile-card-wrapper" style={styles.profileCard}>
            <div style={styles.photoFrame}>
              <img
                src="/Aatif.jfif"
                alt="Aatif Arbab"
                style={styles.image}
              />
            </div>
            {/* Overlay Badge */}
            <div style={styles.locationTag}>
              <span style={styles.locationDot} /> Karachi, Pakistan
            </div>
          </div>
        </div>

        {/* Right: Personal Narrative */}
        <div style={styles.content}>
          <span style={styles.badge}>Biography</span>

          <h2 style={styles.title}>
            Architecting <span style={styles.titleAccent}>clean web interfaces</span> with purpose.
          </h2>

          <p style={styles.subtitle}>
            Frontend React Developer &amp; Computer Science Student
          </p>

          <p style={styles.text}>
            I’m a Computer Science undergraduate focused on crafting intuitive, high-performance web applications. My development philosophy centers around modular React architecture, clean state management, and seamless responsive design.
          </p>

          <p style={styles.text}>
            Beyond writing code, I enjoy breaking down complex problems into scalable digital solutions. Whether engineering single-page applications or collaborating on full-stack web platforms, I focus on delivering clean code that scales seamlessly.
          </p>

          {/* Structured Tech Metric Cards */}
          <div style={styles.infoGrid}>
            {infoItems.map((item) => (
              <div key={item.label} className="info-card" style={styles.infoItem}>
                <span style={styles.infoLabel}>{item.label}</span>
                <h4 style={styles.infoValue}>{item.value}</h4>
                <span style={styles.infoSub}>{item.sub}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div style={styles.buttons}>
            <a href="#projects" className="primary-btn" style={styles.primaryBtn}>
              View Selected Work
            </a>
            <a href="#contact" className="secondary-btn" style={styles.secondaryBtn}>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const css = `
  /* Import High-End Developer Fonts from Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  #about {
    font-family: 'Plus Jakarta Sans', sans-serif !important;
  }

  #about h2, #about p {
    animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .profile-card-wrapper {
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }
  .profile-card-wrapper:hover {
    transform: translateY(-4px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(56, 189, 248, 0.2) !important;
  }

  .info-card {
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .info-card:hover {
    transform: translateY(-4px);
    border-color: rgba(56, 189, 248, 0.4) !important;
    background: rgba(30, 41, 59, 0.8) !important;
  }

  .primary-btn, .secondary-btn {
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .primary-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(56, 189, 248, 0.4);
  }
  .secondary-btn:hover {
    transform: translateY(-2px);
    background: rgba(56, 189, 248, 0.12) !important;
    border-color: #38bdf8 !important;
  }

  @media (max-width: 800px) {
    #about h2 { font-size: 32px !important; }
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
    background: "rgba(56, 189, 248, 0.12)",
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
    background: "rgba(129, 140, 248, 0.12)",
    filter: "blur(120px)",
    pointerEvents: "none",
  },

  container: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1150px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "50px",
    flexWrap: "wrap",
  },

  imageContainer: {
    flex: 1,
    minWidth: "280px",
    display: "flex",
    justifyContent: "center",
  },

  profileCard: {
    position: "relative",
    padding: "12px",
    background: "rgba(15, 23, 42, 0.8)",
    border: "1px solid rgba(56, 189, 248, 0.2)",
    borderRadius: "50%",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
    width: "380px",
    height: "380px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  photoFrame: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    overflow: "hidden",
    border: "none",
  },

  image: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  locationTag: {
    position: "absolute",
    bottom: "14px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "6px 16px",
    background: "rgba(11, 18, 32, 0.95)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 1)",
    borderRadius: "20px",
    fontSize: "12.5px",
    fontWeight: "600",
    color: "#e2e8f0",
    whiteSpace: "nowrap",
    letterSpacing: "0.3px",
  },

  locationDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#38bdf8",
    boxShadow: "0 0 8px #38bdf8",
  },

  content: {
    flex: 1.4,
    minWidth: "300px",
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
    marginBottom: "18px",
    fontFamily: "'JetBrains Mono', monospace",
  },

  title: {
    fontSize: "42px",
    fontWeight: "800",
    margin: "0 0 14px",
    lineHeight: "1.15",
    letterSpacing: "-1px",
  },

  titleAccent: {
    background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: "17.5px",
    marginBottom: "22px",
    fontWeight: "600",
    letterSpacing: "-0.2px",
  },

  text: {
    color: "#cbd5e1",
    fontSize: "15.5px",
    lineHeight: "1.8",
    marginBottom: "16px",
    fontWeight: "400",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "14px",
    marginTop: "28px",
    marginBottom: "32px",
  },

  infoItem: {
    background: "rgba(15, 23, 42, 0.65)",
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
  },

  infoLabel: {
    fontSize: "11.5px",
    color: "#64748b",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.8px",
    display: "block",
    marginBottom: "6px",
    fontFamily: "'JetBrains Mono', monospace",
  },

  infoValue: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#f8fafc",
    margin: "0 0 2px",
    letterSpacing: "-0.2px",
  },

  infoSub: {
    fontSize: "12px",
    color: "#38bdf8",
    fontWeight: "600",
  },

  buttons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "13px 28px",
    background: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
    color: "#0b1220",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "14.5px",
    boxShadow: "0 4px 15px rgba(56, 189, 248, 0.25)",
    letterSpacing: "-0.2px",
  },

  secondaryBtn: {
    padding: "13px 28px",
    background: "rgba(30, 41, 59, 0.4)",
    color: "#38bdf8",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "14.5px",
    border: "1px solid rgba(56, 189, 248, 0.3)",
    letterSpacing: "-0.2px",
  },
};