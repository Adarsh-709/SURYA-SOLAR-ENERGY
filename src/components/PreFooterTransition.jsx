import React, { useState, useRef } from 'react';
import './PreFooterTransition.css';

const PreFooterTransition = () => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setPosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 50, y: 50 }); // Reset to center
  };

  return (
    <div 
      className="pre-footer-transition" 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mouse-x': `${position.x}%`,
        '--mouse-y': `${position.y}%`
      }}
    >
      <div className="pft-glow-follower"></div>
      
      <div className="pft-content">
        <h2 className="pft-text">Ready to <span className="pft-text-accent">Illuminate</span> Your World?</h2>
        <p className="pft-subtext">Hover to reveal the energy.</p>
      </div>

      <div className="pft-wave-container">
        <svg className="pft-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default PreFooterTransition;
