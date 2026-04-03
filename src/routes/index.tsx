import { createFileRoute } from '@tanstack/react-router'
import About from '#/components/sections/about/About'
import Certifications from '#/components/sections/certifications/Certifications'
import Contact from '#/components/sections/contact/Contact'
import Hero from '#/components/sections/hero/Hero'
import Projects from '#/components/sections/projects/Projects'
import { portfolioData } from '#/data/portfolio'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  )
}
