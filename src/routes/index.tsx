import About from '#/components/sections/about/About'
import CaseStudies from '#/components/sections/case-studies/CaseStudies'
import Certifications from '#/components/sections/certifications/Certifications'
import Contact from '#/components/sections/contact/Contact'
import Hero from '#/components/sections/hero/Hero'
import Projects from '#/components/sections/projects/Projects'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <CaseStudies />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  )
}
