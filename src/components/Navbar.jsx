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

  // Bahar click ya Escape dabane par menu band
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

  // Scroll par navbar ka style badalna
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Jo section screen par ho, uska link highlight karna
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
        {/* Logo */}
        <a href="#home" style={styles.logoLink} onClick={() => setIsMenuOpen(false)}>
          <img src="/favicon1.png" alt="Logo" style={styles.logoImg} />
        </a>

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
        </div>

        {/* Hamburger */}
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

  /* Section navbar ke neeche na chhup jaye */
  section[id] { scroll-margin-top: 80px; }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .nav-links a {
    position: relative;
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    font-size: 15px;
    padding: 8px 14px;
    border-radius: 999px;
    transition: color 0.2s ease, background 0.2s ease;
  }
  .nav-links a:hover {
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.08);
  }
  .nav-links a.active {
    color: #0f172a;
    background: linear-gradient(90deg, #38bdf8, #818cf8);
    font-weight: 700;
  }

  /* Hamburger */
  .menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 42px;
    height: 42px;
    padding: 0 9px;
    cursor: pointer;
    background: rgba(56, 189, 248, 0.1);
    border: 1px solid rgba(56, 189, 248, 0.3);
    border-radius: 10px;
  }
  .menu-toggle span {
    display: block;
    width: 100%;
    height: 2.5px;
    background-color: #38bdf8;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .menu-toggle.open span:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
  .menu-toggle.open span:nth-child(2) { opacity: 0; }
  .menu-toggle.open span:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }

  @media (max-width: 768px) {
    .menu-toggle { display: flex; }

    .nav-links {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      align-items: stretch;
      gap: 6px;
      padding: 16px 20px 20px;
      background: rgba(11, 18, 32, 0.97);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(56, 189, 248, 0.2);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.45);

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
    .nav-links a {
      padding: 12px 16px;
      border-radius: 10px;
      font-size: 16px;
    }
  }
`;

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 40px",
    background: "rgba(11, 18, 32, 0.8)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(56, 189, 248, 0.12)",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    transition: "box-shadow 0.3s ease, background 0.3s ease",
  },

  navbarScrolled: {
    background: "rgba(11, 18, 32, 0.95)",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.45)",
  },

  logoLink: {
    display: "flex",
    alignItems: "center",
  },

  logoImg: {
    height: "50px",
    width: "auto",
    objectFit: "contain",
  },
};