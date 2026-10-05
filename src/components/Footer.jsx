import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './Footer.css';

const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <img src="/imgs/logo.png" alt="Surya Solar" className="footer-logo-img" />
              <span className="footer-logo-text">SURYA SOLAR ENERGY</span>
            </a>
            <p className="text-muted mt-2">
              Clean Energy For a Brighter Tomorrow
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Company</h4>
              <a href="/#about">About Us</a>
              <Link to="/careers">Careers</Link>
              <a href="/#contact">Contact</a>
            </div>
            <div className="link-group">
              <h4>Solutions</h4>
              <a href="#residential">Residential</a>
              <a href="#commercial">Commercial</a>
              <a href="#enterprise">Enterprise</a>
            </div>
            <div className="link-group">
              <h4>Connect</h4>
              <a href="https://wa.me/919832173164" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={20} /> +91 98321 73164
              </a>
              <a href="https://www.facebook.com/profile.php?id=61594522657178" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FacebookIcon size={20} /> Facebook Page
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="text-muted">&copy; {new Date().getFullYear()} Surya Solar Energy. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
