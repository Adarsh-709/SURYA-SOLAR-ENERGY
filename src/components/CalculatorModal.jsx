import React, { useState } from 'react';
import { X } from 'lucide-react';
import ApplianceModal from './ApplianceModal';
import './CalculatorModal.css';

const CalculatorModal = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState('domestic');
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');
  const [rate, setRate] = useState(7.5);
  const [exportRate, setExportRate] = useState(3.0);
  const [loanYears, setLoanYears] = useState(5);
  const [showResults, setShowResults] = useState(false);
  const [showApplianceModal, setShowApplianceModal] = useState(false);

  if (!isOpen) return null;

  // Calculation Logic
  let totalYearlyBill = 0;
  if (mode === 'domestic') {
    totalYearlyBill = (Number(q1) || 0) + (Number(q2) || 0) + (Number(q3) || 0) + (Number(q4) || 0);
  } else {
    totalYearlyBill = (Number(q1) || 0) * 12; // using q1 as monthly bill for commercial
  }

  const effectiveRate = rate > 0 ? rate : 7.5;
  const avgMonthlyBill = totalYearlyBill / 12;
  const totalYearlyUnits = totalYearlyBill / effectiveRate;
  const avgDailyUnits = totalYearlyUnits / 365;

  let recommendedSize = Math.ceil(avgDailyUnits / 4);
  if (recommendedSize < 1) recommendedSize = 1;

  const expectedDailyGeneration = recommendedSize * 4;

  let subsidy = 0;
  let taxSavings = 0;
  let costPerKw = 70000;

  if (mode === 'domestic') {
    if (recommendedSize === 1) subsidy = 30000;
    else if (recommendedSize === 2) subsidy = 60000;
    else if (recommendedSize >= 3) subsidy = 78000;
  } else {
    if (recommendedSize <= 10) costPerKw = 55000;
    else if (recommendedSize <= 50) costPerKw = 50000;
    else costPerKw = 45000;
  }

  const totalCost = recommendedSize * costPerKw;

  if (mode === 'commercial') {
    taxSavings = totalCost * 0.40 * 0.25;
  }

  const netCost = totalCost - subsidy;

  // Domestic loans are subsidized (~6%), Commercial loans are standard (~10%)
  const annualInterestRate = mode === 'domestic' ? 0.06 : 0.10;
  
  // Calculate simple payback period (Years)
  // Net cost after tax savings / Yearly bill savings
  const effectiveNetCost = mode === 'commercial' ? (totalCost - taxSavings) : netCost;
  const annualSavings = totalYearlyBill; 
  const paybackPeriod = annualSavings > 0 ? (effectiveNetCost / annualSavings).toFixed(1) : 0;
  const monthlyRate = annualInterestRate / 12;
  const loanMonths = (loanYears || 5) * 12;
  
  let emi = 0;
  if (netCost > 0) {
    emi = (netCost * monthlyRate * Math.pow(1 + monthlyRate, loanMonths)) / (Math.pow(1 + monthlyRate, loanMonths) - 1);
  }

  const dailyExcess = expectedDailyGeneration - avgDailyUnits;
  const yearlyExcessUnits = dailyExcess > 0 ? dailyExcess * 365 : 0;
  const yearlyExportIncome = yearlyExcessUnits * (exportRate || 3);

  const formatCurrency = (amt) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amt);

  return (
    <div className="calc-modal-overlay" onClick={onClose}>
      <div className="calc-modal-content" onClick={e => e.stopPropagation()}>
        <button className="calc-close-btn" onClick={onClose}><X size={24} /></button>
        
        <div className="calc-header">
          <h2>Solar Savings Calculator</h2>
          <p>Estimate your system size, costs, and savings.</p>
        </div>

        <div className="calc-tabs">
          <button className={`calc-tab ${mode === 'domestic' ? 'active' : ''}`} onClick={() => { setMode('domestic'); setRate(7.5); setShowResults(false); }}>Domestic (PM Surya Ghar)</button>
          <button className={`calc-tab ${mode === 'commercial' ? 'active' : ''}`} onClick={() => { setMode('commercial'); setRate(10.0); setShowResults(false); }}>Commercial</button>
        </div>

        <div className="calc-body">
          {!showResults ? (
            <div className="calc-form">
              <div className="input-group">
                <label>{mode === 'domestic' ? 'Enter Bills for Last 4 Quarters (₹)' : 'Average Monthly Bill (₹)'}</label>
                <div className={`bill-inputs ${mode === 'commercial' ? 'single' : ''}`}>
                  <input type="number" placeholder={mode === 'domestic' ? 'Quarter 1' : 'Monthly Bill Amount'} value={q1} onChange={e => setQ1(e.target.value)} />
                  {mode === 'domestic' && (
                    <>
                      <input type="number" placeholder="Quarter 2" value={q2} onChange={e => setQ2(e.target.value)} />
                      <input type="number" placeholder="Quarter 3" value={q3} onChange={e => setQ3(e.target.value)} />
                      <input type="number" placeholder="Quarter 4" value={q4} onChange={e => setQ4(e.target.value)} />
                    </>
                  )}
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Current Per Unit Rate (₹)</label>
                  <input type="number" step="0.1" value={rate} onChange={e => setRate(e.target.value)} />
                </div>
                {mode === 'domestic' && (
                  <div className="input-group">
                    <label>Export Rate (₹)</label>
                    <input type="number" step="0.1" value={exportRate} onChange={e => setExportRate(e.target.value)} />
                  </div>
                )}
              </div>
              
              <div className="input-group">
                <label>Loan Duration (Years)</label>
                <select value={loanYears} onChange={e => setLoanYears(Number(e.target.value))}>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Year' : 'Years'}</option>
                  ))}
                </select>
              </div>

              <button className="btn-primary calc-submit" onClick={() => setShowResults(true)}>Calculate Savings</button>
            </div>
          ) : (
            <div className="calc-results animate-fade-up">
              <div className="result-cards">
                <div className="res-card">
                  <h4>Current Consumption</h4>
                  <div className="res-val">{avgDailyUnits.toFixed(1)} Units</div>
                  <small>Average per day</small>
                </div>

                <div 
                  className="res-card highlight" 
                  onClick={() => setShowApplianceModal(true)}
                  style={{ cursor: 'pointer', transition: 'transform 0.2s', border: '1px solid var(--color-accent)' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  title="Click to view supported appliances"
                >
                  <h4>Recommended System ⓘ</h4>
                  <div className="res-val text-accent">{recommendedSize} kW</div>
                  <small>Produces ~{expectedDailyGeneration} Units/Day</small>
                  <small style={{ color: 'var(--color-accent)', fontWeight: 'bold', display: 'block', marginTop: '4px' }}>Click to see appliances</small>
                </div>
                
                {mode === 'domestic' ? (
                  <div className="res-card">
                    <h4>Govt Subsidy</h4>
                    <div className="res-val text-green">{formatCurrency(subsidy)}</div>
                    <small>PM Surya Ghar Yojana</small>
                  </div>
                ) : (
                  <>
                    <div className="res-card">
                      <h4>Est. Tax Savings</h4>
                      <div className="res-val text-green">{formatCurrency(taxSavings)}</div>
                      <small>Accelerated Depreciation</small>
                    </div>
                    <div className="res-card highlight" style={{ borderColor: '#25D366', background: 'rgba(37, 211, 102, 0.05)' }}>
                      <h4>ROI / Payback</h4>
                      <div className="res-val text-green">{paybackPeriod} Years</div>
                      <small>System pays for itself!</small>
                    </div>
                  </>
                )}

                <div className="res-card">
                  <h4>Total Project Cost</h4>
                  <div className="res-val">{formatCurrency(totalCost)}</div>
                  <small>Before Subsidy/Tax</small>
                </div>

                <div className="res-card">
                  <h4>Net Project Cost</h4>
                  <div className="res-val">{formatCurrency(netCost)}</div>
                  <small>After Subsidy/Tax</small>
                </div>

                <div className="res-card">
                  <h4>Total Interest Paid</h4>
                  <div className="res-val">{formatCurrency(netCost > 0 ? (emi * loanMonths) - netCost : 0)}</div>
                  <small>Over {loanYears} Years @ {(annualInterestRate * 100).toFixed(2)}%</small>
                </div>

                <div className="res-card highlight" style={{ gridColumn: '1 / -1', borderColor: '#25D366', background: 'rgba(37, 211, 102, 0.05)' }}>
                  <h4 style={{ color: '#25D366', marginBottom: '10px' }}>🌱 Your Green Impact</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '5px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2rem', marginBottom: '5px' }}>🌳</div>
                      <div className="res-val text-green">{Math.round(recommendedSize * 45)}</div>
                      <small>Trees Planted / Yr</small>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2rem', marginBottom: '5px' }}>☁️</div>
                      <div className="res-val text-green">{(recommendedSize * 1.5).toFixed(1)}</div>
                      <small>Tons CO₂ Saved / Yr</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="res-comparison-detailed" style={{ marginTop: '2rem' }}>
                <h3>Monthly Bill Vs. Solar EMI Comparison</h3>
                
                <div className="comp-row">
                  <div className="comp-box bad">
                    <h4>Current Monthly Bill</h4>
                    <div className="val">{formatCurrency(avgMonthlyBill)}</div>
                    <small>Money lost forever</small>
                  </div>
                  <div className="comp-vs">VS</div>
                  <div className="comp-box good">
                    <h4>Solar Loan EMI</h4>
                    <div className="val">{formatCurrency(emi)}</div>
                    <small>Investing in your own asset</small>
                  </div>
                </div>

                <div className={`comp-saving ${avgMonthlyBill > emi ? 'positive' : 'negative'}`}>
                  <h4>Net Monthly Impact</h4>
                  <div className="val">
                    {avgMonthlyBill > emi 
                      ? `Save ${formatCurrency(avgMonthlyBill - emi)} / Month!` 
                      : `Pay ${formatCurrency(emi - avgMonthlyBill)} Extra / Month`}
                  </div>
                  <small>{avgMonthlyBill > emi ? 'Instant savings from day one!' : 'Short-term investment for 25+ years of free electricity.'}</small>
                </div>

                <div className="free-electricity-note">
                  <p>After <strong>{loanYears} years</strong> of EMI payments, Your Electricity will be practically <strong>FREE</strong> aside from Minor Maintenance!</p>
                </div>

                <div className="export-benefit">
                  <h4>Net Metering & Export Benefit</h4>
                  <p>Your {recommendedSize}kW system will generate an estimated <strong>{yearlyExcessUnits.toFixed(0)} extra units</strong> per year that you won't use.</p>
                  <div className="export-val">Est. Yearly Earnings: <span className="text-green">+{formatCurrency(yearlyExportIncome)}</span></div>
                </div>
              </div>

              <button className="btn-secondary calc-back" onClick={() => setShowResults(false)}>Recalculate</button>
            </div>
          )}
        </div>
      </div>

      <ApplianceModal 
        isOpen={showApplianceModal} 
        onClose={() => setShowApplianceModal(false)} 
        systemSize={recommendedSize} 
        mode={mode}
        dailyUnits={expectedDailyGeneration}
      />
    </div>
  );
};

export default CalculatorModal;
