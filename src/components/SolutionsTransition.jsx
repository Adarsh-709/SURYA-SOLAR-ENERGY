import React from 'react';
import './SolutionsTransition.css';

const SolutionsTransition = () => {
  return (
    <div className="sol-trans-wrapper">
      <div className="container">
        <div className="sol-trans-content animate-fade-up">
          <div className="st-line left-line"></div>
          <h2 className="st-text">
            From Compact Homes <span className="text-accent">To Massive Industries</span>
          </h2>
          <div className="st-line right-line"></div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsTransition;
