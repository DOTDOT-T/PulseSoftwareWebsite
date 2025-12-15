import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "./Features.css";

export default function Features() {
  const [activeCard, setActiveCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
const features = [
  {
    icon: '🏢',
    title: 'Services aux entreprises',
    desc: 'Nous créons des outils personnalisés pour les entreprises, que ce soit pour la gestion, la comptabilité ou le suivi de projet.',
    color: '#3b82f6',
    stats: 'Solutions adaptées',
    path: '/services/business'
  },
  {
    icon: '💻',
    title: 'Outils web & apps',
    desc: 'Développement d’applications web et de solutions sur-mesure pour automatiser et optimiser vos processus internes.',
    color: '#ec4899',
    stats: 'Automatisation facile',
    path: '/services/web-apps'
  },
  {
    icon: '🎮',
    title: 'Outils pour développeurs',
    desc: 'Création de plugins, outils Unity et Unreal pour améliorer le workflow des studios et des indépendants.',
    color: '#6366f1',
    stats: 'Productivité boostée',
    path: '/services/dev-tools'
  },
  {
    icon: '⚡',
    title: 'Prestations sur-mesure',
    desc: 'Si vous avez un besoin spécifique, nous concevons et livrons rapidement des fonctionnalités adaptées à votre projet.',
    color: '#f59e0b',
    stats: 'Rapide et fiable',
    path: '/services/custom'
  },
  {
    icon: '🤝',
    title: 'Consulting & Support',
    desc: 'Optimisez votre workflow, intégrez des solutions et accélérez vos projets grâce à notre expertise dédiée.',
    color: '#10b981',
    stats: 'Expertise dédiée',
    path: '/products/support'
  }
];




  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards(prev => [...new Set([...prev, index])]);
            }, index * 100);
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
    <section className="features-section-enhanced" id="products" ref={sectionRef}>
      <div className="section-header">
        <div className="section-badge">Notre platforme</div>
        <h2>Des outils puissant</h2>
        <p>Tout ce dont vous avez besoin, amélioré par vos retours.</p>
      </div>

      <div className="features-grid-enhanced">
        {features.map((feature, idx) => (
          <Link
            key={idx}
            to={feature.path}
            data-index={idx}
            className={`feature-card ${visibleCards.includes(idx) ? 'visible' : ''} ${activeCard === idx ? 'active' : ''}`}
            style={{ '--card-color': feature.color }}
            onMouseEnter={() => setActiveCard(idx)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="feature-decoration"></div>
            
            <div className="feature-icon-wrapper">
              <div className="feature-card-icon">{feature.icon}</div>
            </div>

            <div className="feature-header">
              <h3>{feature.title}</h3>
              <span className="feature-stats">{feature.stats}</span>
            </div>

            <p>{feature.desc}</p>

            <div className="feature-link">
              voir plus
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
