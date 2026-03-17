"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Plataforma web interactiva",
    desc: "Sistema SaaS de gestión de proyectos con dashboards en tiempo real, colaboración en equipo y automatización de flujos de trabajo para empresas de tecnología.",
    tags: ["Next.js", "React", "PostgreSQL", "WebSockets"],
    category: "Desarrollo Web",
    year: "2024",
    color: "oklch(0.82 0.18 196)",
    visual: {
      bg: "linear-gradient(135deg, oklch(0.82 0.18 196 / 0.15), oklch(0.58 0.27 284 / 0.1))",
      pattern: "grid",
    },
  },
  {
    title: "Sistema digital automatizado",
    desc: "Plataforma de automatización empresarial que integra inteligencia artificial para procesar documentos, generar reportes y optimizar operaciones de manera autónoma.",
    tags: ["Python", "AI/ML", "APIs", "Cloud"],
    category: "Automatización",
    year: "2024",
    color: "oklch(0.58 0.27 284)",
    visual: {
      bg: "linear-gradient(135deg, oklch(0.58 0.27 284 / 0.15), oklch(0.74 0.22 318 / 0.1))",
      pattern: "circuit",
    },
  },
  {
    title: "Experiencia multimedia innovadora",
    desc: "Sitio web inmersivo con animaciones avanzadas, storytelling interactivo y visualizaciones de datos para una marca de tecnología de innovación global.",
    tags: ["WebGL", "Motion Design", "3D", "UX"],
    category: "Multimedia",
    year: "2025",
    color: "oklch(0.74 0.22 318)",
    visual: {
      bg: "linear-gradient(135deg, oklch(0.74 0.22 318 / 0.15), oklch(0.82 0.18 196 / 0.1))",
      pattern: "wave",
    },
  },
]

function ProjectVisual({ project }: { project: typeof projects[0] }) {
  return (
    <div
      className="relative h-48 rounded-xl overflow-hidden flex items-center justify-center"
      style={{ background: project.visual.bg }}
    >
      {/* Grid lines pattern */}
      <div className="absolute inset-0 cyber-grid opacity-40" />

      {/* Central glow */}
      <div
        className="absolute w-32 h-32 rounded-full blur-3xl"
        style={{ background: `${project.color}25` }}
      />

      {/* Floating UI elements */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        {/* Mock UI bars */}
        <div className="flex gap-2">
          {[60, 100, 45, 80, 65].map((w, i) => (
            <div
              key={i}
              className="h-8 rounded-lg"
              style={{ width: `${w * 0.4}px`, background: `${project.color}${i % 2 === 0 ? "30" : "15"}`, border: `1px solid ${project.color}20` }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          {[80, 50, 90, 40, 70].map((w, i) => (
            <div
              key={i}
              className="h-4 rounded-md"
              style={{ width: `${w * 0.36}px`, background: `${project.color}18`, border: `1px solid ${project.color}15` }}
            />
          ))}
        </div>
      </div>

      {/* Category badge */}
      <div
        className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium"
        style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}30` }}
      >
        {project.category}
      </div>

      <div className="absolute top-3 right-3 text-xs font-mono text-muted-foreground">{project.year}</div>
    </div>
  )
}

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="proyectos" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 100% 30%, oklch(0.74 0.22 318 / 0.07), transparent 60%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium uppercase tracking-widest mb-4"
            style={{ borderColor: "oklch(0.74 0.22 318 / 0.3)", background: "oklch(0.74 0.22 318 / 0.08)", color: "oklch(0.74 0.22 318 / 0.9)" }}
          >
            Proyectos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight mb-5">
            Nuestro trabajo habla{" "}
            <span className="gradient-text-cyan">por sí mismo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Casos de éxito que demuestran nuestra capacidad para convertir visiones ambiciosas en soluciones digitales de alto impacto.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group relative glass-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-400 hover:-translate-y-2"
              style={{ borderColor: `${project.color}18` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top, ${project.color}08, transparent 70%)`, boxShadow: `0 0 30px ${project.color}15` }}
              />

              {/* Visual thumbnail */}
              <div className="p-4 pb-0">
                <ProjectVisual project={project} />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-foreground text-base">{project.title}</h3>
                  <ArrowUpRight
                    className="w-5 h-5 shrink-0 transition-all duration-300 group-hover:rotate-45"
                    style={{ color: project.color }}
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}18` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: `linear-gradient(to right, ${project.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
