import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './LegalPages.css';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="legal-page">
        <div className="container">
          <div className="legal-header">
            <h1>Terms of <span className="text-accent">Service</span></h1>
            <p>Effective Date: October 2026</p>
          </div>
          
          <div className="legal-content">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the Surya Solar Energy website, you agree to be bound by these Terms of Service. If you do not agree to all the terms, you may not access the website.</p>
            
            <h2>2. Services Provided</h2>
            <p>Surya Solar Energy provides information, quotation services, and installation booking for solar panel systems in North Bengal and Sikkim. All final technical parameters and quotations are subject to physical site inspection.</p>
            
            <h2>3. Subsidy Disclaimer</h2>
            <p>While we provide 100% assistance in applying for the PM Surya Ghar Muft Bijli Yojana, the final approval, disbursement, and timeline of the subsidy are entirely at the discretion of the Government of India and the respective Discoms. Surya Solar Energy cannot be held liable for any delays or rejections by the government.</p>
            
            <h2>4. Warranties and Guarantees</h2>
            <p>All solar panels sold by us carry a 25-year performance warranty provided directly by the Tier-1 manufacturer. Surya Solar Energy facilitates the warranty claims but does not underwrite them.</p>
            
            <h2>5. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Your continued use of the site following any changes signifies your acceptance.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;
