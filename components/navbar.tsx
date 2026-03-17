"use client"

import { useState, useEffect } from "react"
import { Menu, X, Zap } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const id = href.replace("#", "")
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "oklch(0.07 0.018 240 / 0.92)"
          : "oklch(0.07 0.018 240 / 0.4)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid oklch(0.82 0.18 196 / 0.12)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px oklch(0.07 0.018 240 / 0.5)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#inicio")}
          className="flex items-center gap-2 group"
          aria-label="Ir al inicio"
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, oklch(0.82 0.18 196), oklch(0.58 0.27 284))", boxShadow: "0 0 16px oklch(0.82 0.18 196 / 0.4)" }}>
            <Zap className="w-4 h-4 text-black" fill="currentColor" />
          </div>
          <span className="text-foreground font-bold text-lg tracking-tight">
            Zhо<span className="gradient-text-cyan">tech</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{ background: "oklch(0.82 0.18 196)" }} />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick("#contacto")}
            className="px-5 py-2 rounded-full text-sm font-semibold text-background transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, oklch(0.82 0.18 196), oklch(0.58 0.27 284))",
              boxShadow: "0 0 20px oklch(0.82 0.18 196 / 0.35)",
            }}
          >
            Solicitar asesoría
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="md:hidden text-foreground p-2 rounded-lg transition-colors hover:bg-muted"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: mobileOpen ? "420px" : "0",
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        <div className="px-4 pb-4 flex flex-col gap-1" style={{ background: "oklch(0.07 0.018 240 / 0.97)", borderBottom: "1px solid oklch(0.82 0.18 196 / 0.15)" }}>
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left py-3 px-4 rounded-xl text-muted-foreground hover:text-foreground transition-all duration-200 hover:bg-muted/50 text-sm font-medium"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contacto")}
            className="mt-2 py-3 px-4 rounded-xl text-sm font-semibold text-background text-center"
            style={{
              background: "linear-gradient(135deg, oklch(0.82 0.18 196), oklch(0.58 0.27 284))",
            }}
          >
            Solicitar asesoría
          </button>
        </div>
      </div>
    </header>
  )
}
