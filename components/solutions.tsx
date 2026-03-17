"use client"

import { Building2, Lightbulb, User, Cpu, Film, ChevronRight } from "lucide-react"
import { useState } from "react"

const solutions = [
  {
    icon: Building2,
    title: "Empresas",
    subtitle: "Corporativo y B2B",
    desc: "Transformamos operaciones empresariales mediante plataformas digitales robustas, automatización de procesos y ecosistemas tecnológicos que optimizan la productividad y aceleran el crecimiento.",
    items: ["Sistemas de gestión internos", "Portales corporativos", "Automatización de workflows", "Integraciones ERP/CRM"],
    color: "oklch(0.82 0.18 196)",
  },
  {
    icon: Lightbulb,
    title: "Emprendimientos",
    subtitle: "Startups y Scale-ups",
    desc: "Acompañamos a emprendedores desde la idea hasta el lanzamiento digital, construyendo MVPs, plataformas escalables y presencias digitales que atraen inversión y usuarios.",
    items: ["MVP development", "Landing pages de conversión", "Apps web y móvil", "Estrategia digital inicial"],
    color: "oklch(0.58 0.27 284)",
  },
  {
    icon: User,
    title: "Marcas personales",
    subtitle: "Creadores y profesionales",
    desc: "Potenciamos la identidad digital de profesionales, consultores y creadores de contenido con portafolios premium, sitios personales y presencias que generan autoridad en su industria.",
    items: ["Portafolios digitales", "Sitios personales premium", "Branding digital", "Plataformas de contenido"],
    color: "oklch(0.74 0.22 318)",
  },
  {
    icon: Cpu,
    title: "Proyectos tecnológicos",
    subtitle: "Tech-first initiatives",
    desc: "Desarrollamos la infraestructura técnica de proyectos innovadores que requieren arquitecturas complejas, integraciones avanzadas y soluciones de alta ingeniería.",
    items: ["Arquitectura de software", "APIs y microservicios", "Soluciones cloud", "Consultoría técnica"],
    color: "oklch(0.82 0.18 196)",
  },
  {
    icon: Film,
    title: "Soluciones multimedia",
    subtitle: "Experiencias interactivas",
    desc: "Creamos experiencias digitales inmersivas que combinan diseño interactivo, video, animación y tecnología para proyectos que buscan impactar visualmente y conectar emocionalmente.",
    items: ["Experiencias web interactivas", "Motion design digital", "Presentaciones inmersivas", "Contenido audiovisual"],
    color: "oklch(0.58 0.27 284)",
  },
]

export function Solutions() {
  const [active, setActive] = useState(0)
  const sol = solutions[active]

  return (
    <section id="soluciones" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 0% 60%, oklch(0.58 0.27 284 / 0.07), transparent 60%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium uppercase tracking-widest mb-4"
            style={{ borderColor: "oklch(0.58 0.27 284 / 0.3)", background: "oklch(0.58 0.27 284 / 0.08)", color: "oklch(0.58 0.27 284 / 0.9)" }}
          >
            Soluciones
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight mb-5">
            Creamos valor en{" "}
            <span className="gradient-text-purple">cada contexto</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Desde grandes corporaciones hasta proyectos personales, adaptamos nuestro expertise para generar impacto real en cada industria y escala.
          </p>
        </div>

        {/* Tab selector + Content */}
        <div className="grid lg:grid-cols-[auto_1fr] gap-6">
          {/* Tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {solutions.map((s, i) => {
              const Icon = s.icon
              const isActive = active === i
              return (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 whitespace-nowrap min-w-[160px] lg:min-w-[200px]"
                  style={{
                    background: isActive ? `${s.color}15` : "oklch(0.11 0.02 240 / 0.5)",
                    border: `1px solid ${isActive ? s.color + "40" : "oklch(0.22 0.04 240)"}`,
                    boxShadow: isActive ? `0 0 16px ${s.color}20` : "none",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: s.color }} />
                  </div>
                  <span className="text-sm font-semibold" style={{ color: isActive ? "oklch(0.97 0.01 220)" : "oklch(0.58 0.03 240)" }}>
                    {s.title}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Content panel */}
          <div
            key={active}
            className="glass-card rounded-2xl p-8 transition-all duration-300"
            style={{ borderColor: `${sol.color}20` }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: `${sol.color}15`, border: `1px solid ${sol.color}30` }}
              >
                {(() => { const Icon = sol.icon; return <Icon className="w-7 h-7" style={{ color: sol.color }} /> })()}
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: sol.color }}>
                  {sol.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-foreground">{sol.title}</h3>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">{sol.desc}</p>

            <div className="grid sm:grid-cols-2 gap-2">
              {sol.items.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 shrink-0" style={{ color: sol.color }} />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
