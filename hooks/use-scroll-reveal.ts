'use client'

import { useEffect } from 'react'

type ScrollRevealOptions = {
  rootMargin?: string
  threshold?: number | number[]
}

export function useScrollReveal(options?: ScrollRevealOptions) {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-scroll-reveal]')
    )

    if (!elements.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          const target = entry.target as HTMLElement
          const delay = target.dataset.scrollDelay ?? '0'
          target.style.setProperty('--reveal-delay', `${delay}ms`)
          target.dataset.scrollReveal = 'visible'
          observer.unobserve(target)
        })
      },
      {
        rootMargin: options?.rootMargin ?? '0px 0px -1% 0px',
        threshold: options?.threshold ?? 0.15
      }
    )

    elements.forEach((element) => {
      if (element.dataset.scrollReveal !== 'visible') {
        element.dataset.scrollReveal = 'hidden'
      }

      if (!element.style.getPropertyValue('--reveal-delay')) {
        const delay = element.dataset.scrollDelay ?? '0'
        element.style.setProperty('--reveal-delay', `${delay}ms`)
      }

      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [options?.rootMargin, options?.threshold])
}

