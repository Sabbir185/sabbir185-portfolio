'use client';

import { useState, FormEvent } from 'react';
import { contactData } from '@/data';

export default function ContactSection() {
  const { sectionLabel, sectionTitle, sectionSubtitle, infoHeading, infoDescription, methods } = contactData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend API
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{sectionLabel}</span>
          <h2 className="section-title">{sectionTitle}</h2>
          <p className="section-subtitle">{sectionSubtitle}</p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>{infoHeading}</h3>
            <p>{infoDescription}</p>

            <div className="contact-methods">
              {methods.map((method) => (
                <a
                  key={method.id}
                  href={method.href}
                  className="contact-method"
                  id={method.id}
                  {...(method.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <div className="contact-method-icon">{method.icon}</div>
                  <div>
                    <div className="contact-method-label">{method.label}</div>
                    <div className="contact-method-value">{method.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
            <h4>Send me a message</h4>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email-input">Your Email</label>
                <input
                  type="email"
                  id="contact-email-input"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                type="text"
                id="contact-subject"
                placeholder="Project Discussion"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                placeholder="Tell me about your project..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit" id="contact-submit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
