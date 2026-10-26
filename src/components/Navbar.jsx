import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const navbarRef = useRef(null);

  // Close menu on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(event) {
      if (isMenuOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    function handleEscape(event) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  // Navbar background change on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active section link
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{css}</style>

      <nav
        ref={navbarRef}
        style={{
          ...styles.navbar,
          ...(scrolled ? styles.navbarScrolled : {}),
        }}
      >
        {/* Logo & Status Wrapper */}
        <div style={styles.logoWrapper}>
          <a href="#home" style={styles.logoLink} onClick={() => setIsMenuOpen(false)}>
            <img src="/favicon1.png" alt="Aatif Arbab Logo" style={styles.logoImg} />
          </a>
          <div className="status-badge">
            <span className="status-dot"></span>
            <span className="status-text">Open to Work</span>
          </div>
        </div>

        {/* Links */}
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeId === link.id ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          
          {/* Resume Quick Action Button inside Mobile & Desktop optional */}
          <a 
            href="#contact" 
            className="nav-cta-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            Let's Talk
          </a>
        </div>

        {/* Hamburger Toggle */}
        <button
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </>
  );
}

const css = `
  html { scroll-behavior: smooth; }

  /* Prevent section from hiding behind fixed navbar */
  section[id] { scroll-margin-top: 90px; }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .nav-links a:not(.nav-cta-btn) {
    position: relative;
    color: #94a3b8;
    text-decoration: none;
    font-weight: 500;
    font-size: 14.5px;
    padding: 8px 16px;
    border-radius: 8px;
    transition: color 0.25s ease, background 0.25s ease;
  }
  .nav-links a:not(.nav-cta-btn):hover {
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.05);
  }
  .nav-links a.active {
    color: #ffffff !important;
    background: rgba(56, 189, 248, 0.1);
    font-weight: 600;
    box-shadow: inset 0 0 0 1px rgba(56, 189, 248, 0.2);
  }

  /* Custom CTA button inside nav */
  .nav-cta-btn {
    margin-left: 10px;
    background: linear-gradient(135deg, #38bdf8 0%, #0284c7 100%);
    color: #0b1220 !important;
    font-weight: 600;
    font-size: 14px;
    padding: 8px 18px;
    border-radius: 8px;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 4px 12px rgba(56, 189, 248, 0.25);
  }
  .nav-cta-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(56, 189, 248, 0.4);
  }

  /* Status Badge near logo */
  .status-badge {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: rgba(16, 185, 129, 0.08);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 20px;
    margin-left: 14px;
  }
  .status-dot {
    width: 7px;
    height: 7px;
    background-color: #10b981;
    border-radius: 50%;
    box-shadow: 0 0 8px #10b981;
    animation: pulse-dot 2s infinite;
  }
  .status-text {
    font-size: 12px;
    color: #34d399;
    font-weight: 500;
    letter-spacing: 0.3px;
  }

  @keyframes pulse-dot {
    0% { transform: scale(0.95); opacity: 0.8; }
    50% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 12px #10b981; }
    100% { transform: scale(0.95); opacity: 0.8; }
  }

  /* Hamburger Toggle */
  .menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    padding: 0 8px;
    cursor: pointer;
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid rgba(56, 189, 248, 0.2);
    border-radius: 8px;
  }
  .menu-toggle span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #38bdf8;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .menu-toggle.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .menu-toggle.open span:nth-child(2) { opacity: 0; }
  .menu-toggle.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  @media (max-width: 900px) {
    .status-badge { display: none; } /* Hide status badge on smaller screens to save space */
  }

  @media (max-width: 768px) {
    .menu-toggle { display: flex; }

    .nav-links {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      align-items: stretch;
      gap: 8px;
      padding: 20px;
      background: rgba(11, 18, 32, 0.98);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(56, 189, 248, 0.15);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);

      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
      transition: opacity 0.25s ease, transform 0.25s ease;
    }
    .nav-links.open {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
    .nav-links a:not(.nav-cta-btn) {
      padding: 12px 16px;
      border-radius: 8px;
      font-size: 15px;
    }
    .nav-cta-btn {
      margin-left: 0;
      text-align: center;
      padding: 12px;
      margin-top: 6px;
    }
  }
`;

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 40px",
    background: "rgba(11, 18, 32, 0.75)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    transition: "all 0.3s ease",
  },

  navbarScrolled: {
    background: "rgba(11, 18, 32, 0.92)",
    borderBottom: "1px solid rgba(56, 189, 248, 0.15)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
    padding: "12px 40px",
  },

  logoWrapper: {
    display: "flex",
    alignItems: "center",
  },

  logoLink: {
    display: "flex",
    alignItems: "center",
  },

  logoImg: {
    height: "40px",
    width: "auto",
    objectFit: "contain",
  },
};