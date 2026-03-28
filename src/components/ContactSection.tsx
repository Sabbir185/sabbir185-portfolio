'use client';

import { useState, FormEvent } from 'react';

export default function ContactSection() {
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
          <span className="section-label">Let&apos;s Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Let&apos;s build something amazing together</h3>
            <p>
              I&apos;m always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </p>

            <div className="contact-methods">
              <a href="mailto:sabbir.py@gmail.com" className="contact-method" id="contact-email">
                <div className="contact-method-icon">📧</div>
                <div>
                  <div className="contact-method-label">Email</div>
                  <div className="contact-method-value">sabbir.py@gmail.com</div>
                </div>
              </a>

              <a href="tel:+8801725151578" className="contact-method" id="contact-phone">
                <div className="contact-method-icon">📱</div>
                <div>
                  <div className="contact-method-label">Phone</div>
                  <div className="contact-method-value">+880 1725 151578</div>
                </div>
              </a>

              <a href="https://github.com/sabbir185" target="_blank" rel="noopener noreferrer" className="contact-method" id="contact-github">
                <div className="contact-method-icon">💻</div>
                <div>
                  <div className="contact-method-label">GitHub</div>
                  <div className="contact-method-value">github.com/sabbir185</div>
                </div>
              </a>

              <a href="https://linkedin.com/in/sabbir185" target="_blank" rel="noopener noreferrer" className="contact-method" id="contact-linkedin">
                <div className="contact-method-icon">🔗</div>
                <div>
                  <div className="contact-method-label">LinkedIn</div>
                  <div className="contact-method-value">linkedin.com/in/sabbir185</div>
                </div>
              </a>
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
