import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "React & Next.js Dev",
  "UI/UX Implementation",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Changes role every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" style={styles.hero}>
      <style>{css}</style>

      {/* Atmospheric Background Glows */}
      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />

      <div style={styles.container}>
        {/* Left: Content */}
        <div style={styles.content}>
          <span className="fade-item" style={styles.tag}>
            <span style={styles.dot} /> Available for Select Projects
          </span>

          <h1 className="fade-item delay-1" style={styles.title}>
            Hi, I'm <span style={styles.name}>Aatif Arbab</span>
          </h1>

          <h3 className="fade-item delay-2" style={styles.subtitle}>
            I build things for the{" "}
            <span key={roleIndex} className="role-text" style={styles.role}>
              {roles[roleIndex]}
            </span>
          </h3>

          <p className="fade-item delay-3" style={styles.desc}>
            Computer Science undergraduate at SMIU & full-stack enthusiast. I bridge the gap between clean design logic and high-performance React architecture.
          </p>

          <div className="fade-item delay-4" style={styles.buttons}>
            <a href="#projects" className="primary-btn" style={styles.primaryBtn}>
              Explore Work
            </a>
            <a href="#contact" className="secondary-btn" style={styles.secondaryBtn}>
              Let's Connect
            </a>
          </div>

          {/* Mini Tech Stack Pills */}
          <div className="fade-item delay-4" style={styles.techStackBar}>
            <span style={styles.techLabel}>Tech Stack:</span>
            <span style={styles.techPill}>React</span>
            <span style={styles.techPill}>Next.js</span>
            <span style={styles.techPill}>Tailwind</span>
            <span style={styles.techPill}>Supabase</span>
          </div>
        </div>

        {/* Right: Code Editor Mockup */}
        <div className="fade-item delay-2" style={styles.visualContainer}>
          <div style={styles.codeCard}>
            <div style={styles.codeHeader}>
              <div style={styles.windowDots}>
                <span style={{ ...styles.dotBtn, background: "#ef4444" }}></span>
                <span style={{ ...styles.dotBtn, background: "#f59e0b" }}></span>
                <span style={{ ...styles.dotBtn, background: "#10b981" }}></span>
              </div>
              <span style={styles.fileName}>developer.config.js</span>
            </div>
            <div style={styles.codeBody}>
              <p style={styles.codeComment}>// Developer Profile Configuration</p>
              <p><span style={styles.syntaxKeyword}>const</span> developer = &#123;</p>
              <p style={styles.codeIndent}><span style={styles.syntaxProp}>name:</span> <span style={styles.syntaxString}>"Aatif Arbab"</span>,</p>
              <p style={styles.codeIndent}><span style={styles.syntaxProp}>role:</span> <span style={styles.syntaxString}>"Frontend Engineer"</span>,</p>
              <p style={styles.codeIndent}><span style={styles.syntaxProp}>location:</span> <span style={styles.syntaxString}>"Karachi, PK"</span>,</p>
              <p style={styles.codeIndent}><span style={styles.syntaxProp}>focus:</span> <span style={styles.syntaxString}>"Scalable Web Apps"</span>,</p>
              <p style={styles.codeIndent}><span style={styles.syntaxProp}>status:</span> <span style={styles.syntaxBoolean}>true</span></p>
              <p>&#125;;</p>
              <p style={{ ...styles.codeComment, marginTop: "12px" }}>// Ready to deploy impact 🚀</p>
            </div>
          </div>
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

  @keyframes floatSlow {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-8px); }
  }

  @keyframes roleIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%      { opacity: 0.4; transform: scale(1.4); }
  }

  #home {
    font-family: 'Plus Jakarta Sans', sans-serif !important;
  }

  .fade-item { animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.3s; }
  .delay-4 { animation-delay: 0.4s; }

  .role-text {
    display: inline-block;
    animation: roleIn 0.4s ease both;
  }

  .primary-btn, .secondary-btn {
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .primary-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(56, 189, 248, 0.35);
  }
  .secondary-btn:hover {
    transform: translateY(-2px);
    background: rgba(56, 189, 248, 0.12) !important;
    border-color: #38bdf8 !important;
  }

  @media (max-width: 900px) {
    #home h1 { font-size: 40px !important; }
    #home h3 { font-size: 19px !important; }
  }
