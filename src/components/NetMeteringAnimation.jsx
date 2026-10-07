import React, { useState } from 'react';
import './NetMeteringAnimation.css';

const NetMeteringAnimation = () => {
  const [isNight, setIsNight] = useState(false);

  return (
    <section className="net-metering-section animate-fade-up">
      <div className="container">
        <div className="section-header text-center">
          <h2>How <span className="text-accent">Net Metering</span> Works</h2>
          <p>Toggle between Day and Night to see how energy flows and saves you money.</p>
        </div>

        <div className="nm-toggle-container text-center mb-4">
          <button 
            className={`nm-toggle-btn ${!isNight ? 'active day' : ''}`} 
            onClick={() => setIsNight(false)}
          >
            ☀️ Day Time
          </button>
          <button 
            className={`nm-toggle-btn ${isNight ? 'active night' : ''}`} 
            onClick={() => setIsNight(true)}
          >
            🌙 Night Time
          </button>
        </div>

        <div className={`nm-responsive-container ${isNight ? 'night-mode' : 'day-mode'}`}>
          <div className="nm-flow-row">
            
            <div className="nm-step item-sun">
              <div className={`nm-icon-circle ${!isNight ? 'sun-glow' : 'inactive-glow'}`}>
                {isNight ? (
                  <img src="https://img.icons8.com/color/96/partly-cloudy-night--v1.png" alt="Moon and Clouds" width="55" height="55" />
                ) : (
                  <img src="https://img.icons8.com/color/96/sun--v1.png" alt="Sun" width="65" height="65" />
                )}
              </div>
              <span>{isNight ? 'Night Sky' : 'Sunlight'}</span>
            </div>

            <div className="nm-arrow-container arrow-sun-panel">
              {!isNight && <div className="animated-arrow forward"></div>}
            </div>

            <div className="nm-step item-panel">
              <div className={`nm-icon-circle ${!isNight ? 'panel-glow' : 'inactive-glow'}`}>
                <img src="https://img.icons8.com/color/96/solar-panel.png" alt="Solar Panels" width="60" height="60" />
              </div>
              <span>Solar Panels</span>
              <div className="nm-tooltip">{!isNight ? 'Generates DC Electricity' : 'Inactive at night'}</div>
            </div>

            <div className="nm-arrow-container arrow-panel-inv">
              {!isNight && <div className="animated-arrow forward dc-glow"></div>}
              {!isNight && <div className="power-type-badge">DC</div>}
            </div>

            <div className="nm-step item-inv">
              <div className={`nm-icon-circle ${!isNight ? 'inverter-glow' : 'inactive-glow'}`}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <polyline points="4,10 20,10"></polyline>
                  <circle cx="9" cy="15" r="1.5" fill="currentColor"></circle>
                  <circle cx="15" cy="15" r="1.5" fill="currentColor"></circle>
                  <path d="M12 4v6"></path>
                </svg>
              </div>
              <span>Inverter</span>
              <div className="nm-tooltip">{!isNight ? 'Converts DC to AC' : 'Standing by'}</div>
            </div>

            <div className="nm-arrow-container arrow-inv-home">
              {!isNight && <div className="animated-arrow forward ac-glow"></div>}
              {!isNight && <div className="power-type-badge">AC</div>}
            </div>

            <div className="nm-step house-step item-home">
              <div className={`nm-icon-circle ${!isNight ? 'house-glow-day' : 'house-glow-night'}`}>
                <img src="https://img.icons8.com/color/96/home.png" alt="Home" width="60" height="60" />
              </div>
              <span>Your Home</span>
              <div className="nm-tooltip">
                {!isNight ? 'Powered free by solar' : 'Powered by grid'}
              </div>
            </div>

            <div className="nm-arrow-container bi-directional item-meter">
              {!isNight ? (
                <>
                  <div className="animated-arrow forward excess-glow"></div>
                  <div className="meter-badge">
                    <span>Exporting ⟲</span>
                    <small>Meter Runs Backwards!</small>
                  </div>
                </>
              ) : (
                <>
                  <div className="animated-arrow backward night-glow"></div>
                  <div className="meter-badge night-badge">
                    <span>Importing ⟳</span>
                    <small>Using "Stored" Free Energy</small>
                  </div>
                </>
              )}
            </div>

            <div className="nm-step item-grid">
              <div className="nm-icon-circle grid-glow">🗼</div>
              <span>Electric Grid</span>
              <div className="nm-tooltip">
                {!isNight ? 'Receives your excess energy' : 'Supplies energy back to you'}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NetMeteringAnimation;
