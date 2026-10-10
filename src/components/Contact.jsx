import { useState } from "react";

/*
  ⚙️ SETUP (yeh do cheezein apni daal dein):

  1) FORM_ENDPOINT: https://formspree.io par free account bana kar form
     banayein, wahan se URL milega, jaise "https://formspree.io/f/xxxxxxx".
     Isay daalne se messages seedha aap ke email par aayenge.

  2) YOUR_EMAIL: agar FORM_ENDPOINT khali hai to form aap ke email app
     (mailto) mein message khol dega. Contact card mein bhi yeh email dikhega.
*/
const FORM_ENDPOINT = "";
const YOUR_EMAIL = "";

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
      setStatus({ type: "error", text: "Please fill in all the fields." });
      return;
    }

    // Option 1: Formspree
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
            text: "Thank you! Your message has been sent. 🎉",
          });
          setForm(initialForm);
        } else {
          setStatus({
            type: "error",
            text: "Something went wrong. Please try again.",
          });
        }
      } catch {
        setStatus({
          type: "error",
          text: "Network error. Please check your connection.",
        });
      } finally {
        setLoading(false);
      }
      return;
    }

    // Option 2: mailto fallback
    if (YOUR_EMAIL) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
      const body = encodeURIComponent(
        `${form.message}\n\nFrom: ${form.name} (${form.email})`
      );
      window.location.href = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`;
      setStatus({
        type: "success",
        text: "Opening your email app to send the message...",
      });
      return;
    }

    setStatus({
      type: "error",
      text: "Contact form is not configured yet.",
    });
  };

  return (
    <section id="contact" style={styles.section}>
      <style>{css}</style>

      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />

      <div style={styles.container}>
        <span style={styles.badge}>Get In Touch</span>
        <h2 style={styles.title}>
          Contact <span style={styles.titleAccent}>Me</span>
        </h2>
        <p style={styles.subtitle}>
          Have a project in mind or just want to say hi? Feel free to reach
          out, I'd love to hear from you.
        </p>

        {YOUR_EMAIL && (
          <a href={`mailto:${YOUR_EMAIL}`} className="info-pill" style={styles.infoPill}>
            ✉️ {YOUR_EMAIL}
          </a>
        )}

        <form onSubmit={handleSubmit} className="contact-card" style={styles.card}>
          <div style={styles.row}>
            <div style={styles.field}>
              <label style={styles.label} htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                className="field-input"
                style={styles.input}
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label} htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                className="field-input"
                style={styles.input}
                type="email"
                placeholder="Your Email"
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
              placeholder="Tell me about your project or idea..."
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
            {loading ? "Sending..." : "Send Message ➤"}
          </button>
        </form>
      </div>
    </section>
  );
}

const css = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .contact-card { animation: fadeUp 0.7s ease both; }

  .field-input {
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
  }
  .field-input:focus {
    border-color: #38bdf8 !important;
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2);
  }
  .field-input::placeholder { color: #64748b; }

  .send-btn {
    transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  }
  .send-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    filter: brightness(1.08);
    box-shadow: 0 10px 25px rgba(56, 189, 248, 0.4);
  }

  .info-pill { transition: transform 0.2s ease, border-color 0.2s ease; }
  .info-pill:hover {
    transform: translateY(-2px);
    border-color: rgba(56, 189, 248, 0.6) !important;
  }

  @media (max-width: 600px) {
    #contact h2 { font-size: 36px !important; }
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
    maxWidth: "720px",
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
    marginBottom: "28px",
    fontSize: "17px",
    lineHeight: "1.7",
  },

  infoPill: {
    display: "inline-block",
    padding: "10px 20px",
    marginBottom: "28px",
    borderRadius: "999px",
    background: "rgba(15, 23, 42, 0.85)",
    border: "1px solid rgba(56, 189, 248, 0.25)",
    color: "#e2e8f0",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "600",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    padding: "40px",
    borderRadius: "20px",
    background: "rgba(15, 23, 42, 0.85)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(56, 189, 248, 0.2)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    textAlign: "left",
  },

  row: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#cbd5e1",
  },

  input: {
    padding: "13px 14px",
    borderRadius: "10px",
    border: "1px solid #334155",
    background: "#0f172a",
    color: "white",
    fontSize: "15px",
    outline: "none",
    fontFamily: "inherit",
  },

  textarea: {
    padding: "13px 14px",
    borderRadius: "10px",
    border: "1px solid #334155",
    background: "#0f172a",
    color: "white",
    fontSize: "15px",
    minHeight: "140px",
    outline: "none",
    resize: "vertical",
    fontFamily: "inherit",
  },

  status: {
    padding: "12px 14px",
    borderRadius: "10px",
    fontSize: "14.5px",
    fontWeight: "600",
  },

  statusSuccess: {
    background: "rgba(34, 197, 94, 0.12)",
    border: "1px solid rgba(34, 197, 94, 0.4)",
    color: "#4ade80",
  },

  statusError: {
    background: "rgba(239, 68, 68, 0.12)",
    border: "1px solid rgba(239, 68, 68, 0.4)",
    color: "#f87171",
  },

  button: {
    padding: "14px",
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
    color: "#0f172a",
    fontWeight: "700",
    fontSize: "16px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "6px",
  },

  buttonLoading: {
    opacity: 0.7,
    cursor: "not-allowed",
  },
};