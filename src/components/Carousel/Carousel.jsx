import React, { useState, useEffect } from 'react';
import "./Carousel.css";

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  // eslint-disable-next-line
  const [direction, setDirection] = useState('next');
  const [isPaused, setIsPaused] = useState(false);

const slides = [
  {
    title: 'Solutions pour les entreprises',
    desc: 'Pulse accompagne les entreprises dans la création d’outils sur-mesure pour la gestion et le suivi de projet, afin de simplifier leur quotidien.',
    icon: '🏢',
    color: '#8b5cf6',
    stat: 'Optimisation'
  },
  {
    title: 'Outils web et applications',
    desc: 'Nous développons des solutions web et apps sur-mesure pour automatiser vos processus internes et améliorer l’efficacité de vos équipes.',
    icon: '💻',
    color: '#3b82f6',
    stat: 'Automatisation facile'
  },
  {
    title: 'Support pour développeurs et studios',
    desc: 'Création de plugins, outils Unity/Unreal et fonctionnalités personnalisées pour aider les développeurs à booster leur workflow et livrer plus rapidement.',
    icon: '🎮',
    color: '#ec4899',
    stat: 'Productivité accrue'
  }
];




  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setDirection('next');
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  const goToSlide = (index) => {
    setDirection(index > current ? 'next' : 'prev');
    setCurrent(index);
  };

  const nextSlide = () => {
    setDirection('next');
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="carousel-section-enhanced" id="about">


      <div className="carousel-header">
        <div className="carousel-badge">Pourquoi choisir Pulse</div>
        <h2>Objectif d'innovation</h2>
        <p>Découvrez nos objectifs</p>
      </div>

      <div className="carousel-wrapper">
        <div 
          className="carousel-container-enhanced"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {slides.map((slide, idx) => {
            let className = 'carousel-slide-enhanced';
            if (idx === current) className += ' active';
            else if (idx === (current - 1 + slides.length) % slides.length) className += ' prev';
            else if (idx === (current + 1) % slides.length) className += ' next';

            return (
              <div key={idx} className={className}>
                <div 
                  className="carousel-content-enhanced"
                  style={{ '--slide-color': slide.color }}
                >
                  <div className="pause-overlay">
                    {isPaused ? '⏸ Paused' : '▶ Playing'}
                  </div>

                  <div className="slide-icon-wrapper">
                    <div className="slide-icon">{slide.icon}</div>
                  </div>

                  <h3>{slide.title}</h3>
                  <p>{slide.desc}</p>
                  <div className="slide-stat">{slide.stat}</div>

                  <div className="carousel-progress">
                    <div 
                      className="carousel-progress-bar"
                      style={{ 
                        animationPlayState: isPaused ? 'paused' : 'running',
                        '--slide-color': slide.color
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="carousel-nav">
          <button className="carousel-arrow" onClick={prevSlide} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="carousel-dots-enhanced">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot-enhanced ${idx === current ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button className="carousel-arrow" onClick={nextSlide} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}