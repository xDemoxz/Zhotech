"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Play, Cpu, Globe, Layers } from "lucide-react"

function HeroOrb() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-120">
      {/* Grid background */}
      <div className="absolute inset-0 cyber-grid opacity-40 rounded-3xl" />

      {/* Ambient blobs */}
      <div
        className="absolute w-72 h-72 rounded-full blur-3xl animate-pulse-glow"
        style={{
          background: "oklch(0.82 0.18 196 / 0.12)",
          top: "20%",
          left: "20%"
        }}
      />
      <div
        className="absolute w-56 h-56 rounded-full blur-3xl animate-pulse-glow animate-delay-300"
        style={{
          background: "oklch(0.58 0.27 284 / 0.14)",
          bottom: "15%",
          right: "15%"
        }}
      />

      {/* Outer ring */}
      <div
        className="absolute w-80 h-80 rounded-full border animate-spin-very-slow"
        style={{ borderColor: "oklch(0.82 0.18 196 / 0.2)" }}
      />
      {/* Dashed ring */}
      <div
        className="absolute w-64 h-64 rounded-full animate-spin-reverse"
        style={{
          border: "1px dashed oklch(0.58 0.27 284 / 0.3)"
        }}
      />
      {/* Inner ring */}
      <div
        className="absolute w-48 h-48 rounded-full border animate-spin-slow"
        style={{ borderColor: "oklch(0.74 0.22 318 / 0.25)" }}
      />

      {/* Orbiting dots */}
      <div className="absolute w-80 h-80 flex items-center justify-center animate-spin-very-slow">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
          style={{
            background: "oklch(0.82 0.18 196)",
            boxShadow: "0 0 10px oklch(0.82 0.18 196)"
          }}
        />
      </div>
      <div className="absolute w-64 h-64 flex items-center justify-center animate-spin-reverse">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
          style={{
            background: "oklch(0.74 0.22 318)",
            boxShadow: "0 0 10px oklch(0.74 0.22 318)"
          }}
        />
      </div>
      <div className="absolute w-48 h-48 flex items-center justify-center animate-spin-slow">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
          style={{
            background: "oklch(0.58 0.27 284)",
            boxShadow: "0 0 8px oklch(0.58 0.27 284)"
          }}
        />
      </div>

      {/* Central orb */}
      <div className="relative z-10 w-28 h-28">
        <div
          className="absolute inset-0 rounded-full blur-xl animate-pulse-glow"
          style={{ background: "oklch(0.82 0.18 196 / 0.4)" }}
        />
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.82 0.18 196), oklch(0.58 0.27 284), oklch(0.74 0.22 318))",
            boxShadow:
              "0 0 40px oklch(0.82 0.18 196 / 0.5), 0 0 80px oklch(0.58 0.27 284 / 0.3)"
          }}
        />
        <div
          className="absolute inset-4 rounded-full"
          style={{
            background: "oklch(0.07 0.018 240 / 0.6)",
            backdropFilter: "blur(4px)"
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Cpu
            className="w-8 h-8"
            style={{ color: "oklch(0.82 0.18 196)" }}
          />
        </div>
      </div>

      {/* Floating stat card 1 */}
      <div
        className="absolute top-6 right-4 glass-card rounded-2xl p-3 animate-float-slow"
        style={{ minWidth: "140px" }}
      >
        <div
          className="text-xs font-medium uppercase tracking-wider mb-1"
          style={{ color: "oklch(0.82 0.18 196)" }}
        >
          Proyectos activos
        </div>
        <div className="text-2xl font-bold text-foreground">50+</div>
        <div className="text-xs text-muted-foreground">En 12 industrias</div>
      </div>

      {/* Floating stat card 2 */}
      <div
        className="absolute bottom-10 left-2 glass-card rounded-2xl p-3 animate-float animate-delay-300"
        style={{ minWidth: "140px" }}
      >
        <div
          className="text-xs font-medium uppercase tracking-wider mb-1"
          style={{ color: "oklch(0.74 0.22 318)" }}
        >
          Satisfacción
        </div>
        <div className="text-2xl font-bold text-foreground">99%</div>
        <div className="text-xs text-muted-foreground">
          Clientes satisfechos
        </div>
      </div>

      {/* Floating badge 3 */}
      <div className="absolute top-[45%] left-0 glass-card rounded-xl px-3 py-2 animate-float-delay flex items-center gap-2">
        <div
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: "oklch(0.82 0.18 196)" }}
        />
        <span className="text-xs font-medium text-foreground">
          Innovación continua
        </span>
      </div>

      {/* Corner icons */}
      <Globe
        className="absolute top-8 left-8 w-5 h-5 opacity-30"
        style={{ color: "oklch(0.82 0.18 196)" }}
      />
      <Layers
        className="absolute bottom-8 right-8 w-5 h-5 opacity-30"
        style={{ color: "oklch(0.74 0.22 318)" }}
      />
    </div>
  )
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Page-level background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -20%, oklch(0.58 0.27 284 / 0.18), transparent 70%), radial-gradient(ellipse 60% 50% at 80% 70%, oklch(0.82 0.18 196 / 0.1), transparent 60%)"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left content */}
        <div className="flex flex-col gap-6 animate-fade-up">
          {/* Badge */}
          <div
            className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium uppercase tracking-widest"
            style={{
              borderColor: "oklch(0.82 0.18 196 / 0.3)",
              background: "oklch(0.82 0.18 196 / 0.08)",
              color: "oklch(0.82 0.18 196)"
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Innovación · Tecnología · Soluciones Digitales
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] text-balance tracking-tight">
            Impulsamos la{" "}
            <span className="gradient-text-cyan">innovación digital</span> con
            soluciones de{" "}
            <span className="gradient-text-purple">alto impacto</span>
          </h1>

          {/* Sub-copy */}
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            Somos una empresa de transformación digital que combina creatividad,
            tecnología y estrategia para construir experiencias digitales que
            impulsan el crecimiento de tu negocio en un mundo hiperconectado.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-200">
            <button
              onClick={() => handleScroll("servicios")}
              className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-background transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.82 0.18 196), oklch(0.58 0.27 284))",
                boxShadow: "0 0 24px oklch(0.82 0.18 196 / 0.4)"
              }}
            >
              Conoce nuestros servicios
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => handleScroll("proyectos")}
              className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-foreground border transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "oklch(0.82 0.18 196 / 0.35)",
                background: "oklch(0.82 0.18 196 / 0.06)"
              }}
            >
              <Play
                className="w-4 h-4 fill-current"
                style={{ color: "oklch(0.82 0.18 196)" }}
              />
              Ver proyectos
            </button>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 pt-2 animate-fade-up animate-delay-400">
            {[
              { value: "5+", label: "Años de experiencia" },
              { value: "80+", label: "Proyectos entregados" },
              { value: "100%", label: "Compromiso digital" }
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col"
              >
                <span className="text-2xl font-bold gradient-text-cyan">
                  {s.value}
                </span>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative animate-fade-up animate-delay-300">
          <HeroOrb />
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.82 0.18 196), transparent)"
          }}
        />
      </div>
    </section>
  )
}
