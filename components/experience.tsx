import { GraduationCap, Code2 } from 'lucide-react'

const experiences = [
  {
    title: 'Início da Graduação em ADS',
    institution: 'Estacio',
    date: 'Fev 2024',
    location: 'Sergipe - SE',
    type: 'education',
    description: 'Bases sólidas em lógica de programação, algoritmos e orientação a objetos com Javascript. Comecei a estudar desenvolvimento web de forma autônoma.',
    achievements: [
      'Fundamentos de programação estruturada e orientada a objetos.',
      'Primeiros projetos com HTML, CSS e JavaScript.'
    ],
    tech: ['Javascript', 'Lógica de Programação', 'POO', 'HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Desenvolvedor - Projeto de Crochê',
    institution: 'Projeto Acadêmico',
    date: '2024',
    location: 'Sergipe - SE',
    type: 'work',
    description: 'Desenvolvimento de sistema web de crochê usando Node.js e Express.js.',
    achievements: [
      'Implementação do padrão MVC com Express.js.',
      'Controle de versão com Git e colaboração via GitHub.'
    ],
    tech: ['Node.js', 'Express.js', 'HTML', 'CSS', 'Github']
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-background scroll-mt-24">
      <div data-scroll-reveal className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Minha Jornada</h2>
          <p className="text-lg text-muted-foreground">Uma linha do tempo da minha evolução profissional e acadêmica</p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-ml-px" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                data-scroll-reveal
                data-scroll-delay={(idx + 1) * 120}
                className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot with icon */}
                <div className="absolute left-6 md:left-1/2 md:-ml-6 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-accent">
                  {exp.type === 'education' ? (
                    <GraduationCap className="w-6 h-6 text-accent" />
                  ) : (
                    <Code2 className="w-6 h-6 text-accent" />
                  )}
                </div>

                {/* Content card */}
                <div className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                  <div className="bg-card rounded-lg border border-border p-6 hover:border-accent/50 hover:shadow-lg transition-all group">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="font-medium">{exp.institution}</span>
                        </p>
                      </div>
                      <div className="ml-4 shrink-0">
                        <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                          {exp.date}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.location}
                    </p>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{exp.description}</p>

                    {exp.achievements.length > 0 && (
                      <div className="mb-4 space-y-2">
                        <p className="text-sm font-semibold">Principais conquistas:</p>
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-accent mt-1">•</span>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
