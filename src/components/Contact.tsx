import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-head">
        <p className="section-head__label">Contact</p>
        <h2 className="section-head__title">Let&rsquo;s work together</h2>
      </div>

      <p className="contact__intro">
        Hiring, or have an operations challenge to solve? Send a message and
        I&rsquo;ll get back to you.
      </p>

      <dl className="about__facts">
        <div>
          <dt>Email</dt>
          <dd>funmilayo.johnson.ops@gmail.com</dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd>+234 803 555 0194</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>Lagos, Nigeria</dd>
        </div>
      </dl>

      <a
        href="mailto:funmilayo.johnson.ops@gmail.com"
        className="btn btn--primary btn--lg contact__btn"
      >
        Email Me
      </a>

      <div className="contact__socials">
        <a href="mailto:funmilayo.johnson.ops@gmail.com" aria-label="Email">
          <Mail size={20} strokeWidth={1.75} />
        </a>
        <a href="tel:+2348035550194" aria-label="Phone">
          <Phone size={20} strokeWidth={1.75} />
        </a>
        <a
          href="https://www.linkedin.com/in/funmilayojohnson"
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={20} strokeWidth={1.75} />
        </a>
      </div>
    </section>
  );
}
