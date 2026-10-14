const testimonials = [
  {
    theme: "Leadership",
    quote:
      "Maya brings structure to fast-moving teams and creates an operating rhythm that keeps people aligned, accountable and focused on the right priorities.",
    name: "Jordan Lee",
    role: "Director of Operations",
    company: "Northstar Logistics Group",
  },
  {
    theme: "Reliability",
    quote:
      "She is the kind of operator who sees risk early, solves it calmly and keeps execution moving without sacrificing quality or communication.",
    name: "Elena Brooks",
    role: "Head of Customer Experience",
    company: "BluePeak Commerce",
  },
  {
    theme: "Problem solving",
    quote:
      "Maya is exceptional at turning operational chaos into clear processes, measurable outcomes and team confidence.",
    name: "Marcus Hill",
    role: "Program Manager",
    company: "Northstar Logistics Group",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-head">
        <p className="section-head__label">Feedback</p>
        <h2 className="section-head__title">
          What colleagues &amp; clients say
        </h2>
      </div>

      <div className="testimonials__row">
        {testimonials.map((t) => (
          <figure key={t.theme} className="testimonials__card">
            <span className="testimonials__theme">{t.theme}</span>
            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption>
              <span className="testimonials__name">{t.name}</span>
              <span className="testimonials__role">
                {t.role}, {t.company}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
