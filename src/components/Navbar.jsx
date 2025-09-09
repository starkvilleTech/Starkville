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
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
    setShowMessageForm(false);
    closeMenu();
  };

  const closePopup = () => {
    setShowContactPopup(false);
    setShowMessageForm(false);
    setSubmitStatus(null);
    setFormData({ name: '', email: '', message: '' });
  };

  // Define toggleMessageForm function
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
    
    // email content
    const subject = `New Contact Form Message from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}

This message was sent from the website contact form.
    `.trim();
    
    // mailto link
    const mailtoLink = `mailto:admin@starkville.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    

    window.location.href = mailtoLink;
    
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
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
          <div className="contact-popup compact-popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup" onClick={closePopup}>×</button>

            <div className="popup-header">
              <h3>Contact Us</h3>
            </div>

            {submitStatus === 'success' ? (
              <div className="success-message">
                <h4>Message Prepared Successfully!</h4>
                <p>Your email client should open with a pre-filled message. If it doesn't open automatically, please send your message to admin@starkville.tech</p>
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
                      
                      <div className="form-group compact-form-group email-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
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
                    
                    <div className="form-submit-group">
                      <button 
                        type="submit" 
                        className="btn-primary compact-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner"></span>
                            Preparing...
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

export default Navbar;