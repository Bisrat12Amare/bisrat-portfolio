import React from 'react';
import profileImg from '../assets/profile.jpg'; // Place your photo as src/assets/profile.jpg

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background glow */}
      <div className="hero-bg-glow" />

      <div className="hero-grid">
        {/* LEFT */}
        <div className="hero-left">
          <div className="available-pill">
            <span className="available-dot" />
            Available for Remote Work
          </div>

          <h1 className="hero-name">
            Bisrat Amare
          </h1>

          <p className="hero-bio">
            <span className="accent">Full-Stack Software Engineer</span><br />
            React · Node.js · Flutter · Healthcare Tech<br />
            Building enterprise-grade digital systems.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View Work ↓</a>
            <a href="/Bisrat_Amare_CV.pdf" download className="btn-outline">Download CV ↓</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            {[
              { num: '5+', label: 'Years Exp.' },
              { num: '20+', label: 'Projects' },
              { num: '13+', label: 'Technologies' }
            ].map(s => (
              <div key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Profile Image (responsive, cropped, premium avatar) */}
        <div className="hero-profile">
          <div className="profile-glow" aria-hidden />
          <div className="profile-outer">
            <div className="profile-inner">
              <img
                src={profileImg}
                alt="Bisrat Amare"
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
