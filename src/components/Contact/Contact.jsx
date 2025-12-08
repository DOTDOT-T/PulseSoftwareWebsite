import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill all fields');
      return;
    }
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Let's build something amazing together</p>
        </div>
        <div className="contact-card">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your project..."
              rows={5}
            />
          </div>
          <button
            className={`submit-btn ${status === 'success' ? 'success' : ''}`}
            onClick={handleSubmit}
          >
            {status === 'success' ? 'Message Sent! ✓' : 'Send Message'}
          </button>
        </div>
      </div>
    </section>
  );
}