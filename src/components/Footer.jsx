import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Footer.css';
import logo from '../assets/SVT PNG-11 1.png'
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showMessageForm, setShowMessageForm] = useState(false);
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
    setShowMessageForm(false);
  };

  const closePopup = () => {
    setShowContactPopup(false);
    setShowMessageForm(false);
    setSubmitStatus(null);
    setFormData({ name: '', message: '' });
  };

  const toggleMessageForm = () => {
    setShowMessageForm(!showMessageForm);
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

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      
      setTimeout(() => {
        scrollToTop();
      }, 100);
    } else {
      scrollToTop();
    }
  };

  return (
    <>
      <footer className="footer-wrapper">
        <div className="footer-container">
          {/* Logo */}
          <div className="footer-logo">
            <a href="/" onClick={handleLogoClick}>
              <img src={logo} alt="Starkville Tech Logo" />
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="footer-links">
            <li>
              {isHome ? (
                <span
                  onClick={scrollToTop}
                  style={{ cursor: 'pointer' }}
                >
                  Home
                </span>
              ) : (
                <Link to="/">Home</Link>
              )}
            </li>
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
          </ul>
        </div>

        {/* Social Media */}
        <div className="social-media">
         {/*<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa fa-facebook"></i>
          </a>*/}
         {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa fa-twitter"></i>
          </a>*/}
          <a href="https://www.linkedin.com/company/starkville-tech/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa fa-linkedin"></i>
          </a>
          {/*<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa fa-instagram"></i>
          </a>*/}
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2025 Starkville Tech. All rights reserved.</p>
        </div>
      </footer>

      {showContactPopup && (
        <div className="contact-popup-overlay" onClick={closePopup}>
          <div className="contact-popup compact-popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup" onClick={closePopup}>×</button>

            <div className="popup-header">
              <h3>Contact Us</h3>
            </div>

            {submitStatus === 'success' ? (
              <div className="success-message">
                <h4>Message Sent Successfully!</h4>
                <p>We'll get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={closePopup}>Close</button>
              </div>
            ) : (
              <div className="compact-contact-content">
                <div className="contact-info-compact">
                  <h4>Direct Contact</h4>
                  <div className="compact-contact-grid">
                    <div className="compact-contact-item">
                      <span className="flag">🇺🇸</span>
                      <div>
                        <div>+1 346 828 2077</div>
                        <span className="country">United States</span>
                      </div>
                    </div>
                    <div className="compact-contact-item">
                      <span className="flag">🇬🇧</span>
                      <div>
                        <div>+44 7379 499922</div>
                        <span className="country">United Kingdom</span>
                      </div>
                    </div>
                    <div className="compact-contact-item">
                      <span className="flag">🇨🇦</span>
                      <div>
                        <div>+1 506 897 4449</div>
                        <span className="country">Canada</span>
                      </div>
                    </div>
                    <div className="compact-contact-item">
                      <span className="flag">🇳🇬</span>
                      <div>
                        <div>+234 806 697 7213</div>
                        <span className="country">Nigeria</span>
                      </div>
                    </div>
                    <div className="compact-contact-item email-item">
                      <span className="contact-icon">✉️</span>
                      <a href="mailto:admin@starkville.tech" className="email-link">admin@starkville.tech</a>
                    </div>
                  </div>
                </div>

                <div className="compact-divider" onClick={toggleMessageForm}>
                  <span className="toggle-form-text">
                    {showMessageForm ? 'Hide' : 'Or send a message'}
                  </span>
                </div>

                {showMessageForm && (
                  <form className="contact-form compact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group compact-form-group name-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="form-group compact-form-group message-group">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          rows="4"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="form-submit-group">
                      <button 
                        type="submit" 
                        className="btn-primary compact-btn"
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
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;