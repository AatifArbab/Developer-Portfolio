import { useState } from "react";

/*
  ⚙️ SETUP:
  1) FORM_ENDPOINT: https://formspree.io par free account bana kar form ID yahan daalein.
  2) YOUR_EMAIL: Agar FORM_ENDPOINT khali hoga toh mailto fallback kaam karega.
*/
const FORM_ENDPOINT = "";
const YOUR_EMAIL = "aatifarbab.dev@gmail.com"; // Apna email id daal dein

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status.text) setStatus({ type: "", text: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", text: "Please fill in all fields before sending." });
      return;
    }

    // Option 1: Formspree Integration
    if (FORM_ENDPOINT) {
      try {
        setLoading(true);
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        });

        if (res.ok) {
          setStatus({
            type: "success",
            text: "Message sent successfully! I will get back to you soon. 🚀",
          });
          setForm(initialForm);
        } else {
          setStatus({
            type: "error",
            text: "Something went wrong. Please try again or email directly.",
          });
        }
      } catch {
        setStatus({
          type: "error",
          text: "Network error. Please check your internet connection.",
        });
      } finally {
        setLoading(false);
      }
      return;
    }

    // Option 2: Mailto Fallback
    if (YOUR_EMAIL) {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
      const body = encodeURIComponent(
        `${form.message}\n\nSender Details:\nName: ${form.name}\nEmail: ${form.email}`
      );
      window.location.href = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`;
      setStatus({
        type: "success",
        text: "Opening your default email application...",
      });
      return;
    }

    setStatus({
      type: "error",
      text: "Contact form configuration is pending.",
    });
  };

  return (
    <section id="contact" style={styles.section}>
      <style>{css}</style>

      {/* Atmospheric Background Glows */}
      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />

      <div style={styles.container}>
        <span style={styles.badge}>Get In Touch</span>
        <h2 style={styles.title}>
          Let's Work <span style={styles.titleAccent}>Together</span>
        </h2>
        <p style={styles.subtitle}>
          Have an exciting project, job opportunity, or just want to discuss web tech? Drop a message below!
        </p>

        <div style={styles.contactLayout}>
          {/* Left: Quick Details Panel */}
          <div style={styles.directContactBox}>
            <div style={styles.contactItem}>
              <span style={styles.contactLabel}>DIRECT EMAIL</span>
              <a href={`mailto:${YOUR_EMAIL}`} style={styles.contactValue}>
                {YOUR_EMAIL || "aatifarbab.dev@gmail.com"}
              </a>
            </div>

            <div style={styles.contactItem}>
              <span style={styles.contactLabel}>LOCATION</span>
              <span style={styles.contactValueStatic}>Karachi, Pakistan (PKT / UTC+5)</span>
            </div>

            <div style={styles.contactItem}>
              <span style={styles.contactLabel}>AVAILABILITY</span>
              <div style={styles.availBadge}>
                <span style={styles.availDot}></span> Open to Freelance & Full-time
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form onSubmit={handleSubmit} className="contact-card" style={styles.card}>
            <div style={styles.row}>
              <div style={styles.field}>
                <label style={styles.label} htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  className="field-input"
                  style={styles.input}
                  type="text"
                  placeholder="e.g. John Doe"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div style={styles.field}>
                <label style={styles.label} htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  className="field-input"
                  style={styles.input}
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div style={styles.field}>
              <label style={styles.label} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="field-input"
                style={styles.textarea}
                placeholder="Tell me about your project, timeline, or idea..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            {status.text && (
              <div
                style={{
                  ...styles.status,
                  ...(status.type === "success"
                    ? styles.statusSuccess
                    : styles.statusError),
                }}
              >
                {status.text}
              </div>
            )}

            <button
              type="submit"
              className="send-btn"
              style={{ ...styles.button, ...(loading ? styles.buttonLoading : {}) }}
              disabled={loading}
            >
              {loading ? "Sending Message..." : "Send Message ↗"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const css = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .contact-card { 
    animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; 
  }

  .field-input {
    transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
  }
  .field-input:focus {
    border-color: #38bdf8 !important;
    background: rgba(15, 23, 42, 0.95) !important;
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
  }
  .field-input::placeholder { color: #64748b; }

  .send-btn {
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .send-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(56, 189, 248, 0.35);
  }

  @media (max-width: 768px) {
    #contact h2 { font-size: 34px !important; }
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
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
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
    maxWidth: "1050px",
    width: "100%",
    textAlign: "center",
  },

  badge: {
    display: "inline-block",
    padding: "5px 14px",
    borderRadius: "6px",
    background: "rgba(56, 189, 248, 0.1)",
    border: "1px solid rgba(56, 189, 248, 0.25)",
    color: "#38bdf8",
    fontSize: "12.5px",
    fontWeight: "600",
    letterSpacing: "1px",
    textTransform: "uppercase",
    marginBottom: "16px",
  },

  title: {
    fontSize: "44px",
    fontWeight: "800",
    margin: "0 0 10px",
    letterSpacing: "-0.5px",
  },

  titleAccent: {
    background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    color: "#94a3b8",
    marginBottom: "40px",
    fontSize: "16.5px",
    lineHeight: "1.7",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  contactLayout: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    textAlign: "left",
  },

  directContactBox: {
    flex: 1,
    minWidth: "260px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "30px",
    borderRadius: "16px",
    background: "rgba(15, 23, 42, 0.75)",
    backdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
  },

  contactItem: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  contactLabel: {
    fontSize: "12px",
    color: "#64748b",
    fontWeight: "700",
    letterSpacing: "0.5px",
  },

  contactValue: {
    color: "#38bdf8",
    fontSize: "15px",
    fontWeight: "600",
    textDecoration: "none",
  },

  contactValueStatic: {
    color: "#e2e8f0",
    fontSize: "14.5px",
    fontWeight: "500",
  },

  availBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "13.5px",
    color: "#34d399",
    fontWeight: "500",
  },

  availDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#10b981",
    boxShadow: "0 0 8px #10b981",
  },

  card: {
    flex: 2,
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    padding: "32px",
    borderRadius: "16px",
    background: "rgba(15, 23, 42, 0.75)",
    backdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },

  row: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "18px",
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  label: {
    fontSize: "13.5px",
    fontWeight: "600",
    color: "#cbd5e1",
  },

  input: {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    background: "rgba(30, 41, 59, 0.6)",
    color: "white",
    fontSize: "14.5px",
    outline: "none",
    fontFamily: "inherit",
  },

  textarea: {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    background: "rgba(30, 41, 59, 0.6)",
    color: "white",
    fontSize: "14.5px",
    minHeight: "130px",
    outline: "none",
    resize: "vertical",
    fontFamily: "inherit",
  },

  status: {
    padding: "12px 14px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
  },

  statusSuccess: {
    background: "rgba(16, 185, 129, 0.1)",
    border: "1px solid rgba(16, 185, 129, 0.3)",
    color: "#34d399",
  },

  statusError: {
    background: "rgba(239, 68, 68, 0.1)",
    border: "1px solid rgba(239, 68, 68, 0.3)",
    color: "#f87171",
  },

  button: {
    padding: "13px",
    background: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
    color: "#0b1220",
    fontWeight: "700",
    fontSize: "14.5px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "4px",
    boxShadow: "0 4px 15px rgba(56, 189, 248, 0.25)",
  },

  buttonLoading: {
    opacity: 0.7,
    cursor: "not-allowed",
  },
};