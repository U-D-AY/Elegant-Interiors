import { useState, useEffect, useRef } from "react";

const gold = "#C9A96E";
const dark = "#1A1612";
const brown = "#3D2B1F";
const ivory = "#F8F4EE";
const mid = "#6B5744";
const warmWhite = "#FDF9F4";

const rooms = [
  { name: "Living Room", detail: "Heart of your home", icon: "🛋️", bg: "linear-gradient(135deg,#4A3728,#8B6914,#D4A853)" },
  { name: "Master Bedroom", detail: "Your private sanctuary", icon: "🛏️", bg: "linear-gradient(135deg,#2C3A4A,#5D7A8C,#A8C5D4)" },
  { name: "Modular Wardrobe", detail: "Organized with precision", icon: "🚪", bg: "linear-gradient(135deg,#3A2D1E,#7A5C3A,#C4956A)" },
  { name: "Pooja Room", detail: "Sacred & serene design", icon: "🪔", bg: "linear-gradient(135deg,#4A2800,#A0522D,#FFD700)" },
  { name: "Study Room", detail: "Focus-enhancing space", icon: "📚", bg: "linear-gradient(135deg,#1E3A2A,#4A7C59,#8FBC8F)" },
  { name: "Kids Room", detail: "Playful & imaginative", icon: "🎨", bg: "linear-gradient(135deg,#4A1942,#9B3D9B,#FFB3FF)" },
  { name: "Guest Room", detail: "Welcoming & comfortable", icon: "🛎️", bg: "linear-gradient(135deg,#2A2A1E,#5C5C3A,#C4C48F)" },
  { name: "Wall Painting", detail: "Murals, accents & finishes", icon: "🖌️", bg: "linear-gradient(135deg,#1A3A5C,#4472A8,#87CEEB)" },
];

const packages = [
  { num: "01", name: "1 BHK", desc: "Smart starter home. Living room, bedroom & kitchen transformed with style." },
  { num: "02", name: "2 BHK", desc: "Two bedrooms, full living space & kitchen designed for growing families." },
  { num: "03", name: "3 BHK", desc: "Master bedroom, kids room, guest room & living — every corner curated." },
  { num: "04", name: "4 BHK", desc: "Luxury full-home design. Premium finishes & custom furniture." },
];

const steps = [
  { num: "01", icon: "📋", title: "Consultation", desc: "Free home visit. We understand your lifestyle & budget." },
  { num: "02", icon: "🎨", title: "Design Concept", desc: "3D layouts & mood boards to visualize your home." },
  { num: "03", icon: "🔨", title: "Execution", desc: "Skilled craftsmen bring design to life — on time." },
  { num: "04", icon: "🏠", title: "Handover", desc: "Walk through your finished dream home." },
];

const testimonials = [
  { text: "Transformed our 3BHK in Jubilee Hills beyond imagination. Pooja room and kids room are stunning!", name: "Ramesh & Priya Reddy", loc: "Jubilee Hills", init: "R", color: "linear-gradient(135deg,#8B4513,#C9A96E)" },
  { text: "Got our 2BHK done in Gachibowli. The wardrobes and living room are exactly what we envisioned!", name: "Arjun Sharma", loc: "Gachibowli", init: "A", color: "linear-gradient(135deg,#2C5F8A,#5D9BC8)" },
  { text: "Wall painting in our 4BHK villa is breathtaking. Every room tells a unique story!", name: "Sunita & Venkat Kumar", loc: "Banjara Hills", init: "S", color: "linear-gradient(135deg,#4A7A4A,#8FBC8F)" },
];

