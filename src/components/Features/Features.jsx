import React, { useState, useEffect, useRef } from 'react';
import "./Features.css";

export default function Features() {
  const [activeCard, setActiveCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const features = [
    { 
      icon: '🎮', 
      title: 'Game Engine', 
      desc: 'Build AAA games with our powerful engine',
      color: '#8b5cf6',
      stats: '2M+ downloads'
    },
    { 
      icon: '🌐', 
      title: 'Web Apps', 
      desc: 'Deploy scalable web applications instantly',
      color: '#3b82f6',
      stats: '99.9% uptime'
    },
    { 
      icon: '🔧', 
      title: 'Unity Tools', 
      desc: 'Enhance your Unity workflow',
      color: '#ec4899',
      stats: '50K+ users'
    },
    { 
      icon: '☁️', 
      title: 'Cloud Services', 
      desc: 'Seamless cloud integration',
      color: '#10b981',
      stats: 'Global CDN'
    },
    { 
      icon: '📊', 
      title: 'Analytics', 
      desc: 'Real-time performance insights',
      color: '#f59e0b',
      stats: 'Live data'
    },
    { 
      icon: '🔒', 
      title: 'Security', 
      desc: 'Enterprise-grade protection',
      color: '#ef4444',
      stats: 'SOC 2 certified'
    },
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
        <div className="section-badge">Our Platform</div>
        <h2>Powerful Features</h2>
        <p>Everything you need to build amazing products, from conception to deployment</p>
      </div>

      <div className="features-grid-enhanced">
        {features.map((feature, idx) => (
          <div
            key={idx}
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

            <a href="#" className="feature-link">
              Learn more
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}