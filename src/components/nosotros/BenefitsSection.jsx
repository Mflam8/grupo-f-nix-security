import React from "react";
import { CheckCircle, HeartHandshake, DollarSign, GraduationCap, Gift } from "lucide-react";

const GOLD = "#F5C518";

const benefitCategories = [
  {
    title: "Bienestar y Salud",
    icon: HeartHandshake,
    items: [
      "Asesoría y ayuda psicológica profesional.",
      "Compra de medicamentos en emergencias o fuerza mayor.",
      "Seguro de Vida ($10,220.00) y gastos funerarios ($500.00).",
      "Cobertura deducibles ISSS por enfermedad (25% extra luego de 3 días).",
      "Reemplazos inmediatos por enfermedad o aspectos personales con goce de salario.",
      "Permisos con goce de salario por enfermedad y actividades personales.",
    ]
  },
  {
    title: "Compensación y Apoyo Económico",
    icon: DollarSign,
    items: [
      "Salarios competitivos y puntuales con indemnizaciones y pago doble en festivos.",
      "Anticipos salariales y préstamos personales por emergencias.",
      "Viáticos de alimentación en comisiones al interior del país.",
      "Bonificación económica salarial por buen desempeño y cargos.",
      "Bonificación monetaria al Agente de Seguridad del Mes.",
      "Ayuda económica ($50.00) por fallecimiento de familiares directos.",
      "Transporte a residencia en emergencias o fuerza mayor.",
      "Pagos en efectivo directo en el proyecto asignado.",
    ]
  },
  {
    title: "Desarrollo y Crecimiento",
    icon: GraduationCap,
    items: [
      "Becas de estudio a personal destacado.",
      "Capacitaciones vocacionales vía INSAFORP.",
      "Adiestramiento en Polígono, Primeros Auxilios y Mitigación de Incendios.",
      "Talleres de Trabajo en Equipo, Autoestima, Liderazgo y Superación.",
      "Ascensos y traslados por buen desempeño laboral.",
      "Motivación laboral y desarrollo del Manual de Puesto.",
      "Permisos con goce de salario para estudio y superación académica.",
    ]
  },
  {
    title: "Beneficios Adicionales",
    icon: Gift,
    items: [
      "Asignación a proyectos cercanos al lugar de residencia.",
      "Dotación semestral de uniformes gratuita (4 anuales).",
      "Asesoría legal gratuita al empleado y sus familiares.",
      "Vacaciones anuales y aguinaldo.",
      "Convivios, paseos recreativos, cenas y almuerzos navideños.",
      "Rifas, canastas navideñas y celebraciones de cumpleañeros.",
      "Tarjeta de felicitaciones e incentivos a cumpleañeros destacados.",
    ]
  }
];

export default function BenefitsSection() {
  return (
    <section style={{ padding: "7rem 0", background: "#050505", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: `linear-gradient(90deg, transparent, rgba(245,197,24,0.3), transparent)`,
      }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <div style={{
            display: "inline-block", background: "rgba(245,197,24,0.08)",
            border: "1px solid rgba(245,197,24,0.2)", borderRadius: "100px",
            padding: "6px 18px", marginBottom: "1.5rem",
            color: GOLD, fontSize: "0.72rem", fontWeight: "700", letterSpacing: "2.5px",
          }}>PLAN DE BIENESTAR</div>
          <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: "900", color: "white" }}>
            Beneficios y <span style={{ color: GOLD }}>Prestaciones</span>
          </h2>
          <p style={{ color: "#888", maxWidth: "600px", margin: "1rem auto 0", lineHeight: "1.8", fontSize: "0.95rem" }}>
            En Grupo Fénix, nuestro recurso humano es lo más valioso. Por ello, ofrecemos un robusto plan de beneficios diseñado para su bienestar integral y el de su familia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <div key={i} className="reveal" style={{
                background: "#0b0b0b", border: "1px solid #1c1c1c",
                borderRadius: "20px", padding: "2.5rem",
                boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
                transition: "all 0.4s ease",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)"; e.currentTarget.style.transform = "translateY(-5px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1c1c1c"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div style={{
                    width: "48px", height: "48px", background: "rgba(245,197,24,0.1)",
                    borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid rgba(245,197,24,0.2)",
                    flexShrink: 0
                  }}>
                    <Icon style={{ color: GOLD, width: "24px", height: "24px" }} />
                  </div>
                  <h3 style={{ color: "white", fontSize: "1.2rem", fontWeight: "800" }}>{category.title}</h3>
                </div>
                
                <div className="flex flex-col gap-3">
                  {category.items.map((item, j) => (
                    <div key={j} style={{
                      display: "flex", alignItems: "flex-start", gap: "10px",
                    }}>
                      <CheckCircle style={{ color: GOLD, width: "16px", height: "16px", marginTop: "2px", flexShrink: 0 }} />
                      <span style={{ color: "#999", fontSize: "0.85rem", lineHeight: "1.5" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}