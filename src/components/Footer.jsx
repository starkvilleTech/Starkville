import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/SVT PNG-07 1.png';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Starkville Tech Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/faq" className="faq-button">FAQ</Link></li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa fa-instagram"></i>
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Starkville Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
