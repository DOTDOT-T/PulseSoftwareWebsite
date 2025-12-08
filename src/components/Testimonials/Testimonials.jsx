import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    { name: 'Alice Smith', role: 'Game Developer', feedback: 'Pulse Engine boosted our production speed massively.', avatar: '👩‍💻' },
    { name: 'Bob Lee', role: 'Indie Dev', feedback: 'Tools are intuitive and highly customizable.', avatar: '👨‍💼' },
    { name: 'Carol Jones', role: 'Studio Lead', feedback: 'Our team collaboration has never been smoother.', avatar: '👩‍🎨' },
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-title">
        <h2>What Creators Say</h2>
        <p>Hear from our community</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card">
            <div className="testimonial-avatar">{t.avatar}</div>
            <p className="testimonial-text">"{t.feedback}"</p>
            <div className="testimonial-author">
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}