import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text animate-fade-up">
            <h2 className="heading-lg">Empowering Bengal with <br/><span className="text-accent">Clean Energy</span></h2>
            <p>
              As a <strong>Prime Distributor</strong> under Max Solar Project & Services, channel partner of APN Solar, Surya Solar Energy is committed to delivering world-class solar solutions. We handle everything from government approvals and subsidy processing to seamless installation and lifetime maintenance.
            </p>
            <p>
              Our office is located at <strong>1st Floor, Milestone Building, Check Post Siliguri</strong>. 
            </p>
            <p>
              We operate an extensive network—dealing with local distributors, agents, and directly with end customers. Whether it is a domestic setup or a massive commercial solar project, we have the expertise and inventory to serve you.
            </p>
            <div className="about-stats">
              <div className="a-stat">
                <h3>Prime</h3>
                <span>Distributor</span>
              </div>
              <div className="a-stat">
                <h3>100%</h3>
                <span>DCR Compliant</span>
              </div>
              <div className="a-stat">
                <h3>B2B & B2C</h3>
                <span>Domestic & Commercial</span>
              </div>
            </div>
          </div>
          <div className="about-image animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="about-logo-wrapper">
              <img src="/imgs/logo11.png" alt="Surya Solar Energy" className="about-main-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
