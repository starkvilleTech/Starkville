import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Footer.css';
import logo from '../assets/SVT PNG-07 1.png';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (!isHome) {
      navigate(`/#${sectionId}`);
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactPopup(true);
  };

  const closePopup = () => {
    setShowContactPopup(false);
    setSubmitStatus(null);
    setFormData({ name: '', message: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 1500);
  };

  return (
    <>
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
            <li>
              {isHome ? (
                <ScrollLink to="services" smooth={true} duration={500} offset={-70}>
                  Services
                </ScrollLink>
              ) : (
                <a href="/#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
              )}
            </li>
            <li>
              {isHome ? (
                <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
                  About
                </ScrollLink>
              ) : (
                <a href="/#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
              )}
            </li>
            <li><a href="#contact" onClick={handleContactClick}>Contact Us</a></li>
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

      {showContactPopup && (
        <div className="contact-popup-overlay" onClick={closePopup}>
          <div className="contact-popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup" onClick={closePopup}>×</button>

            <div className="popup-header">
              <h3>Contact Us</h3>
              <p>We'd love to hear from you. Choose your preferred contact method.</p>
            </div>

            {submitStatus === 'success' ? (
              <div className="success-message">
                <h4>Message Sent Successfully!</h4>
                <p>We'll get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={closePopup}>Close</button>
              </div>
            ) : (
              <>
                <div className="contact-methods">
                  <div className="contact-info">
                    <h4>Direct Contact</h4>
                    <div className="contact-item">
                      <span className="flag">🇺🇸</span>
                      <div>
                        <div>+1 346 828 2077</div>
                        <span className="country">United States</span>
                      </div>
                    </div>
                    <div className="contact-item">
                      <span className="flag">🇬🇧</span>
                      <div>
                        <div>+44 7379 499922</div>
                        <span className="country">United Kingdom</span>
                      </div>
                    </div>
                    <div className="contact-item">
                      <span className="flag">🇨🇦</span>
                      <div>
                        <div>+1 506 897 4449</div>
                        <span className="country">Canada</span>
                      </div>
                    </div>
                    <div className="contact-item">
                      <span className="flag">🇳🇬</span>
                      <div>
                        <div>+234 806 697 7213</div>
                        <span className="country">Nigeria</span>
                      </div>
                    </div>
                    <div className="contact-item">
                      <span className="contact-icon">✉️</span>
                      <a href="mailto:admin@starkville.tech" className="email-link">admin@starkville.tech</a>
                    </div>
                  </div>

                  <div className="divider">
                    <span>Or</span>
                  </div>

                  <form className="contact-form" onSubmit={handleSubmit}>
                    <h4>Send us a message</h4>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;