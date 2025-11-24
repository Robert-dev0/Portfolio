'use client'

import { Code2, Server, Database, Smartphone, GitBranch } from 'lucide-react'
import { useState } from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Python', 'Express.js', 'GraphQL']
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'SQL', 'Drizzle', 'Prisma']
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: ['React Native', 'Flutter', 'Swift']
  },
  {
    title: 'DevOps',
    icon: GitBranch,
    skills: ['Git', 'Docker', 'Vercel', 'CI/CD']
  }
]

export function Skills() {
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
    <section id="skills" className="py-20 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground">Tools and technologies I master to create digital experiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const pos = mousePosition[index] || { x: 0, y: 0 }
            return (
              <div
                key={category.title}
                onMouseMove={(e) => handleMouseMove(e, index)}
                className="group p-6 rounded-lg border border-border bg-background hover:bg-background hover:border-accent/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-accent/10 relative overflow-hidden"
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
                    <Icon size={24} className="text-accent transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2 group-hover:text-foreground/80 transition-colors duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
