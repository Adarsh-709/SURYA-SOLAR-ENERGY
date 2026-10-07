import React, { useState } from 'react';
import './BeforeAfterBill.css';

const BeforeAfterBill = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPos(e.target.value);
  };

  return (
    <section className="before-after-section animate-fade-up">
      <div className="container">
        <div className="section-header text-center">
          <h2>Your Bill, <span className="text-accent">Before & After Solar</span></h2>
          <p>Drag the slider to see how Surya Solar Energy eliminates your electricity expenses.</p>
        </div>

        <div className="slider-wrapper">
          <div className="ba-container">
            {/* After Bill (Underneath) */}
            <div className="bill after-bill">
              <div className="bill-header">Surya Solar Energy</div>
              <div className="bill-body">
                <div className="bill-row"><span>Total Units Consumed:</span> <span>0</span></div>
                <div className="bill-row"><span>Solar Generation:</span> <span className="text-green">+ 450 Units</span></div>
                <div className="bill-row"><span>Net Billed Units:</span> <span>0</span></div>
                <div className="bill-divider"></div>
                <div className="bill-total text-green">Total Due: ₹0.00</div>
                <div className="bill-stamp">NET METERED</div>
              </div>
            </div>

            {/* Before Bill (Overlay) */}
            <div className="bill before-bill" style={{ width: `${sliderPos}%` }}>
              <div className="bill-header" style={{ backgroundColor: '#ff4444' }}>Standard Grid Electricity</div>
              <div className="bill-body">
                <div className="bill-row"><span>Total Units Consumed:</span> <span>450</span></div>
                <div className="bill-row"><span>Energy Charge:</span> <span>₹3,375.00</span></div>
                <div className="bill-row"><span>Fixed Charges & Taxes:</span> <span>₹1,125.00</span></div>
                <div className="bill-divider"></div>
                <div className="bill-total" style={{ color: '#ff4444' }}>Total Due: ₹4,500.00</div>
                <div className="bill-stamp" style={{ color: 'rgba(255, 68, 68, 0.2)', borderColor: 'rgba(255, 68, 68, 0.2)' }}>PAY IMMEDIATELY</div>
              </div>
            </div>

            {/* Slider Control */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos} 
              onChange={handleSliderChange} 
              className="ba-slider" 
            />
            
            <div className="slider-thumb" style={{ left: `${sliderPos}%` }}>
              <div className="thumb-line"></div>
              <div className="thumb-circle">↔</div>
            </div>
          </div>
          
          <div className="ba-labels">
            <span className="label-after">After Solar (₹0)</span>
            <span className="label-before">Before Solar (₹4,500)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterBill;
