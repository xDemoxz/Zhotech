"use client"

import { Eye, Cpu, UserCheck, Star, RefreshCw, Layout } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "Visión innovadora",
    desc: "Anticipamos las tendencias digitales para posicionarte siempre un paso adelante de la competencia.",
    color: "oklch(0.82 0.18 196)",
    size: "large",
  },
  {
    icon: Cpu,
    title: "Enfoque creativo y tecnológico",
    desc: "Fusionamos pensamiento creativo y capacidad técnica para resolver problemas de forma diferencial.",
    color: "oklch(0.58 0.27 284)",
    size: "normal",
  },
  {
    icon: UserCheck,
    title: "Soluciones personalizadas",
    desc: "Nunca aplicamos plantillas genéricas. Cada proyecto recibe una estrategia construida desde cero.",
    color: "oklch(0.74 0.22 318)",
    size: "normal",
  },
  {
    icon: Star,
    title: "Experiencia digital de alto nivel",
    desc: "Entregamos productos con estándares de calidad que compiten con los mejores del mundo digital.",
    color: "oklch(0.82 0.18 196)",
    size: "normal",
  },
  {
    icon: RefreshCw,
    title: "Adaptabilidad total",
    desc: "Nos adaptamos a tu industria, etapa de crecimiento y presupuesto sin comprometer la excelencia.",
    color: "oklch(0.58 0.27 284)",
    size: "normal",
  },
  {
    icon: Layout,
    title: "Diseño con enfoque estratégico",
    desc: "Cada elemento visual responde a un propósito. Diseñamos para convertir, no solo para impresionar.",
    color: "oklch(0.74 0.22 318)",
    size: "large",
  },
]

export function WhyUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, oklch(0.82 0.18 196 / 0.04), transparent 70%)" }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 cyber-grid opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium uppercase tracking-widest mb-4"
            style={{ borderColor: "oklch(0.82 0.18 196 / 0.3)", background: "oklch(0.82 0.18 196 / 0.08)", color: "oklch(0.82 0.18 196)" }}
          >
            Por qué elegirnos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight mb-5">
            ¿Por qué{" "}
            <span className="gradient-text-cyan">Zhotech Solutions</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            No somos un proveedor tecnológico más. Somos tu aliado estratégico en la era digital, comprometidos con resultados reales y sostenibles.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.title}
                className="group relative glass-card rounded-2xl p-6 hover:-translate-y-1.5 transition-all duration-400 cursor-default overflow-hidden"
                style={{ borderColor: `${feat.color}18` }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at top right, ${feat.color}08, transparent 60%)` }}
                />

                {/* Large number bg */}
                <div
                  className="absolute top-3 right-4 text-7xl font-black leading-none opacity-[0.04] select-none pointer-events-none"
                  style={{ color: feat.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div
                  className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300"
                  style={{ background: `${feat.color}12`, border: `1px solid ${feat.color}25` }}
                >
                  <Icon className="w-5 h-5" style={{ color: feat.color }} />
                </div>

                <h3 className="font-bold text-foreground text-base mb-2 relative">{feat.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative">{feat.desc}</p>

                {/* Accent corner */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 opacity-20 rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at top right, ${feat.color}, transparent 60%)` }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
