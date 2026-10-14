// Decorative bar widths only — the panel is an illustrative layout, not real data.
const rows = [
  { label: "Workflow management", width: 92, value: "92%" },
  { label: "Team coordination", width: 86, value: "86%" },
  { label: "Delivery & deadlines", width: 95, value: "95%" },
  { label: "Performance reporting", width: 81, value: "81%" },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="hero__timecode">OPS/01</span> Operations Manager
          </p>
          <h1 className="hero__heading">
            Turning operations into organized, efficient systems.
          </h1>
          <p className="hero__sub">
            Funmilayo Johnson is an Operations Manager focused on process
            improvement, team coordination and strategic planning &mdash;
            building operations that run smoothly, scale reliably and perform
            consistently across Nigerian and international business settings.
          </p>
          <div className="hero__actions">
            <a href="#experience" className="btn btn--primary">
              View My Experience
            </a>
            <a href="#contact" className="btn btn--ghost">
              Let&rsquo;s Work Together
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__preview">
            <span className="hero__preview-glow" aria-hidden="true" />
            <div className="hero__preview-frame ops-panel">
              <p className="ops-panel__title">Operations overview</p>
              {rows.map((row) => (
                <div key={row.label} className="ops-panel__row">
                  <div className="ops-panel__label">
                    <span>{row.label}</span>
                    <span className="ops-panel__value">{row.value}</span>
                  </div>
                  <span className="ops-panel__bar" aria-hidden="true">
                    <span style={{ width: `${row.width}%` }} />
                  </span>
                </div>
              ))}
              <p className="ops-panel__note">
                Operational KPI snapshot across core workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to profile">
        <span className="hero__scroll-line" />
        Scroll
      </a>
    </section>
  );
}
