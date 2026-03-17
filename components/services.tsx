"use client"

import { Globe, Settings, Zap, Monitor, Link, Film } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "Desarrollo web moderno",
    desc: "Construimos aplicaciones y sitios web de alto rendimiento con arquitecturas escalables, diseño responsivo y experiencias de usuario excepcionales.",
    tags: ["Next.js", "React", "TypeScript"],
    color: "oklch(0.82 0.18 196)",
    gradient: "from-[oklch(0.82_0.18_196/0.1)] to-[oklch(0.58_0.27_284/0.05)]",
  },
  {
    icon: Settings,
    title: "Soluciones digitales a medida",
    desc: "Desarrollamos software personalizado que se adapta exactamente a las necesidades y objetivos estratégicos de tu empresa.",
    tags: ["Custom Dev", "API", "Backend"],
    color: "oklch(0.58 0.27 284)",
    gradient: "from-[oklch(0.58_0.27_284/0.1)] to-[oklch(0.74_0.22_318/0.05)]",
  },
  {
    icon: Zap,
    title: "Automatización de procesos",
    desc: "Optimizamos flujos de trabajo mediante sistemas inteligentes que automatizan tareas repetitivas y aumentan la eficiencia operativa.",
    tags: ["RPA", "AI", "Workflow"],
    color: "oklch(0.74 0.22 318)",
    gradient: "from-[oklch(0.74_0.22_318/0.1)] to-[oklch(0.82_0.18_196/0.05)]",
  },
  {
    icon: Globe,
    title: "Diseño de experiencias digitales",
    desc: "Creamos interfaces y experiencias de usuario que combinan estética premium con funcionalidad intuitiva, generando engagement real.",
    tags: ["UX/UI", "Design System", "Prototyping"],
    color: "oklch(0.82 0.18 196)",
    gradient: "from-[oklch(0.82_0.18_196/0.08)] to-transparent",
  },
  {
    icon: Link,
    title: "Integración tecnológica",
    desc: "Conectamos sistemas, plataformas y servicios externos para crear ecosistemas digitales cohesivos y sin fricciones.",
    tags: ["APIs", "Microservices", "Cloud"],
    color: "oklch(0.58 0.27 284)",
    gradient: "from-[oklch(0.58_0.27_284/0.08)] to-transparent",
  },
  {
    icon: Film,
    title: "Innovación multimedia",
    desc: "Desarrollamos soluciones creativas que integran contenido multimedia, interactividad y narrativa digital para diferenciarte en el mercado.",
    tags: ["Motion", "Interactive", "Creative"],
    color: "oklch(0.74 0.22 318)",
    gradient: "from-[oklch(0.74_0.22_318/0.08)] to-transparent",
  },
]

export function Services() {
  return (
    <section id="servicios" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 100% 50%, oklch(0.82 0.18 196 / 0.06), transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium uppercase tracking-widest mb-4"
            style={{ borderColor: "oklch(0.82 0.18 196 / 0.3)", background: "oklch(0.82 0.18 196 / 0.08)", color: "oklch(0.82 0.18 196)" }}
          >
            Servicios
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight mb-5">
            Soluciones diseñadas para{" "}
            <span className="gradient-text-cyan">el presente y el futuro</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Cada servicio es una herramienta estratégica para impulsar tu transformación digital. Diseñados con precisión, construidos con tecnología de vanguardia.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group relative glass-card rounded-2xl p-6 cursor-default transition-all duration-400 hover:-translate-y-2 overflow-hidden"
                style={{ borderColor: `${service.color}18` }}
              >
                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at top left, ${service.color}10, transparent 70%)` }}
                />

                {/* Icon */}
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    background: `${service.color}12`,
                    border: `1px solid ${service.color}25`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: service.color }} />
                </div>

                {/* Content */}
                <h3 className="font-bold text-foreground text-base mb-2 relative">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 relative">{service.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 relative">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: `${service.color}12`, color: service.color, border: `1px solid ${service.color}20` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom hover line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: `linear-gradient(to right, ${service.color}, transparent)` }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
