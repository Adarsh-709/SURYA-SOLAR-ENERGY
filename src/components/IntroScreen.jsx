import React, { useState, useEffect } from 'react';
import './IntroScreen.css';

const IntroScreen = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start fading out after 2.8 seconds to let the animation play
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2800);

    // Call onComplete after the fade out transition finishes
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Split text into words to animate them sequentially
  const quote = "THE SUN DOESN'T SEND INVOICES".split(' ');

  return (
    <div className={`intro-screen ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="intro-content">
        <h1 className="intro-quote">
          {quote.map((word, index) => (
            <span 
              key={index} 
              className="intro-word" 
              style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </h1>
        <div className="intro-sun"></div>
      </div>
    </div>
  );
};

export default IntroScreen;
