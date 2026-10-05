import React from 'react';
import { FaGithub, FaTelegramPlane, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const contactLinks = [
  { icon: <FaEnvelope />, label: 'bisratamare88@gmail.com', href: 'mailto:bisratamare88@gmail.com' },
  { icon: <FaPhoneAlt />, label: '+251 923 118 002', href: 'tel:+251923118002' },
  { icon: <FaTelegramPlane />, label: 't.me/BisratLe12', href: 'https://t.me/BisratLe12' },
  { icon: <FaGithub />, label: 'github.com/Bisrat12Amare', href: 'https://github.com/Bisrat12Amare' },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-inner">
        <div className="section-label">{'// 05 — contact'}</div>
        <h2 className="section-title">Let's <span>Connect</span></h2>

        <div className="contact-grid">
          <div className="contact-column">
            <h3 className="contact-heading">Open to opportunities</h3>
            <p className="contact-copy">
              I'm available for remote freelance projects, contract roles, and full-time engineering positions.
              Let's build something great together.
            </p>
            <div className="contact-links">
              {contactLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <div className="icon-circle">{link.icon}</div>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
