const YOUR_EMAIL = "aatifarbab.dev@gmail.com"; // 👈 Apna email yahan daal dein

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aatifarbab", // 👈 Aapka LinkedIn profile link
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
  },
  {
    name: "GitHub",
    url: "https://github.com/aatifarbab", // 👈 Aapka GitHub profile link
    path: "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z",
  },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Responsive Web Design",
  "React.js Development",
  "Landing Pages",
  "Portfolio Websites",
  "UI Implementation",
];

export default function Footer() {
  const year = new Date().getFullYear();
  const visibleSocials = socialLinks.filter((s) => s.url);

  return (
    <footer style={styles.footer}>
      <style>{css}</style>

      <div style={styles.topLine} />

      <div style={styles.container}>
        {/* CTA strip */}
        <div style={styles.cta}>
          <div>
            <h3 style={styles.ctaTitle}>Let's build something great together</h3>
            <p style={styles.ctaText}>
              Have an exciting project or idea in mind? Let's turn it into reality.
            </p>
          </div>
          <a href="#contact" className="cta-btn" style={styles.ctaBtn}>
            Get In Touch ↗
          </a>
        </div>

        {/* Main columns */}
        <div style={styles.columns}>
          {/* Brand */}
          <div style={styles.brandCol}>
            <h3 style={styles.logo}>
              Aatif <span style={styles.logoAccent}>Arbab</span>
            </h3>
            <p style={styles.desc}>
              Frontend React Developer &amp; Computer Science student at SMIU, engineering modern, high-performance web experiences.
            </p>

            {visibleSocials.length > 0 && (
              <div style={styles.socials}>
                {visibleSocials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                    className="social-btn"
                    style={styles.socialBtn}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick links */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>Quick Links</h4>
            <ul style={styles.list}>
              {quickLinks.map((link) => (
                <li key={link.href} style={styles.listItem}>
                  <a href={link.href} className="footer-link" style={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* What I do */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>Expertise</h4>
            <ul style={styles.list}>
              {services.map((item) => (
                <li key={item} style={{ ...styles.listItem, ...styles.service }}>
                  <span style={styles.check}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>Connect</h4>
            <ul style={styles.list}>
              {YOUR_EMAIL && (
                <li style={styles.listItem}>
                  <a href={`mailto:${YOUR_EMAIL}`} className="footer-link" style={styles.link}>
                    ✉️ {YOUR_EMAIL}
                  </a>
                </li>
              )}
              <li style={styles.listItem}>
                <a href="#contact" className="footer-link" style={styles.link}>
                  💬 Send a Message
                </a>
              </li>
              <li style={{ ...styles.listItem, ...styles.service }}>
                <span style={styles.available} /> Open to Work
              </li>
            </ul>
          </div>
        </div>

        <div style={styles.divider} />

        {/* Bottom bar */}
        <div style={styles.bottom}>
          <p style={styles.copy}>
            © {year} Aatif Arbab. All rights reserved.
          </p>

          <p style={styles.copy}>
            Designed &amp; built with <span style={styles.heart}>♥</span> using React
          </p>

          <a href="#home" className="top-btn" style={styles.topBtn}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

const css = `
  .footer-link {
    transition: color 0.2s ease, padding-left 0.2s ease;
  }
  .footer-link:hover {
    color: #38bdf8 !important;
    padding-left: 4px;
  }

  .social-btn {
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .social-btn:hover {
    transform: translateY(-3px);
    background: rgba(56, 189, 248, 0.15) !important;
    border-color: rgba(56, 189, 248, 0.5) !important;
    color: #38bdf8 !important;
    box-shadow: 0 8px 20px rgba(56, 189, 248, 0.2);
  }

  .cta-btn {
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(56, 189, 248, 0.35);
  }

  .top-btn {
    transition: all 0.2s ease;
  }
  .top-btn:hover {
    transform: translateY(-2px);
    color: #38bdf8 !important;
    border-color: rgba(56, 189, 248, 0.5) !important;
    background: rgba(56, 189, 248, 0.05);
  }

  @keyframes pulseDot {
    0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6); }
    50%      { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
  }
`;

const styles = {
  footer: {
    position: "relative",
    background: "#0b1220",
    color: "white",
    padding: "80px 20px 30px",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
  },

  topLine: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.5), transparent)",
  },

  container: {
    maxWidth: "1150px",
    margin: "auto",
  },

  /* CTA strip */
  cta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    padding: "32px 36px",
    marginBottom: "50px",
    borderRadius: "16px",
    background: "rgba(15, 23, 42, 0.75)",
    backdropFilter: "blur(16px)",
    border: "1px solid rgba(56, 189, 248, 0.2)",
    boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
  },

  ctaTitle: {
    fontSize: "20px",
    fontWeight: "700",
    margin: "0 0 6px",
    color: "#f8fafc",
  },

  ctaText: {
    margin: 0,
    color: "#94a3b8",
    fontSize: "14.5px",
  },

  ctaBtn: {
    padding: "12px 26px",
    background: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
    color: "#0b1220",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "14.5px",
    borderRadius: "8px",
    whiteSpace: "nowrap",
    boxShadow: "0 4px 15px rgba(56, 189, 248, 0.25)",
  },

  /* Columns */
  columns: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "40px",
    textAlign: "left",
  },

  brandCol: {
    gridColumn: "span 1",
  },

  logo: {
    fontSize: "24px",
    fontWeight: "800",
    margin: "0 0 12px",
    color: "#f8fafc",
    letterSpacing: "-0.5px",
  },

  logoAccent: {
    background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  desc: {
    color: "#94a3b8",
    fontSize: "14px",
    lineHeight: "1.7",
    margin: "0 0 20px",
  },

  socials: {
    display: "flex",
    gap: "10px",
  },

  socialBtn: {
    width: "38px",
    height: "38px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    background: "rgba(30, 41, 59, 0.6)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    color: "#cbd5e1",
  },

  col: {
    minWidth: "160px",
  },

  colTitle: {
    fontSize: "15px",
    fontWeight: "700",
    margin: "0 0 16px",
    color: "#f8fafc",
    letterSpacing: "0.3px",
    textTransform: "uppercase",
  },

  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  listItem: {
    marginBottom: "10px",
    fontSize: "14px",
  },

  link: {
    color: "#94a3b8",
    textDecoration: "none",
    display: "inline-block",
  },

  service: {
    color: "#94a3b8",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  check: {
    color: "#38bdf8",
    fontWeight: "700",
    fontSize: "12px",
  },

  available: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#10b981",
    display: "inline-block",
    animation: "pulseDot 2s ease-in-out infinite",
  },

  divider: {
    height: "1px",
    background: "rgba(255, 255, 255, 0.06)",
    margin: "45px 0 24px",
  },

  /* Bottom */
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "14px",
  },

  copy: {
    fontSize: "13px",
    color: "#64748b",
    margin: 0,
  },

  heart: {
    color: "#f43f5e",
  },

  topBtn: {
    fontSize: "13px",
    color: "#94a3b8",
    textDecoration: "none",
    padding: "6px 14px",
    borderRadius: "8px",
    background: "rgba(15, 23, 42, 0.6)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
  },
};