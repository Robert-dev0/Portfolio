'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'

type ScrollRevealProviderProps = {
  options?: Parameters<typeof useScrollReveal>[0]
}

export function ScrollRevealProvider({ options }: ScrollRevealProviderProps) {
  useScrollReveal(options)
  return null
}

