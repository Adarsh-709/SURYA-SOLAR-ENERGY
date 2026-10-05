import React from 'react';
import { SunMedium, TrendingUp, Landmark } from 'lucide-react';
import './WhySolar.css';

const WhySolar = () => {
  return (
    <section className="why-solar-section" id="why-solar">
      <div className="container">
        
        <div className="section-header text-center animate-fade-up">
          <h2>The Big Picture: <span>Why Solar?</span></h2>
          <p>Everything you need to know about the solar revolution happening right above your roof.</p>
        </div>

        <div className="why-solar-grid">
          
          <div className="ws-card animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="ws-icon-wrapper">
              <SunMedium size={40} className="ws-icon" />
            </div>
            <h3>What Actually is Solar?</h3>
            <p>
              Solar panels consist of photovoltaic (PV) cells that silently convert free sunlight directly into usable electricity. 
              There are no moving parts, no noise, and no emissions—just clean, reliable power flowing straight into your home's main panel to run all your appliances.
            </p>
          </div>

          <div className="ws-card animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="ws-icon-wrapper">
              <TrendingUp size={40} className="ws-icon" />
            </div>
            <h3>Why Do We Need It Now?</h3>
            <p>
              Traditional electricity grid tariffs are skyrocketing every year due to coal shortages and inflation. By switching to solar now, 
              you freeze your electricity costs for the next 25+ years. It's no longer just an environmental choice—it's the smartest financial defense against rising living costs.
            </p>
          </div>

          <div className="ws-card animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="ws-icon-wrapper">
              <Landmark size={40} className="ws-icon" />
            </div>
            <h3>Why is the Govt Pushing It?</h3>
            <p>
              India imports billions of dollars in fossil fuels to meet its energy demands. To achieve energy independence and the ambitious "Net Zero by 2070" climate goal, 
              the government is offering massive subsidies to incentivize citizens. Every home with solar strengthens the national grid and our economy.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhySolar;
