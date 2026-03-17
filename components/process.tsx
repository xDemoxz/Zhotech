"use client"

import { Search, BarChart2, Code2, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Descubrimiento",
    desc: "Analizamos tu negocio, retos y objetivos en profundidad para comprender el contexto real antes de proponer cualquier solución.",
    color: "oklch(0.82 0.18 196)",
  },
  {
    number: "02",
    icon: BarChart2,
    title: "Estrategia",
    desc: "Diseñamos un plan tecnológico personalizado que alinea la visión del negocio con las soluciones digitales más adecuadas.",
    color: "oklch(0.58 0.27 284)",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollo",
    desc: "Construimos la solución con tecnologías de vanguardia, ciclos de iteración ágil y estándares de calidad rigurosos.",
    color: "oklch(0.74 0.22 318)",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Implementación",
    desc: "Lanzamos, optimizamos y escalamos la solución asegurándonos de que genera el impacto esperado desde el primer día.",
    color: "oklch(0.82 0.18 196)",
  },
]

export function Process() {
  return (
    <section id="proceso" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, oklch(0.58 0.27 284 / 0.07), transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium uppercase tracking-widest mb-4"
            style={{ borderColor: "oklch(0.74 0.22 318 / 0.3)", background: "oklch(0.74 0.22 318 / 0.08)", color: "oklch(0.74 0.22 318 / 0.9)" }}
          >
            Proceso
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight mb-5">
            Cómo trabajamos{" "}
            <span className="gradient-text-cyan">contigo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Un proceso metodológico claro, transparente y orientado a resultados. De la idea a la realidad digital en cuatro pasos estratégicos.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connector line — visible on lg */}
          <div
            className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(to right, oklch(0.82 0.18 196 / 0.3), oklch(0.58 0.27 284 / 0.3), oklch(0.74 0.22 318 / 0.3), oklch(0.82 0.18 196 / 0.3))" }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="group relative flex flex-col gap-4"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Top icon with number */}
                <div className="relative flex justify-center">
                  <div
                    className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${step.color}15`,
                      border: `2px solid ${step.color}40`,
                      boxShadow: `0 0 20px ${step.color}20`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{ background: step.color, color: "oklch(0.07 0.018 240)" }}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Card */}
                <div
                  className="glass-card rounded-2xl p-5 flex-1 group-hover:-translate-y-1 transition-all duration-300"
                  style={{ borderColor: `${step.color}18` }}
                >
                  <div className="text-xs font-mono font-bold mb-2" style={{ color: step.color }}>
                    {step.number}
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
