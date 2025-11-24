'use client'

import { Heart, Zap, Users } from 'lucide-react'

export function About() {
  const highlights = [
    {
      icon: Heart,
      text: 'Refatorar até que o código faça sentido'
    },
    {
      icon: Zap,
      text: 'Micro melhorias que somam em velocidade'
    },
    {
      icon: Users,
      text: 'Boas conversas constroem bons sistemas'
    }
  ]

  const stats = [
    {
      value: '1.5+',
      label: 'Anos de Experiência'
    },
    {
      value: '5+',
      label: 'Projetos Concluídos'
    },
    {
      value: '10+',
      label: 'Tecnologias'
    },
    {
      value: '∞',
      label: 'Aprendizado constante'
    }
  ]

  const expertise = [
    {
      title: 'Desenvolvimento',
      description: 'Full Stack com foco em aplicações rápidas, seguras e fáceis de manter'
    },
    {
      title: 'UI/UX Design',
      description: 'Interfaces simples, diretas e pensadas para o usuário real'
    },
    {
      title: 'Performance',
      description: 'Código enxuto, carregamento rápido e bom uso de recursos'
    },
    {
      title: 'Colaboração',
      description: 'Comunicação clara, feedback constante e foco no objetivo do time'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-background scroll-mt-24">
      <div data-scroll-reveal className="max-w-6xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Desenvolvedor & Criador</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Desenvolvedor Full-Stack com 1.5 anos de experiência em projetos freelancer.
            Especializado em TypeScript, Next.js e React, sou proativo e focado em entregar
            soluções de alta performance. Busco colaborar em equipe e desenvolver produtos
            inovadores.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.text}
                data-scroll-reveal
                data-scroll-delay={(index + 1) * 100}
                className="flex items-center justify-center gap-2 text-center"
              >
                <Icon size={20} className="text-accent shrink-0" />
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            )
          })}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              data-scroll-reveal
              data-scroll-delay={(index + 1) * 120}
              className="p-8 rounded-lg border border-border bg-card/50 hover:bg-card transition text-center"
            >
              <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertise.map((item, index) => (
            <div
              key={item.title}
              data-scroll-reveal
              data-scroll-delay={(index + 1) * 150}
              className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-accent/50 transition"
            >
              <h3 className="font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
