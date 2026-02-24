import React, { useEffect } from "react";
import { MapPin, Phone, Clock, Globe, MessageCircle, Shield } from "lucide-react";

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

export default function Contacto() {
  useEffect(() => {
    document.title = "Contacto | Grupo Fénix – Seguridad Integral El Salvador";
  }, []);

  return (
    <div style={{ background: "#000", color: "white" }}>
      {/* ── PAGE HEADER ── */}
      <div className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-tag">Contáctenos</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: "900", color: "white", marginBottom: "1rem" }}>
            Estamos aquí para <span style={{ color: GOLD }}>protegerle</span>
          </h1>
          <p style={{ color: "#777", maxWidth: "520px", margin: "0 auto", fontSize: "1rem", lineHeight: "1.75" }}>
            Contáctenos hoy mismo. Nuestro equipo de especialistas está disponible para atender sus consultas y diseñar su solución de seguridad.
          </p>
        </div>
      </div>

      {/* ── CONTACT CARDS ── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="gold-card" style={{ padding: "2rem" }}>
                  <div style={{
                    width: "48px", height: "48px",
                    background: "rgba(245,197,24,0.1)",
                    borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.25rem",
                    border: "1px solid rgba(245,197,24,0.2)",
                  }}>
                    <Icon style={{ color: GOLD, width: "22px", height: "22px" }} />
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
                        display: "inline-block",
                        marginTop: "1rem",
                        color: GOLD,
                        fontSize: "0.82rem",
                        fontWeight: "600",
                        textDecoration: "none",
                        borderBottom: `1px solid ${GOLD}`,
                        paddingBottom: "2px",
                      }}
                    >
                      {card.action.label} →
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── MAIN WHATSAPP CTA ── */}
          <div style={{
            background: "linear-gradient(135deg, #080600, #160f00)",
            border: "1px solid rgba(245,197,24,0.2)",
            borderRadius: "16px",
            padding: "clamp(2.5rem, 5vw, 4rem)",
            textAlign: "center",
          }}>
            <div style={{
              width: "80px", height: "80px",
              background: "#25D366",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 2rem",
              boxShadow: "0 0 48px rgba(37,211,102,0.35)",
            }}>
              <MessageCircle style={{ color: "white", width: "38px", height: "38px" }} />
            </div>
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: "900", color: "white", marginBottom: "1rem" }}>
              La forma más rápida de contactarnos
            </h2>
            <p style={{ color: "#888", maxWidth: "480px", margin: "0 auto 2.5rem", lineHeight: "1.75", fontSize: "0.95rem" }}>
              Envíenos un mensaje por WhatsApp y reciba respuesta inmediata de nuestro equipo de especialistas en seguridad.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#25D366",
                color: "white",
                fontWeight: "700",
                padding: "16px 44px",
                borderRadius: "8px",
                fontSize: "1.05rem",
                textDecoration: "none",
                transition: "all 0.2s",
                boxShadow: "0 4px 24px rgba(37,211,102,0.3)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#1da551";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#25D366";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <MessageCircle size={22} />
              Abrir WhatsApp
            </a>
            <div style={{ marginTop: "1.75rem", color: "#555", fontSize: "0.82rem" }}>
              También puede escribir directamente al número:{" "}
              <strong style={{ color: "#888" }}>(503) 6116-5075</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY INFO ── */}
      <section style={{ padding: "0 0 5rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            style={{
              background: "#0a0a0a",
              border: "1px solid #1a1a1a",
              borderRadius: "14px",
              padding: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div style={{ color: GOLD, fontWeight: "900", fontSize: "1.4rem", letterSpacing: "3px", marginBottom: "4px" }}>
                  GRUPO FÉNIX
                </div>
                <div style={{ color: "#444", fontSize: "0.8rem", marginBottom: "1.75rem" }}>
                  Phoenix Security S.A. de C.V.
                </div>
                <div style={{ color: "#777", fontSize: "0.875rem", lineHeight: "2.2" }}>
                  <div><span style={{ color: "#555" }}>Razón Social:</span> Phoenix Security, S.A. de C.V.</div>
                  <div><span style={{ color: "#555" }}>NIT:</span> 0614-140319-102-1</div>
                  <div><span style={{ color: "#555" }}>Giro:</span> Asesoría y Asistencia Técnica de Servicios Privados de Seguridad</div>
                  <div><span style={{ color: "#555" }}>Dirección:</span> Pasaje Gedance, Casa #113, Col. Flor Blanca, San Salvador</div>
                  <div><span style={{ color: "#555" }}>Teléfono:</span> (503) 6116-5075</div>
                  <div><span style={{ color: "#555" }}>Web:</span> www.grupofenix.com.sv</div>
                </div>
              </div>
              <div className="text-center">
                <div style={{
                  display: "inline-block",
                  background: "rgba(245,197,24,0.06)",
                  border: "1px solid rgba(245,197,24,0.15)",
                  borderRadius: "12px",
                  padding: "2.5rem",
                }}>
                  <div style={{ fontSize: "4.5rem", fontWeight: "900", color: GOLD, lineHeight: "1" }}>406</div>
                  <div style={{ color: "#666", fontSize: "0.8rem", marginTop: "0.5rem" }}>Autorización PNC</div>
                  <div style={{ color: "#444", fontSize: "0.7rem", marginTop: "2px" }}>Policía Nacional Civil</div>
                  <div style={{ marginTop: "1.5rem", borderTop: "1px solid #1a1a1a", paddingTop: "1.25rem" }}>
                    <div style={{ color: "#555", fontSize: "0.72rem", letterSpacing: "1px", marginBottom: "6px" }}>ASEGURADOS CON</div>
                    <div style={{ color: "white", fontWeight: "700", fontSize: "1rem" }}>MAPFRE</div>
                    <div style={{ color: "#555", fontSize: "0.7rem" }}>Resp. Civil · Seguro Colectivo de Vida</div>
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