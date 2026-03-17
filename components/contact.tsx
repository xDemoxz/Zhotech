"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Instagram } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contacto@zhotech.com",
    href: "mailto:contacto@zhotech.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+52 (55) 1234-5678",
    href: "tel:+525512345678",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Ciudad de México, México",
    href: "#",
  },
]

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--cyan-dim)] blur-[200px] rounded-full -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--magenta-dim)] text-[var(--magenta)] text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            <span className="text-foreground">Hablemos de tu </span>
            <span className="gradient-text-cyan">próximo proyecto</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para escuchar tus ideas y convertirlas en soluciones digitales innovadoras
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Información de Contacto</h3>
              <p className="text-muted-foreground">
                Agenda una reunión o envíanos un mensaje. Nuestro equipo responderá en menos de 24 horas.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:glow-border-cyan transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--cyan-dim)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-5 h-5 text-[var(--cyan)]" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="text-foreground font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Síguenos</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-11 h-11 rounded-lg bg-[var(--muted)] flex items-center justify-center hover:bg-[var(--cyan-dim)] hover:glow-cyan transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-[var(--cyan)] transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="hidden lg:block pt-8">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full border border-[var(--cyan)]/20 animate-spin-very-slow" />
                <div className="absolute inset-4 rounded-full border border-[var(--purple)]/20 animate-spin-reverse" />
                <div className="absolute inset-8 rounded-full border border-[var(--magenta)]/20 animate-spin-slow" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--cyan-dim)] to-[var(--purple-dim)] animate-pulse-glow" />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 glow-border-cyan">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Envíanos un mensaje</h3>
              
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre completo
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[var(--muted)] border-[var(--border)] focus:border-[var(--cyan)] focus:ring-[var(--cyan)]/20 text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[var(--muted)] border-[var(--border)] focus:border-[var(--cyan)] focus:ring-[var(--cyan)]/20 text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Empresa <span className="text-muted-foreground">(opcional)</span>
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Nombre de tu empresa"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-[var(--muted)] border-[var(--border)] focus:border-[var(--cyan)] focus:ring-[var(--cyan)]/20 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Cuéntanos sobre tu proyecto
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Describe brevemente tu proyecto o necesidad..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[var(--muted)] border-[var(--border)] focus:border-[var(--cyan)] focus:ring-[var(--cyan)]/20 text-foreground placeholder:text-muted-foreground min-h-[140px] resize-none"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[var(--cyan)] hover:bg-[var(--cyan)]/90 text-[var(--primary-foreground)] font-semibold py-6 glow-cyan transition-all duration-300 hover:scale-[1.02]"
                >
                  Enviar Mensaje
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              <p className="mt-4 text-sm text-muted-foreground text-center">
                Responderemos a tu mensaje en menos de 24 horas
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
