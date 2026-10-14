import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import About from './components/About'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import WorkflowShowcase from './components/WorkflowShowcase'
import Process from './components/Process'
import Tools from './components/Tools'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudyModal from './components/CaseStudyModal'
import type { Project } from './data/projects'

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  // Scroll-triggered section reveal (content stays visible if JS is off).
  useEffect(() => {
    document.documentElement.classList.add('js')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.08 },
    )
    document.querySelectorAll('main > section').forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Expertise />
        <Experience />
        <Portfolio onSelect={setActiveProject} />
        <WorkflowShowcase />
        <Process />
        <Tools />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  )
}
