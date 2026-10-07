import React, { useState, useEffect } from 'react';
import { Sun, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);
      
      // Hide if scrolling down past 150px, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const translateWidget = document.getElementById('google_translate_element');
    const mobileContainer = document.getElementById('mobile-translate-container');
    const desktopContainer = document.getElementById('desktop-translate-container');

    const handleResize = () => {
      if (!translateWidget) return;
      if (window.innerWidth <= 768 && mobileContainer) {
        mobileContainer.appendChild(translateWidget);
      } else if (window.innerWidth > 768 && desktopContainer) {
        desktopContainer.appendChild(translateWidget);
      }
    };

    // Initial check after a short delay to ensure Google Translate script has created the element
    setTimeout(handleResize, 500);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <div className="container nav-container">
        <a href="/" className="nav-logo">
          <img src="/imgs/logo.png" alt="Surya Solar" className="logo-img" />
          <span className="logo-text">SURYA SOLAR ENERGY</span>
        </a>
        
        <div className="nav-links desktop-only">
          <a href="/#home" className="nav-link">Home</a>
          <a href="/#about" className="nav-link">About</a>
          <a href="/#solutions" className="nav-link">Solutions</a>
          <div id="desktop-translate-container" className="nav-translate">
            <div id="google_translate_element"></div>
          </div>
          <a href="/#contact" className="btn-primary nav-btn">Get Quote</a>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="/#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="/#about" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="/#solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
        <div id="mobile-translate-container" className="mobile-translate"></div>
        <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-accent">Get Quote</a>
      </div>
    </nav>
  );
};

export default Navbar;
