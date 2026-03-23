import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ShieldCheck, Shield, Camera, Lock, Search, GraduationCap, CheckCircle, ChevronRight, MessageCircle, ArrowDown, Users, UserCheck, Truck } from "lucide-react";

const GOLD = "#F5C518";
const WHATSAPP_URL =
  "https://wa.me/50361165075?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Grupo%20F%C3%A9nix.";

const services = [
  {
    icon: ShieldCheck, num: "01",
    title: "Asesoría y Asistencia Técnica en Seguridad",
    subtitle: "Consultoría estratégica e implementación",
    desc: "Brindamos soluciones consultivas especializadas para el diseño, implementación y mejora de sistemas de seguridad integral.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80",
    items: [
      "Análisis y Mitigación de Riesgos",
      "Evaluación, Diseño e Implementación de Sistemas de Seguridad",
      "Desarrollo de Políticas, Normas y Procedimientos",
      "Análisis e Investigación de Incidentes",
      "Consultoría permanente y auditorías de seguridad",
    ],
  },
  {
    icon: Shield, num: "02",
    title: "Seguridad Física de Instalaciones",
    subtitle: "Protección de personas, activos y propiedad privada",
    desc: "Personal de seguridad, barreras y vigilancia para disuadir, detectar y frenar intrusos, garantizando la continuidad operativa de su empresa.",
    img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/060e40703_foto_2_guardia_carro.jpg",
    items: [
      "Seguridad Comercial, Industrial, Bancaria y Residencial.",
      "Seguridad Perimetral, Interna y en Zonas Sensibles.",
      "Controles de acceso y personal de seguridad (Guardias).",
      "Integración con sistemas de Detección, Intrusión y CCTV.",
      "Sistemas de Reacción a Emergencias y Protección contra Incendios.",
      "Estudios de Seguridad y Gestión de Riesgos.",
    ],
  },
  {
    icon: Camera, num: "03",
    title: "Seguridad Electrónica",
    subtitle: "Tecnología avanzada de vigilancia y monitoreo",
    desc: "Instalación, monitoreo y mantenimiento de sistemas electrónicos de seguridad para todo tipo de sector.",
    img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/9d13f5d76_ChatGPTImageFeb28202605_52_55PM.png",
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
    icon: Lock, num: "04",
    title: "Ciberseguridad",
    subtitle: "Protección digital y de activos de información",
    desc: "Protección integral de datos, redes, sistemas y aplicaciones contra amenazas y ataques maliciosos.",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=700&q=80",
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
    icon: Search, num: "05",
    title: "Investigaciones y Validación de Testimonio (VSA)",
    subtitle: "Inteligencia, análisis e investigaciones confidenciales",
    desc: "Recopilación, análisis y recomendaciones para la prevención y tratamiento de riesgos que afectan su empresa y entorno.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80",
    items: [
      "Investigaciones empresariales (robos, hurtos, competencia desleal)",
      "Investigaciones laborales (fidelidad de empleados, conflicto de intereses)",
      "Extorsiones, inteligencia y contrainteligencia",
      "VSA – Análisis de Estrés de Voz (96.12% de certeza)",
      "Evaluación Pre-Empleo y de Confiabilidad",
      "Visitas Domiciliarias y Estudios Socioeconómicos",
    ],
  },
  {
    icon: GraduationCap, num: "06",
    title: "Adiestramiento y Formación de Seguridad",
    subtitle: "Capacitación especializada y manejo de crisis",
    desc: "Programas de formación, consultoría y adiestramiento para personal de seguridad y empresas.",
    img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/24e6a83fa_ChatGPTImageFeb28202605_45_37PM.png",
    items: [
      "Formación y Auditorías de Seguridad",
      "Capacitación y Adiestramiento especializado",
      "Autoprotección y Secuestro",
      "Evaluación de riesgos y vulnerabilidades",
      "Manejo de Crisis y Planes de Emergencia",
      "Planes de evacuación y simulacros",
      "Seguridad de puertos, aeropuertos y transportes",
      "Análisis estratégico de pre-empleo",
      "Adiestramiento en Uso de Armas No Letales",
      "Capacitación de Servicio al Cliente y Normas de Cortesía",
      "Capacitación de Trabajo en Equipo y Taller de Cuerdas",
      "Charlas Inclusión Social y Acoso Laboral y Sexual",
      "Charla de Derechos Humanos",
      "Manejo de Clientes Difíciles",
    ],
  },
  {
    icon: Users, num: "07",
    title: "Protección de Personas Importantes",
    subtitle: "Seguridad y escoltas para altos ejecutivos",
    desc: "Estrategias y agentes especializados destinados a salvaguardar la integridad física, psíquica y la libertad de personas de alto riesgo o relevancia pública. Abarca protección en movimientos a pie, vehiculares y eventos.",
    img: "https://media.base44.com/images/public/699dc69700a4d30f0cc60f12/446536a4f_WhatsAppImage2026-03-20at55322PM.jpg",
    items: [
      "Protección de personas, escoltas VIP y Alta Seguridad.",
      "Seguridad de Eventos.",
      "Prevención de Delitos.",
      "Contravigilancia y Seguimiento.",
      "Manejo Defensivo y Ofensivo.",
      "Entrenamiento Uso Armas de Fuego.",
      "Revisión de Antecedentes.",
      "Atención y Asistencia Permanente.",
      "Análisis Estratégico y Evaluación de Amenazas.",
      "Capacitación de Empleados y Viajeros.",
      "Asesorías en Prevención de Riesgos. Estudios de Seguridad.",
    ],
  },
  {
    icon: UserCheck, num: "08",
    title: "Agente de Seguridad Bouncer",
    subtitle: "Control de accesos y manejo de multitudes",
    desc: "Personal entrenado para la disuasión, verificación de identidad y mantenimiento del orden con un trato amable pero firme en bares y eventos.",
    img: "https://media.base44.com/images/public/699dc69700a4d30f0cc60f12/530cbdf1e_WhatsAppImage2026-03-20at55322PM2.jpg",
    items: [
      "Verificación de identificaciones (IDs) y control de ingreso.",
      "Prevención de incidentes, riñas, tumultos y accesos no autorizados.",
      "Patrullaje y vigilancia del comportamiento de los clientes.",
      "Neutralización y desalojo con tacto de personas problemáticas.",
      "Manejo de multitudes y herramientas digitales de Control de Acceso.",
      "Actuación en situaciones de crisis y asistencia en evacuación.",
      "Desescalada de conflictos y uso proporcionado de la fuerza.",
    ],
  },
  {
    icon: Truck, num: "09",
    title: "Seguridad Logística y al Transporte",
    subtitle: "Prevención de robos y protección de mercadería en tránsito",
    desc: "Sistema integrado para proteger unidades de transporte, carga y tripulación desde el punto de salida hasta la llegada mediante tecnología y personal capacitado.",
    img: "https://media.base44.com/images/public/699dc69700a4d30f0cc60f12/e0efa0396_WhatsAppImage2026-03-20at55322PM1.jpg",
    items: [
      "Custodio en Cabina: Vigilancia de carga, reportes y verificación de protocolos.",
      "Patrulla Armada para convoyes con capacidad de reacción rápida.",
      "Marchamo Electrónico Solar: Monitoreo GPS 24/7 y alertas de apertura no autorizada.",
      "Planificación y coordinación de rutas seguras con puntos de chequeo.",
      "Certificación de operadores, pruebas de Alcotest y evaluación de salud.",
      "Reconocimiento de rutas y patrullas de avanzada para cargas de alto riesgo.",
      "Estudios de seguridad, análisis de incidencia delincuencial y enlaces interinstitucionales.",
    ],
  },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0, rootMargin: "100px" }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Servicios() {
  useScrollReveal();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.title = "Servicios de Seguridad Integral | Grupo Fénix";
  }, []);

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
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
        .service-row { transition: all 0.4s ease; }
        .service-row:hover { border-color: rgba(245,197,24,0.4) !important; box-shadow: 0 30px 80px rgba(245,197,24,0.08) !important; }
        .service-row:hover .service-img { transform: scale(1.04); filter: brightness(0.7) !important; }
        .service-img { transition: all 0.5s ease; }
        .item-pill { transition: all 0.3s; }
        .item-pill:hover { background: rgba(245,197,24,0.1) !important; border-color: rgba(245,197,24,0.3) !important; }
        .reveal { opacity:0; transform:translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.revealed { opacity:1; transform:translateY(0); }
        @media (max-width: 768px) {
          .servicios-hero-title { font-size: 2.6rem !important; }
          .servicios-cta-buttons { flex-direction: column !important; align-items: stretch !important; }
          .servicios-cta-buttons a { width: 100% !important; justify-content: center !important; }
          .service-row > div { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .servicios-hero-title { font-size: 2rem !important; }
          .item-pill { padding: 8px 10px !important; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section style={{
        minHeight: "80vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden", paddingTop: "80px",
      }}>
        <div style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "url(https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/59aef11fc_foto_3_equipo_camion.jpg)",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.38) contrast(1.1)",
          transform: `translate(${(mousePos.x - 0.5) * -15}px, ${(mousePos.y - 0.5) * -10}px)`,
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
        <div style={{
          position: "absolute", top: "80px", right: 0,
          width: "500px", height: "500px",
          background: "radial-gradient(circle at top right, rgba(245,197,24,0.12) 0%, transparent 65%)",
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
              PORTAFOLIO DE SERVICIOS · GRUPO FÉNIX
            </span>
          </div>

          <h1 className="servicios-hero-title" style={{
            fontSize: "clamp(2.8rem, 6.5vw, 5rem)", fontWeight: "900",
            lineHeight: "1.05", marginBottom: "1.75rem", color: "white",
            animation: "fadeUp 0.9s ease 0.2s both",
          }}>
            Servicios de<br />
            <span style={{ color: GOLD, textShadow: "0 0 40px rgba(245,197,24,0.4)" }}>Seguridad Integral</span>
          </h1>

          <p style={{
            fontSize: "1.1rem", color: "#bbb", lineHeight: "1.85",
            maxWidth: "560px", marginBottom: "3rem",
            animation: "fadeUp 0.9s ease 0.4s both",
          }}>
            Soluciones completas y personalizadas de seguridad para proteger sus activos, personal e información en todo El Salvador.
          </p>

          <div className="servicios-cta-buttons flex flex-wrap gap-4" style={{ animation: "fadeUp 0.9s ease 0.6s both" }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{
              background: GOLD, color: "#000", fontWeight: "800",
              padding: "16px 36px", borderRadius: "8px", fontSize: "1rem",
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px",
              boxShadow: "0 0 30px rgba(245,197,24,0.25)", transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 50px rgba(245,197,24,0.35)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 30px rgba(245,197,24,0.25)"; }}
            >
              💬 Solicitar cotización
            </a>
            <Link to={createPageUrl("Contacto")} style={{
              background: "transparent", color: "white", fontWeight: "700",
              padding: "16px 36px", borderRadius: "8px", fontSize: "1rem",
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px",
              border: "2px solid rgba(255,255,255,0.2)", transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "white"; }}
            >
              Ver información de contacto <ChevronRight size={18} />
            </Link>
          </div>

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

        <div style={{
          position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", opacity: 0.4,
        }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "2px", color: "#888" }}>SCROLL</span>
          <ArrowDown size={16} style={{ color: "#888", animation: "float 1.5s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ══ SERVICE CARDS ══ */}
      <section style={{ padding: "6rem 0", background: "#000", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: "900px", height: "900px",
          background: "radial-gradient(circle, rgba(245,197,24,0.03) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="service-row reveal" style={{
                  background: "#0b0b0b", border: "1px solid #1c1c1c",
                  borderRadius: "20px", overflow: "hidden",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
                }}>
                  <div className="flex flex-col lg:grid lg:grid-cols-3">
                    {/* Image panel */}
                    <div className="service-img-panel" style={{
                      position: "relative", overflow: "hidden",
                      gridColumn: isEven ? "1" : "3",
                      gridRow: "1",
                      minHeight: "250px",
                    }}>
                      <img src={s.img} alt={s.title} className="service-img"
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: s.num === "06" ? "right center" : "center", filter: "brightness(0.55)" }}
                      />
                      <div className="hidden lg:block" style={{ position: "absolute", inset: 0, background: isEven ? "linear-gradient(to right, transparent 60%, #0b0b0b 100%)" : "linear-gradient(to left, transparent 60%, #0b0b0b 100%)" }} />
                      <div className="lg:hidden" style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, #0b0b0b 100%)" }} />
                      {/* Number overlay */}
                      <div style={{
                        position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)",
                        color: GOLD, fontSize: "4rem", fontWeight: "900", opacity: 0.15, lineHeight: "1",
                      }}>{s.num}</div>
                    </div>

                    {/* Content */}
                    <div style={{
                      gridColumn: isEven ? "2 / 4" : "1 / 3",
                      gridRow: "1",
                      padding: "clamp(1.5rem, 5vw, 2.5rem)",
                    }}>
                      <div className="flex items-center gap-3 mb-5">
                        <div style={{
                          width: "52px", height: "52px",
                          background: "rgba(245,197,24,0.1)",
                          borderRadius: "12px",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          border: "1px solid rgba(245,197,24,0.25)", flexShrink: 0,
                        }}>
                          <Icon style={{ color: GOLD, width: "26px", height: "26px" }} />
                        </div>
                        <div style={{
                          background: "rgba(245,197,24,0.1)", color: GOLD,
                          fontSize: "0.75rem", fontWeight: "800",
                          padding: "4px 12px", borderRadius: "100px", letterSpacing: "1px",
                        }}>{s.num}</div>
                      </div>
                      <h2 style={{ color: "white", fontWeight: "800", fontSize: "1.25rem", marginBottom: "0.5rem", lineHeight: "1.3" }}>{s.title}</h2>
                      <p style={{ color: GOLD, fontSize: "0.8rem", fontWeight: "600", marginBottom: "1rem" }}>{s.subtitle}</p>
                      <p style={{ color: "#777", fontSize: "0.875rem", lineHeight: "1.75", marginBottom: "1.75rem" }}>{s.desc}</p>

                      <div style={{ color: "#444", fontSize: "0.7rem", letterSpacing: "2px", marginBottom: "1rem" }}>INCLUYE</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {s.items.map((item, j) => (
                          <div key={j} className="item-pill" style={{
                            display: "flex", alignItems: "flex-start", gap: "8px",
                            padding: "8px 12px", background: "rgba(245,197,24,0.03)",
                            borderRadius: "8px", border: "1px solid rgba(245,197,24,0.06)",
                          }}>
                            <CheckCircle style={{ color: GOLD, width: "13px", height: "13px", marginTop: "3px", flexShrink: 0 }} />
                            <span style={{ color: "#aaa", fontSize: "0.82rem" }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CTA CINEMATIC ══ */}
      <section style={{ position: "relative", overflow: "hidden", padding: "8rem 0" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/59aef11fc_foto_3_equipo_camion.jpg)",
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
          }}>SOLUCIÓN PERSONALIZADA</div>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "900", color: "white", marginBottom: "1.25rem", lineHeight: "1.15" }}>
            ¿Necesita una solución<br />
            <span style={{ color: GOLD }}>a la medida de su empresa?</span>
          </h2>
          <p style={{ color: "#888", marginBottom: "3rem", fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "500px", margin: "0 auto 3rem" }}>
            Uno de nuestros especialistas le ayudará a diseñar el plan de seguridad ideal para su empresa u organización.
          </p>
          <div className="servicios-cta-buttons flex flex-wrap gap-4 justify-center">
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