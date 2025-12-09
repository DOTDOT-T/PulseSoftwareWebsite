import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Carousel from './components/Carousel/Carousel';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

// Pages séparées
function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Carousel />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}

function Products() {
  return <div style={{ padding: '100px', textAlign: 'center' }}>Products Page</div>;
}

function About() {
  return <div style={{ padding: '100px', textAlign: 'center' }}>About Page</div>;
}

function TestimonialsPage() {
  return <div style={{ padding: '100px', textAlign: 'center' }}>Testimonials Page</div>;
}

function ContactPage() {
  return <div style={{ padding: '100px', textAlign: 'center' }}>Contact Page</div>;
}

function App() {
  document.title = "Pulse Software";

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
