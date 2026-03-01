import React, { useEffect, useState } from "react";
import { MapPin, Phone, Clock, Globe, MessageCircle, Shield, CheckCircle, ChevronRight, ArrowDown } from "lucide-react";

const GOLD = "#F5C518";
const WHATSAPP_URL =
  "https://wa.me/50361165075?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Grupo%20F%C3%A9nix.";

const contactCards = [
  {
    icon: Phone, title: "Teléfono / WhatsApp",
    lines: ["(503) 6116-5075"],
    action: { label: "Llamar ahora", href: "tel:+50361165075" },
  },
  {
    icon: MapPin, title: "Dirección",
    lines: ["Pasaje Gedance, Casa #113", "Col. Flor Blanca, San Salvador"],
  },
  {
    icon: Globe, title: "Sitio Web",
    lines: ["www.grupofenix.com.sv"],
  },
  {
    icon: Clock, title: "Disponibilidad",
    lines: ["Centro de Operaciones: 24/7", "Atención a consultas: Lun – Vie"],
  },
  {
    icon: Shield, title: "Operación Legal",
    lines: ["Autorización PNC #406", "NIT: 0614-140319-102-1"],
  },
  {
    icon: MessageCircle, title: "WhatsApp",
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.title = "Contacto | Grupo Fénix – Seguridad Integral El Salvador";
  }, []);

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
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
        @keyframes float { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-12px); } }
        @keyframes wa-pulse { 0%,100% { box-shadow: 0 0 48px rgba(37,211,102,0.35); } 50% { box-shadow: 0 0 80px rgba(37,211,102,0.6); } }
        .contact-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .contact-card:hover { transform: translateY(-8px) scale(1.02); border-color: rgba(245,197,24,0.5) !important; box-shadow: 0 20px 60px rgba(245,197,24,0.1) !important; }
        .contact-card:hover .contact-icon { background: rgba(245,197,24,0.2) !important; transform: scale(1.1) rotate(-5deg); }
        .contact-icon { transition: all 0.3s ease; }
        .reveal { opacity:0; transform:translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.revealed { opacity:1; transform:translateY(0); }
        .reveal:nth-child(2) { transition-delay: 0.1s; }
        .reveal:nth-child(3) { transition-delay: 0.2s; }
        .reveal:nth-child(4) { transition-delay: 0.3s; }
        .reveal:nth-child(5) { transition-delay: 0.4s; }
        .reveal:nth-child(6) { transition-delay: 0.5s; }
        @media (max-width: 768px) {
          .contacto-hero-title { font-size: 2.6rem !important; }
          .contacto-cta-buttons { flex-direction: column !important; align-items: stretch !important; }
          .contacto-cta-buttons a { width: 100% !important; justify-content: center !important; }
        }
        @media (max-width: 480px) {
          .contacto-hero-title { font-size: 2rem !important; }
          .contact-card { padding: 1.5rem !important; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section style={{
        minHeight: "80vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden", paddingTop: "80px",
      }}>
        <div style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "url(https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/cebd91568_foto_1_pickup_guardia.jpg)",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.18) contrast(1.1)",
          transform: `translate(${(mousePos.x - 0.5) * -15}px, ${(mousePos.y - 0.5) * -10}px)`,
          transition: "transform 0.8s ease-out",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.9) 100%)",
        }} />
        {/* Scanline */}
        <div style={{
          position: "absolute", left: 0, right: 0, height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(245,197,24,0.3), transparent)",
          animation: "scanline 6s linear infinite", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "80px", right: 0,
          width: "500px", height: "500px",
          background: "radial-gradient(circle at top right, rgba(37,211,102,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24" style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(245,197,24,0.08)", border: "1px solid rgba(245,197,24,0.25)",
            borderRadius: "100px", padding: "8px 18px", marginBottom: "2rem",
            animation: "fadeIn 0.8s ease forwards",
          }}>
            <span style={{
              width: "7px", height: "7px", borderRadius: "50%", background: GOLD,
              boxShadow: "0 0 8px rgba(245,197,24,0.8)", display: "inline-block",
              animation: "pulse-gold 2s infinite",
            }} />
            <span style={{ color: GOLD, fontSize: "0.72rem", fontWeight: "700", letterSpacing: "2.5px" }}>
              CONTÁCTENOS · GRUPO FÉNIX
            </span>
          </div>

          <h1 className="contacto-hero-title" style={{
            fontSize: "clamp(2.8rem, 6.5vw, 5rem)", fontWeight: "900",
            lineHeight: "1.05", marginBottom: "1.75rem", color: "white",
            animation: "fadeUp 0.9s ease 0.2s both",
          }}>
            Estamos aqui para<br />
            <span style={{ color: GOLD, textShadow: "0 0 40px rgba(245,197,24,0.4)" }}>protegerte</span>
          </h1>

          <p style={{
            fontSize: "1.1rem", color: "#bbb", lineHeight: "1.85",
            maxWidth: "560px", marginBottom: "3rem",
            animation: "fadeUp 0.9s ease 0.4s both",
          }}>
            Contáctenos hoy mismo. Nuestro equipo de especialistas está disponible para atender sus consultas y diseñar su solución de seguridad.
          </p>

          <div className="contacto-cta-buttons flex flex-wrap gap-4" style={{ animation: "fadeUp 0.9s ease 0.6s both" }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{
              background: "#25D366", color: "white", fontWeight: "800",
              padding: "16px 36px", borderRadius: "8px", fontSize: "1rem",
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px",
              boxShadow: "0 0 30px rgba(37,211,102,0.3)", transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 50px rgba(37,211,102,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 30px rgba(37,211,102,0.3)"; }}
            >
              <MessageCircle size={20} /> Abrir WhatsApp
            </a>
            <a href="tel:+50361165075" style={{
              background: "transparent", color: "white", fontWeight: "700",
              padding: "16px 36px", borderRadius: "8px", fontSize: "1rem",
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px",
              border: "2px solid rgba(255,255,255,0.2)", transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "white"; }}
            >
              <Phone size={18} /> Llamar ahora
            </a>
          </div>

          <div style={{
            display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "3rem",
            animation: "fadeUp 0.9s ease 0.8s both",
          }}>
            {["PNC #406", "BASC", "UNAPS", "MAPFRE"].map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", color: "#666", fontSize: "0.78rem" }}>
                <CheckCircle size={13} style={{ color: GOLD }} />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", opacity: 0.4,
        }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "2px", color: "#888" }}>SCROLL</span>
          <ArrowDown size={16} style={{ color: "#888", animation: "float 1.5s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ══ CONTACT CARDS ══ */}
      <section style={{ padding: "7rem 0", background: "#000", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: "800px", height: "800px",
          background: "radial-gradient(circle, rgba(245,197,24,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <div style={{
              display: "inline-block", background: "rgba(245,197,24,0.08)",
              border: "1px solid rgba(245,197,24,0.2)", borderRadius: "100px",
              padding: "6px 18px", marginBottom: "1.5rem",
              color: GOLD, fontSize: "0.72rem", fontWeight: "700", letterSpacing: "2.5px",
            }}>INFORMACIÓN DE CONTACTO</div>
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: "900", color: "white" }}>
              Múltiples formas de <span style={{ color: GOLD }}>comunicarse</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="contact-card reveal" style={{
                  background: "#0b0b0b", border: "1px solid #1c1c1c",
                  borderRadius: "16px", padding: "2rem",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
                }}>
                  <div className="contact-icon" style={{
                    width: "54px", height: "54px",
                    background: "rgba(245,197,24,0.1)",
                    borderRadius: "14px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.25rem",
                    border: "1px solid rgba(245,197,24,0.2)",
                  }}>
                    <Icon style={{ color: GOLD, width: "24px", height: "24px" }} />
                  </div>
                  <div style={{ color: "white", fontWeight: "700", fontSize: "1rem", marginBottom: "0.75rem" }}>{card.title}</div>
                  {card.lines.map((line, j) => (
                    <div key={j} style={{ color: "#888", fontSize: "0.875rem", lineHeight: "1.75" }}>{line}</div>
                  ))}
                  {card.action && (
                    <a
                      href={card.action.href}
                      target={card.action.external ? "_blank" : undefined}
                      rel={card.action.external ? "noopener noreferrer" : undefined}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "4px",
                        marginTop: "1rem", color: GOLD, fontSize: "0.82rem", fontWeight: "600",
                        textDecoration: "none", transition: "gap 0.2s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.gap = "8px"; }}
                      onMouseLeave={e => { e.currentTarget.style.gap = "4px"; }}
                    >
                      {card.action.label} <ChevronRight size={14} />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ WHATSAPP MAIN CTA ══ */}
      <section style={{ padding: "0 0 7rem", background: "#000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal" style={{
            background: "linear-gradient(135deg, #050300, #0e0900, #050300)",
            border: "1px solid rgba(37,211,102,0.15)",
            borderRadius: "24px",
            padding: "clamp(3rem, 6vw, 5rem)",
            textAlign: "center",
            position: "relative", overflow: "hidden",
          }}>
            {/* Green radial glow */}
            <div style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
              width: "500px", height: "500px",
              background: "radial-gradient(circle, rgba(37,211,102,0.06) 0%, transparent 65%)",
              pointerEvents: "none",
            }} />
            <div style={{
              width: "90px", height: "90px",
              background: "#25D366",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 2.5rem",
              animation: "wa-pulse 3s ease-in-out infinite",
              position: "relative", zIndex: 1,
            }}>
              <MessageCircle style={{ color: "white", width: "42px", height: "42px" }} />
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: "900", color: "white", marginBottom: "1rem", position: "relative", zIndex: 1 }}>
              La forma más rápida de <span style={{ color: "#25D366" }}>contactarnos</span>
            </h2>
            <p style={{ color: "#888", maxWidth: "480px", margin: "0 auto 2.5rem", lineHeight: "1.8", fontSize: "0.95rem", position: "relative", zIndex: 1 }}>
              Envíenos un mensaje por WhatsApp y reciba respuesta inmediata de nuestro equipo de especialistas en seguridad.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: "#25D366", color: "white", fontWeight: "700",
                padding: "18px 52px", borderRadius: "10px", fontSize: "1.1rem",
                textDecoration: "none", transition: "all 0.3s",
                boxShadow: "0 8px 40px rgba(37,211,102,0.35)",
                position: "relative", zIndex: 1,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 60px rgba(37,211,102,0.55)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 40px rgba(37,211,102,0.35)"; }}
            >
              <MessageCircle size={24} />
              Abrir WhatsApp
            </a>
            <div style={{ marginTop: "2rem", color: "#555", fontSize: "0.82rem", position: "relative", zIndex: 1 }}>
              También puede escribir directamente al número:{" "}
              <strong style={{ color: "#888" }}>(503) 6116-5075</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ══ COMPANY INFO ══ */}
      <section style={{ padding: "0 0 7rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal" style={{
            background: "#0b0b0b", border: "1px solid #1c1c1c",
            borderRadius: "20px", padding: "clamp(2rem, 4vw, 3.5rem)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/9772c0dc2_4.png" alt="Logo" style={{ width: "45px", height: "45px", objectFit: "contain" }} />
                  <div style={{ color: GOLD, fontWeight: "900", fontSize: "1.5rem", letterSpacing: "3px" }}>
                    GRUPO FÉNIX
                  </div>
                </div>
                <div style={{ color: "#444", fontSize: "0.78rem", marginBottom: "2rem", letterSpacing: "1px" }}>
                  Phoenix Security S.A. de C.V.
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Razón Social", value: "Phoenix Security, S.A. de C.V." },
                    { label: "NIT", value: "0614-140319-102-1" },
                    { label: "Giro", value: "Asesoría y Asistencia Técnica de Servicios Privados de Seguridad" },
                    { label: "Dirección", value: "Pasaje Gedance, Casa #113, Col. Flor Blanca, San Salvador" },
                    { label: "Teléfono", value: "(503) 6116-5075" },
                    { label: "Web", value: "www.grupofenix.com.sv" },
                  ].map((item, i) => (
                    <div key={i} style={{ borderBottom: "1px solid #161616", paddingBottom: "0.75rem", transition: "border-color 0.3s" }}>
                      <span style={{ color: "#555", fontSize: "0.7rem", letterSpacing: "1px" }}>{item.label}:</span>
                      {" "}<span style={{ color: "#ccc", fontSize: "0.88rem" }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div style={{
                  display: "inline-block",
                  background: "rgba(245,197,24,0.06)",
                  border: "1px solid rgba(245,197,24,0.15)",
                  borderRadius: "16px",
                  padding: "3rem",
                  transition: "all 0.4s ease",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(245,197,24,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.15)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ fontSize: "5rem", fontWeight: "900", color: GOLD, lineHeight: "1", textShadow: "0 0 40px rgba(245,197,24,0.3)" }}>406</div>
                  <div style={{ color: "#666", fontSize: "0.85rem", marginTop: "0.75rem" }}>Autorización PNC</div>
                  <div style={{ color: "#444", fontSize: "0.72rem", marginTop: "2px" }}>Policía Nacional Civil</div>
                  <div style={{ marginTop: "2rem", borderTop: "1px solid #1a1a1a", paddingTop: "1.5rem" }}>
                    <div style={{ color: "#444", fontSize: "0.68rem", letterSpacing: "1.5px", marginBottom: "8px" }}>ASEGURADOS CON</div>
                    <div style={{ color: "white", fontWeight: "800", fontSize: "1.2rem" }}>MAPFRE</div>
                    <div style={{ color: "#555", fontSize: "0.72rem", marginTop: "3px" }}>Resp. Civil · Seguro Colectivo de Vida</div>
                  </div>
                </div>

                {/* Memberships row */}
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {["BASC", "UNAPS", "Cámara de Comercio"].map((m, i) => (
                    <div key={i} style={{
                      background: "#111", border: "1px solid #222",
                      borderRadius: "100px", padding: "6px 16px",
                      color: "#888", fontSize: "0.75rem", fontWeight: "600",
                      transition: "all 0.3s",
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)"; e.currentTarget.style.color = GOLD; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "#222"; e.currentTarget.style.color = "#888"; }}
                    >
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}