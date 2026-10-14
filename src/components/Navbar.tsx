import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand">
          <span className="navbar__brand-mark" aria-hidden="true" />
          Funmilayo Johnson
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar__cta">
          Let&rsquo;s Work Together
        </a>

        <button
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="navbar__mobile" aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="navbar__mobile-cta"
            onClick={() => setOpen(false)}
          >
            Let&rsquo;s Work Together
          </a>
        </nav>
      )}
    </header>
  );
}
