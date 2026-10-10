const infoItems = [
  { icon: "🎓", title: "Education", value: "Computer Science" },
  { icon: "💻", title: "Focus", value: "React JS" },
  { icon: "🚀", title: "Goal", value: "Full Stack Developer" },
];

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <style>{css}</style>

      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />

      <div style={styles.container}>
        {/* Left: Image */}
        <div style={styles.imageContainer}>
          <div className="image-ring" style={styles.imageRing}>
            <img
              src="/Atif.jpg"
              alt="Aatif Arbab"
              style={styles.image}
            />
          </div>
        </div>

        {/* Right: Content */}
        <div style={styles.content}>
          <span style={styles.badge}>About Me</span>

          <h2 style={styles.title}>
            Hi, I'm <span style={styles.titleAccent}>Aatif Arbab</span>
          </h2>

          <p style={styles.subtitle}>
            Frontend React Developer &amp; Computer Science Student
          </p>

          <p style={styles.text}>
            I am a passionate{" "}
            <span style={styles.highlight}>Frontend React Developer</span>{" "}
            who loves learning modern web technologies to build responsive and
            visually appealing websites.
          </p>

          <p style={styles.text}>
            I am currently pursuing a degree in Computer Science and specialize
            in <span style={styles.highlight}>React.js, JavaScript, HTML and CSS</span>.
            I enjoy solving problems and creating digital solutions that give
            users a great experience.
          </p>

          <p style={styles.text}>
            My goal is to grow into a professional{" "}
            <span style={styles.highlight}>Full Stack Developer</span>, work on
            impactful projects and keep improving my technical and creative
            skills. I believe dedication, consistency and continuous learning
            are the keys to success in technology.
          </p>

          {/* Info cards */}
          <div style={styles.infoBox}>
            {infoItems.map((item) => (
              <div key={item.title} className="info-card" style={styles.infoItem}>
                <div style={styles.infoIcon}>{item.icon}</div>
                <h3 style={styles.infoTitle}>{item.title}</h3>
                <p style={styles.infoValue}>{item.value}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={styles.buttons}>
            <a href="#projects" className="primary-btn" style={styles.primaryBtn}>
              View My Work
            </a>
            <a href="#contact" className="secondary-btn" style={styles.secondaryBtn}>
              Contact Me
            </a>
          </div>
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

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-10px); }
  }

  #about h2, #about p {
    animation: fadeUp 0.6s ease both;
  }

  .image-ring {
    animation: float 4s ease-in-out infinite;
  }

  .info-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }
  .info-card:hover {
    transform: translateY(-6px);
    border-color: rgba(56, 189, 248, 0.6) !important;
    box-shadow: 0 15px 35px rgba(56, 189, 248, 0.18) !important;
  }

  .primary-btn, .secondary-btn {
    transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  }
  .primary-btn:hover {
    transform: translateY(-2px);
    filter: brightness(1.08);
    box-shadow: 0 8px 20px rgba(56, 189, 248, 0.4);
  }
  .secondary-btn:hover {
    transform: translateY(-2px);
    background: rgba(56, 189, 248, 0.12) !important;
  }

  @media (max-width: 800px) {
    #about h2 { font-size: 34px !important; }
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
    maxWidth: "1100px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "60px",
    flexWrap: "wrap",
  },

  imageContainer: {
    flex: 1,
    minWidth: "280px",
    display: "flex",
    justifyContent: "center",
  },

  imageRing: {
    padding: "6px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #38bdf8, #818cf8)",
    boxShadow: "0 0 40px rgba(56, 189, 248, 0.35)",
  },

  image: {
    display: "block",
    width: "320px",
    height: "320px",
    maxWidth: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    border: "6px solid #0f172a",
  },

  content: {
    flex: 2,
    minWidth: "300px",
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
    fontSize: "44px",
    fontWeight: "800",
    margin: "0 0 8px",
  },

  titleAccent: {
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: "18px",
    marginBottom: "24px",
  },

  text: {
    color: "#cbd5e1",
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "16px",
  },

  highlight: {
    color: "#38bdf8",
    fontWeight: "700",
  },

  infoBox: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    marginTop: "28px",
  },

  infoItem: {
    flex: 1,
    minWidth: "150px",
    background: "rgba(15, 23, 42, 0.85)",
    backdropFilter: "blur(10px)",
    padding: "20px 15px",
    borderRadius: "16px",
    border: "1px solid rgba(56, 189, 248, 0.2)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    textAlign: "center",
  },

  infoIcon: {
    fontSize: "26px",
    marginBottom: "8px",
  },

  infoTitle: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#38bdf8",
    margin: "0 0 4px",
  },

  infoValue: {
    fontSize: "14.5px",
    color: "#e2e8f0",
    margin: 0,
  },

  buttons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginTop: "30px",
  },

  primaryBtn: {
    padding: "12px 26px",
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
    color: "#0f172a",
    textDecoration: "none",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "15px",
  },

  secondaryBtn: {
    padding: "12px 26px",
    background: "transparent",
    color: "#38bdf8",
    textDecoration: "none",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "15px",
    border: "1px solid rgba(56, 189, 248, 0.5)",
  },
};