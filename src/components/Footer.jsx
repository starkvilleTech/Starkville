import React from 'react';
import './Footer.css';
import logo from '../assets/SVT PNG-07 1.png';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-logo">
          <a href="#">
            <img src={logo} alt="Starkville Tech Logo" />
          </a>
        </div>
        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a className="contact-button" href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Starkville Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
