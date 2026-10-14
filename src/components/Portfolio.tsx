import { useState } from 'react'
import { categories, projects, type Project, type ProjectCategory } from '../data/projects'
import ProjectCard from './ProjectCard'

interface PortfolioProps {
  onSelect: (project: Project) => void
}

export default function Portfolio({ onSelect }: PortfolioProps) {
  const [active, setActive] = useState<ProjectCategory | 'All'>('All')

  const visible =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="work" className="portfolio">
      <div className="section-head">
        <p className="section-head__label">Projects &amp; case studies</p>
        <h2 className="section-head__title">Problems solved, systems improved.</h2>
      </div>

      <div className="portfolio__filters" role="tablist" aria-label="Filter projects by category">
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={active === category}
            className={`portfolio__filter ${active === category ? 'is-active' : ''}`}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio__grid">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={onSelect} />
        ))}
      </div>
    </section>
  )
}
