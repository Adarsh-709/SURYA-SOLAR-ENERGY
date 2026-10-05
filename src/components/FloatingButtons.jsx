import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import CalculatorModal from './CalculatorModal';
import './FloatingButtons.css';

const WhatsappIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="32"
    height="32"
    fill="currentColor"
  >
    <path d="M12.031 0C5.398 0 .015 5.378.015 12.015c0 2.12.55 4.195 1.597 6.015L.031 24l6.115-1.602a11.972 11.972 0 005.885 1.545h.005C18.667 23.943 24 18.563 24 11.93 24 8.71 22.753 5.67 20.478 3.398A11.916 11.916 0 0012.031 0zm0 21.943h-.003c-1.785 0-3.53-.48-5.06-1.385l-.36-.215-3.766.988.995-3.666-.234-.373a9.924 9.924 0 01-1.52-5.343C2.017 6.47 6.477 2.01 12.031 2.01c2.66 0 5.16 1.03 7.042 2.913A9.92 9.92 0 0122.01 11.93c0 5.485-4.462 9.944-9.979 9.944zm5.474-7.48c-.3-.15-1.777-.878-2.052-.977-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.765-.89-2.752-1.558-3.86-2.993-.284-.37-.025-.567.12-.716.13-.133.3-.346.45-.52.15-.17.2-.295.3-.495.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.245-.59-.495-.51-.675-.52-.175-.01-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.12 3.23 5.132 4.526 1.94.832 2.7.925 3.7.775 1.155-.173 3.42-1.395 3.9-2.745.475-1.35.475-2.5.325-2.745-.15-.245-.55-.395-.85-.545z" />
  </svg>
);

const FloatingButtons = () => {
  const [isCalcOpen, setIsCalcOpen] = useState(false);

  return (
    <>
      <div className="floating-buttons-container">
        <button 
          className="fab fab-calculator" 
          aria-label="Solar Calculator"
          onClick={() => setIsCalcOpen(true)}
        >
          <Calculator size={24} />
        </button>
        <a 
          href="https://wa.me/919832173164?text=Hello%20Surya%20Solar%20Energy!%20I%20am%20interested%20in%20exploring%20solar%20solutions%20for%20my%20property.%20Could%20we%20discuss%20the%20options%20and%20potential%20savings%3F" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fab fab-whatsapp" 
          aria-label="WhatsApp Us"
        >
          <WhatsappIcon />
        </a>
      </div>
      <CalculatorModal isOpen={isCalcOpen} onClose={() => setIsCalcOpen(false)} />
    </>
  );
};

export default FloatingButtons;
