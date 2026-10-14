const roles = [
  {
    title: "Senior Operations Manager",
    organization: "Northstar Logistics Group",
    date: "2021 — Present",
    responsibilities: [
      "Directed workflow optimization across warehousing, dispatch and service operations.",
      "Managed staffing plans, vendor coordination and KPI reporting for nine operational teams.",
      "Created clear escalation paths and process ownership to reduce delays and improve consistency.",
    ],
    contributions: [
      "Reduced order cycle time by 22% through process redesign and weekly performance reviews.",
      "Built an operational dashboard that improved cross-team decision making and issue response time.",
    ],
    tools: [
      "Microsoft Excel",
      "Power BI",
      "Asana",
      "Slack",
      "Google Workspace",
    ],
  },
  {
    title: "Operations Lead",
    organization: "BluePeak Commerce",
    date: "2018 — 2021",
    responsibilities: [
      "Coordinated daily fulfillment, customer support and inventory workflows across multiple channels.",
      "Partnered with sales, customer care and leadership teams to improve service and on-time execution.",
      "Maintained operating rhythm through process documentation, issue tracking and performance reviews.",
    ],
    contributions: [
      "Improved order accuracy and turnaround by standardizing handoffs and daily operating checklists.",
      "Reduced customer escalations by implementing clearer communication and issue ownership processes.",
    ],
    tools: ["Salesforce", "Shopify", "Notion", "Excel", "Zendesk"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-head">
        <p className="section-head__label">Experience</p>
        <h2 className="section-head__title">
          Where I&rsquo;ve driven results.
        </h2>
      </div>

      <div className="experience__list">
        {roles.map((role) => (
          <article key={role.title} className="experience__item">
            <span className="experience__marker" aria-hidden="true" />
            <p className="experience__date">{role.date}</p>
            <h3>{role.title}</h3>
            <p className="experience__org">{role.organization}</p>

            <div className="experience__cols">
              <div>
                <h4>Responsibilities</h4>
                <ul>
                  {role.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Key contributions</h4>
                <ul>
                  {role.contributions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="experience__tools">
              <span>Tools:</span> {role.tools.join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
