const steps = [
  { number: '01', title: 'Assess', description: 'Understand the current workflow, challenges and objectives.' },
  { number: '02', title: 'Plan', description: 'Develop an organized operational strategy and set priorities.' },
  { number: '03', title: 'Coordinate', description: 'Align people, resources, tasks and timelines.' },
  { number: '04', title: 'Execute', description: 'Implement the planned processes and monitor progress.' },
  { number: '05', title: 'Optimize', description: 'Review results and identify opportunities for improvement.' },
]

export default function Process() {
  return (
    <section className="process">
      <div className="section-head">
        <p className="section-head__label">Operations approach</p>
        <h2 className="section-head__title">A repeatable method for better operations.</h2>
      </div>

      <div className="process__timeline">
        <div className="process__track" aria-hidden="true" />
        {steps.map((step) => (
          <div key={step.number} className="process__step">
            <span className="process__marker">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
