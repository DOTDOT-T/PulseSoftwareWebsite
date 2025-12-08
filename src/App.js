import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Carousel from './components/Carousel/Carousel';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  document.title = "Pulse Software";
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Carousel />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;