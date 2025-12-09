import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "./Features.css";

export default function Features() {
  const [activeCard, setActiveCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
const features = [
  {
    icon: '🌐',
    title: 'Cloud SaaS Platform',
    desc: 'Seamlessly deploy, collaborate, and scale your apps and projects from anywhere in the world.',
    color: '#3b82f6',
    stats: 'Plans from €2.99/month',
    path: '/products/saas'
  },
  {
    icon: '🔧',
    title: 'Unity Productivity Suite',
    desc: 'Enhance your Unity workflow with tools that save time, reduce friction, and increase performance.',
    color: '#ec4899',
    stats: 'Workflow Boost',
    path: '/products/unity-tools'
  },
  {
    icon: '📊',
    title: 'Analytics & Insights',
    desc: 'Get actionable insights into performance, engagement, and growth to make smarter decisions fast.',
    color: '#6366f1',
    stats: 'Data-Driven Decisions',
    path: '/products/analytics'
  },
  {
    icon: '⚡',
    title: 'On-Demand Tools',
    desc: 'Request custom tools or features and get them delivered fast, tailored to your project’s needs.',
    color: '#f59e0b',
    stats: 'Built for Your Needs',
    path: '/products/on-demand'
  },
  {
    icon: '🤝',
    title: 'Consulting & Support',
    desc: 'Our team works with you to optimize your workflow, integrate solutions, and accelerate your development pipeline.',
    color: '#10b981',
    stats: 'Expert Guidance',
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
        <div className="section-badge">Our Platform</div>
        <h2>Powerful Features</h2>
        <p>Everything you need to build amazing products, from conception to deployment</p>
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
              Learn more
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
