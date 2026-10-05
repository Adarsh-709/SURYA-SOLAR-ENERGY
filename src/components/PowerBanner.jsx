import React from 'react';
import './PowerBanner.css';

const PowerBanner = () => {
  return (
    <section className="power-banner">
      <div className="power-overlay"></div>
      <div className="container">
        <h2 className="power-text animate-fade-up">
          Own Your Power, <br />
          <span className="text-accent">Stop Renting</span> From The Grid.
        </h2>
      </div>
    </section>
  );
};

export default PowerBanner;
