import React from 'react';
import './Footer.css';
import logo from '../assets/SVT PNG-07 1.png'; 
import 'font-awesome/css/font-awesome.min.css';

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
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#" className="faq-button">FAQ</a>
          </li>
        </ul>
      </div>

      {/* Social Media Icons */}
      <div className="social-media">
        <a href="#" className="social-icon">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fa fa-instagram"></i>
        </a>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Starkville Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
