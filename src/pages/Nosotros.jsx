import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Target, Eye, Shield, Award, Users, MapPin, CheckCircle, Zap, ChevronRight, MessageCircle, ArrowDown } from "lucide-react";
import EquipmentAndUniform from "@/components/nosotros/EquipmentAndUniform";
import AdminProcessSection from "@/components/nosotros/AdminProcessSection";
import BenefitsSection from "@/components/nosotros/BenefitsSection";

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
      (entries, obs) => entries.forEach(e => { 
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0, rootMargin: "100px" }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Nosotros() {
  useScrollReveal();
  const bgRef = useRef(null);

  useEffect(() => {
    document.title = "Quiénes Somos | Grupo Fénix – Seguridad Integral";
  }, []);

  useEffect(() => {
    let animationFrameId;
    const handleMouse = (e) => {
      if (!bgRef.current) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        if (bgRef.current) {
          bgRef.current.style.transform = `translate(${(x - 0.5) * -15}px, ${(y - 0.5) * -10}px)`;
        }
      });
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ background: "#000", color: "white" }}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes scanline { 0% { top:-100%; } 100% { top:200%; } }
        @keyframes pulse-gold { 0%,100% { box-shadow: 0 0 20px rgba(245,197,24,0.2); } 50% { box-shadow: 0 0 50px rgba(245,197,24,0.5); } }
        @keyframes float { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-12px); } }
        @keyframes border-glow { 0%,100% { border-color: rgba(245,197,24,0.2); } 50% { border-color: rgba(245,197,24,0.6); } }
        .valor-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .valor-card:hover { transform: translateY(-10px) scale(1.02); border-color: rgba(245,197,24,0.6) !important; box-shadow: 0 20px 60px rgba(245,197,24,0.12) !important; }
        .valor-card:hover .valor-icon { background: rgba(245,197,24,0.2) !important; transform: scale(1.1) rotate(-5deg); }
        .valor-icon { transition: all 0.3s ease; }
        .checklist-item { transition: all 0.3s; }
        .checklist-item:hover { background: rgba(245,197,24,0.07) !important; border-color: rgba(245,197,24,0.2) !important; }
        .legal-row { transition: all 0.3s; }
        .legal-row:hover { border-bottom-color: rgba(245,197,24,0.2) !important; }
        .reveal { opacity:0; transform:translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.revealed { opacity:1; transform:translateY(0); }
        .reveal:nth-child(2) { transition-delay: 0.1s; }
        .reveal:nth-child(3) { transition-delay: 0.2s; }
        .reveal:nth-child(4) { transition-delay: 0.3s; }
        @media (max-width: 768px) {
          .nosotros-hero-title { font-size: 2.6rem !important; }
          .nosotros-cta-buttons { flex-direction: column !important; align-items: stretch !important; }
          .nosotros-cta-buttons a { width: 100% !important; justify-content: center !important; }
          .valor-card { margin-bottom: 0 !important; }
        }
        @media (max-width: 480px) {
          .nosotros-hero-title { font-size: 2rem !important; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section style={{
        minHeight: "80vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden", paddingTop: "80px",
      }}>
        <div ref={bgRef} style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "url(https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/5a580165f_WhatsAppImage2026-02-26at113000AM.jpg)",
          backgroundSize: "cover", backgroundPosition: "center top",
          filter: "brightness(0.38) contrast(1.1)",
          transition: "transform 0.8s ease-out",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.7) 100%)",
        }} />
        {/* Scanline */}
        <div style={{
          position: "absolute", left: 0, right: 0, height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(245,197,24,0.3), transparent)",
          animation: "scanline 6s linear infinite", pointerEvents: "none",
        }} />
        {/* Gold radial */}
        <div style={{
          position: "absolute", top: "80px", right: 0,
          width: "500px", height: "500px",
          background: "radial-gradient(circle at top right, rgba(245,197,24,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24" style={{ position: "relative", zIndex: 1 }}>
          {/* Animated tag */}
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
              QUIÉNES SOMOS · GRUPO FÉNIX
            </span>
          </div>

          <h1 className="nosotros-hero-title" style={{
            fontSize: "clamp(2.8rem, 6.5vw, 5rem)", fontWeight: "900",
            lineHeight: "1.05", marginBottom: "1.75rem", color: "white",
            animation: "fadeUp 0.9s ease 0.2s both",
          }}>
            Así somos en<br />
            <span style={{ color: GOLD, textShadow: "0 0 40px rgba(245,197,24,0.4)" }}>Grupo Fénix</span>
          </h1>

          <p style={{
            fontSize: "1.1rem", color: "#bbb", lineHeight: "1.85",
            maxWidth: "560px", marginBottom: "3rem",
            animation: "fadeUp 0.9s ease 0.4s both",
          }}>
            Un equipo de profesionales dedicados a brindar soluciones de seguridad integral, innovadoras y personalizadas para proteger lo que más importa.
          </p>

          <div className="nosotros-cta-buttons flex flex-wrap gap-4" style={{ animation: "fadeUp 0.9s ease 0.6s both" }}>
            <Link to={createPageUrl("Servicios")} style={{
              background: GOLD, color: "#000", fontWeight: "800",
              padding: "16px 36px", borderRadius: "8px", fontSize: "1rem",
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px",
              boxShadow: "0 0 30px rgba(245,197,24,0.25)", transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 50px rgba(245,197,24,0.35)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 30px rgba(245,197,24,0.25)"; }}
            >
              Ver nuestros servicios <ChevronRight size={18} />
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{
              background: "transparent", color: "white", fontWeight: "700",
              padding: "16px 36px", borderRadius: "8px", fontSize: "1rem",
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px",
              border: "2px solid rgba(255,255,255,0.2)", transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "white"; }}
            >
              💬 Solicitar cotización
            </a>
          </div>

          {/* Trust badges */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "3rem",
            animation: "fadeUp 0.9s ease 0.8s both",
            alignItems: "center"
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "6px",
              color: "#ccc", fontSize: "0.85rem", fontWeight: "bold",
              background: "rgba(255,255,255,0.1)", padding: "8px 12px", borderRadius: "8px", height: "46px"
            }}>
              <CheckCircle size={16} style={{ color: GOLD }} />
              <span>PNC #406</span>
            </div>
            {[
              { img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/b467792dd_8.png", alt: "BASC" },
              { img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/50353a604_9.png", alt: "UNAPS" },
              { img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/e2644239e_10.png", alt: "Cámara de Comercio" },
              { img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/36e9b4682_11.png", alt: "MAPFRE" }
            ].map((logo, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "white", borderRadius: "8px", padding: "6px 12px",
                height: "46px", minWidth: "80px"
              }}>
                <img src={logo.img} alt={logo.alt} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", opacity: 0.4,
        }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "2px", color: "#888" }}>SCROLL</span>
          <ArrowDown size={16} style={{ color: "#888", animation: "float 1.5s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ══ QUIÉNES SOMOS ══ */}
      <section style={{ padding: "7rem 0", background: "#000", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: "800px", height: "800px",
          background: "radial-gradient(circle, rgba(245,197,24,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div style={{
                display: "inline-block", background: "rgba(245,197,24,0.08)",
                border: "1px solid rgba(245,197,24,0.2)", borderRadius: "100px",
                padding: "6px 18px", marginBottom: "1.5rem",
                color: GOLD, fontSize: "0.72rem", fontWeight: "700", letterSpacing: "2.5px",
              }}>NUESTRA EMPRESA</div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", color: "white", marginBottom: "1.5rem", lineHeight: "1.15" }}>
                Quiénes <span style={{ color: GOLD }}>Somos</span>
              </h2>
              {[
                "En Grupo Fénix somos un equipo de profesionales dedicados a brindar soluciones de seguridad integral innovadoras, tecnológicas y personalizadas, dando una protección que inspire confianza a nuestros Clientes.",
                "Nos apasiona dar servicios de seguridad de alta calidad, basados en la confianza, la integridad y la excelencia, para garantizar la tranquilidad.",
                "Nuestras bases fundamentales son el desarrollo de la capacidad técnica de nuestro Recurso Humano, que es lo más valioso de nuestra organización.",
              ].map((text, i) => (
                <p key={i} style={{ color: "#aaa", lineHeight: "1.85", fontSize: "0.95rem", marginBottom: "1.25rem" }}>{text}</p>
              ))}
              <div className="flex flex-col gap-3 mt-6">
                {["Personal certificado ANSP con evaluación psicológica y VSA", "COS activo 24/7 con protocolos de reacción inmediata", "Cobertura y supervisión a nivel nacional"].map((item, i) => (
                  <div key={i} className="checklist-item" style={{
                    display: "flex", alignItems: "flex-start", gap: "12px",
                    padding: "12px 16px", background: "rgba(245,197,24,0.03)", borderRadius: "8px",
                    border: "1px solid rgba(245,197,24,0.06)",
                  }}>
                    <CheckCircle style={{ color: GOLD, width: "16px", height: "16px", marginTop: "2px", flexShrink: 0 }} />
                    <span style={{ color: "#bbb", fontSize: "0.88rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{
                borderRadius: "20px", overflow: "hidden",
                border: "1px solid rgba(245,197,24,0.2)",
                height: "400px", position: "relative",
                animation: "border-glow 4s ease infinite",
                boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
                background: "#000",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/3950a50a0_Diseosinttulo6.png"
                  alt="Logo Grupo Fénix"
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.2)" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  { value: "406", label: "Licencia PNC" },
                  { value: "24/7", label: "COS Activo" },
                  { value: "3+", label: "Membresías" },
                  { value: "100%", label: "Certificados" },
                ].map((s, i) => (
                  <div key={i} style={{
                    background: "linear-gradient(135deg, #111, #0a0700)",
                    border: "1px solid rgba(245,197,24,0.15)", borderRadius: "16px",
                    padding: "1.25rem", textAlign: "center",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                    transition: "all 0.3s ease",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.15)"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <div style={{ color: GOLD, fontWeight: "900", fontSize: "1.6rem", lineHeight: "1" }}>{s.value}</div>
                    <div style={{ color: "#777", fontSize: "0.75rem", marginTop: "6px", letterSpacing: "1px" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MISIÓN & VISIÓN ══ */}
      <section style={{ padding: "7rem 0", background: "#050505", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(245,197,24,0.3), transparent)",
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <div style={{
              display: "inline-block", background: "rgba(245,197,24,0.08)",
              border: "1px solid rgba(245,197,24,0.2)", borderRadius: "100px",
              padding: "6px 18px", marginBottom: "1.5rem",
              color: GOLD, fontSize: "0.72rem", fontWeight: "700", letterSpacing: "2.5px",
            }}>FUNDAMENTOS</div>
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: "900", color: "white" }}>
              Misión & <span style={{ color: GOLD }}>Visión</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="reveal" style={{
              background: "#0b0b0b", border: "1px solid #1c1c1c",
              borderRadius: "20px", padding: "3rem",
              boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
              transition: "all 0.4s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(245,197,24,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1c1c1c"; e.currentTarget.style.boxShadow = "0 4px 30px rgba(0,0,0,0.5)"; }}
            >
              <div style={{
                width: "56px", height: "56px", background: "rgba(245,197,24,0.1)",
                borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "1.5rem", border: "1px solid rgba(245,197,24,0.2)",
              }}>
                <Target style={{ color: GOLD, width: "26px", height: "26px" }} />
              </div>
              <h3 style={{ color: GOLD, fontSize: "1.4rem", fontWeight: "900", marginBottom: "1rem" }}>Misión Empresarial</h3>
              <p style={{ color: "#aaa", lineHeight: "1.85", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                Nuestra misión es <strong style={{ color: "white" }}>proporcionar servicios de seguridad de alta calidad, innovadores y tecnológicos</strong>, que superen las expectativas de nuestros clientes.
              </p>
              <div style={{ color: "#444", fontSize: "0.7rem", letterSpacing: "2px", marginBottom: "1rem" }}>PARA NOSOTROS CUMPLIR CON LA MISIÓN ES:</div>
              <div className="flex flex-col gap-3">
                {misionItems.map((item, i) => (
                  <div key={i} className="checklist-item" style={{
                    display: "flex", alignItems: "flex-start", gap: "12px",
                    padding: "10px 14px", background: "rgba(245,197,24,0.03)", borderRadius: "8px",
                    border: "1px solid rgba(245,197,24,0.06)",
                  }}>
                    <CheckCircle style={{ color: GOLD, width: "14px", height: "14px", marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ color: "#999", fontSize: "0.85rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visión */}
            <div className="reveal" style={{
              background: "#0b0b0b", border: "1px solid #1c1c1c",
              borderRadius: "20px", padding: "3rem",
              boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
              transition: "all 0.4s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(245,197,24,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1c1c1c"; e.currentTarget.style.boxShadow = "0 4px 30px rgba(0,0,0,0.5)"; }}
            >
              <div style={{
                width: "56px", height: "56px", background: "rgba(245,197,24,0.1)",
                borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "1.5rem", border: "1px solid rgba(245,197,24,0.2)",
              }}>
                <Eye style={{ color: GOLD, width: "26px", height: "26px" }} />
              </div>
              <h3 style={{ color: GOLD, fontSize: "1.4rem", fontWeight: "900", marginBottom: "1rem" }}>Visión Empresarial</h3>
              {[
                "Nuestra visión es ser líderes en el sector de la seguridad privada y ser reconocidos por la excelencia y profesionalismo de nuestro servicio.",
                "Mantener un servicio de seguridad innovador e integral, a través de nuestro personal en la protección y seguridad de nuestros asociados, sus empleados y activos.",
                "Ser la opción de las empresas y personas que buscan proteger sus activos, empleados y familias de manera efectiva y confiable.",
              ].map((p, i) => (
                <p key={i} style={{ color: "#aaa", lineHeight: "1.85", fontSize: "0.95rem", marginBottom: "1.25rem" }}>{p}</p>
              ))}
              <div style={{
                marginTop: "1.5rem", background: GOLD, color: "#000",
                fontWeight: "900", padding: "18px 24px", borderRadius: "10px",
                textAlign: "center", fontSize: "1rem", letterSpacing: "0.5px",
              }}>
                Protección que inspira confianza.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VALORES ══ */}
      <section style={{ padding: "7rem 0", background: "#000", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: "700px", height: "700px",
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
            }}>VALORES</div>
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: "900", color: "white" }}>
              Nuestros <span style={{ color: GOLD }}>Valores</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div style={{
                borderRadius: "20px", overflow: "hidden",
                border: "1px solid rgba(245,197,24,0.2)",
                position: "relative",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                aspectRatio: "1 / 1"
              }}>
                <img 
                  src="https://media.base44.com/images/public/699dc69700a4d30f0cc60f12/a8dd6faac_IMG_11081.png" 
                  alt="Valores Grupo Fénix" 
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valores.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="valor-card reveal" style={{
                    background: "#0b0b0b", border: "1px solid #1c1c1c",
                    borderRadius: "16px", padding: "2rem 1.5rem",
                    textAlign: "center", boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
                  }}>
                    <div className="valor-icon" style={{
                      width: "60px", height: "60px",
                      background: "rgba(245,197,24,0.1)",
                      borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 1.5rem",
                      border: "1px solid rgba(245,197,24,0.2)",
                    }}>
                      <Icon style={{ color: GOLD, width: "26px", height: "26px" }} />
                    </div>
                    <div style={{ color: "white", fontWeight: "800", fontSize: "1.05rem", marginBottom: "0.5rem" }}>{v.title}</div>
                    <div style={{ color: "#666", fontSize: "0.85rem", lineHeight: "1.6" }}>{v.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ LEGAL & COVERAGE ══ */}
      <section style={{ padding: "7rem 0", background: "#050505", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(245,197,24,0.3), transparent)",
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Legal */}
            <div className="reveal" style={{
              background: "#0b0b0b", border: "1px solid #1c1c1c",
              borderRadius: "20px", padding: "3rem",
              boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
              transition: "all 0.4s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(245,197,24,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1c1c1c"; e.currentTarget.style.boxShadow = "0 4px 30px rgba(0,0,0,0.5)"; }}
            >
              <div style={{ color: GOLD, fontWeight: "700", fontSize: "0.72rem", letterSpacing: "2.5px", marginBottom: "1.5rem" }}>OPERACIÓN LEGAL</div>
              <h3 style={{ color: "white", fontSize: "1.4rem", fontWeight: "800", marginBottom: "2rem" }}>
                Operamos con plena <span style={{ color: GOLD }}>legalidad</span>
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  { label: "Autorización PNC", value: "Licencia #406 – Policía Nacional Civil" },
                  { label: "Razón Social", value: "Phoenix Security, S.A. de C.V." },
                  { label: "NIT", value: "0614-140319-102-1" },
                  { label: "Seguro", value: "MAPFRE – Responsabilidad Civil y Seguro Colectivo de Vida" },
                  { label: "Membresías", value: "BASC · UNAPS · Cámara de Comercio e Industria" },
                ].map((item, i) => (
                  <div key={i} className="legal-row" style={{ borderBottom: "1px solid #161616", paddingBottom: "1rem", transition: "all 0.3s" }}>
                    <div style={{ color: "#555", fontSize: "0.7rem", letterSpacing: "1.5px", marginBottom: "4px" }}>{item.label}</div>
                    <div style={{ color: "#ccc", fontSize: "0.9rem" }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage */}
            <div className="reveal" style={{
              background: "#0b0b0b", border: "1px solid #1c1c1c",
              borderRadius: "20px", padding: "3rem",
              boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
              transition: "all 0.4s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(245,197,24,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1c1c1c"; e.currentTarget.style.boxShadow = "0 4px 30px rgba(0,0,0,0.5)"; }}
            >
              <div style={{
                width: "56px", height: "56px", background: "rgba(245,197,24,0.1)",
                borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "1.5rem", border: "1px solid rgba(245,197,24,0.2)",
              }}>
                <MapPin style={{ color: GOLD, width: "26px", height: "26px" }} />
              </div>
              <h3 style={{ color: "white", fontSize: "1.4rem", fontWeight: "800", marginBottom: "1rem" }}>
                Cobertura <span style={{ color: GOLD }}>Nacional</span>
              </h3>
              <p style={{ color: "#888", lineHeight: "1.85", marginBottom: "2rem", fontSize: "0.9rem" }}>
                Supervisión y control del servicio a nivel nacional. Siempre disponibles con equipos de reacción en las Oficinas Centrales y Regionales.
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
                  <div key={i} className="checklist-item" style={{
                    display: "flex", alignItems: "flex-start", gap: "12px",
                    padding: "10px 14px", background: "rgba(245,197,24,0.03)", borderRadius: "8px",
                    border: "1px solid rgba(245,197,24,0.06)",
                  }}>
                    <CheckCircle style={{ color: GOLD, width: "14px", height: "14px", marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ color: "#999", fontSize: "0.875rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Compromiso Ético */}
          <div className="reveal mt-8" style={{
            background: "#0b0b0b", border: "1px solid #1c1c1c",
            borderRadius: "20px", padding: "3rem",
            boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
            transition: "all 0.4s ease",
            textAlign: "center"
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(245,197,24,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1c1c1c"; e.currentTarget.style.boxShadow = "0 4px 30px rgba(0,0,0,0.5)"; }}
          >
            <div style={{ color: GOLD, fontWeight: "700", fontSize: "0.72rem", letterSpacing: "2.5px", marginBottom: "1.5rem" }}>CÓDIGO DE ÉTICA EMPRESARIAL</div>
            <h3 style={{ color: "white", fontSize: "1.8rem", fontWeight: "800", marginBottom: "1rem" }}>
              Nuestro <span style={{ color: GOLD }}>Compromiso Ético</span>
            </h3>
            <p style={{ color: "#888", lineHeight: "1.85", marginBottom: "2rem", fontSize: "1rem", maxWidth: "800px", margin: "0 auto 2rem" }}>
              Nos comprometemos a proporcionar servicios de seguridad de alta calidad, respetando la ley y los derechos humanos. Actuamos con integridad, honradez y confidencialidad, y mantenemos una política estricta contra actividades ilícitas, corrupción y conflictos de interés.
            </p>
            <a href="https://media.base44.com/files/public/699dc69700a4d30f0cc60f12/0d70c0c3f_CODIGODEETICAPhoenixSecuritySAdeCV1.docx" download target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              📄 Descargar Código de Ética
            </a>
          </div>
        </div>
      </section>

      <EquipmentAndUniform />
      <AdminProcessSection />
      <BenefitsSection />

      {/* ══ CTA CINEMATIC ══ */}
      <section style={{ position: "relative", overflow: "hidden", padding: "8rem 0" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1800&q=80)",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.1)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9))",
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: "600px", height: "600px",
          background: "radial-gradient(circle, rgba(245,197,24,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal" style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-block", background: "rgba(245,197,24,0.08)",
            border: "1px solid rgba(245,197,24,0.2)", borderRadius: "100px",
            padding: "8px 20px", marginBottom: "2rem",
            color: GOLD, fontSize: "0.72rem", fontWeight: "700", letterSpacing: "2.5px",
          }}>
            DESCUBRA CÓMO PODEMOS PROTEGERLE
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "900", color: "white", marginBottom: "1.25rem", lineHeight: "1.15" }}>
            Diseñamos su solución de<br />
            <span style={{ color: GOLD }}>seguridad personalizada</span>
          </h2>
          <p style={{ color: "#888", marginBottom: "3rem", fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "500px", margin: "0 auto 3rem" }}>
            Estamos listos para atenderle y diseñar una estrategia de seguridad integral adaptada a sus necesidades.
          </p>
          <div className="nosotros-cta-buttons flex flex-wrap gap-4 justify-center">
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