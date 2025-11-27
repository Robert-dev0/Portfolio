'use client'

import { useState } from 'react'
import { ExternalLink, Copy } from 'lucide-react'

const allProjects = [
  {
    id: 1,
    title: '',
    category: 'Frontend',
    year: '2024-2025',
    description: 'Principal responsável pelo front-end na entrega de um cardápio digital em 3 meses, garantindo uma UI/UX fluida e perfeitamente integrada ao...',
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    image: ''
  },
  {
    id: 2,
    title: '',
    category: 'Full Stack',
    year: '2025',
    description: 'Desenvolvido de forma independente um sistema de cardápio digital completo (front e back-end) em 3 meses, incluindo um painel administrativo...',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    image: ''
  },
  {
    id: 3,
    title: '',
    category: 'Frontend',
    year: '2024',
    description: 'Created comprehensive design system with reusable components and documentation',
    tech: ['React', 'TypeScript', 'Storybook'],
    image: ''
  }
]

const categories = ['Todos', 'Frontend', 'Backend', 'Full Stack', 'Mobile']

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredProjects = activeCategory === 'Todos'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 px-4 scroll-mt-24">
      <div data-scroll-reveal className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground">Uma rápida olhada no que eu construí.</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === cat
                ? 'bg-accent text-accent-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-scroll-reveal
              data-scroll-delay={(index + 1) * 120}
              className="rounded-lg border border-border bg-card overflow-hidden hover:border-accent/50 transition group"
            >
              {project.id === 1 ? (
                <div className="h-96 bg-neutral-900 relative overflow-hidden flex items-center justify-center">
                  <img
                    src="/Home.jpg"
                    alt={project.title}
                    className="h-full w-auto object-contain group-hover:scale-105 transition"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.year}</p>
                  </div>
                  <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button className="w-full py-2 border border-accent text-accent rounded-lg hover:bg-accent/5 transition flex items-center justify-center gap-2 text-sm font-semibold">
                  Visit Site <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
