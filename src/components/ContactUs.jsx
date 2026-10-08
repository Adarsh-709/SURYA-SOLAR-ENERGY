import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    requirement: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const whatsappMessage = `*New Callback Request from Website!* 🚀

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Location:* ${formData.location}
*Requirement:* ${formData.requirement}

*Message/Bill Details:*
${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp
    window.open(`https://wa.me/919832173164?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <h2>Get Your <span className="text-accent">Free Quote</span></h2>
          <p>Ready to eliminate your electricity bill? Contact us today for a free site inspection and consultation.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info animate-fade-up" style={{ animationDelay: '0.1s' }}>
            
            <div className="info-card">
              <div className="info-icon"><Phone size={24} /></div>
              <div className="info-text">
                <h4>Call Us Directly</h4>
                <p>+91 98321 73164</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><MessageCircle size={24} /></div>
              <div className="info-text">
                <h4>WhatsApp Us</h4>
                <p>+91 98321 73164</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><MapPin size={24} /></div>
              <div className="info-text">
                <h4>Visit Our Office</h4>
                <p>1st Floor, Milestone Building, <br/> Check Post, Siliguri, West Bengal</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><Clock size={24} /></div>
              <div className="info-text">
                <h4>Working Hours</h4>
                <p>Monday - Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            
          </div>

          <div className="contact-form-container animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send us a message</h3>
              <div className="form-group">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Full Name" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" required />
              </div>
              <div className="form-group">
                <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Your Location (e.g. Siliguri)" required />
              </div>
              <div className="form-group">
                <select name="requirement" value={formData.requirement} onChange={handleChange} required>
                  <option value="" disabled>Select Requirement</option>
                  <option value="Domestic Solar (Home)">Domestic Solar (Home)</option>
                  <option value="Commercial Solar (Business)">Commercial Solar (Business)</option>
                  <option value="Maintenance / Servicing">Maintenance / Servicing</option>
                  <option value="Other Inquiry">Other Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your average monthly bill..." rows="4" required></textarea>
              </div>
              <button type="submit" className="btn-primary full-width">Request Free Callback</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
