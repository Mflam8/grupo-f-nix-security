import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Target, Eye, Shield, Award, Users, MapPin, CheckCircle, Zap, ChevronRight, MessageCircle } from "lucide-react";

const GOLD = "#F5C518";
const WHATSAPP_URL =
  "https://wa.me/50361165075?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Grupo%20F%C3%A9nix.";

const misionItems = [
  "Proteger la vida y la propiedad de nuestros Asociados y empleados.",
  "Proporcionar un servicio de seguridad confiable y eficiente.",
  "Desarrollar relaciones de confianza con nuestros Asociados.",
  "Innovar y mantener personal altamente capacitado con tecnología moderna.",
  "Cumplir nuestros estándares de integridad, honestidad y profesionalismo.",
];

const valores = [
  { icon: Shield, title: "Confianza", desc: "La base de cada relación con nuestros clientes y colaboradores." },
  { icon: Award, title: "Integridad", desc: "Actuamos con honestidad y transparencia en todo momento." },
  { icon: Zap, title: "Excelencia", desc: "Superamos constantemente nuestros estándares de calidad." },
  { icon: Users, title: "Profesionalismo", desc: "Personal certificado y altamente capacitado en cada servicio." },
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

export default function Nosotros() {
  useScrollReveal();
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    document.title = "Quiénes Somos | Grupo Fénix – Seguridad Integral";
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
        .valor-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .valor-card:hover { transform: translateY(-10px) scale(1.03); border-color: rgba(245,197,24,0.5) !important; box-shadow: 0 20px 60px rgba(245,197,24,0.1) !important; }
        .valor-card:hover .valor-icon { background: rgba(245,197,24,0.2) !important; transform: scale(1.12) rotate(-5deg); }
        .valor-icon { transition: all 0.3s ease; }
        .legal-row { transition: all 0.3s ease; }
        .legal-row:hover { background: rgba(245,197,24,0.04) !important; padding-left: 8px !important; }
        .cta-btn-nosotros { transition: all 0.3s ease; }
      `}</style>

      {/* ══════════════════════════════════
          HERO — Cinematic Header
      ══════════════════════════════════ */}
      <section style={{
        minHeight: "60vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden", paddingTop: "80px",
      }}>
        {/* Parallax BG */}
        <div style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1800&q=80)",
          backgroundSize: "cover", backgroundPosition: "center top",
          filter: "brightness(0.2) contrast(1.1)",
          transform: `translate(${(mousePos.x - 0.5) * -12}px, ${(mousePos.y - 0.5) * -8}px)`,
          transition: "transform 0.8s ease-out",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.9) 100%)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(245,197,24,0.35), transparent)", animation: "scanline 7s linear infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "80px", right: 0, width: "450px", height: "450px", background: "radial-gradient(circle at top right, rgba(245,197,24,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ animation: "fadeIn 0.6s ease forwards" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(245,197,24,0.08)", border: "1px solid rgba(245,197,24,0.25)",
              borderRadius: "100px", padding: "8px 18px", marginBottom: "1.5rem",
            }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: GOLD, boxShadow: "0 0 8px rgba(245,197,24,0.8)", display: "inline-block", animation: "pulse-gold 2s infinite" }} />
              <span style={{ color: GOLD, fontSize: "0.72rem", fontWeight: "700", letterSpacing: "2.5px" }}>QUIÉNES SOMOS</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: "900", color: "white", lineHeight: "1.08", marginBottom: "1.5rem", animation: "fadeUp 0.9s ease 0.15s both" }}>
            Así somos en<br /><span style={{ color: GOLD, textShadow: "0 0 40px rgba(245,197,24,0.4)" }}>Grupo Fénix</span>
          </h1>
          <p style={{ color: "#bbb", maxWidth: "560px", fontSize: "1.05rem", lineHeight: "1.8", animation: "fadeUp 0.9s ease 0.3s both" }}>
            Un equipo de profesionales dedicados a brindar soluciones de seguridad integral, innovadoras y personalizadas para proteger lo que más importa.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════
          QUIÉNES SOMOS
      ══════════════════════════════════ */}
      <section style={{ padding: "7rem 0", background: "#000", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", right: "-200px", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(245,197,24,0.04) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — copy */}
            <div className="reveal">
              <div className="section-tag">Nuestra Empresa</div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: "900", color: "white", marginBottom: "1.75rem", lineHeight: "1.15" }}>
                Quiénes <span style={{ color: GOLD }}>Somos</span>
              </h2>
              {[
                "En Grupo Fénix somos un equipo de profesionales dedicados a brindar soluciones de seguridad integral innovadoras, tecnológicas y personalizadas, dando una protección que inspire confianza a nuestros Clientes.",
                "Nos apasiona dar servicios de seguridad de alta calidad, basados en la confianza, la integridad y la excelencia, para garantizar la tranquilidad.",
                "Nuestras bases fundamentales son el desarrollo de la capacidad técnica de nuestro Recurso Humano, que es lo más valioso de nuestra organización.",
              ].map((text, i) => (
                <p key={i} style={{ color: "#aaa", lineHeight: "1.85", fontSize: "0.95rem", marginBottom: "1.25rem", borderLeft: i === 0 ? `3px solid ${GOLD}` : "none", paddingLeft: i === 0 ? "1rem" : "0" }}>{text}</p>
              ))}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "2rem" }}>
                <Link to={createPageUrl("Servicios")} style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: GOLD, color: "#000", fontWeight: "800",
                  padding: "14px 30px", borderRadius: "8px", fontSize: "0.95rem",
                  textDecoration: "none", transition: "all 0.3s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(245,197,24,0.35)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  Nuestros servicios <ChevronRight size={16} />
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "transparent", color: GOLD, fontWeight: "700",
                  padding: "14px 30px", borderRadius: "8px", fontSize: "0.95rem",
                  textDecoration: "none", border: `2px solid rgba(245,197,24,0.3)`,
                  transition: "all 0.3s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,197,24,0.08)"; e.currentTarget.style.borderColor = GOLD; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.3)"; }}
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Right — photo with overlay stats */}
            <div className="reveal" style={{ position: "relative" }}>
              <div style={{
                borderRadius: "20px", overflow: "hidden",
                border: "1px solid rgba(245,197,24,0.2)", height: "440px", position: "relative",
                animation: "border-glow 4s ease infinite",
                boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
              }}>
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80"
                  alt="Equipo Grupo Fénix en operación"
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5)" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", borderTop: "1px solid rgba(245,197,24,0.15)", gap: "0" }}>
                  {[
                    { value: "406", label: "Lic. PNC" },
                    { value: "24/7", label: "COS Activo" },
                    { value: "3+", label: "Membresías" },
                    { value: "100%", label: "Certificados" },
                  ].map((s, i) => (
                    <div key={i} style={{ textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                      <div style={{ color: GOLD, fontWeight: "900", fontSize: "1.4rem", lineHeight: "1" }}>{s.value}</div>
                      <div style={{ color: "#777", fontSize: "0.65rem", marginTop: "3px" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Gold accent line */}
              <div style={{ position: "absolute", top: "40px", right: "-18px", width: "4px", height: "55%", background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)`, borderRadius: "2px" }} />
              {/* Floating badge */}
              <div style={{
                position: "absolute", top: "-18px", left: "30px",
                background: "linear-gradient(135deg, #111, #0a0700)",
                border: "1px solid rgba(245,197,24,0.4)", borderRadius: "12px",
                padding: "14px 20px", boxShadow: "0 10px 40px rgba(0,0,0,0.7)",
                animation: "float 4s ease-in-out infinite",
              }}>
                <div style={{ color: GOLD, fontWeight: "900", fontSize: "1.1rem", lineHeight: "1" }}>Desde 2019</div>
                <div style={{ color: "#666", fontSize: "0.62rem", marginTop: "3px", letterSpacing: "1px" }}>PROTEGIENDO EL SALVADOR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          MISIÓN & VISIÓN
      ══════════════════════════════════ */}
      <section style={{ padding: "7rem 0", background: "#040404", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(245,197,24,0.2), transparent)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(245,197,24,0.2), transparent)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "700px", height: "700px", background: "radial-gradient(circle, rgba(245,197,24,0.03) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <div className="section-tag">Fundamentos</div>
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: "900", color: "white" }}>
              Misión & <span style={{ color: GOLD }}>Visión</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Misión */}
            <div className="reveal" style={{
              background: "#0b0b0b", border: "1px solid #1c1c1c",
              borderRadius: "20px", padding: "3rem",
              transition: "all 0.4s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.35)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(245,197,24,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1c1c1c"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ width: "56px", height: "56px", background: "rgba(245,197,24,0.1)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(245,197,24,0.2)", marginBottom: "1.75rem" }}>
                <Target style={{ color: GOLD, width: "26px", height: "26px" }} />
              </div>
              <h3 style={{ color: GOLD, fontSize: "1.4rem", fontWeight: "900", marginBottom: "1.25rem" }}>Misión Empresarial</h3>
              <p style={{ color: "#aaa", lineHeight: "1.85", marginBottom: "1.75rem", fontSize: "0.95rem" }}>
                Nuestra misión es <strong style={{ color: "white" }}>proporcionar servicios de seguridad de alta calidad, innovadores y tecnológicos</strong>, que superen las expectativas de nuestros clientes, y protejan sus familias, empleados y activos.
              </p>
              <div style={{ color: "#444", fontSize: "0.7rem", letterSpacing: "2px", marginBottom: "1.25rem" }}>PARA NOSOTROS CUMPLIR CON LA MISIÓN ES:</div>
              <div className="flex flex-col gap-3">
                {misionItems.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 12px", background: "rgba(245,197,24,0.03)", borderRadius: "8px", border: "1px solid rgba(245,197,24,0.06)", transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,197,24,0.07)"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.18)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(245,197,24,0.03)"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.06)"; }}
                  >
                    <CheckCircle style={{ color: GOLD, width: "14px", height: "14px", marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ color: "#999", fontSize: "0.875rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visión */}
            <div className="reveal" style={{
              background: "#0b0b0b", border: "1px solid #1c1c1c",
              borderRadius: "20px", padding: "3rem",
              transition: "all 0.4s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.35)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(245,197,24,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1c1c1c"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ width: "56px", height: "56px", background: "rgba(245,197,24,0.1)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(245,197,24,0.2)", marginBottom: "1.75rem" }}>
                <Eye style={{ color: GOLD, width: "26px", height: "26px" }} />
              </div>
              <h3 style={{ color: GOLD, fontSize: "1.4rem", fontWeight: "900", marginBottom: "1.25rem" }}>Visión Empresarial</h3>
              <div className="flex flex-col gap-4" style={{ marginBottom: "2rem" }}>
                <p style={{ color: "#aaa", lineHeight: "1.85", fontSize: "0.95rem" }}>Nuestra visión es <strong style={{ color: "white" }}>ser líderes en el sector de la seguridad privada y ser reconocidos por la excelencia y profesionalismo</strong> de nuestro servicio.</p>
                <p style={{ color: "#aaa", lineHeight: "1.85", fontSize: "0.95rem" }}>Mantener un servicio de seguridad innovador e integral, a través de nuestro personal en la protección y seguridad de nuestros asociados, sus empleados y activos.</p>
                <p style={{ color: "#aaa", lineHeight: "1.85", fontSize: "0.95rem" }}>Ser la opción de las empresas y personas que buscan proteger sus activos, empleados y familias de manera efectiva y confiable.</p>
              </div>
              <div style={{
                background: `linear-gradient(135deg, ${GOLD} 0%, #d4a800 100%)`,
                color: "#000", fontWeight: "900",
                padding: "18px 24px", borderRadius: "10px",
                textAlign: "center", fontSize: "1rem", letterSpacing: "0.5px",
                boxShadow: "0 8px 30px rgba(245,197,24,0.25)",
              }}>
                Protección que inspira confianza.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          VALORES
      ══════════════════════════════════ */}
      <section style={{ padding: "7rem 0", background: "#000", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "-100px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(245,197,24,0.04) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <div className="section-tag">Valores</div>
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: "900", color: "white" }}>
              Nuestros <span style={{ color: GOLD }}>Valores</span>
            </h2>
            <p style={{ color: "#666", maxWidth: "480px", margin: "1rem auto 0", fontSize: "0.95rem", lineHeight: "1.8" }}>
              Los principios que guían cada decisión y acción de nuestro equipo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="valor-card reveal" style={{
                  background: "#0b0b0b", border: "1px solid #1c1c1c",
                  borderRadius: "18px", padding: "2.5rem 1.5rem", textAlign: "center",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
                }}>
                  <div className="valor-icon" style={{
                    width: "68px", height: "68px",
                    background: "rgba(245,197,24,0.1)",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    border: "1px solid rgba(245,197,24,0.2)",
                  }}>
                    <Icon style={{ color: GOLD, width: "30px", height: "30px" }} />
                  </div>
                  <div style={{ color: "white", fontWeight: "800", fontSize: "1.1rem", marginBottom: "0.75rem" }}>{v.title}</div>
                  <div style={{ color: "#555", fontSize: "0.85rem", lineHeight: "1.7" }}>{v.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          LEGAL & COBERTURA
      ══════════════════════════════════ */}
      <section style={{ padding: "7rem 0", background: "#040404", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(245,197,24,0.15), transparent)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <div className="section-tag">Respaldo Legal</div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: "900", color: "white" }}>
              Operamos con plena <span style={{ color: GOLD }}>Legalidad</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Legal */}
            <div className="reveal" style={{
              background: "#0b0b0b", border: "1px solid #1c1c1c", borderRadius: "20px", padding: "2.75rem",
              transition: "all 0.4s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1c1c1c"; }}
            >
              <div style={{ color: GOLD, fontWeight: "700", fontSize: "0.72rem", letterSpacing: "2.5px", marginBottom: "1.5rem" }}>OPERACIÓN LEGAL</div>
              <h3 style={{ color: "white", fontSize: "1.4rem", fontWeight: "800", marginBottom: "1.75rem" }}>
                Datos empresariales
              </h3>
              <div className="flex flex-col gap-0">
                {[
                  { label: "Autorización PNC", value: "Licencia #406 – Policía Nacional Civil" },
                  { label: "Razón Social", value: "Phoenix Security, S.A. de C.V." },
                  { label: "NIT", value: "0614-140319-102-1" },
                  { label: "Seguro", value: "MAPFRE – Responsabilidad Civil y Seguro Colectivo de Vida" },
                  { label: "Membresías", value: "BASC · UNAPS · Cámara de Comercio e Industria" },
                ].map((item, i) => (
                  <div key={i} className="legal-row" style={{ borderBottom: "1px solid #161616", paddingBottom: "1rem", paddingTop: "1rem", paddingLeft: "0", transition: "all 0.2s ease", borderRadius: "4px" }}>
                    <div style={{ color: "#444", fontSize: "0.7rem", letterSpacing: "1.5px", marginBottom: "3px" }}>{item.label}</div>
                    <div style={{ color: "#ccc", fontSize: "0.9rem" }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage */}
            <div className="reveal" style={{
              background: "#0b0b0b", border: "1px solid #1c1c1c", borderRadius: "20px", padding: "2.75rem",
              transition: "all 0.4s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1c1c1c"; }}
            >
              <div style={{ width: "56px", height: "56px", background: "rgba(245,197,24,0.1)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(245,197,24,0.2)", marginBottom: "1.75rem" }}>
                <MapPin style={{ color: GOLD, width: "26px", height: "26px" }} />
              </div>
              <h3 style={{ color: "white", fontSize: "1.4rem", fontWeight: "800", marginBottom: "1rem" }}>
                Cobertura <span style={{ color: GOLD }}>Nacional</span>
              </h3>
              <p style={{ color: "#777", lineHeight: "1.85", marginBottom: "1.75rem", fontSize: "0.9rem" }}>
                Supervisión y control del servicio a nivel nacional. Siempre disponibles con equipos de reacción en las Oficinas Centrales y Regionales de Occidente y Oriente.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Centro de Operaciones y Servicios (COS) activo 24/7",
                  "Coordinaciones pre-establecidas con PNC y Fiscalía General",
                  "Equipos de reacción en todo el territorio nacional",
                  "Apoyo en puntos vulnerables con recursos propios y PNC",
                  "Sistema de Emergencias 911 integrado",
                  "Informe diario de situación al cliente",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 12px", background: "rgba(245,197,24,0.02)", borderRadius: "8px", border: "1px solid rgba(245,197,24,0.05)", transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,197,24,0.07)"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.15)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(245,197,24,0.02)"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.05)"; }}
                  >
                    <CheckCircle style={{ color: GOLD, width: "14px", height: "14px", marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ color: "#999", fontSize: "0.875rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA — Cinematic closer
      ══════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", padding: "8rem 0" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1800&q=80)", backgroundSize: "cover", backgroundPosition: "center 25%", filter: "brightness(0.1)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.88))" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(245,197,24,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", background: "rgba(245,197,24,0.08)", border: "1px solid rgba(245,197,24,0.2)", borderRadius: "100px", padding: "8px 20px", marginBottom: "2rem", color: GOLD, fontSize: "0.72rem", fontWeight: "700", letterSpacing: "2.5px" }}>
            CONTÁCTENOS HOY
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: "900", color: "white", marginBottom: "1.25rem", lineHeight: "1.15" }}>
            Descubra cómo podemos<br /><span style={{ color: GOLD }}>proteger su empresa</span>
          </h2>
          <p style={{ color: "#888", marginBottom: "3rem", fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "480px", margin: "0 auto 3rem" }}>
            Estamos listos para atenderle y diseñar una solución de seguridad integral personalizada.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#25D366", color: "white", fontWeight: "700",
              padding: "18px 44px", borderRadius: "10px", fontSize: "1.05rem",
              textDecoration: "none", boxShadow: "0 8px 40px rgba(37,211,102,0.3)",
              transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 50px rgba(37,211,102,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 40px rgba(37,211,102,0.3)"; }}
            >
              <MessageCircle size={22} /> Contactar por WhatsApp
            </a>
            <Link to={createPageUrl("Servicios")} style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "transparent", color: "white", fontWeight: "700",
              padding: "18px 44px", borderRadius: "10px", fontSize: "1.05rem",
              textDecoration: "none", border: "2px solid rgba(255,255,255,0.2)",
              transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "white"; }}
            >
              Ver nuestros servicios <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}