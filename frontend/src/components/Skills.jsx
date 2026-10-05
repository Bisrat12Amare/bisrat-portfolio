import React from 'react';
import { BrandLogo } from '../data/brandLogos';

const skills = [
  { logos: ['react'], name: 'React.js', level: 95 },
  { logos: ['nodejs'], name: 'Node.js', level: 92 },
  { logos: ['express'], name: 'Express.js', level: 90 },
  { logos: ['flutter'], name: 'Flutter', level: 85 },
  { logos: ['firebase'], name: 'Firebase', level: 88 },
  { logos: ['supabase'], name: 'Supabase', level: 82 },
  { logos: ['mongodb'], name: 'MongoDB', level: 87 },
  { logos: ['postgresql'], name: 'PostgreSQL', level: 85 },
  { logos: ['rest'], name: 'REST APIs', level: 95 },
  { logos: ['git', 'github'], name: 'Git/GitHub', level: 93 },
  { logos: ['javascript'], name: 'JavaScript', level: 96 },
  { logos: ['typescript'], name: 'TypeScript', level: 88 },
  { logos: ['tailwind'], name: 'Tailwind CSS', level: 90 },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-label">{'// 02 — skills'}</div>
        <h2 className="section-title">Tech <span>Stack</span></h2>

        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon">
                {skill.logos.map(logo => (
                  <BrandLogo key={logo} name={logo} />
                ))}
              </div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${skill.level}%` }} />
              </div>
              <div className="skill-percent">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
