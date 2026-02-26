import React, { useEffect, useState } from "react";
import { MapPin, Phone, Clock, Globe, MessageCircle, Shield, ChevronRight, CheckCircle } from "lucide-react";

const GOLD = "#F5C518";
const WHATSAPP_URL =
  "https://wa.me/50361165075?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Grupo%20F%C3%A9nix.";

const contactCards = [
  {
    icon: Phone,
    title: "Teléfono / WhatsApp",
    lines: ["(503) 6116-5075"],
    action: { label: "Llamar ahora", href: "tel:+50361165075" },
  },
  {
    icon: MapPin,
    title: "Dirección",
    lines: ["Pasaje Gedance, Casa #113", "Col. Flor Blanca, San Salvador"],
  },
  {
    icon: Globe,
    title: "Sitio Web",
    lines: ["www.grupofenix.com.sv"],
  },
  {
    icon: Clock,
    title: "Disponibilidad",
    lines: ["Centro de Operaciones: 24/7", "Atención a consultas: Lun – Vie"],
  },
  {
    icon: Shield,
    title: "Operación Legal",
    lines: ["Autorización PNC #406", "NIT: 0614-140319-102-1"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["Respuesta rápida garantizada", "Mensaje directo a nuestro equipo"],
    action: { label: "Abrir WhatsApp", href: WHATSAPP_URL, external: true },
  },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Contacto() {
  useScrollReveal();
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    document.title = "Contacto | Grupo Fénix – Seguridad Integral El Salvador";
  }, []);

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div style={{ background: "#000", color: "white", overflowX: "hidden" }}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes scanline { 0% { top:-100%; } 100% { top:200%; } }
        @keyframes pulse-gold { 0%,100% { box-shadow: 0 0 20px rgba(245,197,24,0.2); } 50% { box-shadow: 0 0 50px rgba(245,197,24,0.5); } }
        @keyframes float { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-10px); } }
        @keyframes border-glow { 0%,100% { border-color: rgba(245,197,24,0.2); } 50% { border-color: rgba(245,197,24,0.55); } }
        .reveal { opacity:0; transform:translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.revealed { opacity:1; transform:translateY(0); }
        .reveal:nth-child(2) { transition-delay: 0.1s; }
        .reveal:nth-child(3) { transition-delay: 0.2s; }
        .reveal:nth-child(4) { transition-delay: 0.3s; }
        .reveal:nth-child(5) { transition-delay: 0.4s; }
        .reveal:nth-child(6) { transition-delay: 0.5s; }
        .contact-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .contact-card:hover { transform: translateY(-8px) scale(1.02); border-color: rgba(245,197,24,0.45) !important; box-shadow: 0 20px 60px rgba(245,197,24,0.1) !important; }
        .contact-card:hover .card-icon { background: rgba(245,197,24,0.2) !important; transform: scale(1.1) rotate(-5deg); }
        .card-icon { transition: all 0.3s ease; }
      `}</style>

      {/* ══════════════════════════════════
          HERO — Cinematic Header
      ══════════════════════════════════ */}
      <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: "80px" }}>
        <div style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80)",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.18) contrast(1.1)",
          transform: `translate(${(mousePos.x - 0.5) * -12}px, ${(mousePos.y - 0.5) * -8}px)`,
          transition: "transform 0.8s ease-out",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.9) 100%)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(245,197,24,0.35), transparent)", animation: "scanline 7s linear infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "80px", right: 0, width: "450px", height: "450px", background: "radial-gradient(circle at top right, rgba(245,197,24,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ animation: "fadeIn 0.6s ease forwards" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(245,197,24,0.08)", border: "1px solid rgba(245,197,24,0.25)", borderRadius: "100px", padding: "8px 18px", marginBottom: "1.5rem" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: GOLD, boxShadow: "0 0 8px rgba(245,197,24,0.8)", display: "inline-block", animation: "pulse-gold 2s infinite" }} />
              <span style={{ color: GOLD, fontSize: "0.72rem", fontWeight: "700", letterSpacing: "2.5px" }}>CONTÁCTENOS</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: "900", color: "white", lineHeight: "1.08", marginBottom: "1.5rem", animation: "fadeUp 0.9s ease 0.15s both" }}>
            Estamos aquí para<br /><span style={{ color: GOLD, textShadow: "0 0 40px rgba(245,197,24,0.4)" }}>protegerle</span>
          </h1>
          <p style={{ color: "#bbb", maxWidth: "540px", fontSize: "1.05rem", lineHeight: "1.8", animation: "fadeUp 0.9s ease 0.3s both" }}>
            Contáctenos hoy mismo. Nuestro equipo de especialistas está disponible para atender sus consultas y diseñar su solución de seguridad.
          </p>

          {/* Trust checks */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "2.5rem", animation: "fadeUp 0.9s ease 0.5s both" }}>
            {["Respuesta inmediata", "24/7 disponibles", "Sin compromiso"].map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", color: "#666", fontSize: "0.78rem" }}>
                <CheckCircle size={13} style={{ color: GOLD }} />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CONTACT CARDS
      ══════════════════════════════════ */}
      <section style={{ padding: "7rem 0", background: "#000", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "800px", height: "800px", background: "radial-gradient(circle, rgba(245,197,24,0.03) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <div className="section-tag">Canales de Contacto</div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: "900", color: "white" }}>
              Cómo <span style={{ color: GOLD }}>comunicarse</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="contact-card reveal" style={{
                  background: "#0b0b0b", border: "1px solid #1c1c1c",
                  borderRadius: "18px", padding: "2.25rem",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
                }}>
                  <div className="card-icon" style={{
                    width: "52px", height: "52px",
                    background: "rgba(245,197,24,0.1)", borderRadius: "13px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.5rem", border: "1px solid rgba(245,197,24,0.2)",
                  }}>
                    <Icon style={{ color: GOLD, width: "22px", height: "22px" }} />
                  </div>
                  <div style={{ color: "white", fontWeight: "700", fontSize: "1rem", marginBottom: "0.75rem" }}>{card.title}</div>
                  {card.lines.map((line, j) => (
                    <div key={j} style={{ color: "#666", fontSize: "0.875rem", lineHeight: "1.8" }}>{line}</div>
                  ))}
                  {card.action && (
                    <a
                      href={card.action.href}
                      target={card.action.external ? "_blank" : undefined}
                      rel={card.action.external ? "noopener noreferrer" : undefined}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "4px",
                        marginTop: "1.25rem", color: GOLD, fontSize: "0.82rem",
                        fontWeight: "600", textDecoration: "none",
                        borderBottom: `1px solid rgba(245,197,24,0.3)`,
                        paddingBottom: "2px", transition: "all 0.2s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.3)"; }}
                    >
                      {card.action.label} <ChevronRight size={13} />
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── MAIN WHATSAPP CTA ── */}
          <div className="reveal" style={{
            background: "linear-gradient(135deg, #080600, #160f00)",
            border: "1px solid rgba(245,197,24,0.15)",
            borderRadius: "20px", padding: "clamp(3rem, 5vw, 4.5rem)",
            textAlign: "center", position: "relative", overflow: "hidden",
            animation: "border-glow 4s ease infinite",
          }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(37,211,102,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
            <div style={{
              width: "84px", height: "84px", background: "#25D366", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 2rem", boxShadow: "0 0 60px rgba(37,211,102,0.4)",
              animation: "float 3s ease-in-out infinite",
            }}>
              <MessageCircle style={{ color: "white", width: "40px", height: "40px" }} />
            </div>
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)", fontWeight: "900", color: "white", marginBottom: "1rem", position: "relative" }}>
              La forma más rápida de contactarnos
            </h2>
            <p style={{ color: "#777", maxWidth: "460px", margin: "0 auto 2.5rem", lineHeight: "1.8", fontSize: "0.95rem", position: "relative" }}>
              Envíenos un mensaje por WhatsApp y reciba respuesta inmediata de nuestro equipo de especialistas en seguridad.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: "#25D366", color: "white", fontWeight: "700",
                padding: "18px 48px", borderRadius: "10px", fontSize: "1.05rem",
                textDecoration: "none", boxShadow: "0 8px 40px rgba(37,211,102,0.3)",
                transition: "all 0.3s", position: "relative",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 50px rgba(37,211,102,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 40px rgba(37,211,102,0.3)"; }}
            >
              <MessageCircle size={22} /> Abrir WhatsApp
            </a>
            <div style={{ marginTop: "1.75rem", color: "#444", fontSize: "0.82rem", position: "relative" }}>
              También puede escribir directamente al número:{" "}
              <strong style={{ color: "#666" }}>(503) 6116-5075</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          COMPANY INFO
      ══════════════════════════════════ */}
      <section style={{ padding: "0 0 7rem", background: "#000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal" style={{
            background: "#0a0a0a", border: "1px solid #1a1a1a",
            borderRadius: "20px", padding: "clamp(2rem, 4vw, 3.5rem)",
            transition: "all 0.4s ease",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.25)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div style={{ color: GOLD, fontWeight: "900", fontSize: "1.4rem", letterSpacing: "3px", marginBottom: "4px" }}>GRUPO FÉNIX</div>
                <div style={{ color: "#333", fontSize: "0.8rem", marginBottom: "2rem" }}>Phoenix Security S.A. de C.V.</div>
                <div style={{ color: "#555", fontSize: "0.875rem", lineHeight: "2.4" }}>
                  <div><span style={{ color: "#333" }}>Razón Social:</span> Phoenix Security, S.A. de C.V.</div>
                  <div><span style={{ color: "#333" }}>NIT:</span> 0614-140319-102-1</div>
                  <div><span style={{ color: "#333" }}>Giro:</span> Asesoría y Asistencia Técnica de Servicios Privados de Seguridad</div>
                  <div><span style={{ color: "#333" }}>Dirección:</span> Pasaje Gedance, Casa #113, Col. Flor Blanca, San Salvador</div>
                  <div><span style={{ color: "#333" }}>Teléfono:</span> (503) 6116-5075</div>
                  <div><span style={{ color: "#333" }}>Web:</span> www.grupofenix.com.sv</div>
                </div>
              </div>
              <div className="text-center">
                <div style={{
                  display: "inline-block",
                  background: "rgba(245,197,24,0.06)", border: "1px solid rgba(245,197,24,0.15)",
                  borderRadius: "16px", padding: "2.5rem",
                  transition: "all 0.4s ease",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,197,24,0.1)"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.35)"; e.currentTarget.style.boxShadow = "0 16px 50px rgba(245,197,24,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(245,197,24,0.06)"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.15)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ fontSize: "4.5rem", fontWeight: "900", color: GOLD, lineHeight: "1", textShadow: "0 0 40px rgba(245,197,24,0.4)" }}>406</div>
                  <div style={{ color: "#555", fontSize: "0.8rem", marginTop: "0.5rem" }}>Autorización PNC</div>
                  <div style={{ color: "#333", fontSize: "0.7rem", marginTop: "2px" }}>Policía Nacional Civil</div>
                  <div style={{ marginTop: "1.5rem", borderTop: "1px solid #1a1a1a", paddingTop: "1.25rem" }}>
                    <div style={{ color: "#444", fontSize: "0.7rem", letterSpacing: "1px", marginBottom: "6px" }}>ASEGURADOS CON</div>
                    <div style={{ color: "white", fontWeight: "700", fontSize: "1rem" }}>MAPFRE</div>
                    <div style={{ color: "#444", fontSize: "0.7rem" }}>Resp. Civil · Seguro Colectivo de Vida</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}