import { useEffect } from 'react'
import { X } from 'lucide-react'
import type { Project } from '../data/projects'

interface CaseStudyModalProps {
  project: Project | null
  onClose: () => void
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={project.title}>
      <button className="modal__backdrop" onClick={onClose} aria-label="Close case study" />
      <div className="modal__content">
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        <div className="modal__details">
          <span className="modal__category">
            {project.category} · {project.organization}
          </span>
          <h3>{project.title}</h3>

          <div className="modal__grid">
            <section>
              <h4>Problem</h4>
              <p>{project.problem}</p>
            </section>
            <section>
              <h4>Approach</h4>
              <p>{project.approach}</p>
            </section>
            <section>
              <h4>Responsibilities</h4>
              <ul>
                {project.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </section>
            <section>
              <h4>Tools / systems</h4>
              <ul>
                {project.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>
            <section className="modal__outcome">
              <h4>Outcome</h4>
              <p>{project.outcome}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
