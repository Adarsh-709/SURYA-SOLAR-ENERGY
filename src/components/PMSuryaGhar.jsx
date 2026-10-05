import React from 'react';
import { Sun, CheckCircle2, Landmark, ShieldCheck, Zap, FileText, AlertCircle } from 'lucide-react';
import './PMSuryaGhar.css';

const PMSuryaGhar = () => {
  return (
    <section className="pm-scheme-section" id="pm-surya-ghar">
      <div className="container">
        
        <div className="pm-header text-center animate-fade-up">
          <div className="pm-badge">Government Initiative</div>
          <h2>PM Surya Ghar <span>Muft Bijli Yojana</span></h2>
          <p>
            An ambitious rooftop on-grid solar initiative by the Government of India providing 
            heavy subsidies to make electricity practically free for residential homes.
          </p>
        </div>

        {/* Subsidy Breakdown */}
        <div className="subsidy-grid">
          <div className="subsidy-card animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="subsidy-icon"><Sun size={32} /></div>
            <h3>1 kW System</h3>
            <div className="subsidy-amount">₹30,000</div>
            <p>Government Subsidy</p>
          </div>
          <div className="subsidy-card highlight-card animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="subsidy-icon"><Sun size={32} /></div>
            <h3>2 kW System</h3>
            <div className="subsidy-amount">₹60,000</div>
            <p>Government Subsidy</p>
          </div>
          <div className="subsidy-card animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="subsidy-icon"><Sun size={32} /></div>
            <h3>3 kW+ System</h3>
            <div className="subsidy-amount">₹78,000</div>
            <p>Maximum Subsidy</p>
          </div>
        </div>

        {/* Financing Section */}
        <div className="financing-banner animate-fade-up">
          <div className="fin-content">
            <h3>Flexible Payment: Cash or Easy EMI</h3>
            <p>
              <strong>All Nationalized Banks</strong> (including SBI, PNB, Bank of Baroda, etc.) provide 
              solar loans at highly subsidized, low interest rates under this scheme. Zero stress, maximum savings.
            </p>
            <ul className="fin-features">
              <li><CheckCircle2 size={18} /> Available for Rooftop On-Grid Solar Only</li>
              <li><CheckCircle2 size={18} /> Minimal Documentation Required</li>
              <li><CheckCircle2 size={18} /> Fast Loan Approval Process</li>
            </ul>
          </div>
          <div className="fin-highlight">
            <Landmark size={48} className="bank-icon" />
            <h4>Special PNB Offer</h4>
            <div className="rate">5.75%</div>
            <p>Lowest Interest Rate Available</p>
          </div>
        </div>

        <div className="internal-transition animate-fade-up">
          <div className="it-line"></div>
          <h4>Maximize Your Subsidy With World-Class Panels</h4>
          <div className="it-line"></div>
        </div>

        {/* Brand Tiers */}
        <div className="tiers-section">
          <div className="tiers-header animate-fade-up">
            <h2>Choose Your <span>Solar Panels</span></h2>
            <p>We are authorized distributors for India's most trusted solar brands.</p>
          </div>
          
          <div className="tiers-grid">
            <div className="tier-card premium-tier animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="tier-badge">Premium Tier</div>
              <div className="tier-brands">
                <div className="brand-logo">
                  <img src="https://www.google.com/s2/favicons?domain=tatapower.com&sz=128" alt="Tata" />
                  <span>Tata</span>
                </div>
                <div className="brand-logo">
                  <img src="https://www.google.com/s2/favicons?domain=adani.com&sz=128" alt="Adani" />
                  <span>Adani</span>
                </div>
                <div className="brand-logo">
                  <img src="https://www.google.com/s2/favicons?domain=waaree.com&sz=128" alt="Waaree" />
                  <span>Waaree</span>
                </div>
              </div>
              <div className="tier-price">
                <span className="price">₹70,000</span>
                <span className="unit">/ kW</span>
              </div>
              <p>Top-of-the-line efficiency and unmatched durability for maximum long-term yield.</p>
              <ul className="tier-features">
                <li><ShieldCheck size={18} /> Tier-1 Global Brands</li>
                <li><Zap size={18} /> Ultra-High Efficiency Cells</li>
                <li><CheckCircle2 size={18} /> Premium Build Quality</li>
              </ul>
            </div>
            
            <div className="tier-card value-tier animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="tier-badge value">Value Tier</div>
              <div className="tier-brands">
                <div className="brand-logo">
                  <img src="https://www.google.com/s2/favicons?domain=renew.com&sz=128" alt="Renew" />
                  <span>Renew</span>
                </div>
                <div className="brand-logo">
                  <img src="https://www.google.com/s2/favicons?domain=luminousindia.com&sz=128" alt="Luminous" />
                  <span>Luminous</span>
                </div>
                <div className="brand-logo">
                  <img src="https://www.google.com/s2/favicons?domain=vikramsolar.com&sz=128" alt="Vikram" />
                  <span>Vikram</span>
                </div>
              </div>
              <div className="tier-price">
                <span className="price">₹66,000</span>
                <span className="unit">/ kW</span>
              </div>
              <p>Highly reliable and deeply trusted brands offering incredible value for your investment.</p>
              <ul className="tier-features">
                <li><ShieldCheck size={18} /> India's Most Trusted Brands</li>
                <li><Zap size={18} /> Excellent Cost-to-Performance</li>
                <li><CheckCircle2 size={18} /> Robust Warranty Support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div className="documents-section animate-fade-up">
          <div className="doc-header">
            <FileText size={32} className="doc-main-icon" />
            <h3>Required Documents to Apply</h3>
            <p>Submit these simple documents to us and we will handle the entire subsidy and loan process for you.</p>
          </div>
          
          <div className="doc-grid">
            <div className="doc-item">
              <CheckCircle2 size={20} className="text-accent" />
              <span>Aadhaar Card</span>
            </div>
            <div className="doc-item">
              <CheckCircle2 size={20} className="text-accent" />
              <span>PAN Card</span>
            </div>
            <div className="doc-item">
              <CheckCircle2 size={20} className="text-accent" />
              <span>Latest Electricity Bill</span>
            </div>
            <div className="doc-item">
              <CheckCircle2 size={20} className="text-accent" />
              <span>Bank Passbook (1st Page) <br/><small className="text-muted">For loan & subsidy transfer</small></span>
            </div>
            <div className="doc-item">
              <CheckCircle2 size={20} className="text-accent" />
              <span>Property Tax Receipt <br/><small className="text-muted">Or Land Record</small></span>
            </div>
          </div>

          <div className="doc-warning">
            <AlertCircle size={28} className="warning-icon" />
            <div className="warning-text">
              <strong>CRITICAL REQUIREMENT:</strong> To apply for the PM Surya Ghar Yojana, the <strong>electricity meter MUST be registered in the name of the applicant</strong> at the specific house where the solar system will be installed.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PMSuryaGhar;
