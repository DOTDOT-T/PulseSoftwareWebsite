import React, { useState, useEffect } from "react";
import Navbar from "../Modules/NavBar/Navbar";
import "./LandingPage.css";

export default function LandingPage() {
  document.title = "Pulse Software";

  const carouselItems = [
    { title: "Innovate Freely", desc: "Empowering developers to create without limits.", img: "https://placehold.co/500x300/5356FF/fff?text=Slide+1" },
    { title: "Global Reach", desc: "Connecting your ideas to the world.", img: "https://placehold.co/500x300/5356FF/fff?text=Slide+2" },
    { title: "Cutting Edge Tools", desc: "Next-gen engines, apps, and integrations.", img: "https://placehold.co/500x300/5356FF/fff?text=Slide+3" },
    { title: "Cutting Edge Tools", desc: "Next-gen engines, apps, and integrations.", img: "https://placehold.co/500x300/5356FF/fff?text=Slide+3" },
    { title: "Cutting Edge Tools", desc: "Next-gen engines, apps, and integrations.", img: "https://placehold.co/500x300/5356FF/fff?text=Slide+3" },
    { title: "Cutting Edge Tools", desc: "Next-gen engines, apps, and integrations.", img: "https://placehold.co/500x300/5356FF/fff?text=Slide+3" },
    { title: "Cutting Edge Tools", desc: "Next-gen engines, apps, and integrations.", img: "https://placehold.co/500x300/5356FF/fff?text=Slide+3" },
    { title: "Cutting Edge Tools", desc: "Next-gen engines, apps, and integrations.", img: "https://placehold.co/500x300/5356FF/fff?text=Slide+3" },
  ];

  const testimonials = [
    { name: "Alice Smith", role: "Game Developer", feedback: "Pulse Engine boosted our production speed massively." },
    { name: "Bob Lee", role: "Indie Dev", feedback: "Tools are intuitive and highly customizable." },
    { name: "Carol Jones", role: "Studio Lead", feedback: "Our team collaboration has never been smoother." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = carouselItems.length;

  // Carousel navigation
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, []);

  // Touch swipe
  let touchStartX = 0;
  let touchEndX = 0;
  const handleTouchStart = (e) => (touchStartX = e.changedTouches[0].screenX);
  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) goNext();
    if (touchEndX > touchStartX + 50) goPrev();
  };

  // Reveal testimonials on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.Testimonial-card').forEach(card => observer.observe(card));
  }, []);

  return (
    <div className="Landing-nextgen">
      <Navbar />

      {/* HERO */}
      <section className="Landing-hero">
        <div className="Landing-hero-text">
          <h1>Pulse Software</h1>
          <p>One platform, multiple tools. Build games, deploy apps, and accelerate your workflow.</p>
          <div className="Landing-hero-actions">
            <a href="/webapp" className="Landing-cta-primary">Explore Web App</a>
            <a href="/game-engine" className="Landing-cta-outline">See Game Engine</a>
          </div>
        </div>
        <div className="Landing-hero-media">
          <a href="/webapp"><img src="https://placehold.co/400x300?text=WebApp" alt="Web App" /></a>
          <a href="/game-engine"><img src="https://placehold.co/400x300?text=Engine" alt="Game Engine" /></a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="Landing-about">
        <div className="Landing-about-text">
          <h2>Our Vision</h2>
          <p>Pulse empowers creators worldwide. From hobbyists to studios, we provide tools, guidance, and an ecosystem that adapts to your needs.</p>
        </div>
        <div className="Landing-about-media">
          <img src="https://placehold.co/400x300?text=Vision" alt="Vision" />
        </div>
      </section>

      {/* CAROUSEL */}
      <section className="Landing-carousel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <button className="carousel-arrow left" onClick={goPrev}>‹</button>
        <div className="carousel-slides">
          {carouselItems.map((item, idx) => {
            const offset = idx - currentIndex;
            const absOffset = Math.abs(offset);
            return (
              <div
                key={idx}
                className="Carousel-item"
                style={{
                  transform: `translateX(${offset * 50}%) scale(${1 - absOffset * 0.15}) rotateY(${offset * 15}deg)`,
                  opacity: offset === 0 ? 1 : 0.5,
                  zIndex: offset === 0 ? 2 : 1,
                }}
              >
                <img src={item.img} alt={item.title}/>
                <div className="Carousel-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="carousel-arrow right" onClick={goNext}>›</button>
      </section>

      {/* FEATURES */}
      <section className="Landing-feature-grid">
        {["Web App","Game Engine Tool","Unity Tool","Game Engine","Service Provider"].map((title, i) => (
          <div key={i} className="Landing-feature-card">
            <h3>{title}</h3>
            <p>Detailed description about {title}.</p>
          </div>
        ))}
      </section>

      {/* TESTIMONIALS */}
      <section className="Landing-testimonials">
        <h2>What Our Users Say</h2>
        <div className="Testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="Testimonial-card">
              <img src="https://placehold.co/60x60" className="testimonial-avatar" alt="profile" />
              <p>"{t.feedback}"</p>
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* UPDATES */}
      <section className="Landing-info">
        <h2>Latest Updates</h2>
        <div className="Info-grid">
          {[1,2,3].map((i) => (
            <div key={i} className="Info-card">
              <img src={`https://placehold.co/300x200?text=Update${i}`} alt={`Update${i}`}/>
              <h4>Update {i} Title</h4>
              <p>Brief update description for update {i}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="Landing-footer-nextgen">
        <p>© 2025 Pulse Software. Designed for creators, built for everyone.</p>
        <div className="Footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}
