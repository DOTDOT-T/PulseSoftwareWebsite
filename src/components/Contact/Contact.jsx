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
      setStatus('Un des champs requis est manquant.');
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
        setStatus('Une erreur est survenue. Veuillez réessayer plus tard.');
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-title">
          <h2>Commençons votre projet</h2>
          <p>Nous vous contacterons rapidement après avoir reçu votre demande.</p>
        </div>

        <div className="contact-card">
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Votre nom"
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
              placeholder="votre@email.com"
            />
          </div>

          {/* Project Type */}
          <div className="form-group">
            <label htmlFor="projectType">Type de projet</label>
            <select
              id="projectType"
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            >
              <option value="">Selectionner...</option>
              <option value="Services aux entreprises">Services aux entreprises</option>
              <option value="Outils web & apps">Outils web & apps</option>
              <option value="Outils pour développeurs">Outils pour développeurs</option>
              <option value="Outil custom">Outil custom</option>
              <option value="Consulting & Support">Consulting & Support</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Budget */}
          <div className="form-group">
            <label htmlFor="budget">Estimation du budget (optionnel)</label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            >
              <option value="">Selectionner...</option>
              <option value="<300">Moins de 300€</option>
              <option value="300-800">300–800€</option>
              <option value="800-1500">800–1500€</option>
              <option value="1500+">plus de 1500€</option>
            </select>
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Parlez nous de votre projet..."
              rows={5}
            />
          </div>

          {/* Button */}
          <button
            className={`submit-btn ${status === 'success' ? 'success' : ''}`}
            onClick={handleSubmit}
          >
            {status === 'success' ? 'Message envoyé! ✓' : 'Envoyez votre demande'}
          </button>

          {status && status !== 'success' && <p className="status-msg">{status}</p>}

          <p className="privacy-note">vos données ne seront jamais partagés. Réponse sous 24 heures.</p>
        </div>
      </div>
    </section>
  );
}