"use client"

import { motion } from "framer-motion"
import { Zap, Linkedin, Twitter, Instagram, Github, ArrowUp } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  soluciones: [
    { label: "Desarrollo Web", href: "#servicios" },
    { label: "Apps Móviles", href: "#servicios" },
    { label: "Inteligencia Artificial", href: "#servicios" },
    { label: "Consultoría Digital", href: "#servicios" },
  ],
  empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ],
  recursos: [
    { label: "Blog", href: "#" },
    { label: "Casos de Estudio", href: "#proyectos" },
    { label: "FAQ", href: "#" },
    { label: "Soporte", href: "#contacto" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--muted)] to-background" />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--cyan)] to-[var(--purple)] opacity-80 group-hover:opacity-100 transition-opacity" />
                <Zap className="relative w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Zhotech</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Transformamos ideas en soluciones digitales de alto impacto. Innovación, creatividad y tecnología de vanguardia para impulsar tu negocio.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-[var(--muted)] flex items-center justify-center hover:bg-[var(--cyan-dim)] hover:glow-cyan transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-[var(--cyan)] transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (categoryIndex + 1) }}
              viewport={{ once: true }}
            >
              <h4 className="text-foreground font-semibold mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-[var(--cyan)] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-sm"
            >
              {new Date().getFullYear()} Zhotech Solutions. Todos los derechos reservados.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <a href="#" className="text-sm text-muted-foreground hover:text-[var(--cyan)] transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-[var(--cyan)] transition-colors">
                Términos de Servicio
              </a>
            </motion.div>
            
            {/* Scroll to top */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-[var(--muted)] flex items-center justify-center hover:bg-[var(--cyan-dim)] hover:glow-cyan transition-all duration-300 group"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-[var(--cyan)] transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
