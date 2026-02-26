import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Target, Eye, Shield, Award, Users, MapPin, CheckCircle, Zap } from "lucide-react";


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

export default function Nosotros() {
  useEffect(() => {
    document.title = "Quiénes Somos | Grupo Fénix – Seguridad Integral";
  }, []);

  return (
    <div style={{ background: "#000", color: "white" }}>
      {/* ── PAGE HEADER ── */}
      <div className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-tag">Quiénes Somos</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: "900", color: "white", marginBottom: "1rem" }}>
            Así somos en <span style={{ color: GOLD }}>Grupo Fénix</span>
          </h1>
          <p style={{ color: "#777", maxWidth: "560px", margin: "0 auto", fontSize: "1rem", lineHeight: "1.75" }}>
            Un equipo de profesionales dedicados a brindar soluciones de seguridad integral, innovadoras y personalizadas para proteger lo que más importa.
          </p>
        </div>
      </div>

      {/* ── QUIÉNES SOMOS ── */}
      <section style={{ padding: "6rem 0", background: "#000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag">Nuestra Empresa</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: "900", color: "white", marginBottom: "1.5rem", lineHeight: "1.2" }}>
                Quiénes <span style={{ color: GOLD }}>Somos</span>
              </h2>
              {[
                "En Grupo Fénix somos un equipo de profesionales dedicados a brindar soluciones de seguridad integral innovadoras, tecnológicas y personalizadas, dando una protección que inspire confianza a nuestros Clientes.",
                "Nos apasiona dar servicios de seguridad de alta calidad, basados en la confianza, la integridad y la excelencia, para garantizar la tranquilidad.",
                "Nuestras bases fundamentales son el desarrollo de la capacidad técnica de nuestro Recurso Humano, que es lo más valioso de nuestra organización, y así brindar soluciones eficientes de seguridad Integral Estratégica.",
              ].map((text, i) => (
                <p key={i} style={{ color: "#aaa", lineHeight: "1.85", fontSize: "0.95rem", marginBottom: "1.25rem" }}>{text}</p>
              ))}
              <div style={{
                display: "inline-block",
                background: GOLD,
                color: "#000",
                fontWeight: "800",
                padding: "12px 24px",
                borderRadius: "6px",
                fontSize: "0.95rem",
                marginTop: "0.5rem",
              }}>
                Así somos en Grupo Fénix.
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{
                borderRadius: "16px", overflow: "hidden",
                border: "1px solid rgba(245,197,24,0.2)",
                height: "380px", position: "relative",
              }}>
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80"
                  alt="Equipo Grupo Fénix en operación"
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.55)" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", bottom: "24px", left: "0", right: "0" }}>
                  <div className="grid grid-cols-4 gap-0" style={{ textAlign: "center", padding: "0 20px" }}>
                    {[
                      { value: "406", label: "Lic. PNC" },
                      { value: "24/7", label: "COS Activo" },
                      { value: "3+", label: "Membresías" },
                      { value: "100%", label: "Certificados" },
                    ].map((s, i) => (
                      <div key={i}>
                        <div style={{ color: GOLD, fontWeight: "900", fontSize: "1.5rem", lineHeight: "1" }}>{s.value}</div>
                        <div style={{ color: "#888", fontSize: "0.65rem", marginTop: "3px" }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISIÓN & VISIÓN ── */}
      <section style={{ padding: "6rem 0", background: "#040404" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-tag">Fundamentos</div>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "white" }}>
              Misión & <span style={{ color: GOLD }}>Visión</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Misión */}
            <div className="gold-card" style={{ padding: "3rem" }}>
              <Target style={{ color: GOLD, width: "38px", height: "38px", marginBottom: "1.5rem" }} />
              <h3 style={{ color: GOLD, fontSize: "1.5rem", fontWeight: "900", marginBottom: "1.25rem" }}>
                Misión Empresarial
              </h3>
              <p style={{ color: "#aaa", lineHeight: "1.85", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                Nuestra misión es <strong style={{ color: "white" }}>proporcionar servicios de seguridad de alta calidad, innovadores y tecnológicos</strong>, que superen las expectativas de nuestros clientes, y protejan sus familias, empleados y activos.
              </p>
              <div style={{ color: "#555", fontSize: "0.72rem", letterSpacing: "2px", marginBottom: "1rem" }}>
                PARA NOSOTROS CUMPLIR CON LA MISIÓN ES:
              </div>
              <div className="flex flex-col gap-3">
                {misionItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle style={{ color: GOLD, width: "14px", height: "14px", marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ color: "#999", fontSize: "0.875rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visión */}
            <div className="gold-card" style={{ padding: "3rem" }}>
              <Eye style={{ color: GOLD, width: "38px", height: "38px", marginBottom: "1.5rem" }} />
              <h3 style={{ color: GOLD, fontSize: "1.5rem", fontWeight: "900", marginBottom: "1.25rem" }}>
                Visión Empresarial
              </h3>
              <div className="flex flex-col gap-4">
                <p style={{ color: "#aaa", lineHeight: "1.85", fontSize: "0.95rem" }}>
                  Nuestra visión es <strong style={{ color: "white" }}>ser líderes en el sector de la seguridad privada y ser reconocidos por la excelencia y profesionalismo</strong> de nuestro servicio.
                </p>
                <p style={{ color: "#aaa", lineHeight: "1.85", fontSize: "0.95rem" }}>
                  Mantener un servicio de seguridad innovador e integral, a través de nuestro personal en la protección y seguridad de nuestros asociados, sus empleados y activos.
                </p>
                <p style={{ color: "#aaa", lineHeight: "1.85", fontSize: "0.95rem" }}>
                  Ser la opción de las empresas y personas que buscan proteger sus activos, empleados y familias de manera efectiva y confiable.
                </p>
              </div>
              <div style={{
                marginTop: "2.5rem",
                background: GOLD,
                color: "#000",
                fontWeight: "900",
                padding: "16px 24px",
                borderRadius: "8px",
                textAlign: "center",
                fontSize: "1rem",
                letterSpacing: "0.5px",
              }}>
                Protección que inspira confianza.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section style={{ padding: "6rem 0", background: "#000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-tag">Valores</div>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "white" }}>
              Nuestros <span style={{ color: GOLD }}>Valores</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="gold-card text-center" style={{ padding: "2.5rem 1.5rem" }}>
                  <div style={{
                    width: "64px", height: "64px",
                    background: "rgba(245,197,24,0.1)",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 1.25rem",
                    border: "1px solid rgba(245,197,24,0.2)",
                  }}>
                    <Icon style={{ color: GOLD, width: "28px", height: "28px" }} />
                  </div>
                  <div style={{ color: "white", fontWeight: "800", fontSize: "1.05rem", marginBottom: "0.75rem" }}>{v.title}</div>
                  <div style={{ color: "#666", fontSize: "0.85rem", lineHeight: "1.65" }}>{v.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LEGAL & COVERAGE ── */}
      <section style={{ padding: "5rem 0", background: "#040404" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Legal */}
            <div className="gold-card" style={{ padding: "2.75rem" }}>
              <div style={{ color: GOLD, fontWeight: "700", fontSize: "0.72rem", letterSpacing: "2.5px", marginBottom: "1.5rem" }}>
                OPERACIÓN LEGAL
              </div>
              <h3 style={{ color: "white", fontSize: "1.4rem", fontWeight: "800", marginBottom: "1.75rem" }}>
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
                  <div key={i} style={{ borderBottom: "1px solid #161616", paddingBottom: "1rem" }}>
                    <div style={{ color: "#555", fontSize: "0.72rem", letterSpacing: "1.5px", marginBottom: "3px" }}>{item.label}</div>
                    <div style={{ color: "#ccc", fontSize: "0.9rem" }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage */}
            <div className="gold-card" style={{ padding: "2.75rem" }}>
              <MapPin style={{ color: GOLD, width: "38px", height: "38px", marginBottom: "1.5rem" }} />
              <h3 style={{ color: "white", fontSize: "1.4rem", fontWeight: "800", marginBottom: "1rem" }}>
                Cobertura <span style={{ color: GOLD }}>Nacional</span>
              </h3>
              <p style={{ color: "#888", lineHeight: "1.85", marginBottom: "1.75rem", fontSize: "0.9rem" }}>
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
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle style={{ color: GOLD, width: "14px", height: "14px", marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ color: "#999", fontSize: "0.875rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
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
          <h2 style={{ fontSize: "2rem", fontWeight: "900", color: "white", marginBottom: "1rem", lineHeight: "1.3" }}>
            Descubra cómo podemos <span style={{ color: GOLD }}>proteger su empresa</span>
          </h2>
          <p style={{ color: "#888", marginBottom: "2rem", lineHeight: "1.75" }}>
            Estamos listos para atenderle y diseñar una solución de seguridad integral personalizada.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "1rem", padding: "15px 36px" }}>
              💬 Contáctenos por WhatsApp
            </a>
            <Link to={createPageUrl("Servicios")} className="btn-secondary" style={{ fontSize: "1rem", padding: "15px 36px" }}>
              Ver nuestros servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}