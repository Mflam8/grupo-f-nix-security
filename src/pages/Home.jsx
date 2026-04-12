import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  ShieldCheck, Shield, Camera, Lock, Search, GraduationCap,
  Clock, Globe, Award, Users, UserCheck, Truck, CheckCircle, ChevronRight, MessageCircle, ArrowDown,
} from "lucide-react";

const GOLD = "#F5C518";
const WHATSAPP_URL =
  "https://wa.me/50361165075?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Grupo%20F%C3%A9nix.";

/* ── Animated Counter ── */
function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const isNum = !isNaN(parseInt(target));
        if (!isNum) { setCount(target); return; }
        const end = parseInt(target);
        let startTime = null;
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{typeof count === "number" ? count : target}{suffix}</span>;
}

/* ── Scroll Reveal ── */
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

const services = [
  { icon: ShieldCheck, title: "Asesoría Técnica", desc: "Análisis de riesgos, políticas de seguridad e implementación de sistemas integrales.", color: "rgba(245,197,24,0.08)" },
  { icon: Shield, title: "Seguridad Física de Instalaciones", desc: "Protección de personas, activos y propiedad privada mediante barreras y vigilancia.", color: "rgba(245,197,24,0.06)" },
  { icon: Camera, title: "Seguridad Electrónica", desc: "CCTV, alarmas, control de acceso, televigilancia y detección de incendios.", color: "rgba(245,197,24,0.08)" },
  { icon: Users, title: "Protección de Personas Importantes", desc: "Salvaguarda integral para altos ejecutivos y personas de relevancia pública.", color: "rgba(245,197,24,0.06)" },
  { icon: Search, title: "Investigaciones & VSA", desc: "Investigaciones empresariales y laborales con tecnología VSA de 96.12% de certeza.", color: "rgba(245,197,24,0.08)" },
  { icon: GraduationCap, title: "Adiestramiento", desc: "Capacitación en seguridad, manejo de crisis y formación de personal.", color: "rgba(245,197,24,0.06)" },
  { icon: Lock, title: "Ciberseguridad", desc: "Pentesting, gestión de vulnerabilidades, seguridad en la nube y protección de datos.", color: "rgba(245,197,24,0.08)" },
  { icon: UserCheck, title: "Agente Bouncer", desc: "Control de accesos, manejo de multitudes y resolución de conflictos en eventos.", color: "rgba(245,197,24,0.06)" },
  { icon: Truck, title: "Seguridad Logística", desc: "Protección al transporte, custodio en cabina, patrullas armadas y marchamos electrónicos.", color: "rgba(245,197,24,0.08)" },
];

const stats = [
  { value: 95, suffix: "%", label: "Satisfacción del Cliente" },
  { value: 90, suffix: "%", label: "Eficacia de Capacitación" },
  { value: 24, suffix: "/7", label: "Horario de Operaciones" },
  { value: 406, suffix: "", label: "Autorización PNC" },
];

const differentiators = [
  { icon: Clock, title: "Respuesta < 10 min", desc: "COS activo 24 horas con protocolos de reacción inmediata." },
  { icon: Globe, title: "Cobertura Nacional", desc: "Equipos de reacción en zonas estratégicas de todo El Salvador." },
  { icon: Award, title: "Operación Legal", desc: "PNC #406 · MAPFRE · BASC · UNAPS · Cámara de Comercio." },
  { icon: Users, title: "Personal Certificado", desc: "ANSP, pruebas VSA, evaluación psicológica y capacitación continua." },
];

