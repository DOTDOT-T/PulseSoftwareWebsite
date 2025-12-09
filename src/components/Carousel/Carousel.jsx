import React, { useState, useEffect } from 'react';

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  // eslint-disable-next-line
  const [direction, setDirection] = useState('next');
  const [isPaused, setIsPaused] = useState(false);

const slides = [
  {
    title: 'We Listen & Deliver',
    desc: 'We build solutions tailored to what developers and creators actually need, not just flashy features.',
    icon: '🛠️',
    color: '#8b5cf6',
    stat: 'User-Centric Design'
  },
  {
    title: 'Save Time & Accelerate',
    desc: 'Streamline your workflow, reduce friction, and focus on building instead of configuring or maintaining.',
    icon: '⏱️',
    color: '#3b82f6',
    stat: 'Faster Development'
  },
  {
    title: 'Global & Reliable',
    desc: 'Deploy confidently worldwide with tools that scale, stay secure, and maintain 99.9% uptime.',
    icon: '🌐',
    color: '#ec4899',
    stat: 'Trusted Everywhere'
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
      <style>{`
        .carousel-section-enhanced {
          padding: 8rem 2rem;
          background: linear-gradient(180deg, #000 0%, #0a0a0a 100%);
          position: relative;
          overflow: hidden;
        }

        /* Background decoration */
        .carousel-section-enhanced::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.08), transparent 70%);
          border-radius: 50%;
          animation: pulse-slow 8s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
        }

        .carousel-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 1;
        }

        .carousel-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 2rem;
          color: #a78bfa;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
        }

        .carousel-header h2 {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .carousel-header p {
          color: #888;
          font-size: 1.125rem;
        }

        .carousel-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .carousel-container-enhanced {
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-slide-enhanced {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .carousel-slide-enhanced.active {
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
          z-index: 2;
        }

        .carousel-slide-enhanced.prev {
          opacity: 0;
          transform: translateX(-100%) scale(0.8);
        }

        .carousel-slide-enhanced.next {
          opacity: 0;
          transform: translateX(100%) scale(0.8);
        }

        .carousel-content-enhanced {
          background: rgba(15, 15, 15, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 2rem;
          padding: 4rem;
          text-align: center;
          max-width: 700px;
          width: 100%;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .carousel-content-enhanced:hover {
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        /* Gradient border effect */
        .carousel-content-enhanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--slide-color, #8b5cf6), transparent);
        }

        /* Icon background glow */
        .slide-icon-wrapper {
          width: 5rem;
          height: 5rem;
          margin: 0 auto 2rem;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.4s ease;
        }

        .carousel-content-enhanced:hover .slide-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          background: var(--slide-color);
        }

        .slide-icon-wrapper::before {
          content: '';
          position: absolute;
          inset: -15px;
          background: var(--slide-color);
          border-radius: 50%;
          opacity: 0;
          filter: blur(30px);
          transition: opacity 0.4s;
        }

        .carousel-content-enhanced:hover .slide-icon-wrapper::before {
          opacity: 0.4;
        }

        .slide-icon {
          font-size: 2.5rem;
          filter: drop-shadow(0 0 20px var(--slide-color));
        }

        .carousel-content-enhanced h3 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
          transition: color 0.3s;
        }

        .carousel-content-enhanced:hover h3 {
          color: var(--slide-color);
        }

        .carousel-content-enhanced p {
          font-size: 1.25rem;
          color: #888;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .slide-stat {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 2rem;
          color: #aaa;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.3s;
        }

        .carousel-content-enhanced:hover .slide-stat {
          background: rgba(139, 92, 246, 0.1);
          border-color: var(--slide-color);
          color: var(--slide-color);
        }

        /* Navigation arrows */
        .carousel-nav {
          display: flex;
          gap: 1rem;
          justify-content: center;
          align-items: center;
          margin-top: 3rem;
        }

        .carousel-arrow {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-arrow:hover {
          background: rgba(139, 92, 246, 0.2);
          border-color: #8b5cf6;
          transform: scale(1.1);
        }

        .carousel-arrow:active {
          transform: scale(0.95);
        }

        /* Enhanced dots */
        .carousel-dots-enhanced {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }

        .carousel-dot-enhanced {
          position: relative;
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          padding: 0;
        }

        .carousel-dot-enhanced::before {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 2px solid transparent;
          transition: all 0.4s;
        }

        .carousel-dot-enhanced:hover {
          background: rgba(255, 255, 255, 0.5);
          transform: scale(1.2);
        }

        .carousel-dot-enhanced.active {
          width: 2.5rem;
          border-radius: 0.5rem;
          background: linear-gradient(90deg, #8b5cf6, #3b82f6);
        }

        .carousel-dot-enhanced.active::before {
          border-color: rgba(139, 92, 246, 0.3);
          inset: -8px;
        }

        /* Progress bar */
        .carousel-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: rgba(255, 255, 255, 0.05);
        }

        .carousel-progress-bar {
          height: 100%;
          background: var(--slide-color, #8b5cf6);
          animation: progress 5s linear infinite;
          transform-origin: left;
        }

        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        /* Pause indicator */
        .pause-overlay {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 1rem;
          color: #888;
          font-size: 0.75rem;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .carousel-content-enhanced:hover .pause-overlay {
          opacity: 1;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .carousel-section-enhanced {
            padding: 4rem 1rem;
          }

          .carousel-header h2 {
            font-size: 2rem;
          }

          .carousel-container-enhanced {
            height: 400px;
          }

          .carousel-content-enhanced {
            padding: 2.5rem 2rem;
          }

          .carousel-content-enhanced h3 {
            font-size: 1.75rem;
          }

          .carousel-content-enhanced p {
            font-size: 1rem;
          }

          .slide-icon-wrapper {
            width: 4rem;
            height: 4rem;
          }

          .slide-icon {
            font-size: 2rem;
          }

          .carousel-arrow {
            width: 2.5rem;
            height: 2.5rem;
          }
        }
      `}</style>

      <div className="carousel-header">
        <div className="carousel-badge">Why Choose Pulse</div>
        <h2>Built for Innovation</h2>
        <p>Discover what makes our platform unique</p>
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