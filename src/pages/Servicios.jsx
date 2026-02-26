import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ShieldCheck, Shield, Camera, Lock, Search, GraduationCap, CheckCircle, ChevronRight, MessageCircle } from "lucide-react";

const GOLD = "#F5C518";
const WHATSAPP_URL =
  "https://wa.me/50361165075?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Grupo%20F%C3%A9nix.";

const services = [
  {
    icon: ShieldCheck,
    num: "01",
    title: "Asesoría y Asistencia Técnica en Seguridad",
    subtitle: "Consultoría estratégica e implementación",
    desc: "Brindamos soluciones consultivas especializadas para el diseño, implementación y mejora de sistemas de seguridad integral.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    items: [
      "Análisis y Mitigación de Riesgos",
      "Evaluación, Diseño e Implementación de Sistemas de Seguridad",
      "Desarrollo de Políticas, Normas y Procedimientos",
      "Análisis e Investigación de Incidentes",
      "Consultoría permanente y auditorías de seguridad",
      "Estudios de seguridad y análisis confidenciales",
    ],
  },
  {
    icon: Shield,
    num: "02",
    title: "Seguridad Armada y No Armada",
    subtitle: "Protección física integral de personas e instalaciones",
    desc: "Personal especializado para la protección de instalaciones, personas y transporte en todo el territorio nacional.",
    img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&q=80",
    items: [
      "Seguridad Comercial, Industrial, Bancaria y Residencial",
      "Protección de personas VIP, escoltas y Alta Seguridad",
      "Custodio en Cabina y Patrullas en Ruta",
      "Seguridad de Eventos",
      "Controles de acceso y rondas perimetrales",
      "Supervisión diurna y nocturna",
      "Patrulla de reacción motorizada en emergencias",
      "Contravigilancia, seguimiento y prevención de delitos",
    ],
  },
  {
    icon: Camera,
    num: "03",
    title: "Seguridad Electrónica",
    subtitle: "Tecnología avanzada de vigilancia y monitoreo",
    desc: "Instalación, monitoreo y mantenimiento de sistemas electrónicos de seguridad para todo tipo de sector.",
    img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80",
    items: [
      "Sistemas de Alarma contra robo, incendio y asalto",
      "CCTV – Circuito Cerrado de Televisión",
      "Sistemas de Control de Acceso",
      "Detección y protección contra incendios",
      "Sistema Televigilancia",
      "Equipo para seguridad residencial, bancaria, comercial e industrial",
      "Sistema de ronda electrónica para guardas (reloj de marcas)",
      "Asesorías y diseño de sistemas de seguridad electrónica",
    ],
  },
  {
    icon: Lock,
    num: "04",
    title: "Ciberseguridad",
    subtitle: "Protección digital y de activos de información",
    desc: "Protección integral de datos, redes, sistemas y aplicaciones contra amenazas y ataques maliciosos.",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
    items: [
      "Pentesting y simulación de ciberataque",
      "Gestión de Vulnerabilidades",
      "Seguridad en la Nube",
      "Respuesta a Incidentes",
      "Antivirus y software de seguridad",
      "Firewalls y sistemas de detección de intrusos",
      "Protección de Marca y Auditoría",
      "Criptografía y cifrado de datos",
      "Capacitación en cultura de Ciberseguridad",
    ],
  },
  {
    icon: Search,
    num: "05",
    title: "Investigaciones y Validación de Testimonio (VSA)",
    subtitle: "Inteligencia, análisis e investigaciones confidenciales",
    desc: "Recopilación, análisis y recomendaciones para la prevención y tratamiento de riesgos que afectan su empresa y entorno.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    items: [
      "Investigaciones empresariales (robos, hurtos, competencia desleal)",
      "Investigaciones laborales (fidelidad de empleados, conflicto de intereses)",
      "Extorsiones, inteligencia y contrainteligencia",
      "VSA – Análisis de Estrés de Voz (96.12% de certeza)",
      "Evaluación Pre-Empleo y de Confiabilidad",
      "Antecedentes personales, laborales, penales y policiales",
      "Visitas Domiciliarias y Estudios Socioeconómicos",
    ],
  },
  {
    icon: GraduationCap,
    num: "06",
    title: "Adiestramiento y Formación de Seguridad",
    subtitle: "Capacitación especializada y manejo de crisis",
    desc: "Programas de formación, consultoría y adiestramiento para personal de seguridad y empresas.",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    items: [
      "Formación y Auditorías de Seguridad",
      "Capacitación y Adiestramiento especializado",
      "Autoprotección y Secuestro",
      "Evaluación de riesgos y vulnerabilidades",
      "Manejo de Crisis y Planes de Emergencia",
      "Planes de evacuación y simulacros",
      "Seguridad de puertos, aeropuertos y transportes",
      "Análisis estratégico de pre-empleo",
    ],
  },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0.08 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Servicios() {
  useScrollReveal();
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    document.title = "Servicios de Seguridad Integral | Grupo Fénix";
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
        .reveal { opacity:0; transform:translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.revealed { opacity:1; transform:translateY(0); }
        .reveal:nth-child(2) { transition-delay: 0.08s; }
        .reveal:nth-child(3) { transition-delay: 0.16s; }
        .reveal:nth-child(4) { transition-delay: 0.24s; }
        .reveal:nth-child(5) { transition-delay: 0.32s; }
        .reveal:nth-child(6) { transition-delay: 0.4s; }
        .service-row { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .service-row:hover { border-color: rgba(245,197,24,0.4) !important; box-shadow: 0 16px 60px rgba(245,197,24,0.08) !important; transform: translateY(-4px); }
        .service-row:hover .svc-icon { background: rgba(245,197,24,0.2) !important; transform: scale(1.1) rotate(-5deg); }
        .svc-icon { transition: all 0.3s ease; }
        .item-row { transition: all 0.2s ease; }
        .item-row:hover { background: rgba(245,197,24,0.07) !important; padding-left: 14px !important; }
      `}</style>

      {/* ══════════════════════════════════
          HERO — Cinematic Header
      ══════════════════════════════════ */}
      <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: "80px" }}>
        <div style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "url(https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1800&q=80)",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.18) contrast(1.15)",
          transform: `translate(${(mousePos.x - 0.5) * -12}px, ${(mousePos.y - 0.5) * -8}px)`,
          transition: "transform 0.8s ease-out",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.9) 100%)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(245,197,24,0.35), transparent)", animation: "scanline 7s linear infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "80px", right: 0, width: "500px", height: "500px", background: "radial-gradient(circle at top right, rgba(245,197,24,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ animation: "fadeIn 0.6s ease forwards" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(245,197,24,0.08)", border: "1px solid rgba(245,197,24,0.25)", borderRadius: "100px", padding: "8px 18px", marginBottom: "1.5rem" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: GOLD, boxShadow: "0 0 8px rgba(245,197,24,0.8)", display: "inline-block", animation: "pulse-gold 2s infinite" }} />
              <span style={{ color: GOLD, fontSize: "0.72rem", fontWeight: "700", letterSpacing: "2.5px" }}>PORTAFOLIO DE SERVICIOS</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: "900", color: "white", lineHeight: "1.08", marginBottom: "1.5rem", animation: "fadeUp 0.9s ease 0.15s both" }}>
            Servicios de<br /><span style={{ color: GOLD, textShadow: "0 0 40px rgba(245,197,24,0.4)" }}>Seguridad Integral</span>
          </h1>
          <p style={{ color: "#bbb", maxWidth: "560px", fontSize: "1.05rem", lineHeight: "1.8", animation: "fadeUp 0.9s ease 0.3s both" }}>
            Soluciones completas y personalizadas de seguridad para proteger sus activos, personal e información en todo El Salvador.
          </p>

          {/* Service quick-nav pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "2.5rem", animation: "fadeUp 0.9s ease 0.5s both" }}>
            {services.map((s, i) => (
              <a key={i} href={`#service-${i}`} style={{
                background: "rgba(245,197,24,0.07)", border: "1px solid rgba(245,197,24,0.2)",
                color: "#ccc", fontSize: "0.75rem", fontWeight: "600",
                padding: "6px 14px", borderRadius: "100px", textDecoration: "none",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,197,24,0.15)"; e.currentTarget.style.color = GOLD; e.currentTarget.style.borderColor = GOLD; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(245,197,24,0.07)"; e.currentTarget.style.color = "#ccc"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.2)"; }}
              >
                {s.num} {s.title.split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SERVICE CARDS
      ══════════════════════════════════ */}
      <section style={{ padding: "5rem 0 7rem", background: "#000", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "900px", height: "900px", background: "radial-gradient(circle, rgba(245,197,24,0.03) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div id={`service-${i}`} key={i} className="service-row reveal" style={{
                  background: "#0b0b0b", border: "1px solid #1c1c1c",
                  borderRadius: "20px", overflow: "hidden",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
                }}>
                  <div className="grid grid-cols-1 lg:grid-cols-4">
                    {/* Left image panel */}
                    <div style={{ position: "relative", minHeight: "200px" }}>
                      <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.45) saturate(0.7)" }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(11,11,11,0) 0%, rgba(11,11,11,0.95) 100%)" }} />
                      <div style={{ position: "absolute", top: "24px", left: "24px" }}>
                        <div style={{ background: "rgba(245,197,24,0.12)", color: GOLD, fontSize: "0.7rem", fontWeight: "800", padding: "4px 12px", borderRadius: "100px", letterSpacing: "1px", border: "1px solid rgba(245,197,24,0.25)", display: "inline-block" }}>{s.num}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3" style={{ padding: "2.5rem" }}>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Title col */}
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="svc-icon" style={{
                              width: "52px", height: "52px",
                              background: "rgba(245,197,24,0.1)", borderRadius: "12px",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              border: "1px solid rgba(245,197,24,0.25)", flexShrink: 0,
                            }}>
                              <Icon style={{ color: GOLD, width: "24px", height: "24px" }} />
                            </div>
                          </div>
                          <h2 style={{ color: "white", fontWeight: "800", fontSize: "1.1rem", marginBottom: "0.6rem", lineHeight: "1.35" }}>{s.title}</h2>
                          <p style={{ color: GOLD, fontSize: "0.78rem", fontWeight: "600", marginBottom: "1rem" }}>{s.subtitle}</p>
                          <p style={{ color: "#666", fontSize: "0.875rem", lineHeight: "1.75" }}>{s.desc}</p>
                        </div>

                        {/* Items col */}
                        <div className="lg:col-span-2">
                          <div style={{ color: "#333", fontSize: "0.68rem", letterSpacing: "2.5px", marginBottom: "1.25rem" }}>INCLUYE</div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {s.items.map((item, j) => (
                              <div key={j} className="item-row" style={{
                                display: "flex", alignItems: "flex-start", gap: "8px",
                                padding: "8px 10px", background: "rgba(245,197,24,0.02)",
                                borderRadius: "6px", border: "1px solid rgba(245,197,24,0.04)",
                                transition: "all 0.2s ease",
                              }}>
                                <CheckCircle style={{ color: GOLD, width: "13px", height: "13px", marginTop: "3px", flexShrink: 0 }} />
                                <span style={{ color: "#999", fontSize: "0.82rem", lineHeight: "1.5" }}>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA — Cinematic closer
      ══════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", padding: "8rem 0" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1800&q=80)", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.1)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.9)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(245,197,24,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(245,197,24,0.3), transparent)", animation: "scanline 8s linear infinite", pointerEvents: "none" }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", background: "rgba(245,197,24,0.08)", border: "1px solid rgba(245,197,24,0.2)", borderRadius: "100px", padding: "8px 20px", marginBottom: "2rem", color: GOLD, fontSize: "0.72rem", fontWeight: "700", letterSpacing: "2.5px" }}>
            SOLUCIÓN PERSONALIZADA
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "900", color: "white", marginBottom: "1.25rem", lineHeight: "1.15" }}>
            ¿Necesita una solución<br /><span style={{ color: GOLD }}>personalizada?</span>
          </h2>
          <p style={{ color: "#888", marginBottom: "3rem", fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "480px", margin: "0 auto 3rem" }}>
            Uno de nuestros especialistas le ayudará a diseñar el plan de seguridad ideal para su empresa u organización.
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
              <MessageCircle size={22} /> Solicitar cotización
            </a>
            <Link to={createPageUrl("Contacto")} style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "transparent", color: "white", fontWeight: "700",
              padding: "18px 44px", borderRadius: "10px", fontSize: "1.05rem",
              textDecoration: "none", border: "2px solid rgba(255,255,255,0.2)",
              transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "white"; }}
            >
              Ver información de contacto <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}