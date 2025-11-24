'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export function LetsConnect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Integrate with email service (EmailJS, SendGrid, etc.)
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30 scroll-mt-24">
      <div data-scroll-reveal className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!
          </p>
        </div>

        <div data-scroll-reveal data-scroll-delay={150} className="bg-card border border-border rounded-xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Send className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-bold">Envie uma Mensagem</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition text-foreground"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition text-foreground"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Assunto *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Sobre o que você gostaria de conversar?"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition text-foreground"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Descreva seu projeto ou ideia..."
                required
                rows={6}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition text-foreground resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-accent hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-accent-foreground font-bold rounded-lg transition flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
