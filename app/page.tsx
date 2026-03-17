import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { WhyUs } from "@/components/why-us"
import { Solutions } from "@/components/solutions"
import { Projects } from "@/components/projects"
import { VisualBreak } from "@/components/visual-break"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background grid overlay */}
      <div className="fixed inset-0 cyber-grid opacity-[0.03] pointer-events-none z-0" />
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyUs />
        <Solutions />
        <Projects />
        <VisualBreak />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
