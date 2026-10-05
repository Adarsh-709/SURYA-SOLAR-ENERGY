import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Careers.css';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('distributor');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDistributorSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const msg = `*New Job Application: Distributor* 🚀
*Block Name:* ${fd.get('block')}
*Name:* ${fd.get('name')}
*Phone:* ${fd.get('phone')}
*Current Profession:* ${fd.get('profession')}`;
    window.open(`https://wa.me/919832173164?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleAgentSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const msg = `*New Job Application: Commission Agent* 🚀
*Name:* ${fd.get('name')}
*Phone:* ${fd.get('phone')}
*Address:* ${fd.get('address')}`;
    window.open(`https://wa.me/919832173164?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleMarketingSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const msg = `*New Job Application: On Field Marketing* 🚀
*Name:* ${fd.get('name')}
*Phone:* ${fd.get('phone')}
*Current/Past Profession:* ${fd.get('profession')}`;
    window.open(`https://wa.me/919832173164?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <div className="careers-page">
        <div className="container">
          <div className="careers-header text-center">
            <h1>Build Your Career <br/><span className="text-accent">With Us</span></h1>
            <p>Join Surya Solar Energy and help us power North Bengal with clean energy.</p>
          </div>
          
          <div className="careers-tabs">
            <button className={`tab-btn ${activeTab === 'distributor' ? 'active' : ''}`} onClick={() => setActiveTab('distributor')}>Distributor</button>
            <button className={`tab-btn ${activeTab === 'agent' ? 'active' : ''}`} onClick={() => setActiveTab('agent')}>Commission Agent</button>
            <button className={`tab-btn ${activeTab === 'marketing' ? 'active' : ''}`} onClick={() => setActiveTab('marketing')}>On Field Marketing</button>
          </div>

          <div className="careers-content">
            {activeTab === 'distributor' && (
              <div className="career-card animate-fade-up">
                <h2>Become a Block Distributor</h2>
                <p className="career-info">Distributors are hired exclusively on a Block-wise basis. Please submit your details below, and <strong>we will inform you if the position for your specific block is vacant.</strong></p>
                <form className="career-form" onSubmit={handleDistributorSubmit}>
                  <div className="form-group">
                    <input type="text" name="block" placeholder="Name of your Block" required />
                  </div>
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Your Full Name" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" name="phone" placeholder="Your Phone Number" required />
                  </div>
                  <div className="form-group">
                    <input type="text" name="profession" placeholder="Current Profession" required />
                  </div>
                  <button type="submit" className="btn-primary">Apply Now via WhatsApp</button>
                </form>
              </div>
            )}

            {activeTab === 'agent' && (
              <div className="career-card animate-fade-up">
                <h2>Join as a Commission Agent</h2>
                <p className="career-info">Commission per customer will vary according to the area and project scale. Please leave your details below so that <strong>we can contact you if needed.</strong></p>
                <form className="career-form" onSubmit={handleAgentSubmit}>
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Your Full Name" required />
                  </div>
                  <div className="form-group">
                    <input type="text" name="address" placeholder="Your Complete Address" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" name="phone" placeholder="Your Phone Number" required />
                  </div>
                  <button type="submit" className="btn-primary">Apply Now via WhatsApp</button>
                </form>
              </div>
            )}

            {activeTab === 'marketing' && (
              <div className="career-card animate-fade-up">
                <h2>On Field Marketing</h2>
                <p className="career-info">Be the face of Surya Solar Energy on the ground. Submit your background below, and <strong>we will inform you if a slot is available</strong> in our marketing team.</p>
                <form className="career-form" onSubmit={handleMarketingSubmit}>
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Your Full Name" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" name="phone" placeholder="Your Phone Number" required />
                  </div>
                  <div className="form-group">
                    <input type="text" name="profession" placeholder="Current or Past Profession" required />
                  </div>
                  <button type="submit" className="btn-primary">Apply Now via WhatsApp</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
