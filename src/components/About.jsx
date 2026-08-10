import React from 'react';

const highlights = [
  { icon: '🏥', title: 'Healthcare Technology', desc: 'Platform development & medical record systems' },
  { icon: '⚡', title: 'Full-Stack Development', desc: 'React frontends + Node.js APIs + mobile apps' },
  { icon: '🔒', title: 'Enterprise Systems', desc: 'Auth, RBAC, dashboards & analytics' },
  { icon: '📡', title: 'API Architecture', desc: 'RESTful APIs, integrations & microservices' },
  { icon: '📱', title: 'Mobile Development', desc: 'Cross-platform Flutter apps with Firebase' },
];

export default function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <div className="section-label">{'// 01 — about'}</div>
        <h2 className="section-title">Who I <span>Am</span></h2>

        <div className="about-grid">
          <div>
            {[
              <>I'm <strong className="text-highlight">Bisrat Amare</strong>, an experienced Full-Stack Software Engineer based in Ethiopia with a passion for building scalable, enterprise-grade digital solutions that solve real problems.</>,
              <>With deep expertise in <strong className="text-highlight">React.js, Node.js, Flutter</strong>, and cloud platforms, I specialize in architecting systems that handle complex business logic — from healthcare referral platforms to real-time communication systems.</>,
              <>I bring a <strong className="text-highlight">product-minded engineering approach</strong> — thinking about the user, the business, and the technical architecture all at once. Whether you need a fast-loading frontend, a solid API backend, or a mobile-first experience, I deliver production-ready code.</>,
            ].map((text, i) => (
              <p key={i} className="section-copy">
                {text}
              </p>
            ))}

            <div className="about-stats">
              {[
                { num: '5+', label: 'Years Experience' },
                { num: '20+', label: 'Projects Delivered' },
                { num: '13+', label: 'Technologies' },
              ].map(s => (
                <div key={s.label} className="about-stat">
                  <div className="about-stat-number">{s.num}</div>
                  <div className="about-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {highlights.map(h => (
              <div key={h.title} className="about-highlight">
                <div className="about-icon">{h.icon}</div>
                <div>
                  <div className="about-highlight-title">{h.title}</div>
                  <div className="about-highlight-copy">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
