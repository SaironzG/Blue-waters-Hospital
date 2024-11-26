// Footer.js
import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column about">
          <h3>About Medinova</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>📞 91-867 1560666</p>
          <p>✉️ hrafsupport@gmail.com</p>
          <p>📍 27 Devision St, New York, 10003, United States</p>
        </div>

        <div className="footer-column">
          <h3>Our Departments</h3>
          <ul>
            <li>Medical Checkup</li>
            <li>Instant Medicine</li>
            <li>Corona Checkup</li>
            <li>Pro Dental</li>
            <li>Kidney Solution</li>
            <li>Blood Test</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>Resources</li>
            <li>Blog & News</li>
            <li>News</li>
            <li>Article</li>
            <li>Smart Mask</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Opening Hours</h3>
          <ul>
            <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
            <li>Saturday: 8:00 AM - 12:00 PM</li>
            <li>Sunday: All Closed Day</li>
            <li>Daily Huff Break: 9:15 - 22:45</li>
          </ul>
          <h3>Quick Connect</h3>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copy Right © SAIRONZ GAVI All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;