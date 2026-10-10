/*
  ⚙️ Apni details yahan daal dein.
  Jis cheez ki value khali ("") ho, wo footer mein nahi dikhegi.
*/
const YOUR_EMAIL = ""; // 👈 apna email daalein, jaise "you@example.com"

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/YOUR-USERNAME", // 👈 apna asli LinkedIn link daalein
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
  },
  {
    name: "GitHub",
    url: "", // 👈 apna GitHub link daalein
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
              Have a project in mind? I'd love to hear about it.
            </p>
          </div>
          <a href="#contact" className="cta-btn" style={styles.ctaBtn}>
            Get In Touch →
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
              Frontend React Developer and Computer Science student, building
              modern, responsive and user-friendly web experiences.
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
                    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
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
            <h4 style={styles.colTitle}>What I Do</h4>
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
            <h4 style={styles.colTitle}>Contact</h4>
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
                  💬 Send me a message
                </a>
              </li>
              <li style={{ ...styles.listItem, ...styles.service }}>
                <span style={styles.available} /> Open to opportunities
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
    transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
  }
  .social-btn:hover {
    transform: translateY(-4px);
    background: linear-gradient(135deg, #38bdf8, #818cf8) !important;
    color: #0f172a !important;
    box-shadow: 0 8px 20px rgba(56, 189, 248, 0.35);
  }

  .cta-btn {
    transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  }
  .cta-btn:hover {
    transform: translateY(-2px);
    filter: brightness(1.08);
    box-shadow: 0 10px 25px rgba(56, 189, 248, 0.4);
  }

  .top-btn {
    transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }
  .top-btn:hover {
    transform: translateY(-2px);
    color: #38bdf8 !important;
    border-color: rgba(56, 189, 248, 0.6) !important;
  }

  @keyframes pulseDot {
    0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6); }
    50%      { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
  }
`;

const styles = {
  footer: {
    position: "relative",
    background: "#0b1220",
    color: "white",
    padding: "70px 20px 28px",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  },

  topLine: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: "linear-gradient(90deg, transparent, #38bdf8, #818cf8, transparent)",
  },

  container: {
    maxWidth: "1100px",
    margin: "auto",
  },

  /* CTA */
  cta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    padding: "30px 35px",
    marginBottom: "55px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, rgba(56,189,248,0.12), rgba(129,140,248,0.12))",
    border: "1px solid rgba(56, 189, 248, 0.25)",
  },

  ctaTitle: {
    fontSize: "22px",
    fontWeight: "700",
    margin: "0 0 6px",
    color: "#f1f5f9",
  },

  ctaText: {
    margin: 0,
    color: "#94a3b8",
    fontSize: "15px",
  },

  ctaBtn: {
    padding: "13px 28px",
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
    color: "#0f172a",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "15px",
    borderRadius: "10px",
    whiteSpace: "nowrap",
  },

  /* Columns */
  columns: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "40px",
    textAlign: "left",
  },

  brandCol: {
    gridColumn: "span 1",
    minWidth: "220px",
  },

  logo: {
    fontSize: "26px",
    fontWeight: "800",
    margin: "0 0 12px",
    color: "#f1f5f9",
  },

  logoAccent: {
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  desc: {
    color: "#94a3b8",
    fontSize: "14.5px",
    lineHeight: "1.75",
    margin: "0 0 20px",
  },

  socials: {
    display: "flex",
    gap: "12px",
  },

  socialBtn: {
    width: "42px",
    height: "42px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    background: "rgba(56, 189, 248, 0.1)",
    border: "1px solid rgba(56, 189, 248, 0.3)",
    color: "#38bdf8",
  },

  col: {
    minWidth: "160px",
  },

  colTitle: {
    fontSize: "16px",
    fontWeight: "700",
    margin: "0 0 18px",
    color: "#f1f5f9",
    letterSpacing: "0.3px",
  },

  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  listItem: {
    marginBottom: "12px",
    fontSize: "14.5px",
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
    fontSize: "13px",
  },

  available: {
    width: "9px",
    height: "9px",
    borderRadius: "50%",
    background: "#22c55e",
    display: "inline-block",
    animation: "pulseDot 2s ease-in-out infinite",
  },

  divider: {
    height: "1px",
    background: "rgba(148, 163, 184, 0.15)",
    margin: "50px 0 22px",
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
    padding: "7px 14px",
    borderRadius: "999px",
    border: "1px solid rgba(148, 163, 184, 0.3)",
  },
};