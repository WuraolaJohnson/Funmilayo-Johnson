const metrics = [
  { value: "35+", label: "Projects coordinated" },
  { value: "9", label: "Teams supported" },
  { value: "18+", label: "Processes managed" },
  { value: "8+", label: "Years of experience" },
];

export default function Metrics() {
  return (
    <section className="metrics" aria-label="Operations at a glance">
      <div className="metrics__grid">
        {metrics.map((m) => (
          <div key={m.label} className="metrics__item">
            <span className="metrics__value">{m.value}</span>
            <span className="metrics__label">{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
