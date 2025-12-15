import React, { useState, useEffect } from 'react';
import "./Hero.css";

export default function Hero() {
  // eslint-disable-next-line
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-elegant">

      <div className="grid-subtle"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Nos nouveaux produits sont là!
          </div>

          <h1>
            <span className="gradient-text">Construire le futur</span>
            <br />
            <span className="white-text">Avec Pulse</span>
          </h1>

          <p className="hero-subtitle">
            Une platforme, des possibilités infinies. Créez des jeux, déployez des applications et accélérez votre flux de travail avec des outils de pointe conçus pour les créateurs modernes.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Commencer
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="#about" className="btn btn-outline">
              Demo
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h2>1 plateforme</h2>
              <p>Pour créer, tester et livrer</p>
            </div>
            <div className="stat-item">
              <h2>personnalisable</h2>
              <p>Outils et services sur-mesure</p>
            </div>
            <div className="stat-item">
              <h2>Flow intégré</h2>
              <p>Du prototype au produit final</p>
            </div>
          </div>



        </div>

        <div className="hero-visual">
          <div className="floating-accent accent-1"></div>
          <div className="floating-accent accent-2"></div>
          
          <div className="hero-card">
            {[
              { label: 'Performance', description: 'Optimisé pour la création rapide et fluide', width: 90 },
              { label: 'Fiabilité', description: 'Outils stables et services fiables', width: 85 },
              { label: 'Scalabilité', description: 'Du prototype au produit final sans friction', width: 80 },
            ].map((item, idx) => (
              <div key={idx} className="feature-row">
                <div className="feature-icon"></div>
                <div className="feature-text">
                  <div className="feature-label">{item.label} - {item.description}</div>
                  <div className="feature-bar">
                    <div 
                      className="feature-bar-fill" 
                      style={{ width: `${item.width}%` }}
                    ></div>
                  </div>
                  <div className="feature-percentage">{item.width}%</div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}