`;

const styles = {
  hero: {
    position: "relative",
    overflow: "hidden",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 20px",
    background: "#0b1220",
    color: "white",
  },

  glowOne: {
    position: "absolute",
    top: "-100px",
    left: "-100px",
    width: "450px",
    height: "450px",
    borderRadius: "50%",
    background: "rgba(56, 189, 248, 0.12)",
    filter: "blur(120px)",
    pointerEvents: "none",
  },

  glowTwo: {
    position: "absolute",
    bottom: "-100px",
    right: "-100px",
    width: "450px",
    height: "450px",
    borderRadius: "50%",
    background: "rgba(129, 140, 248, 0.12)",
    filter: "blur(120px)",
    pointerEvents: "none",
  },

  container: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "50px",
    flexWrap: "wrap-reverse",
  },

  content: {
    flex: 1,
    minWidth: "310px",
    maxWidth: "600px",
  },

  tag: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "6px 14px",
    borderRadius: "8px",
    background: "rgba(16, 185, 129, 0.1)",
    border: "1px solid rgba(16, 185, 129, 0.25)",
    color: "#34d399",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "0.8px",
    marginBottom: "20px",
    fontFamily: "'JetBrains Mono', monospace",
  },

  dot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#10b981",
    animation: "pulse 1.8s ease-in-out infinite",
  },

  title: {
    fontSize: "52px",
    fontWeight: "800",
    margin: "0 0 12px",
    lineHeight: "1.1",
    letterSpacing: "-1px",
  },

  name: {
    background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    fontSize: "21px",
    fontWeight: "600",
    color: "#cbd5e1",
    margin: "0 0 20px",
    minHeight: "32px",
    letterSpacing: "-0.3px",
  },

  role: {
    color: "#38bdf8",
    fontWeight: "700",
  },

  desc: {
    fontSize: "16px",
    color: "#94a3b8",
    lineHeight: "1.8",
    margin: "0 0 28px",
    fontWeight: "400",
  },

  buttons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginBottom: "32px",
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
  },

  techStackBar: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
    paddingTop: "14px",
    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
  },

  techLabel: {
    fontSize: "12px",
    color: "#64748b",
    fontWeight: "700",
    marginRight: "4px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    fontFamily: "'JetBrains Mono', monospace",
  },

  techPill: {
    fontSize: "12px",
    color: "#cbd5e1",
    background: "rgba(30, 41, 59, 0.6)",
    padding: "4px 10px",
    borderRadius: "6px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    fontWeight: "600",
  },

  visualContainer: {
    flex: 1,
    minWidth: "300px",
    display: "flex",
    justifyContent: "center",
  },

  codeCard: {
    width: "100%",
    maxWidth: "460px",
    background: "rgba(15, 23, 42, 0.85)",
    backdropFilter: "blur(16px)",
    border: "1px solid rgba(56, 189, 248, 0.2)",
    borderRadius: "12px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
    overflow: "hidden",
    animation: "floatSlow 5s ease-in-out infinite",
  },

  codeHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    background: "rgba(30, 41, 59, 0.5)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
  },

  windowDots: {
    display: "flex",
    gap: "6px",
  },

  dotBtn: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    display: "inline-block",
  },

  fileName: {
    fontSize: "12px",
    color: "#94a3b8",
    fontFamily: "'JetBrains Mono', monospace",
  },

  codeBody: {
    padding: "20px",
    fontSize: "13.5px",
    fontFamily: "'JetBrains Mono', monospace",
    color: "#e2e8f0",
    lineHeight: "1.6",
  },

  codeComment: {
    color: "#64748b",
    margin: "0 0 6px",
  },

  codeIndent: {
    paddingLeft: "20px",
    margin: "2px 0",
  },

  syntaxKeyword: {
    color: "#f472b6",
  },

  syntaxProp: {
    color: "#38bdf8",
  },

  syntaxString: {
    color: "#a7f3d0",
  },

  syntaxBoolean: {
    color: "#fbbf24",
  },
};