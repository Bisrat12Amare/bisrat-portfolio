import React from 'react';

const skills = [
  { icon: '⚛️', name: 'React.js', level: 95 },
  { icon: '🟢', name: 'Node.js', level: 92 },
  { icon: '🚂', name: 'Express.js', level: 90 },
  { icon: '💙', name: 'Flutter', level: 85 },
  { icon: '🔥', name: 'Firebase', level: 88 },
  { icon: '⚡', name: 'Supabase', level: 82 },
  { icon: '🍃', name: 'MongoDB', level: 87 },
  { icon: '🐘', name: 'PostgreSQL', level: 85 },
  { icon: '🔌', name: 'REST APIs', level: 95 },
  { icon: '🐙', name: 'Git/GitHub', level: 93 },
  { icon: '🟨', name: 'JavaScript', level: 96 },
  { icon: '💎', name: 'TypeScript', level: 88 },
  { icon: '🎨', name: 'Tailwind CSS', level: 90 },
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
              <div className="skill-icon">{skill.icon}</div>
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
