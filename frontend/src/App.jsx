import React from 'react';
import { FaGithub, FaTelegramPlane, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './styles/globals.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
// About, Skills, Services are fully implemented components

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Services />
      <div className="divider" />
      <Contact />
      <footer className="site-footer">
        <div className="footer-name">
          Bisrat <span className="accent">Amare</span>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} — Full-Stack Software Engineer · Ethiopia
        </p>
        <div className="social-bar">
          {[
            { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub' },
            { icon: <FaTelegramPlane />, href: 'https://t.me/BisratLe12', label: 'Telegram' },
            { icon: <FaEnvelope />, href: 'mailto:bisratamare88@gmail.com', label: 'Email' },
            { icon: <FaPhoneAlt />, href: 'tel:+251923118002', label: 'Phone' }
          ].map(link => (
            <a
              key={link.label}
              className="social-link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
