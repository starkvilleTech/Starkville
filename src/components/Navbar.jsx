import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Country } from 'react-country-state-city';
import './Navbar.css';
import logo from '../assets/SVT PNG-11 1.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', location: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [countries, setCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const formRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoadingCountries(true);
        
        const countryData = await Country.getAllCountries();
        
        const formattedCountries = countryData.map(country => ({
          value: country.isoCode,
          label: country.name,
          flag: country.flag 
        }));
        
        
        formattedCountries.sort((a, b) => a.label.localeCompare(b.label));
        
        formattedCountries.unshift({ value: '', label: 'Select your country', flag: '' });
        
        setCountries(formattedCountries);
      } catch (error) {
        console.error('Error fetching countries from API:', error);
        // Fallback to basic countries if API fails
        setCountries([
          { value: '', label: 'Select your country', flag: '' },
          { value: 'US', label: 'United States', flag: '🇺🇸' },
          { value: 'GB', label: 'United Kingdom', flag: '🇬🇧' },
          { value: 'CA', label: 'Canada', flag: '🇨🇦' },
          { value: 'NG', label: 'Nigeria', flag: '🇳🇬' },
          { value: 'AU', label: 'Australia', flag: '🇦🇺' },
          { value: 'DE', label: 'Germany', flag: '🇩🇪' },
          { value: 'FR', label: 'France', flag: '🇫🇷' },
          { value: 'IN', label: 'India', flag: '🇮🇳' },
          { value: 'BR', label: 'Brazil', flag: '🇧🇷' },
          { value: 'ZA', label: 'South Africa', flag: '🇿🇦' },
          { value: 'KE', label: 'Kenya', flag: '🇰🇪' },
          { value: 'GH', label: 'Ghana', flag: '🇬🇭' },
          { value: 'other', label: 'Other', flag: '🌐' },
        ]);
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  const serviceOptions = [
    { value: '', label: 'Select a service' },
    { value: 'IT Consulting', label: 'IT Consulting' },
    { value: 'Digital & Business Transformation', label: 'Digital & Business Transformation' },
    { value: 'Cloud Management', label: 'Cloud Management' },
    { value: 'IT operations', label: 'IT operations' },
    { value: 'Project & Program Management', label: 'Project & Program Management' },
    { value: 'AI & Process Automation', label: 'AI & Process Automation' },
    { value: 'Business Continuity', label: 'Business Continuity' },
    { value: 'Talent Acquisition', label: 'Talent Acquisitions' },
    { value: 'other', label: 'Other' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target) && hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
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

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.keyCode === 27) {
        if (menuOpen) closeMenu();
        if (showContactPopup) closePopup();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [menuOpen, showContactPopup]);

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
    setFormData({ name: '', email: '', phone: '', location: '', service: '', message: '' });
  };

  const toggleMessageForm = () => {
    setShowMessageForm(!showMessageForm);
    if (!showMessageForm && formRef.current) {
      setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://starkville-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', location: '', service: '', message: '' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu} ref={hamburgerRef}>
          <span className={`hamburger ${menuOpen ? 'active' : ''}`}></span>
        </div>

        {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`} ref={menuRef}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/#about" onClick={closeMenu}>About</Link></li>
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
                <h4>Message Sent Successfully!</h4>
                <p>We'll get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={closePopup}>Close</button>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="error-message">
                <h4>Something went wrong</h4>
                <p>Please try again or contact us directly at admin@starkville.tech</p>
                <button className="btn-primary" onClick={() => setSubmitStatus(null)}>Try Again</button>
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
                    {showMessageForm ? 'Hide' : 'Or send us a message'}
                  </span>
                </div>

                {showMessageForm && (
                  <div className="form-container" ref={formRef}>
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

                      <div className="form-row">
                        <div className="form-group compact-form-group phone-group">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div className="form-group compact-form-group location-group">
                          <div className="select-container">
                            {formData.location && countries.find(c => c.value === formData.location)?.flag && (
                              <span className="country-flag-indicator">
                                {countries.find(c => c.value === formData.location)?.flag}
                              </span>
                            )}
                            <select
                              name="location"
                              value={formData.location}
                              onChange={handleInputChange}
                              required
                              style={{ 
                                paddingLeft: formData.location ? '2.5rem' : '1rem',
                                backgroundImage: formData.location ? 'none' : undefined
                              }}
                              disabled={loadingCountries}
                            >
                              {loadingCountries ? (
                                <option value="">Loading countries...</option>
                              ) : (
                                countries.map(option => (
                                  <option key={option.value} value={option.value}>
                                    {option.flag} {option.label}
                                  </option>
                                ))
                              )}
                            </select>
                            <span className="dropdown-arrow">▼</span>
                          </div>
                        </div>
                      </div>

                      <div className="form-group compact-form-group service-group">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                        >
                          {serviceOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="form-group compact-form-group message-group">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          rows="4"
                          value={formData.message}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                      
                      <div className="form-submit-group">
                        <button 
                          type="submit" 
                          className="btn-primary compact-btn"
                          disabled={isSubmitting || loadingCountries}
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
                  </div>
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