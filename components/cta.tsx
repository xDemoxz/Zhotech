"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[var(--purple-dim)] to-background" />
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--purple-dim)] blur-[150px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto glow-border-purple"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--purple-dim)] mb-8"
          >
            <Sparkles className="w-8 h-8 text-[var(--purple)]" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6"
          >
            <span className="text-foreground">Listo para </span>
            <span className="gradient-text-purple">transformar tu negocio?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Agenda una consulta estratégica y descubre cómo podemos impulsar tu transformación digital con soluciones innovadoras y personalizadas.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-[var(--purple)] hover:bg-[var(--purple)]/90 text-white px-8 py-6 text-lg font-semibold glow-purple transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#contacto">
                Iniciar Proyecto
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[var(--purple)]/40 text-foreground hover:bg-[var(--purple-dim)] px-8 py-6 text-lg font-semibold transition-all duration-300"
              asChild
            >
              <a href="#soluciones">Ver Soluciones</a>
            </Button>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-[var(--border)] grid grid-cols-3 gap-6"
          >
            {[
              { value: "50+", label: "Proyectos Exitosos" },
              { value: "98%", label: "Clientes Satisfechos" },
              { value: "24/7", label: "Soporte Técnico" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl md:text-3xl font-bold text-[var(--purple)]">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
