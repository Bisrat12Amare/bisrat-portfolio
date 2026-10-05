import React from 'react';
import { projects } from '../data/projects';
import { BrandLogo } from '../data/brandLogos';

const featured = projects.find(p => p.featured);
const others = projects.filter(p => !p.featured);

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-label">{'// 03 — projects'}</div>
        <h2 className="section-title">Featured <span>Work</span></h2>

        {featured && (
          <div className="feature-panel">
            <div className="feature-preview">
              <div className="feature-widget">
                <div className="feature-widget-title">ETHIO REFERRAL DASHBOARD</div>
                {[100, 75, 55].map((w, i) => (
                  <div key={i} className="feature-bar" style={{ width: `${w}%` }} />
                ))}
                <div className="feature-summary">
                  {[['127', 'Referrals'], ['43', 'Hospitals'], ['98%', 'Uptime']].map(([val, label]) => (
                    <div key={label} className="metric-card">
                      <div className="value">{val}</div>
                      <div className="label">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="feature-info">
              {featured.status && (
                <div className="status-pill">{featured.status}</div>
              )}
              <h3 className="feature-title">{featured.title}</h3>
              <p className="feature-description">{featured.description}</p>
              <div className="feature-tags">
                {featured.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <a href={featured.github} target="_blank" rel="noopener noreferrer" className="feature-link">
                → GitHub
              </a>
            </div>
          </div>
        )}

        <div className="projects-grid">
          {others.map(p => (
            <div key={p.id} className="project-card">
              <div className="card-icon">
                <BrandLogo name={p.icon} />
              </div>
              <h3 className="card-title">{p.title}</h3>
              <p className="card-description">{p.description}</p>
              <div className="card-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="card-cta card-cta--disabled"
              >
                → View on GitHub
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
