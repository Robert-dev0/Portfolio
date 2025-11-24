'use client'

import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import { useState } from 'react'

export function QuickInfo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }
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
                onMouseMove={handleMouseMove}
                className="group p-6 rounded-lg border border-border bg-card hover:bg-card hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Mouse spotlight effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`
                  }}
                />

                <div className="relative z-10">
                  <Icon className={`${card.color} w-6 h-6 mb-3 transition-transform duration-300 group-hover:scale-110`} />
                  <p className="text-sm text-muted-foreground mb-2 group-hover:text-foreground transition-colors duration-300">{card.label}</p>
                  <p className="text-lg font-semibold text-foreground">
                    {card.value}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
