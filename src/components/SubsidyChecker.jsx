import React, { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import './SubsidyChecker.css';

const SubsidyChecker = () => {
  const [step, setStep] = useState(1);
  const [isEligible, setIsEligible] = useState(null);

  const handleAnswer = (answer) => {
    if (step === 1) {
      if (answer === 'yes') setStep(2);
      else {
        setIsEligible(false);
        setStep(3);
      }
    } else if (step === 2) {
      if (answer === 'yes') {
        setIsEligible(true);
        setStep(3);
      } else {
        setIsEligible(false);
        setStep(3);
      }
    }
  };

  const resetChecker = () => {
    setStep(1);
    setIsEligible(null);
  };

  return (
    <div className="subsidy-checker-container">
      <div className="sc-header">
        <h3>Check Your Subsidy Eligibility</h3>
        <p>Find out in 10 seconds if you qualify for the ₹78,000 Govt Grant.</p>
      </div>

      <div className="sc-body">
        {step === 1 && (
          <div className="sc-step animate-fade-up">
            <h4>1. Are you a residential homeowner?</h4>
            <div className="sc-buttons">
              <button className="sc-btn yes" onClick={() => handleAnswer('yes')}>Yes, I own my home</button>
              <button className="sc-btn no" onClick={() => handleAnswer('no')}>No, I am renting/commercial</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="sc-step animate-fade-up">
            <h4>2. Do you have a valid electricity meter and connection?</h4>
            <div className="sc-buttons">
              <button className="sc-btn yes" onClick={() => handleAnswer('yes')}>Yes, I do</button>
              <button className="sc-btn no" onClick={() => handleAnswer('no')}>No, I don't</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="sc-result animate-fade-up">
            {isEligible ? (
              <div className="sc-success">
                <CheckCircle size={48} color="#25D366" />
                <h3>Congratulations!</h3>
                <p>You are eligible for up to <strong>₹78,000</strong> in PM Surya Ghar subsidies!</p>
                <a href="#contact" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Claim My Subsidy <ArrowRight size={18} />
                </a>
              </div>
            ) : (
              <div className="sc-failure">
                <XCircle size={48} color="#ff4444" />
                <h3>Not Eligible for PM Surya Ghar</h3>
                <p>The PM Surya Ghar scheme is currently only for residential homeowners. However, if you are a commercial entity, you can still get massive <strong>Accelerated Depreciation tax benefits!</strong></p>
                <button className="sc-reset" onClick={resetChecker}>Check Again</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubsidyChecker;
