import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Carousel from './components/Carousel/Carousel';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import Services from './pages/Services';

// Pages séparées
function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Carousel />
      <Contact />
    </>
  );
}

function App() {
  document.title = "Pulse Software";

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
