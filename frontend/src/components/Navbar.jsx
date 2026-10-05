import React, { useState, useEffect } from 'react';

const navLinks = ['About', 'Skills', 'Projects', 'Services', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="site-nav-inner">
        <div className="brand">
          B<span className="accent">.</span>Amare
        </div>
        <ul className="links">
          {navLinks.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="nav-link">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-primary nav-cta">
          Hire Me
        </a>
      </div>
    </nav>
  );
}
