import React, { useState, useEffect } from 'react';
import { Sun, Menu, X, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHidden(true);
        setMobileMenuOpen(false);
        setLangMenuOpen(false);
      } else {
        setHidden(false);
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (langCode) => {
    // Set the google translate cookie
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    document.cookie = `googtrans=/en/${langCode}; domain=.${window.location.hostname}; path=/;`;
    window.location.reload();
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <div className="container nav-container">
        <a href="/" className="nav-logo">
          <img src="/imgs/logo.png" alt="Surya Solar" className="logo-img" />
          <span className="logo-text">SURYA SOLAR ENERGY</span>
        </a>
        
        <div className="nav-links desktop-only">
          <a href="/#home" className="nav-link">Home</a>
          <a href="/#about" className="nav-link">About Us</a>
          <a href="/#solutions" className="nav-link">Solutions</a>
          <a href="/#contact" className="btn-primary nav-btn">Get Quote</a>
        </div>

        <div className="nav-actions">
          <div className="translate-wrapper" onClick={() => setLangMenuOpen(!langMenuOpen)}>
            <Globe size={18} className="translate-icon" />
            {langMenuOpen && (
              <div className="lang-dropdown">
                <button onClick={(e) => { e.stopPropagation(); changeLanguage('en'); }}>English</button>
                <button onClick={(e) => { e.stopPropagation(); changeLanguage('hi'); }}>Hindi</button>
                <button onClick={(e) => { e.stopPropagation(); changeLanguage('ne'); }}>Nepali</button>
                <button onClick={(e) => { e.stopPropagation(); changeLanguage('bn'); }}>Bengali</button>
              </div>
            )}
          </div>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="/#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="/#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
        <a href="/#solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
        <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-accent">Get Quote</a>
      </div>
    </nav>
  );
};

export default Navbar;
