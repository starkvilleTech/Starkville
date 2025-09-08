import React, { useState, useEffect, useRef } from 'react';
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

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          hamburgerRef.current &&
          !hamburgerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.keyCode === 27 && menuOpen) {
        closeMenu();
      }
      if (e.keyCode === 27 && showContactPopup) closePopup();
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [menuOpen, showContactPopup]);

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

  return (
    <>
      <nav className={`navbar ${isScrolledUp ? 'show' : 'hide'} ${menuOpen ? 'menu-open' : ''}`}>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <div className="menu-icon" onClick={toggleMenu} ref={hamburgerRef}>
          <span className={`hamburger ${menuOpen ? 'active' : ''}`}></span>
        </div>

        {/* Overlay for mobile menu */}
        {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`} ref={menuRef}>
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

export default Navbar;