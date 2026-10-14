import { Workflow, Users, BarChart3, Lightbulb } from 'lucide-react'

// Edit or remove any item you can't support with real experience.
const areas = [
  {
    icon: Workflow,
    title: 'Operations Management',
    items: ['Workflow management', 'Process optimization', 'Resource coordination', 'Performance monitoring'],
  },
  {
    icon: Users,
    title: 'Project & Team Management',
    items: ['Project coordination', 'Team collaboration', 'Task delegation', 'Deadline management'],
  },
  {
    icon: BarChart3,
    title: 'Business Operations',
    items: ['Strategic planning', 'Documentation', 'Reporting', 'Operational planning'],
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    items: ['Process improvement', 'Risk identification', 'Issue resolution', 'Decision support'],
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="expertise">
      <div className="section-head">
        <p className="section-head__label">Core expertise</p>
        <h2 className="section-head__title">How I keep operations running well.</h2>
      </div>

      <div className="expertise__list">
        {areas.map(({ icon: Icon, title, items }) => (
          <div key={title} className="expertise__item">
            <Icon size={22} strokeWidth={1.75} className="expertise__icon" />
            <h3>{title}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
