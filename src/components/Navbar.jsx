import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/SVT PNG-11 1.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [hideContactInfo, setHideContactInfo] = useState(false);

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formContainerRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const API_URL = 'https://starkville-backend.onrender.com/api/contact';

  const countryPhoneCodes = {
    '🇺🇸': '+1',
    '🇬🇧': '+44',
    '🇨🇦': '+1',
    '🇳🇬': '+234',
    '🇬🇭': '+233',
    '🇰🇪': '+254',
    '🇿🇦': '+27',
    '🇹🇿': '+255',
    '🇪🇹': '+251',
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
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
    setErrorMessage('');
    setFormData({ name: '', email: '', phone: '', location: '', service: '', message: '' });
  };

  const toggleMessageForm = () => {
    setShowMessageForm(!showMessageForm);
    if (!showMessageForm) {
      setHideContactInfo(true);
      if (formRef.current) {
        setTimeout(() => {
          formRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    } else {
      setHideContactInfo(false);
    }
  };

  useEffect(() => {
    const handlePopupScroll = (e) => {
      if (window.innerWidth <= 768 && showMessageForm) {
        const scrollTop = e.target.scrollTop;
        if (scrollTop < 50) {
          setHideContactInfo(false);
        } else if (scrollTop > 100) {
          setHideContactInfo(true);
        }
      }
    };

    const popupContent = document.querySelector('.compact-contact-content');
    if (popupContent) {
      popupContent.addEventListener('scroll', handlePopupScroll);
      return () => popupContent.removeEventListener('scroll', handlePopupScroll);
    }
  }, [showMessageForm]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'location') {
      const countryCode = countryPhoneCodes[value];
      if (countryCode) {
        setFormData((prev) => ({ 
          ...prev, 
          [name]: value,
          phone: countryCode + ' '
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      console.log('🔄 Submitting form data:', formData);

      let processedLocation = formData.location;
      if (formData.location && formData.location.includes('|')) {
        const [flags, countryCode] = formData.location.split('|');
        processedLocation = countryCode;
      }

      const processedFormData = {
        ...formData,
        location: processedLocation,
      };

      console.log('📤 Sending to backend:', processedFormData);
      console.log('🌐 API URL:', API_URL);

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(processedFormData),
      });

      console.log('📥 Response status:', response.status);

      const responseData = await response.json();
      console.log('📥 Response data:', responseData);

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          service: '',
          message: '',
        });
      } else {
        throw new Error(responseData.error || responseData.details || `Server error: ${response.status}`);
      }
    } catch (error) {
      console.error('❌ Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Failed to send message. Please try again later.');
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
                <p>{errorMessage || 'Please try again or contact us directly at admin@starkville.tech'}</p>
                <div className="error-actions">
                  <button className="btn-primary" onClick={() => setSubmitStatus(null)}>Try Again</button>
                  <button className="btn-secondary" onClick={closePopup}>Close</button>
                </div>
              </div>
            ) : (
              <div className="compact-contact-content">
                <div 
                  ref={contactInfoRef}
                  className={`contact-info-compact ${hideContactInfo ? 'hide-on-mobile' : ''}`}
                >
                  <h4>Direct Contact</h4>
                  <div className="compact-contact-grid">
                    <div className="compact-contact-item"><span className="flag">🇺🇸</span><div><div>+1 346 828 2077</div><span className="country">United States</span></div></div>
                    <div className="compact-contact-item"><span className="flag">🇬🇧</span><div><div>+44 7379 499922</div><span className="country">United Kingdom</span></div></div>
                    <div className="compact-contact-item"><span className="flag">🇨🇦</span><div><div>+1 506 897 4449</div><span className="country">Canada</span></div></div>
                    <div className="compact-contact-item"><span className="flag">🇳🇬</span><div><div>+234 806 697 7213</div><span className="country">Nigeria</span></div></div>
                    <div className="compact-contact-item email-item"><span className="contact-icon">✉️</span><a href="mailto:admin@starkville.tech" className="email-link">admin@starkville.tech</a></div>
                  </div>
                </div>

                <div className="compact-divider" onClick={toggleMessageForm}>
                  <span className="toggle-form-text">
                    {showMessageForm ? 'Hide' : 'Or send us a message'}
                  </span>
                </div>

                {showMessageForm && (
                  <div className="form-container" ref={formContainerRef}>
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
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
                          />
                        </div>

                        <div className="form-group compact-form-group location-group">
                          <div className="select-container">
                            <span className="country-flag-indicator">
                              {formData.location ? formData.location.split('|')[0] : '🌍'}
                            </span>
                            <select 
                              name="location" 
                              value={formData.location} 
                              onChange={handleInputChange} 
                              required 
                              disabled={isSubmitting}
                              style={{ paddingLeft: '2.5rem', backgroundImage: 'none' }}
                            >
                              <option value="">Select country</option>
                              <option value="🇺🇸">United States</option>
                              <option value="🇬🇧">United Kingdom</option>
                              <option value="🇨🇦">Canada</option>
                              <option value="🇳🇬">Nigeria</option>
                              <option value="🇬🇭">Ghana</option>
                              <option value="🇰🇪">Kenya</option>
                              <option value="🇿🇦">South Africa</option>
                              <option value="🇹🇿">Tanzania</option>
                              <option value="🇪🇹">Ethiopia</option>
                              <option value="other">🌐 Other</option>
                            </select>
                            <span className="dropdown-arrow"></span>
                          </div>
                        </div>
                      </div>

                      <div className="form-group compact-form-group service-group">
                        <select 
                          name="service" 
                          value={formData.service} 
                          onChange={handleInputChange} 
                          required 
                          disabled={isSubmitting}
                        >
                          {serviceOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
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
                          disabled={isSubmitting}
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