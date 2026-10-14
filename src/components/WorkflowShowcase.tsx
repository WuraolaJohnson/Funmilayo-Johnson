import { useRef, useState } from "react";

const principles = [
  "Clear ownership",
  "Documented processes",
  "Measured performance",
  "Open communication",
  "Risk awareness",
  "Continuous improvement",
];

export default function WorkflowShowcase() {
  const [split, setSplit] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSplit(Math.min(100, Math.max(0, pct)));
  };

  return (
    <section className="workflow">
      <div className="section-head">
        <p className="section-head__label">Before &amp; after</p>
        <h2 className="section-head__title">
          From scattered effort to a system that runs.
        </h2>
      </div>

      <div className="workflow__body">
        <div
          className="compare"
          ref={trackRef}
          onMouseMove={(e) => e.buttons === 1 && updateFromClientX(e.clientX)}
          onMouseDown={(e) => updateFromClientX(e.clientX)}
          onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
        >
          <div className="compare__pane compare__pane--after">
            <span className="compare__label">
              After &mdash; structured workflow
            </span>
            <span className="compare__diagram">
              Workflow map: streamlined process
            </span>
          </div>
          <div
            className="compare__pane compare__pane--before"
            style={{ width: `${split}%` }}
          >
            <span className="compare__label">
              Before &mdash; fragmented workflow
            </span>
            <span className="compare__diagram">
              Workflow map: manual handoffs
            </span>
          </div>
          <div className="compare__handle" style={{ left: `${split}%` }}>
            <span className="compare__handle-grip" />
          </div>
        </div>

        <ul className="workflow__skills">
          {principles.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
