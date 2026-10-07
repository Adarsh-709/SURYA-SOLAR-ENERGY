import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "How long does it take to install a solar system?",
    answer: "Typically, the actual physical installation on your roof takes only 1 to 2 days! However, the entire process—including site inspection, government approvals, and net meter installation—usually takes 2 to 4 weeks depending on the local electricity board."
  },
  {
    question: "Do solar panels work during the monsoon or cloudy days?",
    answer: "Yes! Solar panels do not need direct, scorching sunlight to work. They generate electricity from daylight. While generation drops slightly during heavy rain or thick clouds, they still produce enough power to significantly offset your bill over the year."
  },
  {
    question: "What is Net Metering?",
    answer: "Net Metering is a billing mechanism that credits solar energy system owners for the electricity they add to the grid. If your panels generate more electricity than you use during the day, the excess is sent to the grid, and your meter runs backwards! You are then billed only for your \"net\" energy use."
  },
  {
    question: "How do I claim the PM Surya Ghar Subsidy?",
    answer: "You don't need to worry about the paperwork! As an empaneled vendor, we handle the entire application process for the PM Surya Ghar Muft Bijli Yojana on your behalf. The subsidy amount is directly credited to your bank account after the system is installed and commissioned."
  },
  {
    question: "What is the lifespan and warranty of the panels?",
    answer: "Modern solar panels are incredibly durable. They come with a 25-year performance warranty, guaranteeing they will still produce at least 80% of their original capacity after 25 years. The inverter typically comes with a 5 to 10-year warranty, which can be extended."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <h2>Frequently Asked <span className="text-accent">Questions</span></h2>
          <p>Everything you need to know about going solar with Surya Solar Energy.</p>
        </div>

        <div className="faq-container animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <ChevronDown className={`faq-icon ${openIndex === index ? 'rotate' : ''}`} />
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
