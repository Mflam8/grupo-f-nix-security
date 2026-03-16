import React, { useState } from "react";
import { Shield, ChevronDown, Shirt } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const GOLD = "#F5C518";

export default function EquipmentAndUniform() {
  const [openSection, setOpenSection] = useState("armamento"); // "armamento" | "uniforme" | null

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const gearList = [
    "Uniforme (Gris Oscuro para Agente, Blanca para Supervisor)",
    "Pantalón Negro",
    "Cinturón y funda con porta cartuchos",
    "Arma corta (Revólver calibre .38 mm)",
    "Arma larga (Escopeta calibre 12 mm)",
    "Munición de reserva",
    "Tonfa y Gas Pimienta",
    "Lámpara de mano",
    "Radio y Teléfono Celular"
  ];

  return (
    <section style={{ padding: "7rem 0", background: "#0b0b0b", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: "800px", height: "800px",
        background: `radial-gradient(circle, rgba(245,197,24,0.04) 0%, transparent 65%)`,
        pointerEvents: "none",
      }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 reveal">
          <div style={{
            display: "inline-block", background: "rgba(245,197,24,0.08)",
            border: "1px solid rgba(245,197,24,0.2)", borderRadius: "100px",
            padding: "6px 18px", marginBottom: "1.5rem",
            color: GOLD, fontSize: "0.72rem", fontWeight: "700", letterSpacing: "2.5px",
          }}>PERFIL Y DOTACIÓN</div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", color: "white", marginBottom: "1.5rem", lineHeight: "1.15" }}>
            Equipamiento e <span style={{ color: GOLD }}>Identidad</span>
          </h2>
          <p style={{ color: "#aaa", lineHeight: "1.85", fontSize: "1rem", maxWidth: "600px", margin: "0 auto" }}>
            Selecciona una categoría para conocer los detalles de la dotación y la imagen de nuestro personal de seguridad.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-4xl mx-auto reveal">
          {/* ARMAMENTO Y EQUIPO ACCORDION */}
          <div className="border border-[#1c1c1c] rounded-2xl bg-[#0b0b0b] overflow-hidden transition-colors" style={{ borderColor: openSection === "armamento" ? "rgba(245,197,24,0.4)" : "#1c1c1c" }}>
            <button 
              onClick={() => toggleSection("armamento")}
              className="w-full flex items-center justify-between p-6 bg-transparent hover:bg-[rgba(255,255,255,0.02)] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(245,197,24,0.1)] border border-[rgba(245,197,24,0.2)] flex items-center justify-center">
                  <Shield style={{ color: GOLD, width: "24px", height: "24px" }} />
                </div>
                <h3 className="text-xl font-bold text-white text-left">Armamento y Equipo</h3>
              </div>
              <ChevronDown className={cn("text-gray-400 transition-transform duration-300", openSection === "armamento" && "rotate-180")} />
            </button>
            <AnimatePresence>
              {openSection === "armamento" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div>
                      <p style={{ color: "#aaa", lineHeight: "1.85", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                        El personal de seguridad está dotado del armamento y equipo necesarios para el desempeño de sus labores, garantizando una respuesta efectiva ante cualquier situación:
                      </p>
                      <div className="flex flex-col gap-2">
                        {gearList.map((item, i) => (
                          <div key={i} style={{
                            display: "flex", alignItems: "flex-start", gap: "10px",
                            padding: "10px 14px", background: "rgba(245,197,24,0.03)", borderRadius: "8px",
                            border: "1px solid rgba(245,197,24,0.06)",
                          }}>
                            <Shield style={{ color: GOLD, width: "16px", height: "16px", marginTop: "2px", flexShrink: 0 }} />
                            <span style={{ color: "#bbb", fontSize: "0.85rem", lineHeight: "1.4" }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{
                      borderRadius: "16px", overflow: "hidden",
                      border: "1px solid rgba(245,197,24,0.15)",
                      background: "linear-gradient(135deg, #111, #050505)",
                      padding: "2rem",
                      display: "flex", justifyContent: "center", alignItems: "center",
                      minHeight: "300px",
                      position: "relative"
                    }}>
                      <img
                        src="https://media.base44.com/images/public/699dc69700a4d30f0cc60f12/27ccd740a_473F9191-80AA-4A4A-A875-CD4C1958BC7E.png"
                        alt="Armamento y Equipo"
                        style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.5))" }}
                      />
                      <div style={{
                        position: "absolute", top: "10px", right: "10px",
                        background: "linear-gradient(135deg, #111, #0a0700)",
                        border: "1px solid rgba(245,197,24,0.3)", borderRadius: "12px",
                        padding: "10px 14px", boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
                        textAlign: "center",
                      }}>
                        <div style={{ color: GOLD, fontWeight: "900", fontSize: "1rem" }}>100%</div>
                        <div style={{ color: "#666", fontSize: "0.5rem", letterSpacing: "1px" }}>EQUIPADOS</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* UNIFORME ACCORDION */}
          <div className="border border-[#1c1c1c] rounded-2xl bg-[#0b0b0b] overflow-hidden transition-colors" style={{ borderColor: openSection === "uniforme" ? "rgba(245,197,24,0.4)" : "#1c1c1c" }}>
            <button 
              onClick={() => toggleSection("uniforme")}
              className="w-full flex items-center justify-between p-6 bg-transparent hover:bg-[rgba(255,255,255,0.02)] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(245,197,24,0.1)] border border-[rgba(245,197,24,0.2)] flex items-center justify-center">
                  <Shirt style={{ color: GOLD, width: "24px", height: "24px" }} />
                </div>
                <h3 className="text-xl font-bold text-white text-left">Nuestro Uniforme</h3>
              </div>
              <ChevronDown className={cn("text-gray-400 transition-transform duration-300", openSection === "uniforme" && "rotate-180")} />
            </button>
            <AnimatePresence>
              {openSection === "uniforme" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0">
                    <p style={{ color: "#aaa", lineHeight: "1.85", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                      El uniforme consiste en camisa manga corta o manga larga según requerimiento o necesidad del servicio.
                      Color Gris Oscuro para el Agente de Seguridad y Blanca para el Supervisor de Seguridad.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div style={{
                        borderRadius: "16px", overflow: "hidden", border: "1px solid #1c1c1c",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                      }}>
                        <img
                          src="https://media.base44.com/images/public/699dc69700a4d30f0cc60f12/50f61b04f_17.png"
                          alt="Uniforme Manga Corta"
                          style={{ width: "100%", height: "auto", objectFit: "cover" }}
                        />
                      </div>
                      <div style={{
                        borderRadius: "16px", overflow: "hidden", border: "1px solid #1c1c1c",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                      }}>
                        <img
                          src="https://media.base44.com/images/public/699dc69700a4d30f0cc60f12/46533bdb5_161.png"
                          alt="Uniforme Manga Larga"
                          style={{ width: "100%", height: "auto", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}