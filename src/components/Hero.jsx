import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "React Developer",
  "UI/UX Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Har 2.5 second baad role badalta hai
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" style={styles.hero}>
      <style>{css}</style>

      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />

      <div style={styles.container}>
        {/* Left: Content */}
        <div style={styles.content}>
          <span className="fade-item" style={styles.tag}>
            <span style={styles.dot} /> Welcome to my portfolio
          </span>

          <h1 className="fade-item delay-1" style={styles.title}>
            Hi, I'm <span style={styles.name}>Aatif Arbab</span>
          </h1>

          <h3 className="fade-item delay-2" style={styles.subtitle}>
            I am a{" "}
            <span key={roleIndex} className="role-text" style={styles.role}>
              {roles[roleIndex]}
            </span>
          </h3>

          <p className="fade-item delay-3" style={styles.desc}>
            I specialize in building modern, responsive and user-friendly web
            applications using React.js, JavaScript, HTML and CSS. My goal is
            to create visually appealing interfaces with smooth user
            experiences and clean, maintainable code.
          </p>

          <p className="fade-item delay-3" style={styles.desc}>
            As a Computer Science student and passionate developer, I am
            constantly learning new technologies and improving my skills to
            build innovative digital solutions that make an impact.
          </p>

          <div className="fade-item delay-4" style={styles.buttons}>
            <a href="#projects" className="primary-btn" style={styles.primaryBtn}>
              View My Work
            </a>
            <a href="#contact" className="secondary-btn" style={styles.secondaryBtn}>
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div style={styles.imageContainer}>
          <div className="image-ring" style={styles.imageRing}>
            <img
              src="/image.png"
              alt="Aatif Arbab"
              style={styles.image}
            />
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
    50%      { transform: translateY(-12px); }
  }

  @keyframes roleIn {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%      { opacity: 0.5; transform: scale(1.4); }
  }

  .fade-item { animation: fadeUp 0.7s ease both; }
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.3s; }
  .delay-4 { animation-delay: 0.4s; }

  .role-text {
    display: inline-block;
    animation: roleIn 0.5s ease both;
  }

  .image-ring { animation: float 4s ease-in-out infinite; }

  .primary-btn, .secondary-btn {
    transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease, background 0.2s ease;
  }
  .primary-btn:hover {
    transform: translateY(-3px);
    filter: brightness(1.08);
    box-shadow: 0 10px 25px rgba(56, 189, 248, 0.4);
  }
  .secondary-btn:hover {
    transform: translateY(-3px);
    background: rgba(56, 189, 248, 0.12) !important;
  }

  @media (max-width: 900px) {
    #home h1 { font-size: 44px !important; }
    #home h3 { font-size: 20px !important; }
  }
`;

const styles = {
  hero: {
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
    width: "380px",
    height: "380px",
    borderRadius: "50%",
    background: "rgba(56, 189, 248, 0.16)",
    filter: "blur(100px)",
    pointerEvents: "none",
  },

  glowTwo: {
    position: "absolute",
    bottom: "-140px",
    right: "-120px",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "rgba(129, 140, 248, 0.16)",
    filter: "blur(100px)",
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
    gap: "60px",
    flexWrap: "wrap-reverse",
  },

  content: {
    flex: 1,
    minWidth: "300px",
    maxWidth: "620px",
  },

  tag: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "7px 16px",
    borderRadius: "999px",
    background: "rgba(56, 189, 248, 0.12)",
    border: "1px solid rgba(56, 189, 248, 0.3)",
    color: "#38bdf8",
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    marginBottom: "22px",
  },

  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#38bdf8",
    animation: "pulse 1.8s ease-in-out infinite",
  },

  title: {
    fontSize: "64px",
    fontWeight: "800",
    margin: "0 0 12px",
    lineHeight: "1.1",
  },

  name: {
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    fontSize: "24px",
    fontWeight: "500",
    color: "#cbd5e1",
    margin: "0 0 22px",
    minHeight: "34px",
  },

  role: {
    color: "#38bdf8",
    fontWeight: "700",
  },

  desc: {
    fontSize: "17px",
    color: "#94a3b8",
    lineHeight: "1.8",
    margin: "0 0 14px",
  },

  buttons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginTop: "28px",
  },

  primaryBtn: {
    padding: "14px 30px",
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
    color: "#0f172a",
    textDecoration: "none",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "15px",
  },

  secondaryBtn: {
    padding: "14px 30px",
    background: "transparent",
    color: "#38bdf8",
    textDecoration: "none",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "15px",
    border: "1px solid rgba(56, 189, 248, 0.5)",
  },

  imageContainer: {
    flex: 1,
    minWidth: "280px",
    display: "flex",
    justifyContent: "center",
  },

  imageRing: {
    padding: "7px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #38bdf8, #818cf8)",
    boxShadow: "0 0 50px rgba(56, 189, 248, 0.4)",
  },

  image: {
    display: "block",
    width: "380px",
    height: "380px",
    maxWidth: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    border: "6px solid #0f172a",
  },
};