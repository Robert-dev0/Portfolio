'use client'

import { MapPin, Mail, Phone, Clock } from 'lucide-react'

export function QuickInfo() {
  const infoCards = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sergipe, Brasil',
      color: 'text-purple-500',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'robertkawan2506@gmail.com',
      color: 'text-purple-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+55 79 999918341',
      color: 'text-purple-500',
    },
    {
      icon: Clock,
      label: 'Experience',
      value: '1,5+ Years',
      color: 'text-purple-500',
    },
  ]

  return (
    <section className="py-20 px-4 bg-linear-to-b from-background to-background/50">
      <div data-scroll-reveal className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Quick Info</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                data-scroll-reveal
                data-scroll-delay={(index + 1) * 120}
                className="p-6 rounded-lg border border-border bg-card hover:border-purple-500/30 transition-colors duration-300"
              >
                <Icon className={`${card.color} w-6 h-6 mb-3`} />
                <p className="text-sm text-muted-foreground mb-2">{card.label}</p>
                <p className="text-lg font-semibold text-foreground">
                  {card.value}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
