import React, { useState } from "react";
import { Shield, Shirt } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GOLD = "#F5C518";

export default function EquipmentAndUniform() {
  const [activeTab, setActiveTab] = useState("armamento");

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
        background: "radial-gradient(circle, rgba(245,197,24,0.04) 0%, transparent 65%)",
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

        <div className="reveal max-w-5xl mx-auto">
          {/* TABS */}
          <div className="flex justify-center mb-10">
            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-[#111] border border-[#1c1c1c] rounded-[2rem]">
              <button
                onClick={() => setActiveTab("armamento")}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-300"
                style={{
                  background: activeTab === "armamento" ? "rgba(245,197,24,0.1)" : "transparent",
                  color: activeTab === "armamento" ? GOLD : "#888",
                  fontWeight: activeTab === "armamento" ? "700" : "500",
                }}
              >
                <Shield size={18} /> <span className="text-sm sm:text-base">Armamento y Equipo</span>
              </button>
              <button
                onClick={() => setActiveTab("uniforme")}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-300"
                style={{
                  background: activeTab === "uniforme" ? "rgba(245,197,24,0.1)" : "transparent",
                  color: activeTab === "uniforme" ? GOLD : "#888",
                  fontWeight: activeTab === "uniforme" ? "700" : "500",
                }}
              >
                <Shirt size={18} /> <span className="text-sm sm:text-base">Nuestro Uniforme</span>
              </button>
            </div>
          </div>

          {/* CONTENT */}
          <div style={{
            background: "#0b0b0b", border: "1px solid #1c1c1c",
            borderRadius: "20px", padding: "clamp(1.5rem, 4vw, 3.5rem)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
            minHeight: "500px",
            display: "flex", flexDirection: "column", justifyContent: "center",
            overflow: "hidden"
          }}>
            <AnimatePresence mode="wait">
              {activeTab === "armamento" ? (
                <motion.div
                  key="armamento"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center"
                >
                  <div className="order-2 lg:order-1">
                    <h3 style={{ color: "white", fontSize: "1.4rem", fontWeight: "800", marginBottom: "1rem" }}>
                      Armamento y <span style={{ color: GOLD }}>Equipo</span>
                    </h3>
                    <p style={{ color: "#888", lineHeight: "1.85", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                      El personal de seguridad está dotado del armamento y equipo necesarios para el desempeño de sus labores, garantizando una respuesta efectiva ante cualquier situación:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                  <div className="order-1 lg:order-2">
                    <div style={{
                      borderRadius: "16px", overflow: "hidden",
                      border: "1px solid rgba(245,197,24,0.15)",
                      background: "linear-gradient(135deg, #111, #050505)",
                      padding: "2rem",
                      display: "flex", justifyContent: "center", alignItems: "center",
                      minHeight: "350px",
                      position: "relative"
                    }}>
                      <img
                        src="https://media.base44.com/images/public/699dc69700a4d30f0cc60f12/27ccd740a_473F9191-80AA-4A4A-A875-CD4C1958BC7E.png"
                        alt="Armamento y Equipo"
                        style={{ width: "100%", maxHeight: "350px", objectFit: "contain", filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.5))" }}
                      />
                      <div style={{
                        position: "absolute", top: "15px", right: "15px",
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
              ) : (
                <motion.div
                  key="uniforme"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center"
                >
                  <div className="order-2 lg:order-1">
                    <h3 style={{ color: "white", fontSize: "1.4rem", fontWeight: "800", marginBottom: "1rem" }}>
                      Nuestro <span style={{ color: GOLD }}>Uniforme</span>
                    </h3>
                    <p style={{ color: "#888", lineHeight: "1.85", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                      El uniforme consiste en camisa manga corta o manga larga según requerimiento o necesidad del servicio.
                    </p>
                    <p style={{ color: "#888", lineHeight: "1.85", marginBottom: "2rem", fontSize: "0.95rem" }}>
                      Se utiliza el <strong style={{ color: "white" }}>color Gris Oscuro</strong> para el Agente de Seguridad y <strong style={{ color: "white" }}>Blanca</strong> para el Supervisor de Seguridad.
                    </p>
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: "12px",
                      padding: "14px 20px", background: "rgba(245,197,24,0.05)", borderRadius: "12px",
                      border: "1px solid rgba(245,197,24,0.15)",
                    }}>
                      <Shirt style={{ color: GOLD, width: "24px", height: "24px" }} />
                      <div className="flex flex-col">
                        <span style={{ color: "white", fontSize: "0.95rem", fontWeight: "700" }}>Identidad Corporativa</span>
                        <span style={{ color: "#888", fontSize: "0.75rem" }}>Presencia profesional garantizada</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div style={{
                      borderRadius: "16px", overflow: "hidden",
                      border: "1px solid rgba(245,197,24,0.15)",
                      background: "linear-gradient(135deg, #111, #050505)",
                      padding: "2rem",
                      display: "flex", justifyContent: "center", alignItems: "center",
                      minHeight: "350px",
                      position: "relative"
                    }}>
                      <img
                        src="https://media.base44.com/images/public/699dc69700a4d30f0cc60f12/46533bdb5_161.png"
                        alt="Uniforme Oficial"
                        style={{ width: "100%", maxHeight: "350px", objectFit: "contain", filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.5))" }}
                      />
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