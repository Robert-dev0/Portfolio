'use client'

import { useState } from 'react'
import { ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ResumePreviewModal = dynamic(
  () => import('@/components/resume-preview-modal').then((mod) => mod.ResumePreviewModal),
  { ssr: false }
)

export function Hero() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center">
        <div data-scroll-reveal className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm border border-accent/20">
            Welcome to my portfolio
          </span>
        </div>

        <h1 data-scroll-reveal data-scroll-delay={100} className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Robert <span className="text-accent">Kawan</span>
        </h1>

        <p data-scroll-reveal data-scroll-delay={150} className="text-xl md:text-2xl text-muted-foreground mb-8">
          Full stack developer
        </p>

        <p
          data-scroll-reveal
          data-scroll-delay={200}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Sou uma pessoa motivada e dedicada, em busca do meu primeiro estágio na área. Possuo 1 ano e meio de experiência prática em projetos pessoais, freelas e estudos contínuos, desenvolvendo habilidades técnicas, raciocínio lógico e foco na criação de interfaces limpas e responsivas. Tenho facilidade para aprender, sou proativo e comprometido em entregar resultados de qualidade, sempre buscando evoluir e aprimorar meus conhecimentos.
        </p>

        <div data-scroll-reveal data-scroll-delay={250} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#projects"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition flex items-center justify-center gap-2 btn-press"
          >
            View My Work <ArrowRight size={20} />
          </Link>
          <button
            onClick={() => setIsResumeModalOpen(true)}
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/5 transition flex items-center justify-center gap-2 btn-press"
          >
            Download Resume <Download size={20} />
          </button>

          <ResumePreviewModal
            open={isResumeModalOpen}
            onOpenChange={setIsResumeModalOpen}
          />
        </div>

        <div className="grid grid-cols-3 gap-6 mt-20 pt-12 border-t border-border">
          <div data-scroll-reveal data-scroll-delay={350}>
            <p className="text-3xl font-bold text-accent">1.5+</p>
            <p className="text-muted-foreground text-sm mt-2">Years Experience</p>
          </div>
          <div data-scroll-reveal data-scroll-delay={400}>
            <p className="text-3xl font-bold text-accent">5+</p>
            <p className="text-muted-foreground text-sm mt-2">Projects Completed</p>
          </div>
          <div data-scroll-reveal data-scroll-delay={450}>
            <p className="text-3xl font-bold text-accent">1</p>
            <p className="text-muted-foreground text-sm mt-2">Team Lead</p>
          </div>
        </div>
      </div>
    </section>
  )
}
