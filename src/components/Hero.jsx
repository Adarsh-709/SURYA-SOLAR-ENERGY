import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="glow-orb"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-left">
          <div className="hero-content animate-fade-up">
            <h1 className="display-text">Powering<br/>The Future.</h1>
            <p className="hero-description text-muted">
              As a Prime Distributor under Max Solar Project & Services, channel partner of APN Solar, Surya Solar Energy is committed to delivering world-class solar solutions.
            </p>
            
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Start Your Journey <ArrowRight size={20} />
              </a>
              <a href="#about" className="btn-secondary">
                Discover More
              </a>
            </div>
          </div>

          <div className="hero-stats glass-panel animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="stat-item">
              <h3 className="stat-value text-accent">99.9%</h3>
              <p className="stat-label">Energy Efficiency</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-value text-accent">90%</h3>
              <p className="stat-label">Bill Savings</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-value text-accent">25+</h3>
              <p className="stat-label">Years Warranty</p>
            </div>
          </div>
        </div>

        <div className="hero-right animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <img src="/imgs/logo11.png" alt="Surya Solar Full Logo" className="hero-creative-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
