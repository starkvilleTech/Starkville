import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import logo from '../assets/SVT PNG-11 1.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    closeMenu();
    if (!isHome) {
      navigate(`/#${sectionId}`);
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactPopup(true);
    closeMenu();
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolledUp(currentScrollY < lastScrollY || currentScrollY < 80);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.keyCode === 27 && showContactPopup) closePopup();
    };
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [showContactPopup]);

  return (
    <>
      <nav className={`navbar ${isScrolledUp ? 'show' : 'hide'} ${menuOpen ? 'menu-open' : ''}`}>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <span className={`hamburger ${menuOpen ? 'active' : ''}`}></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li>
            {isHome ? (
              <ScrollLink to="services" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
                Services
              </ScrollLink>
            ) : (
              <a href="/#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
            )}
          </li>
          <li>
            {isHome ? (
              <ScrollLink to="about" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
                About
              </ScrollLink>
            ) : (
              <a href="/#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            )}
          </li>
          <li><a href="#contact" onClick={handleContactClick}>Contact Us</a></li>
        </ul>
      </nav>

      {showContactPopup && (
        <div className="contact-popup-overlay" onClick={closePopup}>
          <div className="contact-popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup" onClick={closePopup}>×</button>

            <div className="popup-header">
              <h3>Contact Us</h3>
              <p>We’d love to hear from you.</p>
            </div>

            {submitStatus === 'success' ? (
              <div className="success-message">
                <h4>✅ Message Sent!</h4>
                <p>We’ll get back to you shortly.</p>
                <button className="btn-primary" onClick={closePopup}>Close</button>
              </div>
            ) : (
              <>
                <div className="contact-methods">
                  <div className="contact-info">
                    <h4>Call or Email</h4>
                    <div className="contact-item">
                      <span className="flag">🇺🇸</span>
                      <div>
                        <div>+1 346 828 2077</div>
                        <div className="country">United States</div>
                      </div>
                    </div>
                    <div className="contact-item">
                      <span className="flag">🇬🇧</span>
                      <div>
                        <div>+44 7379 499922</div>
                        <div className="country">United Kingdom</div>
                      </div>
                    </div>
                    <div className="contact-item">
                      <span className="flag">🇨🇦</span>
                      <div>
                        <div>+1 506 897 4449</div>
                        <div className="country">Canada</div>
                      </div>
                    </div>
                    <div className="contact-item">
                      <span className="flag">📧</span>
                      <a href="mailto:admin@starkville.tech" className="email-link">
                        admin@starkville.tech
                      </a>
                    </div>
                  </div>

                  <div className="contact-form">
                    <h4>Send a Message</h4>
                    <form onSubmit={handleSubmit}>
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
                      <button type="submit" className="btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <div className="spinner"></div> Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
