import React, { useState } from 'react';
import axios from 'axios';
import { FaGithub, FaTelegramPlane, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const contactLinks = [
  { icon: <FaEnvelope />, label: 'bisratamare88@gmail.com', href: 'mailto:bisratamare88@gmail.com' },
  { icon: <FaPhoneAlt />, label: '+251 923 118 002', href: 'tel:+251923118002' },
  { icon: <FaTelegramPlane />, label: 't.me/BisratLe12', href: 'https://t.me/BisratLe12' },
  { icon: <FaGithub />, label: 'github.com/Bisrat12Amare', href: 'https://github.com/Bisrat12Amare' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    try {
      await axios.post(`${API_URL}/api/contact`, form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact">
      <div className="section-inner">
        <div className="section-label">{'// 05 — contact'}</div>
        <h2 className="section-title">Let's <span>Connect</span></h2>

        <div className="section-grid-2 contact-grid">
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

          <div className="contact-column">
            <div className="contact-fields-row">
              {['name', 'email'].map(field => (
                <div key={field} className="contact-field">
                  <label className="contact-label">
                    {field === 'name' ? 'Full Name' : 'Email'}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
                    className="contact-input"
                  />
                </div>
              ))}
            </div>

            <div className="contact-field">
              <label className="contact-label">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                className="contact-input"
              />
            </div>

            <div className="contact-field">
              <label className="contact-label">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="contact-textarea"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === 'loading'}
              className={`btn-primary contact-submit ${status}`}
            >
              {status === 'idle' && 'Send Message →'}
              {status === 'loading' && 'Sending...'}
              {status === 'success' && '✓ Message Sent!'}
              {status === 'error' && '✗ Error — Try Again'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
