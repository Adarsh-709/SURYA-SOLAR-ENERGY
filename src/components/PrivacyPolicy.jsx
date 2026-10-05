import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './LegalPages.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="legal-page">
        <div className="container">
          <div className="legal-header">
            <h1>Privacy <span className="text-accent">Policy</span></h1>
            <p>Effective Date: October 2026</p>
          </div>
          
          <div className="legal-content">
            <h2>1. Information We Collect</h2>
            <p>At Surya Solar Energy, we collect personal information such as your name, phone number, and location when you request a callback or fill out our contact forms. We also collect automated information regarding your visit to our website to improve user experience.</p>
            
            <h2>2. How We Use Your Information</h2>
            <p>Your information is used strictly to provide you with solar quotations, arrange site visits, and assist with PM Surya Ghar subsidy applications. We do not sell your personal data to third parties under any circumstances.</p>
            
            <h2>3. PM Surya Ghar Yojana Processing</h2>
            <p>If you opt-in for subsidy assistance, we may require additional documentation (Aadhaar, PAN, Electricity Bill, Bank Passbook). These documents are used solely for submission to the official national portal and are handled with the highest level of confidentiality.</p>
            
            <h2>4. Data Protection</h2>
            <p>We implement strict security measures to ensure your data is protected against unauthorized access, alteration, or disclosure.</p>
            
            <h2>5. Contact Us</h2>
            <p>If you have any questions regarding this Privacy Policy, please contact us via WhatsApp at <strong>+91 98321 73164</strong>.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
