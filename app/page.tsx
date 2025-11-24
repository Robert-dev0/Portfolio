import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { QuickInfo } from '@/components/quick-info'
import { SkillsExpertise } from '@/components/skills-expertise'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { LetsConnect } from '@/components/lets-connect'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <QuickInfo />
      <SkillsExpertise />
      <Projects />
      <Experience />
      <LetsConnect />
      <Footer />
    </main>
  )
}
