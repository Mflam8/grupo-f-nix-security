import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ShieldCheck, Shield, Camera, Lock, Search, GraduationCap, CheckCircle } from "lucide-react";

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

export default function Servicios() {
  useEffect(() => {
    document.title = "Servicios de Seguridad Integral | Grupo Fénix";
  }, []);

  return (
    <div style={{ background: "#000", color: "white" }}>
      {/* ── PAGE HEADER ── */}
      <div className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-tag">Portafolio de Servicios</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: "900", color: "white", marginBottom: "1rem" }}>
            Servicios de <span style={{ color: GOLD }}>Seguridad Integral</span>
          </h1>
          <p style={{ color: "#777", maxWidth: "560px", margin: "0 auto", fontSize: "1rem", lineHeight: "1.75" }}>
            Soluciones completas y personalizadas de seguridad para proteger sus activos, personal e información en todo El Salvador.
          </p>
        </div>
      </div>

      {/* ── SERVICE CARDS ── */}
      <section style={{ padding: "4rem 0 6rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="gold-card" style={{ padding: "2.5rem" }}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: title & meta */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div style={{
                          width: "52px", height: "52px",
                          background: "rgba(245,197,24,0.1)",
                          borderRadius: "12px",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          border: "1px solid rgba(245,197,24,0.25)",
                          flexShrink: 0,
                        }}>
                          <Icon style={{ color: GOLD, width: "26px", height: "26px" }} />
                        </div>
                        <div style={{
                          background: "rgba(245,197,24,0.1)",
                          color: GOLD, fontSize: "0.75rem", fontWeight: "800",
                          padding: "4px 12px", borderRadius: "100px", letterSpacing: "1px",
                        }}>
                          {s.num}
                        </div>
                      </div>
                      <h2 style={{ color: "white", fontWeight: "800", fontSize: "1.15rem", marginBottom: "0.6rem", lineHeight: "1.35" }}>
                        {s.title}
                      </h2>
                      <p style={{ color: GOLD, fontSize: "0.8rem", fontWeight: "600", marginBottom: "1rem" }}>
                        {s.subtitle}
                      </p>
                      <p style={{ color: "#777", fontSize: "0.875rem", lineHeight: "1.75" }}>
                        {s.desc}
                      </p>
                    </div>

                    {/* Right: items */}
                    <div className="lg:col-span-2">
                      <div style={{ color: "#444", fontSize: "0.72rem", letterSpacing: "2px", marginBottom: "1.25rem" }}>
                        INCLUYE
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {s.items.map((item, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <CheckCircle style={{ color: GOLD, width: "15px", height: "15px", marginTop: "2px", flexShrink: 0 }} />
                            <span style={{ color: "#aaa", fontSize: "0.875rem" }}>{item}</span>
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

      {/* ── CTA ── */}
      <section style={{
        padding: "5rem 0",
        background: "linear-gradient(135deg, #080600 0%, #160f00 50%, #080600 100%)",
        borderTop: "1px solid #1a1000",
      }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 style={{ fontSize: "2rem", fontWeight: "900", color: "white", marginBottom: "1rem" }}>
            ¿Necesita una solución <span style={{ color: GOLD }}>personalizada</span>?
          </h2>
          <p style={{ color: "#888", marginBottom: "2rem", lineHeight: "1.75" }}>
            Uno de nuestros especialistas le ayudará a diseñar el plan de seguridad ideal para su empresa u organización.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "1rem", padding: "15px 36px" }}>
              💬 Solicitar cotización
            </a>
            <Link to={createPageUrl("Contacto")} className="btn-secondary" style={{ fontSize: "1rem", padding: "15px 36px" }}>
              Ver información de contacto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}