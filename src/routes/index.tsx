import { createFileRoute } from '@tanstack/react-router'
import About from '#/components/sections/About'
import Contact from '#/components/sections/Contact'
import Hero from '#/components/sections/hero/Hero'
import Projects from '#/components/sections/projects/Projects'
import { portfolioData } from '#/data/portfolio'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const data = portfolioData
  return (
    <main>
      <Hero personal={data.personal} />
      <About />
      <Projects projects={data.projects} projectCategories={data.projectCategories} skills={data.skills} />
      <Contact />
    </main>
  )
}
