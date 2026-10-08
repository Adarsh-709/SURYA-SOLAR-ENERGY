import React, { useState, useEffect } from 'react';
import { Sun, Home, Upload, Download } from 'lucide-react';
import './NetMeteringAnimation.css';

const NetMeteringAnimation = () => {
  const [isNight, setIsNight] = useState(false);
  const [metrics, setMetrics] = useState({
    solar: 5.2,
    home: 2.1,
    exported: 0.0,
    imported: 0.0
  });

  useEffect(() => {
    if (isNight) {
      setMetrics(m => ({ ...m, solar: 0, home: 2.5 }));
    } else {
      setMetrics(m => ({ ...m, solar: 5.2, home: 2.1 }));
    }
  }, [isNight]);

  // Automatically cycle between day and night every 20 seconds
  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setIsNight(prev => !prev);
    }, 20000);
    return () => clearInterval(cycleInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(m => {
        let nextSolar = isNight ? 0 : +(m.solar + (Math.random() * 0.4 - 0.2)).toFixed(2);
        let nextHome = +(m.home + (Math.random() * 0.2 - 0.1)).toFixed(2);
        
        if (nextSolar < 4.0 && !isNight) nextSolar = 4.0;
        if (nextSolar > 7.0 && !isNight) nextSolar = 7.0;
        if (nextHome < 1.0) nextHome = 1.0;
        if (nextHome > 4.0) nextHome = 4.0;

        const net = nextSolar - nextHome;
        let nextExported = m.exported;
        let nextImported = m.imported;

        if (net > 0) {
          nextExported += net * 0.15;
        } else {
          nextImported += Math.abs(net) * 0.15;
        }

        return { solar: nextSolar, home: nextHome, exported: nextExported, imported: nextImported };
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [isNight]);

  const netPower = (metrics.solar - metrics.home).toFixed(2);
  const isExporting = netPower > 0;
  
  const netEnergyBalance = metrics.exported - metrics.imported;
  const billAmount = netEnergyBalance >= 0 ? 0 : Math.abs(netEnergyBalance) * 8.5;

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
              <div className="live-reading generation-glow text-yellow-400">
                ⚡ +{metrics.solar.toFixed(2)} kW
              </div>
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
              <div className="live-reading consumption-glow text-orange-400">
                🔌 -{metrics.home.toFixed(2)} kW
              </div>
              <div className={`nm-icon-circle ${!isNight ? 'house-glow-day' : 'house-glow-night'}`}>
                <img src="https://img.icons8.com/color/96/home.png" alt="Home" width="60" height="60" />
              </div>
              <span>Your Home</span>
              <div className="nm-tooltip">
                {!isNight ? 'Powered free by solar' : 'Powered by grid'}
              </div>
            </div>

            <div className="nm-arrow-container bi-directional item-home-meter">
              {!isNight ? (
                <>
                  <div className="animated-arrow forward excess-glow"></div>
                  <div className="meter-badge">
                    <span>Exporting ⟲</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="animated-arrow backward night-glow"></div>
                  <div className="meter-badge night-badge">
                    <span>Importing ⟳</span>
                  </div>
                </>
              )}
            </div>

            <div className="nm-step item-meter-device">
              <div className={`live-reading ${isExporting ? 'exporting-glow text-green-400' : 'importing-glow text-blue-400'}`}>
                {isExporting ? '⟲ Export: ' : '⟳ Import: '}
                {Math.abs(netPower).toFixed(2)} kW
              </div>
              <div className={`nm-icon-circle ${!isNight ? 'excess-glow' : 'night-glow'}`}>
                <img src="https://img.icons8.com/color/96/electricity.png" alt="Net Meter" width="60" height="60" />
              </div>
              <span>Net Meter</span>
              <div className="nm-tooltip">
                {!isNight ? 'Meter runs backwards!' : 'Using "Stored" Energy'}
              </div>
            </div>

            <div className="nm-arrow-container bi-directional item-meter-grid">
              {!isNight ? (
                <div className="animated-arrow forward excess-glow"></div>
              ) : (
                <div className="animated-arrow backward night-glow"></div>
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

        <div className="bill-widget-container">
          <div className={`bill-widget ${billAmount === 0 ? 'bill-zero' : 'bill-rising'}`}>
            <div className="bill-header">Monthly Bill</div>
            <div className="bill-amount">
              ₹ {billAmount.toFixed(2)}
            </div>
            <div className="bill-details">
              <div className="bd-row text-green-400"><span>Credits:</span> <span>{metrics.exported.toFixed(1)} kWh</span></div>
              <div className="bd-row text-blue-400"><span>Imported:</span> <span>{metrics.imported.toFixed(1)} kWh</span></div>
            </div>
            <div className="bill-status">
              {billAmount === 0 ? 'Zero Bill! 🎉' : 'Paying for Grid ⚡'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetMeteringAnimation;
