'use client'

import { Server, Database, Smartphone, GitBranch, Palette, Shield, Monitor, Zap } from 'lucide-react'

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
      skills: ['PostgreSQL', 'SQL', 'Drizzle', 'Prisma']
  },
  {
    category: 'DevOps',
    icon: GitBranch,
    color: 'text-cyan-500',
    skills: ['Git', 'Docker', 'Vercel', 'GitHub Actions', 'CI/CD']
  },
  {
    category: 'AI/ML',
    icon: Zap,
    color: 'text-yellow-500',
    skills: ['AI Integration', 'LLMs', 'Vector Databases', 'Automation']
  },
  {
    category: 'Security',
    icon: Shield,
    color: 'text-red-500',
    skills: ['Authentication', 'Authorization', 'Data Protection', 'Best Practices']
  }
]

export function SkillsExpertise() {
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
            return (
              <div
                key={skill.category}
                data-scroll-reveal
                data-scroll-delay={(index + 1) * 80}
                className="p-6 rounded-lg border border-border bg-card/40 hover:bg-card/60 hover:border-accent/50 transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={24} className={skill.color} />
                  <h3 className="text-lg font-semibold">{skill.category}</h3>
                </div>

                <div className="space-y-2">
                  {skill.skills.map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                      <span className="text-sm text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
