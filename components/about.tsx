'use client'

import { Heart, Zap, Users, Code2, Palette, Gauge, UsersRound } from 'lucide-react'
import { useState, useEffect } from 'react'

export function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMounted) return
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }
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
      icon: '🎯',
      value: '2.5+',
      label: 'Anos de Experiência'
    },
    {
      icon: '🚀',
      value: '3+',
      label: 'Projetos Concluídos'
    },
    {
      icon: '💻',
      value: '15+',
      label: 'Tecnologias'
    },
    {
      icon: '📚',
      value: '∞',
      label: 'Aprendizado constante'
    }
  ]

  const expertise = [
    {
      icon: Code2,
      title: 'Desenvolvimento',
      description: 'Full Stack com foco em aplicações rápidas, seguras e fáceis de manter'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Interfaces simples, diretas e pensadas para o usuário real'
    },
    {
      icon: Gauge,
      title: 'Performance',
      description: 'Código enxuto, carregamento rápido e bom uso de recursos'
    },
    {
      icon: UsersRound,
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
              onMouseMove={handleMouseMove}
              className="group p-8 rounded-lg border border-border bg-card hover:bg-card transition-all duration-300 text-center cursor-pointer hover:shadow-xl hover:shadow-accent/20 hover:border-accent/50 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Mouse spotlight effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--accent-rgb, 139, 92, 246), 0.15), transparent 40%)`
                }}
              />

              <div className="relative z-10">
                <div className="text-3xl font-bold text-accent mb-2 transition-transform duration-300 group-hover:scale-110">{stat.value}</div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertise.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                data-scroll-reveal
                data-scroll-delay={(index + 1) * 150}
                onMouseMove={handleMouseMove}
                className="group p-6 rounded-lg border border-border bg-card hover:bg-card hover:border-accent/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-accent/10 relative overflow-hidden"
              >
                {/* Mouse spotlight effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--accent-rgb, 139, 92, 246), 0.12), transparent 40%)`
                  }}
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
