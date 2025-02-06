import React from 'react';
import './App.css';
import QuickFacts from './components/QuickFacts';
import Benefits from './components/Benefits';
import Varieties from './components/Varieties';

const App = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      <header className="navbar">
      <h1 className="logo">🌿 Aloe Vera</h1>
        <nav>
          <ul className="nav-links">
            <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={() => scrollToSection('quick-facts')}>Quick Facts</li>
            <li onClick={() => scrollToSection('benefits')}>Benefits</li>
            <li onClick={() => scrollToSection('varieties')}>Varieties</li>
          </ul>
        </nav>
      </header>

      <main className="content" id="home">
        <div className="text-section">
          <h2>What is Aloe Vera?</h2>
          <p>
            Aloe Vera is a succulent plant known for its healing and soothing properties. Its gel is rich in vitamins, minerals, and antioxidants, making it popular for skincare, digestion, and overall wellness. Widely used in natural remedies, Aloe Vera helps treat burns, hydrate skin, and support health.
          </p>
          <button className="cta-button">Aloe Vera</button>
        </div>
        <div className="image-section">
          <img
            src="/artificial-plant-bonsai-removebg-preview.png"
            alt="Aloe Vera Plant"
          />
        </div>
      </main>

      <section id="quick-facts">
        <QuickFacts />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <section id="varieties">
        <Varieties />
      </section>
    </div>
  );
};

export default App;