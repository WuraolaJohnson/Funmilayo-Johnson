const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <p className="footer__brand">
            Funmilayo Johnson &mdash; Operations Manager
          </p>
          <p className="footer__tagline">
            Organized operations. Reliable execution.
          </p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/funmilayojohnson"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:funmilayo.johnson.ops@gmail.com">Email</a>
        </div>
      </div>

      <p className="footer__copyright">
        &copy; {year} Funmilayo Johnson. All rights reserved.
      </p>
    </footer>
  );
}
