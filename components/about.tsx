"use client"

import { Lightbulb, Layers, Palette, Telescope } from "lucide-react"

const highlights = [
  {
    icon: Lightbulb,
    title: "Innovación estratégica",
    desc: "Transformamos retos complejos en soluciones digitales que generan impacto medible.",
    color: "oklch(0.82 0.18 196)",
  },
  {
    icon: Layers,
    title: "Soluciones digitales",
    desc: "Desarrollamos plataformas, aplicaciones y sistemas diseñados para escalar.",
    color: "oklch(0.58 0.27 284)",
  },
  {
    icon: Palette,
    title: "Diseño y tecnología",
    desc: "Combinamos estética premium con ingeniería robusta para crear experiencias únicas.",
    color: "oklch(0.74 0.22 318)",
  },
  {
    icon: Telescope,
    title: "Enfoque orientado al futuro",
    desc: "Adoptamos las tecnologías emergentes para mantenerte siempre a la vanguardia.",
    color: "oklch(0.82 0.18 196)",
  },
]

function GeometricVisual() {
  return (
    <div className="relative flex items-center justify-center h-96 w-full">
      {/* Background glow */}
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl"
        style={{ background: "oklch(0.58 0.27 284 / 0.15)" }}
      />
      {/* Outer hexagon rings (simulated with rotated squares) */}
      <div
        className="absolute w-72 h-72 border rotate-45 animate-spin-very-slow"
        style={{ borderColor: "oklch(0.82 0.18 196 / 0.15)", borderRadius: "24px" }}
      />
      <div
        className="absolute w-56 h-56 border rotate-12 animate-spin-reverse"
        style={{ borderColor: "oklch(0.58 0.27 284 / 0.2)", borderRadius: "18px" }}
      />
      <div
        className="absolute w-40 h-40 border rotate-45 animate-spin-slow"
        style={{ borderColor: "oklch(0.74 0.22 318 / 0.25)", borderRadius: "12px" }}
      />

      {/* Center panel */}
      <div
        className="relative z-10 glass-card rounded-2xl p-6 text-center animate-float"
        style={{ minWidth: "200px", borderColor: "oklch(0.82 0.18 196 / 0.25)" }}
      >
        <div
          className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, oklch(0.82 0.18 196), oklch(0.58 0.27 284))" }}
        >
          <Lightbulb className="w-6 h-6 text-black" />
        </div>
        <div className="text-foreground font-bold text-sm">Zhotech</div>
        <div className="gradient-text-cyan text-xs font-medium">Innovation Core</div>
      </div>

      {/* Corner nodes */}
      {[
        { top: "8%", left: "12%", color: "oklch(0.82 0.18 196)", label: "Dev" },
        { top: "8%", right: "12%", color: "oklch(0.58 0.27 284)", label: "Design" },
        { bottom: "8%", left: "12%", color: "oklch(0.74 0.22 318)", label: "Data" },
        { bottom: "8%", right: "12%", color: "oklch(0.82 0.18 196)", label: "AI" },
      ].map((node, i) => (
        <div
          key={i}
          className="absolute glass-card rounded-xl px-3 py-2 animate-float-slow"
          style={{ ...Object.fromEntries(Object.entries(node).filter(([k]) => !["color", "label"].includes(k))), animationDelay: `${i * 400}ms` }}
        >
          <div className="w-2 h-2 rounded-full mb-1 mx-auto" style={{ background: node.color, boxShadow: `0 0 8px ${node.color}` }} />
          <span className="text-xs font-medium text-muted-foreground">{node.label}</span>
        </div>
      ))}
    </div>
  )
}

export function About() {
  return (
    <section id="nosotros" className="relative py-24 overflow-hidden">
      {/* Section glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 0% 50%, oklch(0.58 0.27 284 / 0.08), transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium uppercase tracking-widest mb-4"
            style={{ borderColor: "oklch(0.58 0.27 284 / 0.3)", background: "oklch(0.58 0.27 284 / 0.08)", color: "oklch(0.58 0.27 284 / 0.9)" }}
          >
            Nosotros
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight mb-5">
            Transformamos ideas en{" "}
            <span className="gradient-text-purple">experiencias digitales</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Somos una empresa orientada a la innovación tecnológica, el desarrollo digital inteligente y la resolución creativa de problemas. Nuestro enfoque integra diseño, tecnología y estrategia en un único ecosistema digital.
          </p>
        </div>

        {/* Grid: cards left, visual right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="glass-card rounded-2xl p-5 group hover:-translate-y-1 transition-all duration-300 cursor-default"
                  style={{
                    animationDelay: `${i * 100}ms`,
                    borderColor: `${item.color}20`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1.5">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>

                  {/* Bottom accent line */}
                  <div
                    className="mt-3 h-px w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: `linear-gradient(to right, ${item.color}, transparent)` }}
                  />
                </div>
              )
            })}
          </div>

          {/* Visual */}
          <GeometricVisual />
        </div>
      </div>
    </section>
  )
}
