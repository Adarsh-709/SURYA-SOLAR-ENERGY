import React from 'react';
import { ShieldCheck, MapPin, FileText, Wrench, Banknote, Sun } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-us-section" id="why-us">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <h2>Why Choose <span>Surya Solar Energy?</span></h2>
          <p>We don't just sell solar panels; we engineer complete, hassle-free energy solutions for your home and business.</p>
        </div>

        <div className="why-us-grid">
          
          {/* Card 1 */}
          <div className="wu-card animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="wu-icon"><Sun size={32} /></div>
            <h3>Premium Brands, Best Prices</h3>
            <p>We strictly distribute high-quality, Tier-1 solar panels from Top Indian Brands (100% DCR compliant) at highly reasonable and transparent prices for both domestic and commercial setups.</p>
          </div>

          {/* Card 2 */}
          <div className="wu-card animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="wu-icon"><MapPin size={32} /></div>
            <h3>Serving All of North Bengal & Sikkim</h3>
            <p>Our rapid deployment teams cover Darjeeling, Siliguri, Jalpaiguri, Kalimpong, Cooch Behar, Uttar Dinajpur, Dakshin Dinajpur, Alipurduar, and all across Sikkim.</p>
          </div>

          {/* Card 3 */}
          <div className="wu-card animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="wu-icon"><FileText size={32} /></div>
            <h3>Zero-Hassle Paperwork</h3>
            <p>Sit back and relax. We handle 100% of the complex documentation, government subsidy applications, and bank loan processing entirely for free.</p>
          </div>

          {/* Card 4 */}
          <div className="wu-card animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="wu-icon"><Wrench size={32} /></div>
            <h3>Professional Installers & Net Metering</h3>
            <p>Our highly trained engineers ensure flawless, safe installations and seamlessly integrate the Net Metering facility with your local grid.</p>
          </div>

          {/* Card 5 */}
          <div className="wu-card animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="wu-icon"><ShieldCheck size={32} /></div>
            <h3>25+ Years Guarantee</h3>
            <p>Invest with absolute peace of mind. Our solar panels come with an industry-leading 25+ years performance guarantee.</p>
          </div>

          {/* Card 6 */}
          <div className="wu-card animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="wu-icon"><Banknote size={32} /></div>
            <h3>100% Subsidy Assistance</h3>
            <p>We ensure you never miss out on your rightful government funds. We guide you step-by-step to claim your maximum eligible subsidy directly into your bank.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
