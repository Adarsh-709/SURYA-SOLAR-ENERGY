import React from 'react';
import './QuoteBanner.css';

const QuoteBanner = () => {
  return (
    <section className="quote-banner">
      <div className="container">
        <h2 className="massive-quote animate-fade-up">
          <span className="quote-mark">“</span>
          The Sun Doesn't <br />
          <span className="text-accent">Send Invoices.</span>
          <span className="quote-mark">”</span>
        </h2>
      </div>
    </section>
  );
};

export default QuoteBanner;
