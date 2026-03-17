"use client"

import { motion } from "framer-motion"

export function VisualBreak() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--cyan-dim)] blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[var(--purple-dim)] blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Decorative lines */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent" />
            <div className="w-3 h-3 rotate-45 border border-[var(--cyan)] glow-cyan" />
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent" />
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance max-w-4xl mx-auto leading-tight"
          >
            <span className="text-foreground">El futuro digital</span>
            <br />
            <span className="gradient-text-cyan">comienza hoy</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Transformamos ideas ambiciosas en realidades tecnológicas que impulsan el crecimiento y la innovación
          </motion.p>
          
          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-full border border-[var(--cyan)] opacity-20 animate-spin-very-slow" />
              <div className="absolute inset-2 rounded-full border border-[var(--purple)] opacity-30 animate-spin-reverse" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[var(--cyan-dim)] to-[var(--purple-dim)] animate-pulse-glow" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[var(--cyan)] glow-cyan" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
