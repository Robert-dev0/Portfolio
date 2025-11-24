import { Code2, Server, Database, Smartphone, GitBranch } from 'lucide-react'

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
  return (
    <section id="skills" className="py-20 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground">Tools and technologies I master to create digital experiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="p-6 rounded-lg border border-border bg-background hover:border-accent/50 transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={24} className="text-accent" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
