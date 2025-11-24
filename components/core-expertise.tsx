import { Zap, Target, Code, Users } from 'lucide-react'

const expertise = [
  {
    icon: Code,
    title: 'Design-to-Code Excellence',
    description: 'Converting high-fidelity designs into responsive, accessible React components with pixel-perfect accuracy.'
  },
  {
    icon: Target,
    title: 'Performance Optimization',
    description: 'Building fast, scalable applications with optimized rendering, efficient data fetching, and best practices.'
  },
  {
    icon: Zap,
    title: 'Full-Stack Development',
    description: 'End-to-end development expertise from frontend UI to backend APIs and database architecture.'
  },
  {
    icon: Users,
    title: 'Accessibility & UX',
    description: 'Creating inclusive digital experiences following WCAG standards and modern UX principles.'
  }
]

export function CoreExpertise() {
  return (
    <section id="expertise" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Expertise</h2>
          <p className="text-lg text-muted-foreground">What I bring to every project</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="p-8 rounded-lg border border-border bg-background hover:border-accent/50 transition group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
