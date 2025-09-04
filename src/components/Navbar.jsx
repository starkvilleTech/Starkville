import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import logo from '../assets/SVT PNG-11 1.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsScrolledUp(false); // scrolling down
      } else {
        setIsScrolledUp(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
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
        <li>
          <a href="/" onClick={closeMenu}>Home</a>
        </li>
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
        <li>
          {isHome ? (
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
              Contact Us
            </ScrollLink>
          ) : (
            <a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
