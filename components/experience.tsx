import { CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    title: '',
    company: '',
    date: '',
    location: '',
    type: '',
    description: '',
    achievements: [
      '',
      ''
    ],
    tech: ['C++', 'Programming Logic', 'OOP', 'HTML', 'CSS', 'JavaScript']
  },
  {
    title: '',
    company: '',
    date: '',
    location: '',
    type: '',
    description: '',
    achievements: [
      '',
      ''
    ],
    tech: ['Python', 'Django']
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-card scroll-mt-24">
      <div data-scroll-reveal className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Journey</h2>
          <p className="text-lg text-muted-foreground">Evolução profissional e acadêmica</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} data-scroll-reveal data-scroll-delay={(idx + 1) * 120} className="relative pl-8">
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-accent" />
              {idx < experiences.length - 1 && (
                <div className="absolute left-1.5 top-8 w-0.5 h-24 bg-border" />
              )}

              <div className="bg-background rounded-lg border border-border p-6 hover:border-accent/50 transition">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-accent">{exp.company}</p>
                  </div>
                  <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                    {exp.date}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                <p className="text-muted-foreground mb-4">{exp.description}</p>

                {exp.achievements.length > 0 && (
                  <div className="mb-4 space-y-2">
                    <p className="text-sm font-semibold">Principais conquistas:</p>
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-muted text-accent border border-accent/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
