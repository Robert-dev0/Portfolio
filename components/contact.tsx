import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
        <p className="text-xl text-muted-foreground mb-12">
          Interested in collaborating or just want to say hi? Reach out!
        </p>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-12">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 text-2xl font-bold text-accent hover:text-accent/80 transition"
          >
            <Mail size={32} />
            hello@nikitesh.dev
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
