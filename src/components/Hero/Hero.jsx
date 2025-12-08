import React, { useState, useEffect } from 'react';
import "./Hero.css";

export default function Hero() {
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
            Now in Beta
          </div>

          <h1>
            <span className="gradient-text">Build the Future</span>
            <br />
            <span className="white-text">with Pulse</span>
          </h1>

          <p className="hero-subtitle">
            One platform, infinite possibilities. Build games, deploy apps, and accelerate your workflow with cutting-edge tools designed for modern creators.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="#about" className="btn btn-outline">
              Watch Demo
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>10K+</h3>
              <p>Active Users</p>
            </div>
            <div className="stat-item">
              <h3>50K+</h3>
              <p>Projects</p>
            </div>
            <div className="stat-item">
              <h3>120+</h3>
              <p>Countries</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-accent accent-1"></div>
          <div className="floating-accent accent-2"></div>
          
          <div className="hero-card">
            {[
              { width: 85, label: 'Performance' },
              { width: 92, label: 'Reliability' },
              { width: 78, label: 'Scalability' }
            ].map((item, idx) => (
              <div key={idx} className="feature-row">
                <div className="feature-icon"></div>
                <div className="feature-text">
                  <div className="feature-label">{item.label}</div>
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