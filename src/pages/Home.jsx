import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  ShieldCheck, Shield, Camera, Lock, Search, GraduationCap,
  Clock, Globe, Award, Users, CheckCircle, ChevronRight, MessageCircle,
} from "lucide-react";



function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0.12 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const GOLD = "#F5C518";
const WHATSAPP_URL =
  "https://wa.me/50361165075?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Grupo%20F%C3%A9nix.";

const services = [
  { icon: ShieldCheck, title: "Asesoría y Asistencia Técnica", desc: "Análisis de riesgos, evaluación e implementación de sistemas, políticas de seguridad y análisis de incidentes." },
  { icon: Shield, title: "Seguridad Armada y No Armada", desc: "Protección física de instalaciones, personas VIP, escoltas, seguridad al transporte y eventos." },
  { icon: Camera, title: "Seguridad Electrónica", desc: "Alarmas, CCTV, control de acceso, detección de incendios y televigilancia para todo sector." },
  { icon: Lock, title: "Ciberseguridad", desc: "Pentesting, gestión de vulnerabilidades, seguridad en la nube y protección de datos críticos." },
  { icon: Search, title: "Investigaciones y VSA", desc: "Investigaciones empresariales y laborales. Validación de testimonio con tecnología VSA." },
  { icon: GraduationCap, title: "Adiestramiento y Formación", desc: "Capacitación en seguridad, manejo de crisis, autoprotección y formación de personal." },
];

const stats = [
  { value: "95%", label: "Satisfacción del Cliente" },
  { value: "90%", label: "Eficacia de Capacitación" },
  { value: "24/7", label: "Centro de Operaciones" },
  { value: "#406", label: "Autorización PNC" },
];

const differentiators = [
  { icon: Clock, title: "Respuesta en < 10 min", desc: "COS activo las 24 horas con protocolos de respuesta rápida ante cualquier incidente." },
  { icon: Globe, title: "Cobertura Nacional", desc: "Presencia en todo El Salvador con equipos de reacción en zonas estratégicas." },
  { icon: Award, title: "Operación Legal", desc: "Autorizados PNC #406. Asegurados con MAPFRE. Miembros BASC y UNAPS." },
  { icon: Users, title: "Personal Certificado", desc: "Agentes con ANSP, pruebas VSA, evaluación psicológica y capacitación continua." },
];

const memberships = [
  { name: "BASC", sub: "Business Alliance for Secure Commerce" },
  { name: "UNAPS", sub: "Unión Nacional de Agencias Privadas de Seguridad" },
  { name: "Cámara de Comercio", sub: "Comercio e Industria de El Salvador" },
  { name: "MAPFRE", sub: "Seguro Colectivo · Responsabilidad Civil" },
];

