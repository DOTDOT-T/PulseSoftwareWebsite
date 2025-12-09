// Contact.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.projectType) {
      setStatus('Please fill all required fields');
      return;
    }

    emailjs
      .send(
        'service_uhin3gq',
        'template_f6r98ju',
        formData,
        'iyA7i-_Aa6eX7zNxW'
      )
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      })
      .catch(() => {
        setStatus('Failed to send, try again.');
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-title">
          <h2>Start Your Project</h2>
          <p>I’ll get back to you within 24h with an estimate or technical proposal.</p>
        </div>

        <div className="contact-card">
          {/* Name */}
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

          {/* Email */}
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

          {/* Project Type */}
          <div className="form-group">
            <label htmlFor="projectType">Project Type</label>
            <select
              id="projectType"
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            >
              <option value="">Select...</option>
              <option value="unity-tool">Unity Tool</option>
              <option value="gameplay-prototype">Gameplay Prototype</option>
              <option value="web-app">Web App</option>
              <option value="custom-tool">Custom Tool</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Budget */}
          <div className="form-group">
            <label htmlFor="budget">Estimated Budget (optional)</label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            >
              <option value="">Select...</option>
              <option value="<300">Less than 300€</option>
              <option value="300-800">300–800€</option>
              <option value="800-1500">800–1500€</option>
              <option value="1500+">1500€+</option>
            </select>
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project..."
              rows={5}
            />
          </div>

          {/* Button */}
          <button
            className={`submit-btn ${status === 'success' ? 'success' : ''}`}
            onClick={handleSubmit}
          >
            {status === 'success' ? 'Message Sent! ✓' : 'Request a Quote'}
          </button>

          {status && status !== 'success' && <p className="status-msg">{status}</p>}

          <p className="privacy-note">Your data is never shared. Response within 24–48h.</p>
        </div>
      </div>
    </section>
  );
}