export default function Home() {
  useScrollReveal();
  const bgRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    document.title = "Grupo Fénix – Seguridad Integral | El Salvador";
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
        .service-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .service-card:hover { transform: translateY(-10px) scale(1.02); border-color: rgba(245,197,24,0.6) !important; box-shadow: 0 20px 60px rgba(245,197,24,0.12) !important; }
        .service-card:hover .service-icon { background: rgba(245,197,24,0.2) !important; transform: scale(1.1) rotate(-5deg); }
        .service-icon { transition: all 0.3s ease; }
        .cta-btn { transition: all 0.3s ease; position: relative; overflow: hidden; }
        .cta-btn::after { content:''; position:absolute; inset:0; background:rgba(255,255,255,0.08); opacity:0; transition:opacity 0.3s; }
        .cta-btn:hover::after { opacity:1; }
        .stat-card { transition: all 0.3s ease; }
        .stat-card:hover { transform: scale(1.05); }
        .reveal { opacity:0; transform:translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.revealed { opacity:1; transform:translateY(0); }
        .reveal:nth-child(2) { transition-delay: 0.1s; }
        .reveal:nth-child(3) { transition-delay: 0.2s; }
        .reveal:nth-child(4) { transition-delay: 0.3s; }
        .reveal:nth-child(5) { transition-delay: 0.4s; }
        .reveal:nth-child(6) { transition-delay: 0.5s; }

        @keyframes marquee { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-50%); } 
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .photo-strip-item {
          width: 25vw;
          height: 220px;
          flex-shrink: 0;
          border-right: 2px solid #000;
        }

        /* ── Mobile optimizations ── */
        @media (max-width: 768px) {
          .hero-title { font-size: 3rem !important; }
          .hero-buttons { flex-direction: column !important; }
          .hero-buttons a, .hero-buttons .cta-btn { width: 100%; text-align: center; justify-content: center; }
          .photo-strip-item { width: 50vw !important; height: 160px !important; }
          .photo-strip-item .strip-label { font-size: 0.6rem !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 1.5rem !important; }
          .memberships-row { gap: 0.5rem !important; }
          .membership-pill { padding: 8px 14px !important; }
          .membership-pill .pill-name { font-size: 0.78rem !important; }
          .cta-section-buttons { flex-direction: column !important; align-items: center !important; }
          .cta-section-buttons a { width: 100%; max-width: 340px; justify-content: center; }
          .diff-cards-grid { grid-template-columns: 1fr 1fr !important; gap: 0.75rem !important; }
          .why-checklist > div { padding: 10px 12px !important; }
        }
        @media (max-width: 480px) {
          .photo-strip-item { width: 85vw !important; height: 160px !important; }
          .hero-tag { font-size: 0.6rem !important; letter-spacing: 1.5px !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════════
          HERO — Cinematic Full Screen
      ══════════════════════════════════════════ */}
      <section ref={heroRef} style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden", paddingTop: "80px",
      }}>
        {/* Background photo with parallax */}
        <div ref={bgRef} style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "url(https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1920&q=60&auto=format,compress)",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.22) contrast(1.1)",
          transition: "transform 0.8s ease-out",
        }} />

        {/* Dark gradient vignette */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.85) 100%)",
        }} />

        {/* Animated scanline */}
        <div style={{
          position: "absolute", left: 0, right: 0, height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(245,197,24,0.3), transparent)",
          animation: "scanline 6s linear infinite", pointerEvents: "none",
        }} />

        {/* Gold corner accent top-right */}
        <div style={{
          position: "absolute", top: "80px", right: 0,
          width: "500px", height: "500px",
          background: "radial-gradient(circle at top right, rgba(245,197,24,0.15) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT — Copy */}
            <div>
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
                  SEGURIDAD INTEGRAL · EL SALVADOR
                </span>
              </div>

              <h1 className="hero-title" style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", fontWeight: "900",
                lineHeight: "1.05", marginBottom: "1.75rem", color: "white",
                animation: "fadeUp 0.9s ease 0.2s both",
              }}>
                Seguridad que evoluciona,<br />
                protección que <span style={{
                  color: GOLD,
                  textShadow: "0 0 40px rgba(245,197,24,0.4)",
                }}>inspira confianza...</span>
              </h1>

              <p style={{
                fontSize: "1.1rem", color: "#bbb", lineHeight: "1.85",
                maxWidth: "520px", marginBottom: "3rem",
                animation: "fadeUp 0.9s ease 0.4s both",
              }}>
                En <strong style={{ color: "white" }}>Grupo Fénix</strong> somos especialistas en seguridad integral estratégica — protegiendo empresas, instituciones y familias con tecnología de punta y personal de élite.
              </p>

              <div className="hero-buttons flex flex-wrap gap-4" style={{ animation: "fadeUp 0.9s ease 0.6s both" }}>
                <Link to={createPageUrl("Servicios")} className="cta-btn" style={{
                  background: GOLD, color: "#000", fontWeight: "800",
                  padding: "16px 36px", borderRadius: "8px", fontSize: "1rem",
                  textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px",
                  boxShadow: "0 0 30px rgba(245,197,24,0.25)",
                }}>
                  Ver nuestros servicios <ChevronRight size={18} />
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="cta-btn" style={{
                  background: "transparent", color: "white", fontWeight: "700",
                  padding: "16px 36px", borderRadius: "8px", fontSize: "1rem",
                  textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px",
                  border: "2px solid rgba(255,255,255,0.2)",
                }}>
                  💬 Contáctanos
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
                    <img src={logo.img} alt={logo.alt} width="80" height="46" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Photo with floating cards */}
            <div style={{ position: "relative", animation: "fadeIn 1.2s ease 0.4s both" }}>
              {/* Main photo card */}
              <div style={{
                borderRadius: "20px", overflow: "hidden",
                border: "1px solid rgba(245,197,24,0.2)",
                height: "520px", position: "relative",
                animation: "border-glow 4s ease infinite",
                boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
              }}>
                <img
                  src="https://wsrv.nl/?url=https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/304c8dc0b_1.png&w=1000&output=webp&q=70"
                  alt="Equipo Grupo Fénix"
                  width="1000"
                  height="1000"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 55%)" }} />
                {/* Bottom label */}
                <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px" }}>
                  <div style={{ color: GOLD, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "2px", marginBottom: "4px" }}>EQUIPO DE ÉLITE</div>
                  <div style={{ color: "#ccc", fontSize: "0.85rem" }}>Personal certificado ANSP · VSA · Evaluación Psicológica</div>
                </div>
              </div>

              {/* Floating badge — PNC */}
              <div style={{
                position: "absolute", top: "-20px", left: "-30px",
                background: "linear-gradient(135deg, #111, #0a0700)",
                border: "1px solid rgba(245,197,24,0.4)", borderRadius: "14px",
                padding: "18px 24px", boxShadow: "0 12px 40px rgba(0,0,0,0.7)",
                animation: "float 4s ease-in-out infinite",
              }}>
                <div style={{ color: GOLD, fontWeight: "900", fontSize: "2.2rem", lineHeight: "1" }}>406</div>
                <div style={{ color: "#777", fontSize: "0.68rem", marginTop: "4px", letterSpacing: "1px" }}>AUTORIZACIÓN PNC</div>
              </div>

              {/* Floating badge — COS */}
              <div style={{
                position: "absolute", top: "30px", right: "-24px",
                background: "linear-gradient(135deg, #111, #0a0700)",
                border: "1px solid rgba(245,197,24,0.3)", borderRadius: "12px",
                padding: "14px 20px", boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
                animation: "float 4s ease-in-out 1s infinite",
                textAlign: "center",
              }}>
                <div style={{ color: GOLD, fontWeight: "900", fontSize: "1.4rem" }}>24/7</div>
                <div style={{ color: "#666", fontSize: "0.62rem", letterSpacing: "1px" }}>CENTRO DE OPS</div>
              </div>

              {/* Floating badge — Coverage */}
              <div style={{
                position: "absolute", top: "45%", right: "-36px",
                background: "linear-gradient(135deg, #111, #0a0700)",
                border: "1px solid rgba(245,197,24,0.25)", borderRadius: "10px",
                padding: "12px 16px", boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                animation: "float 5s ease-in-out 2s infinite",
                display: "flex", alignItems: "center", gap: "8px",
              }}>
                <Globe size={14} style={{ color: GOLD }} />
                <span style={{ color: "#aaa", fontSize: "0.7rem", fontWeight: "600", whiteSpace: "nowrap" }}>Cobertura Nacional</span>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
            opacity: 0.4,
          }}>
            <span style={{ fontSize: "0.65rem", letterSpacing: "2px", color: "#888" }}>SCROLL</span>
            <ArrowDown size={16} style={{ color: "#888", animation: "float 1.5s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAR — Animated Counters
      ══════════════════════════════════════════ */}
      <section style={{
        background: `linear-gradient(135deg, ${GOLD} 0%, #d4a800 100%)`,
        padding: "3rem 0", position: "relative", overflow: "hidden",
      }}>
        {/* Subtle pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 50%)",
          backgroundSize: "20px 20px",
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative" }}>
          <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", color: "#000", lineHeight: "1" }}>
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: "0.82rem", fontWeight: "600", color: "rgba(0,0,0,0.6)", marginTop: "6px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PHOTO STRIP
      ══════════════════════════════════════════ */}
      <section style={{ padding: "0", background: "#000", overflow: "hidden" }}>
        <div className="marquee-track">
          {[
            { img: "https://wsrv.nl/?url=https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/053d32d20_foto_2_guardia_carro.jpg&w=600&output=webp&q=70", label: "Seguridad Física", icon: Shield },
            { img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=60&auto=format,compress", label: "Ciberseguridad", icon: Lock },
            { img: "https://wsrv.nl/?url=https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/343f05c5d_ChatGPTImageFeb28202605_52_55PM.png&w=600&output=webp&q=70", label: "Vigilancia CCTV", icon: Camera },
            { img: "https://wsrv.nl/?url=https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/1f0636579_ChatGPTImageFeb28202606_31_05PM.png&w=600&output=webp&q=70", label: "Investigaciones", icon: Search },
            // Duplicados para animación infinita
            { img: "https://wsrv.nl/?url=https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/053d32d20_foto_2_guardia_carro.jpg&w=600&output=webp&q=70", label: "Seguridad Física", icon: Shield },
            { img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=60&auto=format,compress", label: "Ciberseguridad", icon: Lock },
            { img: "https://wsrv.nl/?url=https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/343f05c5d_ChatGPTImageFeb28202605_52_55PM.png&w=600&output=webp&q=70", label: "Vigilancia CCTV", icon: Camera },
            { img: "https://wsrv.nl/?url=https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/1f0636579_ChatGPTImageFeb28202606_31_05PM.png&w=600&output=webp&q=70", label: "Investigaciones", icon: Search },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="photo-strip-item" style={{
                position: "relative", overflow: "hidden", cursor: "pointer",
              }}>
                <img src={item.img} alt={item.label} loading="lazy" decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.4) saturate(0.6)", transition: "all 0.5s ease" }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 70%)",
                }} />
                {/* Top gold line on hover */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                  background: GOLD, opacity: 0, transition: "opacity 0.3s",
                }} className="strip-line" />
                <div style={{
                  position: "absolute", bottom: "18px", left: 0, right: 0,
                  textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
                }}>
                  <Icon size={18} style={{ color: GOLD, opacity: 0.9 }} />
                  <span style={{ color: "#ccc", fontSize: "0.7rem", letterSpacing: "2px", fontWeight: "600" }}>
                    {item.label.toUpperCase()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════════════ */}
      <section style={{ padding: "7rem 0", background: "#000", position: "relative", overflow: "hidden" }}>
        {/* Background accent */}
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: "800px", height: "800px",
          background: "radial-gradient(circle, rgba(245,197,24,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <div className="section-tag">Portafolio de Servicios</div>
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: "900", color: "white", marginBottom: "1rem" }}>
              Soluciones de <span style={{ color: GOLD }}>Seguridad Integral</span>
            </h2>
            <p style={{ color: "#666", maxWidth: "520px", margin: "0 auto", lineHeight: "1.8", fontSize: "0.95rem" }}>
              Diseñadas para proteger sus instalaciones, personal, activos e información con tecnología de vanguardia.
            </p>
          </div>

          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="service-card reveal" style={{
                  background: "#0b0b0b", border: "1px solid #1c1c1c",
                  borderRadius: "16px", padding: "2.25rem",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
                }}>
                  <div className="service-icon" style={{
                    width: "54px", height: "54px",
                    background: "rgba(245,197,24,0.1)",
                    borderRadius: "14px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.5rem",
                    border: "1px solid rgba(245,197,24,0.15)",
                  }}>
                    <Icon style={{ color: GOLD, width: "25px", height: "25px" }} />
                  </div>
                  <h3 style={{ color: "white", fontWeight: "800", fontSize: "1.05rem", marginBottom: "0.75rem" }}>{s.title}</h3>
                  <p style={{ color: "#666", fontSize: "0.875rem", lineHeight: "1.8" }}>{s.desc}</p>
                  <Link to={createPageUrl("Servicios")} style={{ marginTop: "1.5rem", display: "inline-flex", alignItems: "center", gap: "6px", color: GOLD, fontSize: "0.8rem", fontWeight: "600", textDecoration: "none" }}>
                    Ver más <ChevronRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 reveal">
            <Link to={createPageUrl("Servicios")} className="btn-primary" style={{ fontSize: "1rem", padding: "15px 40px" }}>
              Ver portafolio completo
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY FÉNIX — Full cinematic section
      ══════════════════════════════════════════ */}
      <section style={{ padding: "7rem 0", background: "#050505", position: "relative", overflow: "hidden" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — Photo with overlay cards */}
            <div className="reveal" style={{ position: "relative" }}>
              <div className="h-[350px] md:h-[450px] lg:h-[520px]" style={{
                borderRadius: "20px", overflow: "hidden",
                border: "1px solid rgba(245,197,24,0.15)",
                position: "relative",
                boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
              }}>
                <img
                  src="https://wsrv.nl/?url=https://media.base44.com/images/public/699dc69700a4d30f0cc60f12/717541df9_F9.png&w=1000&output=webp&q=70"
                  alt="Seguridad que inspira confianza"
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "65% 70%", filter: "brightness(0.9)" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)" }} />
              </div>

              {/* Gold accent line */}
              <div style={{
                position: "absolute", top: "40px", left: "-20px",
                width: "4px", height: "60%",
                background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)`,
                borderRadius: "2px",
              }} />
            </div>

            {/* Right — Copy + differentiators */}
            <div className="reveal">
              <div className="section-tag">¿Por qué elegirnos?</div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", color: "white", marginBottom: "1.5rem", lineHeight: "1.15" }}>
                Así somos en<br /><span style={{ color: GOLD }}>Grupo Fénix</span>
              </h2>
              <p style={{ color: "#888", lineHeight: "1.9", marginBottom: "2.5rem", fontSize: "0.95rem" }}>
                Nos apasiona brindar servicios de seguridad de alta calidad, basados en la confianza, integridad y excelencia, para garantizar la tranquilidad de nuestros clientes corporativos y particulares.
              </p>

              <div className="why-checklist flex flex-col gap-3 mb-8">
                {[
                  "Personal certificado ANSP con pruebas VSA y evaluación psicológica",
                  "Centro de Operaciones y Servicios (COS) activo 24 horas",
                  "Protocolos modernos con tecnología de punta",
                  "Coordinación directa con la Policía Nacional Civil",
                  "Cobertura y supervisión a nivel nacional",
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: "12px",
                    padding: "12px 16px",
                    background: "rgba(245,197,24,0.03)", borderRadius: "8px",
                    border: "1px solid rgba(245,197,24,0.06)",
                    transition: "all 0.3s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,197,24,0.07)"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.2)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(245,197,24,0.03)"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.06)"; }}
                  >
                    <CheckCircle style={{ color: GOLD, width: "16px", height: "16px", marginTop: "2px", flexShrink: 0 }} />
                    <span style={{ color: "#bbb", fontSize: "0.88rem" }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Mini diff cards */}
              <div className="diff-cards-grid grid grid-cols-2 gap-3">
                {differentiators.map((d, i) => {
                  const Icon = d.icon;
                  return (
                    <div key={i} style={{
                      background: "#0c0c0c", border: "1px solid #1e1e1e", borderRadius: "12px",
                      padding: "1.25rem", transition: "all 0.3s ease",
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e1e"; e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                      <Icon style={{ color: GOLD, width: "20px", height: "20px", marginBottom: "0.6rem" }} />
                      <div style={{ color: "white", fontWeight: "700", fontSize: "0.82rem", marginBottom: "0.3rem" }}>{d.title}</div>
                      <div style={{ color: "#555", fontSize: "0.73rem", lineHeight: "1.55" }}>{d.desc}</div>
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: "2rem" }}>
                <Link to={createPageUrl("Nosotros")} className="btn-secondary" style={{ fontSize: "0.95rem" }}>
                  Conocer más sobre nosotros
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MEMBERSHIPS — Clean pill row
      ══════════════════════════════════════════ */}
      <section style={{ padding: "4rem 0", background: "#000", borderTop: "1px solid #0e0e0e" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ color: "#999", fontSize: "0.72rem", letterSpacing: "3px", textAlign: "center", marginBottom: "2.5rem" }}>
            MEMBRESÍAS · CERTIFICACIONES · SEGUROS
          </div>
          <div className="memberships-row flex flex-wrap justify-center items-center gap-6">
            <div style={{
                background: "linear-gradient(135deg, #111, #0a0700)",
                border: "1px solid rgba(245,197,24,0.3)", borderRadius: "16px",
                padding: "12px 24px", height: "75px", minWidth: "140px",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s ease", cursor: "default",
                boxShadow: "0 4px 20px rgba(245,197,24,0.06)"
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.6)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.3)"; }}
            >
              <div style={{ color: GOLD, fontWeight: "900", fontSize: "1.1rem" }}>PNC #406</div>
              <div style={{ color: "#aaa", fontSize: "0.6rem", marginTop: "4px", letterSpacing: "1px" }}>AUTORIZACIÓN</div>
            </div>
            {[
              { img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/b467792dd_8.png", alt: "BASC" },
              { img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/50353a604_9.png", alt: "UNAPS" },
              { img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/e2644239e_10.png", alt: "Cámara de Comercio" },
              { img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/36e9b4682_11.png", alt: "MAPFRE" }
            ].map((logo, i) => (
              <div key={i} style={{
                background: "white", borderRadius: "16px", padding: "12px 20px",
                height: "75px", minWidth: "140px", display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s ease", cursor: "default",
                boxShadow: "0 4px 20px rgba(0,0,0,0.5)"
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(255,255,255,0.15)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)"; }}
              >
                <img src={logo.img} alt={logo.alt} style={{ maxWidth: "100px", maxHeight: "100%", objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA — Full cinematic closer
      ══════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", padding: "8rem 0" }}>
        {/* Background photo */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(https://wsrv.nl/?url=https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/bfacb66ff_6.png&w=1600&output=webp&q=70)",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.4)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.65))",
        }} />
        {/* Gold radial center */}
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
            CONTÁCTENOS HOY
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "900", color: "white", marginBottom: "1.25rem", lineHeight: "1.15" }}>
            ¿Listo para proteger<br />
            <span style={{ color: GOLD }}>lo que más importa?</span>
          </h2>
          <p style={{ color: "#888", marginBottom: "3rem", fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "500px", margin: "0 auto 3rem" }}>
            Reciba una evaluación de seguridad personalizada y sin compromiso. Nuestro equipo de especialistas le atenderá de inmediato.
          </p>
          <div className="cta-section-buttons flex flex-wrap gap-4 justify-center">
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