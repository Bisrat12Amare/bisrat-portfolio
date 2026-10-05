import React from 'react';

const services = [
  {
    num: '01',
    title: 'Full-Stack Web Development',
    desc: 'End-to-end web applications using React.js frontends and Node.js backends — scalable, maintainable, and production-ready.',
    tags: ['React.js', 'Node.js', 'PostgreSQL'],
  },
  {
    num: '02',
    title: 'Mobile App Development',
    desc: 'Cross-platform Flutter apps for iOS & Android with Firebase, push notifications, and offline support.',
    tags: ['Flutter', 'Firebase', 'Dart'],
  },
  {
    num: '03',
    title: 'API Design & Integration',
    desc: 'RESTful API architecture, third-party integrations, authentication systems, and microservices design.',
    tags: ['REST APIs', 'Express', 'JWT'],
  },
  {
    num: '04',
    title: 'Healthcare Tech Platforms',
    desc: 'Specialized development for healthcare systems — patient management, referral networks, and medical record platforms.',
    tags: ['HIPAA-aware', 'Dashboards', 'Real-time'],
  },
  {
    num: '05',
    title: 'Database Architecture',
    desc: 'Schema design, query optimization, and cloud database setup with PostgreSQL, MongoDB, Supabase, or Firebase.',
    tags: ['PostgreSQL', 'MongoDB', 'Supabase'],
  },
  {
    num: '06',
    title: 'Technical Consulting',
    desc: 'Architecture reviews, tech stack selection, code audits, and engineering leadership for startups and enterprises.',
    tags: ['Architecture', 'Code Review', 'Mentorship'],
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="section-inner">
        <div className="section-label">{'// 04 — services'}</div>
        <h2 className="section-title">What I <span>Offer</span></h2>

        <div className="section-grid-3">
          {services.map(s => (
            <div key={s.num} className="service-card">
              <div className="service-number">{s.num}</div>
              <div className="service-title">{s.title}</div>
              <div className="service-desc">{s.desc}</div>
              <div className="service-tags">
                {s.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
