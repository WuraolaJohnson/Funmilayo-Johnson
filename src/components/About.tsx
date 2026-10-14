export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__visual">
        <div className="about__frame">
          <img
            src="/funmilayo-profile.png.jpeg"
            alt="Funmilayo Johnson portrait"
          />
        </div>
      </div>

      <div className="about__copy">
        <p className="section-head__label">Professional profile</p>
        <h2 className="section-head__title">The person behind the process.</h2>
        <p className="about__bio">
          I&rsquo;m an Operations Manager with 8+ years of experience helping
          teams build smoother workflows, clearer accountability and more
          consistent delivery across fast-moving environments in Nigeria and
          beyond.
        </p>
        <p className="about__bio">
          My background spans logistics, e-commerce operations and service-based
          teams, where I lead with calm structure, practical problem solving and
          a strong focus on sustainable execution.
        </p>

        <dl className="about__facts">
          <div>
            <dt>Experience</dt>
            <dd>8+ years</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>Lagos, Nigeria</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Process optimization, team coordination, planning</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
