import React from 'react';
import './SmartHomeBanner.css';

const SmartHomeBanner = () => {
  return (
    <div className="smarthome-banner-wrapper">
      <div className="container">
        <div className="smarthome-banner animate-fade-up">
          <div className="sh-line left-line"></div>
          <h2 className="sh-text">
            Smart Home Investment: <br className="mobile-break" /><span className="text-accent">Powered by Surya Solar Energy</span>
          </h2>
          <div className="sh-line right-line"></div>
        </div>
      </div>
    </div>
  );
};

export default SmartHomeBanner;
