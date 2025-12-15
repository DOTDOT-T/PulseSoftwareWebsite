import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Features/Features.css';

export default function Services() {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  const services = [
    {
      icon: '🏢',
      title: 'Services aux entreprises',
      color: '#3b82f6',
      path: '/services/business'
    },
    {
      icon: '💻',
      title: 'Outils Web & Apps',
      color: '#ec4899',
      path: '/services/web-apps'
    },
    {
      icon: '🎮',
      title: 'Outils pour développeurs',
      color: '#6366f1',
      path: '/services/dev-tools'
    },
    {
      icon: '⚡',
      title: 'Prestations sur-mesure',
      color: '#f59e0b',
      path: '/services/custom'
    },
    {
      icon: '🤝',
      title: 'Accompagnement & Support',
      color: '#10b981',
      path: '/services/support'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards(prev => [...new Set([...prev, index])]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.feature-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="features-section-enhanced" ref={sectionRef}>
      <div className="section-header">
        <div className="section-badge">Nos Services</div>
        <h2>Des solutions sur-mesure pour tous</h2>
        <p>De la gestion d’entreprise aux outils pour développeurs, découvrez comment Pulse peut accélérer vos projets.</p>
      </div>

      <div className="features-grid-enhanced">
        {services.map((service, idx) => (
          <Link
            to={service.path}
            key={idx}
            data-index={idx}
            className={`feature-card ${visibleCards.includes(idx) ? 'visible' : ''}`}
            style={{ '--card-color': service.color }}
          >
            <div className="feature-icon-wrapper">
              <div className="feature-card-icon">{service.icon}</div>
            </div>
            <div className="feature-header">
              <h3>{service.title}</h3>
            </div>
            <div className="feature-link">
              Découvrir
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}