const features = [
  { icon: "🎯", title: "Fixed Price", desc: "No hidden costs ever" },
  { icon: "⚡", title: "45-Day Delivery", desc: "Fast, quality work" },
  { icon: "🛡️", title: "10-Year Warranty", desc: "Peace of mind" },
  { icon: "📐", title: "3D Visualization", desc: "See before we build" },
  { icon: "🌿", title: "Eco Materials", desc: "Safe for your family" },
  { icon: "🏆", title: "Award Winning", desc: "Telangana's best" },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.7s ${delay}s, transform 0.7s ${delay}s` }}>
      {children}
    </div>
  );
}

function Tag({ children, center }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: gold, marginBottom: "0.7rem", fontFamily: "sans-serif", justifyContent: center ? "center" : "flex-start", width: center ? "100%" : "auto" }}>
      <span style={{ width: "1.5rem", height: "1px", background: gold, display: "inline-block" }} />
      {children}
    </div>
  );
}

export default function App() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", bhk: "", budget: "", room: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const scrollTo = (id) => {
    setActiveTab(id);
    setMenuOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone) { alert("Please enter your name and phone number."); return; }
    setSubmitted(true);
  };

  const inputStyle = { width: "100%", padding: "0.85rem 1rem", background: ivory, border: "1px solid #E0D4C3", borderRadius: "8px", fontSize: "1rem", color: dark, outline: "none", WebkitAppearance: "none", fontFamily: "sans-serif" };
  const labelStyle = { display: "block", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: mid, marginBottom: "0.4rem", fontWeight: 600, fontFamily: "sans-serif" };

  const navItems = [
    { id: "home", icon: "🏠", label: "Home" },
    { id: "services", icon: "✨", label: "Services" },
    { id: "rooms", icon: "🛋️", label: "Spaces" },
    { id: "process", icon: "📋", label: "Process" },
    { id: "contact", icon: "📞", label: "Contact" },
  ];

  return (
    <div style={{ fontFamily: "Georgia, serif", background: warmWhite, color: dark, maxWidth: "480px", margin: "0 auto", minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes pulseWa { 0%,100% { box-shadow:0 4px 20px rgba(37,211,102,0.5); } 50% { box-shadow:0 4px 30px rgba(37,211,102,0.7),0 0 0 6px rgba(37,211,102,0.15); } }
        .wa-pulse { animation: pulseWa 2s infinite; }
        .fh1 { animation: fadeUp 0.7s ease both; }
        .fh2 { animation: fadeUp 0.7s 0.15s ease both; }
        .fh3 { animation: fadeUp 0.7s 0.3s ease both; }
        .room-tap:active { transform: scale(0.97); opacity: 0.9; }
        .tap-btn:active { transform: scale(0.97); }
        ::-webkit-scrollbar { display: none; }
      `}</style>

      {/* HEADER */}
      <header style={{ position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: "480px", zIndex: 1000, background: "rgba(248,244,238,0.96)", backdropFilter: "blur(12px)", padding: "0.9rem 1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(201,169,110,0.2)" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 600, color: brown }}>
          Elegante <span style={{ color: gold, fontStyle: "italic" }}>Interiors</span>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: "0.3rem", width: "2.5rem", height: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {menuOpen
            ? <span style={{ fontSize: "1.3rem", color: brown }}>✕</span>
            : <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>{[0,1,2].map(i => <span key={i} style={{ display: "block", width: "22px", height: "2px", background: brown, borderRadius: "2px" }} />)}</div>
          }
        </button>
      </header>

      {/* DROPDOWN MENU */}
      {menuOpen && (
        <div style={{ position: "fixed", top: "56px", left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: "480px", background: ivory, zIndex: 999, borderBottom: "1px solid rgba(201,169,110,0.2)", boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}>
          {navItems.map(({ id, icon, label }) => (
            <button key={id} onClick={() => scrollTo(id)}
              style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: "1px solid rgba(201,169,110,0.1)", cursor: "pointer", fontSize: "0.95rem", color: activeTab === id ? gold : brown, fontWeight: activeTab === id ? 600 : 400, textAlign: "left", fontFamily: "sans-serif" }}>
              <span>{icon}</span>{label}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" style={{ background: dark, padding: "6rem 1.5rem 3rem", minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 70%, rgba(201,169,110,0.18) 0%,transparent 60%)", pointerEvents: "none" }} />
        <div className="fh1" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(201,169,110,0.12)", border: "1px solid rgba(201,169,110,0.3)", padding: "0.4rem 0.9rem", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: gold, marginBottom: "1.5rem", width: "fit-content", borderRadius: "4px", fontFamily: "sans-serif" }}>
          ◆ Hyderabad's Premium Interior Studio
        </div>
        <h1 className="fh2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.6rem,10vw,3.8rem)", fontWeight: 300, lineHeight: 1.08, color: ivory, marginBottom: "1.2rem" }}>
          Your Dream<br />Home <em style={{ color: gold }}>Crafted</em><br />With Elegance
        </h1>
        <p className="fh3" style={{ fontSize: "0.95rem", color: "rgba(248,244,238,0.6)", lineHeight: 1.8, marginBottom: "2rem", fontFamily: "sans-serif", fontWeight: 300 }}>
          Premium interiors for 1BHK to 4BHK homes across Hyderabad. Every space, a masterpiece.
        </p>
        <div className="fh3" style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "2.5rem" }}>
          <button className="tap-btn" onClick={() => scrollTo("contact")} style={{ background: gold, color: dark, padding: "1rem", border: "none", cursor: "pointer", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, borderRadius: "8px", fontFamily: "sans-serif" }}>
            Book Free Consultation
          </button>
          <button className="tap-btn" onClick={() => scrollTo("rooms")} style={{ background: "transparent", color: ivory, padding: "1rem", border: "1px solid rgba(248,244,238,0.25)", cursor: "pointer", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 400, borderRadius: "8px", fontFamily: "sans-serif" }}>
            Explore Spaces
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(248,244,238,0.1)" }}>
          {[["500+","Projects"],["8+","Years"],["100%","Satisfied"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center", padding: "0.8rem 0.4rem", background: "rgba(255,255,255,0.04)", borderRadius: "8px" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, color: gold, display: "block", lineHeight: 1 }}>{n}</span>
              <span style={{ fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(248,244,238,0.45)", marginTop: "0.2rem", display: "block", fontFamily: "sans-serif" }}>{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ background: dark, padding: "0.8rem 0", overflow: "hidden", borderTop: "1px solid rgba(201,169,110,0.15)" }}>
        <div style={{ display: "flex", animation: "marquee 20s linear infinite", whiteSpace: "nowrap" }}>
          {["Living Room","Bedroom","Wardrobe","Pooja Room","Kids Room","Study Room","Guest Room","Wall Painting","1BHK–4BHK","Hyderabad",
            "Living Room","Bedroom","Wardrobe","Pooja Room","Kids Room","Study Room","Guest Room","Wall Painting","1BHK–4BHK","Hyderabad"].map((t, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0 1.2rem", fontSize: "0.63rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(201,169,110,0.7)", fontFamily: "sans-serif" }}>
              <span style={{ color: gold, fontSize: "0.4rem" }}>◆</span>{t}
            </span>
          ))}
        </div>
      </div>

      {/* PACKAGES */}
      <section id="services" style={{ padding: "3rem 1.2rem 2rem", background: ivory }}>
        <Reveal>
          <div style={{ marginBottom: "1.5rem" }}>
            <Tag>Our Packages</Tag>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, color: brown, lineHeight: 1.15 }}>
              Designed for <em style={{ color: gold }}>Every</em> Home
            </h2>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.7rem" }}>
          {packages.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{ background: warmWhite, padding: "1.3rem", borderRadius: "10px", border: "1px solid #E8DDD0", height: "100%" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", color: "#E8D5B0", fontWeight: 600, display: "block", lineHeight: 1, marginBottom: "0.5rem" }}>{p.num}</span>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, color: brown, marginBottom: "0.4rem" }}>{p.name}</div>
                <p style={{ fontSize: "0.78rem", color: mid, lineHeight: 1.6, fontFamily: "sans-serif", fontWeight: 300 }}>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" style={{ padding: "2.5rem 1.2rem", background: warmWhite }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <Tag center>Our Expertise</Tag>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, color: brown, lineHeight: 1.15 }}>
              Every <em style={{ color: gold }}>Space</em>, Perfected
            </h2>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.7rem" }}>
          {rooms.map((r, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="room-tap" style={{ background: r.bg, borderRadius: "10px", overflow: "hidden", position: "relative", minHeight: "130px", cursor: "pointer", transition: "transform 0.2s" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,22,18,0.82) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0.9rem" }}>
                  <span style={{ fontSize: "1.4rem", display: "block", marginBottom: "0.2rem" }}>{r.icon}</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontWeight: 600, color: ivory, display: "block", lineHeight: 1.2 }}>{r.name}</span>
                  <span style={{ fontSize: "0.63rem", color: "rgba(248,244,238,0.6)", fontFamily: "sans-serif", display: "block", marginTop: "0.15rem" }}>{r.detail}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ background: dark, padding: "3rem 1.2rem" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <Tag center>How We Work</Tag>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, color: ivory, lineHeight: 1.15 }}>
              Our Design <em style={{ color: gold }}>Process</em>
            </h2>
          </div>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "rgba(255,255,255,0.04)", padding: "1.2rem", borderRadius: "10px", border: "1px solid rgba(201,169,110,0.12)" }}>
                <div style={{ width: "3rem", height: "3rem", border: "1px solid rgba(201,169,110,0.4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: gold, flexShrink: 0 }}>{s.num}</div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.3rem" }}>
                    <span style={{ fontSize: "1rem" }}>{s.icon}</span>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 600, color: ivory }}>{s.title}</h3>
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "rgba(248,244,238,0.5)", lineHeight: 1.7, fontFamily: "sans-serif", fontWeight: 300 }}>{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="about" style={{ padding: "3rem 1.2rem", background: ivory }}>
        <Reveal>
          <div style={{ marginBottom: "1.5rem" }}>
            <Tag>Why Choose Us</Tag>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, color: brown, lineHeight: 1.15 }}>
              Hyderabad's Most <em style={{ color: gold }}>Trusted</em> Studio
            </h2>
            <p style={{ fontSize: "0.88rem", color: mid, lineHeight: 1.8, marginTop: "0.8rem", fontFamily: "sans-serif", fontWeight: 300 }}>
              Transforming Hyderabad homes for 8+ years. From Banjara Hills to Gachibowli — every project reflects the city's warmth.
            </p>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.7rem" }}>
          {features.map((f, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div style={{ background: warmWhite, padding: "1.1rem", borderRadius: "10px", border: "1px solid #E8DDD0", borderLeft: `3px solid ${gold}` }}>
                <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.4rem" }}>{f.icon}</span>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontWeight: 600, color: brown, marginBottom: "0.2rem" }}>{f.title}</div>
                <p style={{ fontSize: "0.75rem", color: mid, fontFamily: "sans-serif", fontWeight: 300 }}>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "3rem 1.2rem", background: warmWhite }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <Tag center>Client Stories</Tag>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, color: brown }}>
              What Clients <em style={{ color: gold }}>Say</em>
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ background: ivory, padding: "1.8rem", borderRadius: "12px", border: "1px solid #E8DDD0", borderBottom: `3px solid ${gold}` }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", color: "#E8D5B0", lineHeight: 0.6, display: "block", marginBottom: "0.8rem" }}>"</span>
            <p style={{ fontSize: "0.92rem", color: mid, lineHeight: 1.8, fontStyle: "italic", marginBottom: "1.2rem", fontFamily: "sans-serif", fontWeight: 300 }}>
              {testimonials[activeTestimonial].text}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
              <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: testimonials[activeTestimonial].color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontWeight: 600, color: ivory, flexShrink: 0 }}>{testimonials[activeTestimonial].init}</div>
              <div>
                <span style={{ fontWeight: 600, color: brown, fontSize: "0.88rem", display: "block", fontFamily: "sans-serif" }}>{testimonials[activeTestimonial].name}</span>
                <span style={{ fontSize: "0.73rem", color: mid, fontFamily: "sans-serif" }}>{testimonials[activeTestimonial].loc}</span>
                <span style={{ color: gold, fontSize: "0.75rem", display: "block" }}>★★★★★</span>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1rem" }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)}
                style={{ width: i === activeTestimonial ? "2rem" : "0.5rem", height: "0.5rem", borderRadius: "4px", background: i === activeTestimonial ? gold : "#D4C4B0", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section style={{ background: dark, padding: "3rem 1.2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201,169,110,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <Reveal>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 300, color: ivory, marginBottom: "1rem", lineHeight: 1.2 }}>
            Let's Create Your <em style={{ color: gold }}>Dream</em> Home
          </h2>
          <p style={{ fontSize: "0.88rem", color: "rgba(248,244,238,0.55)", marginBottom: "2rem", lineHeight: 1.8, fontFamily: "sans-serif", fontWeight: 300 }}>
            Book a free consultation today. We visit your Hyderabad home and craft a plan for your budget.
          </p>
          <button className="tap-btn" onClick={() => scrollTo("contact")} style={{ width: "100%", background: gold, color: dark, padding: "1rem", border: "none", cursor: "pointer", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, borderRadius: "8px", marginBottom: "1rem", fontFamily: "sans-serif" }}>
            Book Free Home Visit
          </button>
          <a href="tel:+919398801834" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", color: gold, textDecoration: "none", fontFamily: "sans-serif", fontSize: "0.9rem" }}>
            📞 <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.3rem", fontWeight: 600 }}>+91 93988 01834</span>
          </a>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "3rem 1.2rem 7rem", background: warmWhite }}>
        <Reveal>
          <div style={{ marginBottom: "1.5rem" }}>
            <Tag>Get In Touch</Tag>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, color: brown }}>
              Request a <em style={{ color: gold }}>Free</em> Consultation
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.7rem", marginBottom: "1.8rem" }}>
            {[
              { icon: "📞", label: "Call Us", val: "+91 93988 01834", href: "tel:+919398801834" },
              { icon: "💬", label: "WhatsApp", val: "Chat with us", href: "https://wa.me/919398801834" },
              { icon: "📍", label: "Studio", val: "Banjara Hills, Hyd" },
              { icon: "🕒", label: "Hours", val: "Mon-Sat 9AM-7PM" },
            ].map((d, i) => (
              <div key={i} style={{ background: ivory, padding: "1rem", borderRadius: "10px", border: "1px solid #E8DDD0" }}>
                <span style={{ fontSize: "1.3rem", display: "block", marginBottom: "0.3rem" }}>{d.icon}</span>
                <span style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: gold, display: "block", fontFamily: "sans-serif", fontWeight: 600, marginBottom: "0.2rem" }}>{d.label}</span>
                {d.href
                  ? <a href={d.href} style={{ fontSize: "0.78rem", color: brown, textDecoration: "none", fontFamily: "sans-serif", fontWeight: 500 }}>{d.val}</a>
                  : <span style={{ fontSize: "0.78rem", color: mid, fontFamily: "sans-serif" }}>{d.val}</span>
                }
              </div>
            ))}
          </div>
        </Reveal>

        {!submitted ? (
          <Reveal delay={0.15}>
            <div style={{ background: ivory, padding: "1.5rem", borderRadius: "12px", border: "1px solid #E8DDD0" }}>
              {[["name","Your Name","Ramesh Kumar","text"],["phone","Phone Number","+91 98765 43210","tel"]].map(([id,label,ph,type]) => (
                <div key={id} style={{ marginBottom: "1rem" }}>
                  <label style={labelStyle}>{label}</label>
                  <input type={type} placeholder={ph} value={formData[id]} onChange={e => setFormData(p => ({ ...p, [id]: e.target.value }))} style={inputStyle} />
                </div>
              ))}
              <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>Email (Optional)</label>
                <input type="email" placeholder="you@example.com" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} style={inputStyle} />
              </div>
              {[
                { id: "bhk", label: "Home Type", opts: ["Select BHK","1 BHK","2 BHK","3 BHK","4 BHK","Villa / Independent House"] },
                { id: "budget", label: "Budget Range", opts: ["Select Range","Rs 3L-5L","Rs 5L-10L","Rs 10L-20L","Rs 20L-50L","Rs 50L+"] },
                { id: "room", label: "Room / Service", opts: ["Select Room","Full Home Interior","Living Room","Master Bedroom","Modular Wardrobe","Pooja Room","Study Room","Kids Room","Guest Room","Wall Painting"] },
              ].map(s => (
                <div key={s.id} style={{ marginBottom: "1rem" }}>
                  <label style={labelStyle}>{s.label}</label>
                  <select value={formData[s.id]} onChange={e => setFormData(p => ({ ...p, [s.id]: e.target.value }))}
                    style={{ ...inputStyle, appearance: "none", WebkitAppearance: "none" }}>
                    {s.opts.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
              <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>Message (Optional)</label>
                <textarea placeholder="Tell us about your vision, timeline..." value={formData.msg} onChange={e => setFormData(p => ({ ...p, msg: e.target.value }))}
                  style={{ ...inputStyle, height: "100px", resize: "none" }} />
              </div>
              <button className="tap-btn" onClick={handleSubmit} style={{ width: "100%", background: dark, color: ivory, padding: "1rem", border: "none", cursor: "pointer", fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, borderRadius: "8px", fontFamily: "sans-serif" }}>
                Send Enquiry →
              </button>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <div style={{ textAlign: "center", padding: "3rem 1rem", background: ivory, borderRadius: "12px", border: "1px solid #E8DDD0" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", color: brown, marginBottom: "0.8rem" }}>Thank You!</h3>
              <p style={{ color: mid, fontSize: "0.9rem", lineHeight: 1.8, fontFamily: "sans-serif", fontWeight: 300 }}>
                Our design team will call you within <strong>24 hours</strong> to schedule your free home visit.
              </p>
            </div>
          </Reveal>
        )}
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#110E0B", padding: "2.5rem 1.2rem 5rem", fontFamily: "sans-serif" }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 600, color: ivory, marginBottom: "0.8rem" }}>
          Elegante <span style={{ color: gold, fontStyle: "italic" }}>Interiors</span>
        </div>
        <p style={{ fontSize: "0.82rem", color: "rgba(248,244,238,0.45)", lineHeight: 1.8, marginBottom: "1.5rem", fontWeight: 300 }}>
          Hyderabad's most trusted interior design studio. 8+ years crafting dream homes.
        </p>
        <div style={{ display: "flex", gap: "0.7rem", marginBottom: "2rem" }}>
          {["in","f","ig","yt"].map(s => (
            <a key={s} href="#" style={{ width: "2rem", height: "2rem", border: "1px solid rgba(248,244,238,0.12)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.78rem", color: "rgba(248,244,238,0.4)", textDecoration: "none" }}>{s}</a>
          ))}
        </div>
        <div style={{ fontSize: "0.73rem", color: "rgba(248,244,238,0.3)", borderTop: "1px solid rgba(248,244,238,0.06)", paddingTop: "1.2rem" }}>
          © 2025 Elegante Interiors, Hyderabad. All rights reserved.
        </div>
      </footer>

      {/* BOTTOM NAV */}
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: "480px", background: "rgba(248,244,238,0.97)", backdropFilter: "blur(16px)", borderTop: "1px solid rgba(201,169,110,0.2)", display: "flex", zIndex: 999 }}>
        {navItems.map(({ id, icon, label }) => (
          <button key={id} onClick={() => scrollTo(id)}
            style={{ flex: 1, padding: "0.7rem 0.2rem 0.6rem", background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.15rem" }}>
            <span style={{ fontSize: "1.2rem" }}>{icon}</span>
            <span style={{ fontSize: "0.58rem", letterSpacing: "0.03em", color: activeTab === id ? gold : mid, fontWeight: activeTab === id ? 600 : 400, fontFamily: "sans-serif" }}>{label}</span>
            {activeTab === id && <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: gold, display: "block" }} />}
          </button>
        ))}
      </div>

      {/* WHATSAPP */}
      <a href="https://wa.me/919398801834?text=Hi!%20I'm%20interested%20in%20interior%20design%20for%20my%20home%20in%20Hyderabad."
        className="wa-pulse"
        style={{ position: "fixed", bottom: "4.5rem", right: "1rem", background: "#25D366", color: "white", width: "3.2rem", height: "3.2rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", textDecoration: "none", zIndex: 998, boxShadow: "0 4px 20px rgba(37,211,102,0.5)" }}
        target="_blank" rel="noreferrer">💬</a>
    </div>
  );
}
