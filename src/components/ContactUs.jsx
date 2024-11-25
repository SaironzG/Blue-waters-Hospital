import React from 'react';
import './ContactUs.scss';
import doc from '../assets/profile.png'



const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-details">
        <h4>Available 24/7</h4>
        <div className="phone-number">
          <span className="phone-icon">📞</span>
          <span className="number">00-89 586 487 485</span>
        </div>
      </div>
      <div className="staff-images">
        <img src={doc} alt="Doctor 1" />
        <img src={doc} alt="Doctor 2" />
        <img src={doc} alt="Doctor 3" />
      </div>
    </section>
  );
};

export default ContactUs;
