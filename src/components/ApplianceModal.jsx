import React from 'react';
import { X, Tv, Fan, Lightbulb, Refrigerator, Wind, Shirt, Zap } from 'lucide-react';
import './ApplianceModal.css';

const ApplianceModal = ({ isOpen, onClose, systemSize, mode, dailyUnits }) => {
  if (!isOpen) return null;

  let appliances = [];

  if (mode === 'commercial') {
     appliances = [
       { icon: <Zap size={24} />, name: 'Computers & IT Equip.', count: Math.max(2, systemSize * 2) },
       { icon: <Lightbulb size={24} />, name: 'Office Lighting', count: Math.max(10, systemSize * 10) },
       { icon: <Wind size={24} />, name: 'HVAC / AC Units', count: Math.max(1, Math.floor(systemSize / 3)) },
     ];
  } else {
     if (systemSize <= 1) {
       appliances = [
         { icon: <Fan size={24} />, name: 'Ceiling Fans', count: '3-4' },
         { icon: <Lightbulb size={24} />, name: 'LED Bulbs', count: '4-5' },
         { icon: <Tv size={24} />, name: 'Television', count: '1' },
         { icon: <Refrigerator size={24} />, name: 'Refrigerator', count: '1' },
       ];
     } else if (systemSize === 2) {
       appliances = [
         { icon: <Fan size={24} />, name: 'Ceiling Fans', count: '4-5' },
         { icon: <Lightbulb size={24} />, name: 'LED Bulbs', count: '6-8' },
         { icon: <Tv size={24} />, name: 'Television', count: '1-2' },
         { icon: <Refrigerator size={24} />, name: 'Refrigerator', count: '1' },
         { icon: <Shirt size={24} />, name: 'Washing Machine', count: '1' },
       ];
     } else if (systemSize === 3) {
       appliances = [
         { icon: <Wind size={24} />, name: 'Air Conditioner (1 Ton)', count: '1' },
         { icon: <Refrigerator size={24} />, name: 'Refrigerator', count: '1' },
         { icon: <Fan size={24} />, name: 'Ceiling Fans', count: '5-6' },
         { icon: <Lightbulb size={24} />, name: 'LED Bulbs', count: '10+' },
         { icon: <Tv size={24} />, name: 'Television', count: '2' },
         { icon: <Shirt size={24} />, name: 'Washing Machine', count: '1' },
       ];
     } else if (systemSize === 4) {
       appliances = [
         { icon: <Wind size={24} />, name: 'Air Conditioner (1.5 Ton)', count: '1-2' },
         { icon: <Refrigerator size={24} />, name: 'Refrigerator', count: '1' },
         { icon: <Fan size={24} />, name: 'Ceiling Fans', count: '6-8' },
         { icon: <Lightbulb size={24} />, name: 'LED Bulbs', count: '12+' },
         { icon: <Tv size={24} />, name: 'Television', count: '2' },
         { icon: <Shirt size={24} />, name: 'Washing Machine', count: '1' },
       ];
     } else {
       appliances = [
         { icon: <Wind size={24} />, name: 'Air Conditioners', count: '2+' },
         { icon: <Refrigerator size={24} />, name: 'Large Refrigerator', count: '1-2' },
         { icon: <Zap size={24} />, name: 'Heavy Appliances (Geyser, Pump)', count: 'Yes' },
         { icon: <Fan size={24} />, name: 'Ceiling Fans', count: '10+' },
         { icon: <Lightbulb size={24} />, name: 'LED Bulbs', count: '15+' },
         { icon: <Tv size={24} />, name: 'Televisions', count: '3+' },
       ];
     }
  }

  return (
    <div className="appliance-modal-overlay" onClick={onClose}>
      <div className="appliance-modal-content" onClick={e => e.stopPropagation()}>
        <button className="calc-close-btn" onClick={onClose}><X size={24} /></button>
        <div className="appliance-header">
          <h3>What can a {systemSize}kW System run?</h3>
          <p style={{ color: 'var(--color-accent)', fontWeight: 'bold', margin: '4px 0' }}>Generates ~{dailyUnits} Units / Day</p>
          <p>Estimated appliances you can power smoothly.</p>
        </div>
        <div className="appliance-list">
          {appliances.map((app, idx) => (
            <div key={idx} className="appliance-item">
              <div className="app-icon">{app.icon}</div>
              <div className="app-info">
                <h4>{app.name}</h4>
              </div>
              <div className="app-count">{app.count}</div>
            </div>
          ))}
        </div>
        <div className="appliance-note">
          <small>*Estimates based on standard efficient appliances and adequate daily sunshine.</small>
        </div>
      </div>
    </div>
  );
};

export default ApplianceModal;
