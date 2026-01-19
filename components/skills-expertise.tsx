'use client'

import { Server, Database, Smartphone, GitBranch, Palette, Shield, Monitor, Zap } from 'lucide-react'
import { useState } from 'react'

const skillsData = [
  {
    category: 'Frontend',
    icon: Monitor,
    color: 'text-blue-500',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'text-green-500',
    skills: ['Node.js', 'Express.js', 'REST APIs']
  },
  {
    category: 'Database',
    icon: Database,
    color: 'text-purple-500',
    skills: ['PostgreSQL', 'Drizzle', 'Prisma']
  },
  {
    category: 'DevOps',
    icon: GitBranch,
    color: 'text-cyan-500',
    skills: ['Git', 'Docker', 'Vercel', 'CI/CD']
  },

  {
    category: 'Security',
    icon: Shield,
    color: 'text-red-500',
    skills: ['Authentication', 'Authorization', 'Data Protection', 'Best Practices']
  }
]

export function SkillsExpertise() {
  const [mousePosition, setMousePosition] = useState<{ [key: number]: { x: number; y: number } }>({})

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition(prev => ({
      ...prev,
      [index]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }))
  }
  return (
    <section id="skills" className="py-20 px-4 bg-background scroll-mt-24">
      <div data-scroll-reveal className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Skills & Tecnologias</h2>
          <p className="text-muted-foreground">
            Ferramentas e tecnologias que domino para criar experiências digitais incríveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon
            const pos = mousePosition[index] || { x: 0, y: 0 }
            return (
              <div
                key={skill.category}
                data-scroll-reveal
                data-scroll-delay={(index + 1) * 80}
                onMouseMove={(e) => handleMouseMove(e, index)}
                className="group p-6 rounded-lg border border-border bg-card hover:bg-card hover:border-accent/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-accent/10 relative overflow-hidden"
              >
                {/* Mouse spotlight effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`
                  }}
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={24} className={`${skill.color} transition-transform duration-300 group-hover:scale-110`} />
                    <h3 className="text-lg font-semibold group-hover:text-accent transition-colors duration-300">{skill.category}</h3>
                  </div>

                  <div className="space-y-2">
                    {skill.skills.map((tech) => (
                      <div key={tech} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
