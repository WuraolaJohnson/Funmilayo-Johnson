const tools = [
  "Microsoft Excel",
  "Asana",
  "Slack",
  "SharePoint",
  "Salesforce",
  "Power BI",
];

export default function Tools() {
  return (
    <section className="tools">
      <p className="section-head__label">Tools &amp; platforms</p>
      <div className="tools__row">
        {tools.map((tool, i) => (
          <span key={tool} className="tools__item">
            {tool}
            {i < tools.length - 1 && (
              <span className="tools__divider" aria-hidden="true" />
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
