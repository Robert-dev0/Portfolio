'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <nav className="fixed top-0 w-full z-50 blur-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="#home" className="text-xl font-bold btn-press">
            <span className="text-accent">NB</span>
          </Link>

          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm hover:text-accent transition btn-press">
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-muted rounded-lg transition btn-press"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
