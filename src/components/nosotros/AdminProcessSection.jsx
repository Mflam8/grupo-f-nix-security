import React from "react";
import { FileText, CheckSquare, Package, UserCheck, Eye, ArrowDown } from "lucide-react";

const GOLD = "#F5C518";

const adminSteps = [
  {
    icon: FileText,
    title: "Negociación y Contratación",
    desc: "Apertura de nuevos proyectos, definiendo los requerimientos iniciales.",
    substeps: ["Plantilla de Personal", "Banco de Datos Aspirantes"]
  },
  {
    icon: CheckSquare,
    title: "Selección y Asignación",
    desc: "Proceso de reclutamiento enfocado en el cumplimiento de requisitos.",
    substeps: ["Cursos de Capacitación", "Inducción del Proyecto"]
  },
  {
    icon: Package,
    title: "Equipamiento",
    desc: "Dotación del armamento, uniforme y equipo tecnológico requerido.",
    substeps: []
  },
  {
    icon: UserCheck,
    title: "Asignación del Proyecto",
    desc: "Ubicación estratégica del agente de seguridad en el proyecto designado.",
    substeps: []
  },
  {
    icon: Eye,
    title: "Supervisión y Control",
    desc: "Auditorías y monitoreo constante para garantizar la excelencia del servicio.",
    substeps: []
  }
];

export default function AdminProcessSection() {
  return (
    <section style={{ padding: "7rem 0", background: "#000", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: "700px", height: "700px",
        background: `radial-gradient(circle, rgba(245,197,24,0.03) 0%, transparent 65%)`,
        pointerEvents: "none",
      }} />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <div style={{
            display: "inline-block", background: "rgba(245,197,24,0.08)",
            border: "1px solid rgba(245,197,24,0.2)", borderRadius: "100px",
            padding: "6px 18px", marginBottom: "1.5rem",
            color: GOLD, fontSize: "0.72rem", fontWeight: "700", letterSpacing: "2.5px",
          }}>NUESTRO PROCESO</div>
          <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: "900", color: "white" }}>
            Administración de <span style={{ color: GOLD }}>Personal</span>
          </h2>
          <p style={{ color: "#888", maxWidth: "600px", margin: "1rem auto 0", lineHeight: "1.8", fontSize: "0.95rem" }}>
            Mantenemos un proceso estructurado para la captación, preparación y despliegue de nuestro personal, asegurando el más alto nivel en cada proyecto.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#1c1c1c] transform -translate-x-1/2 z-0" />
          
          <div className="flex flex-col gap-6 md:gap-0 relative z-10">
            {adminSteps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`flex flex-col md:flex-row items-center w-full reveal ${isEven ? 'md:justify-start' : 'md:justify-end'}`} style={{ marginBottom: i !== adminSteps.length - 1 ? "2rem" : "0" }}>
                  
                  {/* Content card */}
                  <div className={`w-full md:w-[45%] relative ${isEven ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'} order-2 md:order-none`}>
                    
                    {/* Connecting dot for desktop */}
                    <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-[0_0_10px_rgba(245,197,24,0.5)] z-20 ${isEven ? 'right-[-8px]' : 'left-[-8px]'}`} style={{ backgroundColor: GOLD }} />

                    <div style={{
                      background: "#0b0b0b", border: "1px solid #1c1c1c",
                      borderRadius: "16px", padding: "1.5rem",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                      transition: "all 0.3s ease",
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "#1c1c1c"; e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        {isEven ? (
                          <>
                            <h3 style={{ color: "white", fontWeight: "800", fontSize: "1.05rem" }}>{step.title}</h3>
                            <div className="w-10 h-10 rounded-lg bg-[rgba(245,197,24,0.1)] flex items-center justify-center border border-[rgba(245,197,24,0.2)] shrink-0">
                              <Icon style={{ color: GOLD, width: "18px", height: "18px" }} />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="w-10 h-10 rounded-lg bg-[rgba(245,197,24,0.1)] flex items-center justify-center border border-[rgba(245,197,24,0.2)] shrink-0">
                              <Icon style={{ color: GOLD, width: "18px", height: "18px" }} />
                            </div>
                            <h3 style={{ color: "white", fontWeight: "800", fontSize: "1.05rem" }}>{step.title}</h3>
                          </>
                        )}
                      </div>
                      
                      <p style={{ color: "#777", fontSize: "0.85rem", lineHeight: "1.6", marginBottom: step.substeps.length > 0 ? "1rem" : "0" }}>
                        {step.desc}
                      </p>

                      {step.substeps.length > 0 && (
                        <div className={`flex flex-col gap-2 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                          {step.substeps.map((sub, j) => (
                            <div key={j} style={{
                              display: "inline-block", background: "rgba(255,255,255,0.03)",
                              border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px",
                              padding: "6px 12px", color: "#bbb", fontSize: "0.75rem", fontWeight: "600",
                            }}>
                              {sub}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile Arrow */}
                  {i !== adminSteps.length - 1 && (
                    <div className="md:hidden flex justify-center py-3 order-3 w-full">
                      <ArrowDown style={{ color: "#333", width: "20px", height: "20px" }} />
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}