export default function Home() {
  useScrollReveal();
  useEffect(() => {
    document.title = "Grupo Fénix – Seguridad Integral | El Salvador";
  }, []);

  return (
    <div style={{ background: "#000", color: "white" }}>
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "80px",
        }}
      >
        {/* Hero background — tactical security photo */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1800&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.18)",
        }} />

        {/* Gold glow overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.3) 100%)",
          pointerEvents: "none",
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-tag">Seguridad Integral Estratégica · El Salvador</div>
              <h1
                style={{
                  fontSize: "clamp(2.6rem, 6vw, 5.2rem)",
                  fontWeight: "900",
                  lineHeight: "1.1",
                  marginBottom: "1.5rem",
                  color: "white",
                }}
              >
                Protección que<br />
                <span style={{ color: GOLD }}>inspira confianza.</span>
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#bbb", lineHeight: "1.85", maxWidth: "560px", marginBottom: "2.5rem" }}>
                En Grupo Fénix somos un <strong style={{ color: "white" }}>equipo de profesionales</strong> dedicados a brindar soluciones de seguridad integral innovadoras, tecnológicas y personalizadas para empresas, instituciones y familias.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl("Servicios")} className="btn-primary" style={{ fontSize: "1rem", padding: "14px 32px" }}>
                  Ver nuestros servicios
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: "1rem", padding: "14px 32px" }}>
                  💬 Solicitar cotización
                </a>
              </div>

              <div className="flex flex-wrap gap-6 mt-10" style={{ color: "#444", fontSize: "0.8rem" }}>
                {["Autorización PNC #406", "Miembro BASC", "Miembro UNAPS", "Asegurados MAPFRE"].map((b, i) => (
                  <span key={i} style={{ color: "#777" }}>✓ {b}</span>
                ))}
              </div>
            </div>

            {/* Hero right — photo card */}
            <div className="hidden lg:flex items-center justify-center">
              <div style={{ position: "relative", width: "460px" }}>
                {/* Main photo */}
                <div style={{
                  borderRadius: "16px", overflow: "hidden",
                  border: "1px solid rgba(245,197,24,0.25)",
                  boxShadow: "0 0 80px rgba(245,197,24,0.1)",
                  height: "480px",
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=900&q=80"
                    alt="Agentes de seguridad Grupo Fénix"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "brightness(0.85)" }}
                  />
                  {/* Gold tint overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)" }} />
                </div>
                {/* Floating credential badge */}
                <div style={{
                  position: "absolute", bottom: "-18px", left: "-24px",
                  background: "#0d0d0d", border: "1px solid rgba(245,197,24,0.3)",
                  borderRadius: "12px", padding: "14px 20px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
                }}>
                  <div style={{ color: GOLD, fontWeight: "900", fontSize: "1.6rem", lineHeight: "1" }}>406</div>
                  <div style={{ color: "#666", fontSize: "0.68rem", marginTop: "3px" }}>Autorización PNC</div>
                </div>
                {/* Floating stats badge top right */}
                <div style={{
                  position: "absolute", top: "20px", right: "-20px",
                  background: "#0d0d0d", border: "1px solid #2a2a2a",
                  borderRadius: "10px", padding: "12px 18px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                }}>
                  <div style={{ color: GOLD, fontWeight: "800", fontSize: "1.1rem" }}>24/7</div>
                  <div style={{ color: "#555", fontSize: "0.65rem" }}>Centro Operaciones</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: GOLD, padding: "2.5rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: "2.2rem", fontWeight: "900", color: "#000", lineHeight: "1" }}>{s.value}</div>
                <div style={{ fontSize: "0.82rem", fontWeight: "600", color: "#333", marginTop: "4px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section style={{ overflow: "hidden", background: "#000", padding: "0" }}>
        <div style={{ display: "flex", gap: "3px" }}>
          {[
            { img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=75", label: "Seguridad Física" },
            { img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=75", label: "Vigilancia Electrónica" },
            { img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=75", label: "Ciberseguridad" },
            { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=75", label: "Investigaciones" },
          ].map((item, i) => (
            <div key={i} style={{ flex: 1, height: "200px", overflow: "hidden", position: "relative" }}
              className="photo-strip-item">
              <img src={item.img} alt={item.label}
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.45)", transition: "transform 0.5s ease" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", bottom: "14px", left: "0", right: "0", textAlign: "center", color: "#aaa", fontSize: "0.7rem", letterSpacing: "2px", fontWeight: "600" }}>
                {item.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section style={{ padding: "6rem 0", background: "#000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-tag">Nuestros Servicios</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: "900", color: "white", marginBottom: "1rem" }}>
              Servicios de <span style={{ color: GOLD }}>Seguridad Integral</span>
            </h2>
            <p style={{ color: "#666", maxWidth: "540px", margin: "0 auto", lineHeight: "1.75", fontSize: "0.95rem" }}>
              Soluciones completas diseñadas para proteger sus instalaciones, personal y activos con tecnología de vanguardia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="gold-card reveal" style={{ padding: "2rem" }}>
                  <div style={{
                    width: "50px", height: "50px",
                    background: "rgba(245,197,24,0.1)",
                    borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.25rem",
                    border: "1px solid rgba(245,197,24,0.2)",
                  }}>
                    <Icon style={{ color: GOLD, width: "24px", height: "24px" }} />
                  </div>
                  <h3 style={{ color: "white", fontWeight: "700", fontSize: "1rem", marginBottom: "0.75rem" }}>{s.title}</h3>
                  <p style={{ color: "#777", fontSize: "0.875rem", lineHeight: "1.75" }}>{s.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link to={createPageUrl("Servicios")} className="btn-primary">
              Ver todos los servicios <ChevronRight style={{ display: "inline", width: "16px", marginLeft: "4px", verticalAlign: "middle" }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY FÉNIX ── */}
      <section style={{ padding: "6rem 0", background: "#050505" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Real photo left on mobile is below text */}
            <div className="reveal">
              <div className="section-tag">¿Por qué elegirnos?</div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "white", marginBottom: "1.5rem", lineHeight: "1.2" }}>
                Así somos en <span style={{ color: GOLD }}>Grupo Fénix</span>
              </h2>
              <p style={{ color: "#888", lineHeight: "1.85", marginBottom: "2rem", fontSize: "0.95rem" }}>
                Nos apasiona dar servicios de seguridad de alta calidad, basados en la confianza, la integridad y la excelencia, para garantizar la tranquilidad de nuestros clientes.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Personal certificado ANSP con pruebas VSA y evaluación psicológica",
                  "Centro de Operaciones y Servicios (COS) activo las 24 horas",
                  "Protocolos modernos con tecnología de punta",
                  "Coordinación directa con la Policía Nacional Civil",
                  "Cobertura y supervisión a nivel nacional",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle style={{ color: GOLD, width: "17px", height: "17px", marginTop: "2px", flexShrink: 0 }} />
                    <span style={{ color: "#aaa", fontSize: "0.9rem" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to={createPageUrl("Nosotros")} className="btn-secondary">
                  Conocer más sobre nosotros
                </Link>
              </div>
            </div>

            {/* Visual panel — stat showcase */}
            <div className="reveal">
              {/* Large visual placeholder with gold accent */}
              <div style={{
                borderRadius: "14px",
                border: "1px solid rgba(245,197,24,0.2)",
                marginBottom: "1rem",
                height: "280px",
                background: "linear-gradient(135deg, #0d0900 0%, #000 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden",
              }}>
                {/* Background grid */}
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(245,197,24,0.04) 30px), repeating-linear-gradient(90deg, transparent, transparent 29px, rgba(245,197,24,0.04) 30px)",
                }} />
                {/* Central content */}
                <div style={{ textAlign: "center", zIndex: 1 }}>
                  <Users style={{ color: GOLD, width: "48px", height: "48px", margin: "0 auto 12px", opacity: 0.7 }} />
                  <div style={{ color: "white", fontWeight: "800", fontSize: "1.1rem" }}>Equipo de Élite</div>
                  <div style={{ color: "#555", fontSize: "0.8rem", marginTop: "4px" }}>Personal Certificado ANSP · VSA · Psicológico</div>
                  <div style={{
                    marginTop: "16px", display: "flex", gap: "20px", justifyContent: "center",
                  }}>
                    {[{ v: "100%", l: "Certificados" }, { v: "24/7", l: "Disponibles" }, { v: "PNC", l: "#406" }].map((s, i) => (
                      <div key={i} style={{ textAlign: "center" }}>
                        <div style={{ color: GOLD, fontWeight: "900", fontSize: "1.2rem" }}>{s.v}</div>
                        <div style={{ color: "#666", fontSize: "0.65rem" }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {differentiators.map((d, i) => {
                  const Icon = d.icon;
                  return (
                    <div key={i} className="gold-card" style={{ padding: "1.5rem" }}>
                      <Icon style={{ color: GOLD, width: "24px", height: "24px", marginBottom: "0.75rem" }} />
                      <div style={{ color: "white", fontWeight: "700", fontSize: "0.9rem", marginBottom: "0.4rem" }}>{d.title}</div>
                      <div style={{ color: "#666", fontSize: "0.78rem", lineHeight: "1.6" }}>{d.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIPS ── */}
      <section style={{ padding: "5rem 0", background: "#000", borderTop: "1px solid #0f0f0f" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div style={{ color: "#444", fontSize: "0.75rem", letterSpacing: "3px", marginBottom: "2.5rem" }}>
            MEMBRESÍAS Y CERTIFICACIONES
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {memberships.map((m, i) => (
              <div
                key={i}
                style={{
                  background: "#0c0c0c",
                  border: "1px solid #1e1e1e",
                  borderRadius: "10px",
                  padding: "1.25rem 1.75rem",
                  minWidth: "170px",
                }}
              >
                <div style={{ color: GOLD, fontWeight: "800", fontSize: "1rem" }}>{m.name}</div>
                <div style={{ color: "#555", fontSize: "0.68rem", marginTop: "4px", lineHeight: "1.4" }}>{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "6rem 0",
          background: "linear-gradient(135deg, #080600 0%, #160f00 50%, #080600 100%)",
          borderTop: "1px solid #1a1000",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-tag" style={{ marginBottom: "1.5rem" }}>Contáctenos hoy</div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "white", marginBottom: "1rem", lineHeight: "1.2" }}>
            ¿Listo para proteger<br />
            <span style={{ color: GOLD }}>lo que más importa?</span>
          </h2>
          <p style={{ color: "#888", marginBottom: "2.5rem", fontSize: "1rem", lineHeight: "1.75", maxWidth: "520px", margin: "0 auto 2.5rem" }}>
            Contáctenos hoy y reciba una evaluación personalizada de sus necesidades de seguridad.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "1rem", padding: "15px 36px" }}>
              💬 Contactar por WhatsApp
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