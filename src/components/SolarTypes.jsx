import React from 'react';
import { Activity, Battery, Zap, CheckCircle2, XCircle } from 'lucide-react';
import './SolarTypes.css';

const SolarTypes = () => {
  return (
    <section className="solar-types-section" id="solar-types">
      <div className="container">
        
        <div className="section-header text-center animate-fade-up">
          <h2>Understanding <span>Solar Systems</span></h2>
          <p>Not all solar systems are the same. Discover which setup is perfectly tailored for your energy needs.</p>
        </div>

        <div className="types-grid">
          
          {/* On-Grid */}
          <div className="type-card animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="type-header">
              <div className="type-icon"><Activity size={32} /></div>
              <h3>On-Grid System</h3>
              <span className="type-badge">Most Popular</span>
            </div>
            <div className="type-body">
              <div className="type-section">
                <h4>How it Works</h4>
                <p>Directly connected to the public electricity grid. It doesn't use batteries. Extra electricity generated is exported to the grid via Net Metering.</p>
              </div>
              <div className="type-section">
                <h4>Advantages</h4>
                <ul className="pros-list">
                  <li><CheckCircle2 size={16} /> Lowest upfront cost (No batteries)</li>
                  <li><CheckCircle2 size={16} /> Eligible for Govt Subsidy</li>
                  <li><CheckCircle2 size={16} /> Earn credits through Net Metering</li>
                </ul>
              </div>
              <div className="type-section">
                <h4>Disadvantages</h4>
                <ul className="cons-list">
                  <li><XCircle size={16} /> Won't work during grid power cuts</li>
                  <li><XCircle size={16} /> Requires grid approval</li>
                </ul>
              </div>
            </div>
            <div className="type-footer">
              <strong>Best For:</strong> Urban homes with rare power cuts aiming for maximum financial savings.
            </div>
          </div>

          {/* Off-Grid */}
          <div className="type-card animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="type-header">
              <div className="type-icon"><Battery size={32} /></div>
              <h3>Off-Grid System</h3>
            </div>
            <div className="type-body">
              <div className="type-section">
                <h4>How it Works</h4>
                <p>Completely disconnected from the main grid. Relies purely on solar panels and heavy battery banks to store and supply power 24/7.</p>
              </div>
              <div className="type-section">
                <h4>Advantages</h4>
                <ul className="pros-list">
                  <li><CheckCircle2 size={16} /> 100% Energy Independence</li>
                  <li><CheckCircle2 size={16} /> Immune to grid power cuts</li>
                  <li><CheckCircle2 size={16} /> No grid approvals needed</li>
                </ul>
              </div>
              <div className="type-section">
                <h4>Disadvantages</h4>
                <ul className="cons-list">
                  <li><XCircle size={16} /> High upfront cost (Batteries are expensive)</li>
                  <li><XCircle size={16} /> No Government Subsidy</li>
                  <li><XCircle size={16} /> Battery replacement every 5-7 years</li>
                </ul>
              </div>
            </div>
            <div className="type-footer">
              <strong>Best For:</strong> Remote areas or farms with frequent power cuts or zero grid access.
            </div>
          </div>

          {/* Hybrid */}
          <div className="type-card animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="type-header">
              <div className="type-icon"><Zap size={32} /></div>
              <h3>Hybrid System</h3>
            </div>
            <div className="type-body">
              <div className="type-section">
                <h4>How it Works</h4>
                <p>The best of both worlds. Connected to the grid but also includes battery storage. Can export extra power and survive power cuts.</p>
              </div>
              <div className="type-section">
                <h4>Advantages</h4>
                <ul className="pros-list">
                  <li><CheckCircle2 size={16} /> Uninterrupted power supply</li>
                  <li><CheckCircle2 size={16} /> Can export excess to the grid</li>
                  <li><CheckCircle2 size={16} /> High flexibility and security</li>
                </ul>
              </div>
              <div className="type-section">
                <h4>Disadvantages</h4>
                <ul className="cons-list">
                  <li><XCircle size={16} /> Most expensive system</li>
                  <li><XCircle size={16} /> Complex installation</li>
                </ul>
              </div>
            </div>
            <div className="type-footer">
              <strong>Best For:</strong> Premium homes/clinics needing absolute zero downtime and having higher budgets.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolarTypes;
