import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, MessageCircle, ShieldCheck, MapPin, Phone, Globe } from "lucide-react";
import CookieConsent from "@/components/CookieConsent";

const GOLD = "#F5C518";
const WHATSAPP_URL =
  "https://wa.me/50361165075?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Grupo%20F%C3%A9nix.";

const navLinks = [
  { name: "Inicio", page: "Home" },
  { name: "Servicios", page: "Servicios" },
  { name: "Nosotros", page: "Nosotros" },
  { name: "Contacto", page: "Contacto" },
];

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastState = false;
    const onScroll = () => {
      const isScrolledNow = window.scrollY > 60;
      if (isScrolledNow !== lastState) {
        setIsScrolled(isScrolledNow);
        lastState = isScrolledNow;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPageName]);

  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "white" }}>
      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
          background: isScrolled ? "rgba(0,0,0,0.97)" : "rgba(0,0,0,0.2)",
          backdropFilter: "blur(12px)",
          borderBottom: isScrolled ? "1px solid #1a1a1a" : "1px solid transparent",
          transition: "all 0.35s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3" style={{ textDecoration: "none" }}>
              <div
                style={{
                  width: "45px", height: "45px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/3950a50a0_Diseosinttulo6.png" alt="Grupo Fénix Logo" width="45" height="45" fetchpriority="high" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              <div>
                <div style={{ color: GOLD, fontWeight: "900", fontSize: "1.05rem", letterSpacing: "2px", lineHeight: "1.1" }}>
                  GRUPO FÉNIX
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className="nav-link-item"
                  style={{
                    color: currentPageName === link.page ? GOLD : "#ccc",
                    fontWeight: currentPageName === link.page ? "700" : "400",
                    fontSize: "0.9rem",
                    letterSpacing: "0.5px",
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
                Contáctenos
              </a>
            </div>

            {/* Mobile Burger */}
            <button
              aria-label="Abrir menú móvil"
              className="md:hidden p-2"
              onClick={() => setMobileOpen(true)}
              style={{ color: GOLD, background: "none", border: "none", cursor: "pointer" }}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.98)",
            zIndex: 1000, display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "2rem",
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute", top: "20px", right: "20px",
              color: GOLD, background: "none", border: "none", cursor: "pointer",
            }}
          >
            <X size={32} />
          </button>
          <div className="flex flex-col items-center gap-3">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/3950a50a0_Diseosinttulo6.png" alt="Grupo Fénix Logo" width="70" height="70" style={{ width: "70px", height: "70px", objectFit: "contain" }} />
            <div style={{ color: GOLD, fontWeight: "900", fontSize: "1.4rem", letterSpacing: "3px" }}>
              GRUPO FÉNIX
            </div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.page}
              to={createPageUrl(link.page)}
              onClick={() => setMobileOpen(false)}
              style={{
                color: currentPageName === link.page ? GOLD : "white",
                textDecoration: "none",
                fontSize: "1.4rem",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              {link.name}
            </Link>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            💬 WhatsApp
          </a>
        </div>
      )}

      {/* ── PAGE CONTENT ── */}
      <main>{children}</main>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#060606", borderTop: "1px solid #141414", paddingTop: "4rem", paddingBottom: "2rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dc69700a4d30f0cc60f12/3950a50a0_Diseosinttulo6.png" alt="Logo" width="36" height="36" style={{ width: "36px", height: "36px", objectFit: "contain" }} />
                <div style={{ color: GOLD, fontWeight: "900", fontSize: "1.3rem", letterSpacing: "3px" }}>
                  GRUPO FÉNIX
                </div>
              </div>
              <div style={{ color: "#999", fontSize: "0.78rem", marginBottom: "1.25rem" }}>
                Phoenix Security S.A. de C.V.
              </div>
              <p style={{ color: "#aaa", fontSize: "0.85rem", lineHeight: "1.8" }}>
                Seguridad que evoluciona.<br />
                Protección que inspira confianza.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "10px 20px", fontSize: "0.85rem" }}>
                  💬 WhatsApp
                </a>
              </div>
            </div>

            <div>
              <div style={{ color: GOLD, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "2px", marginBottom: "1.5rem" }}>
                PÁGINAS
              </div>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className="footer-link"
                    style={{ color: "#aaa", textDecoration: "none", fontSize: "0.875rem" }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div style={{ color: GOLD, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "2px", marginBottom: "1.5rem" }}>
                CONTACTO
              </div>
              <div style={{ color: "#aaa", fontSize: "0.875rem", lineHeight: "2.1" }}>
                <div className="flex items-start gap-2 mt-1">
                  <MapPin size={16} style={{ color: GOLD, marginTop: "4px", flexShrink: 0 }} />
                  <div style={{ lineHeight: "1.6" }}>
                    <div>Pasaje Gedance, Casa #113</div>
                    <div>Col. Flor Blanca, San Salvador</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Phone size={16} style={{ color: GOLD, flexShrink: 0 }} />
                  <div>(503) 6116-5075</div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Globe size={16} style={{ color: GOLD, flexShrink: 0 }} />
                  <div>www.grupofenix.com.sv</div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ borderTop: "1px solid #141414", paddingTop: "1.5rem" }}
            className="flex flex-col md:flex-row items-center justify-between gap-3"
          >
            <div style={{ color: "#888", fontSize: "0.78rem" }}>
              © 2024 Grupo Fénix. Todos los derechos reservados.
            </div>
            <div className="flex flex-wrap gap-4 justify-center" style={{ color: "#888", fontSize: "0.78rem" }}>
              <span>Autorización PNC #406</span>
              <span>·</span>
              <span>NIT: 0614-140319-102-1</span>
              <span>·</span>
              <span>BASC · UNAPS · Cámara de Comercio</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="Contáctenos por WhatsApp"
        className="whatsapp-btn"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          width: "62px",
          height: "62px",
          background: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 998,
          boxShadow: "0 4px 24px rgba(37,211,102,0.45)",
          textDecoration: "none",
          transition: "all 0.3s ease",
        }}
      >
        <MessageCircle style={{ color: "white", width: "30px", height: "30px" }} />
      </a>

      <CookieConsent />
    </div>
  );
}