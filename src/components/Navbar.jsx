import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import logo from '../assets/SVT PNG-11 1.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <span className={`hamburger ${menuOpen ? 'active' : ''}`}></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <a href="/" onClick={closeMenu}>Home</a>
        </li>
        <li>
          {isHome ? (
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
            >
              Services
            </ScrollLink>
          ) : (
            <a href="/#services" onClick={(e) => handleNavClick(e, 'services')}>
              Services
            </a>
          )}
        </li>
        <li>
          {isHome ? (
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
            >
              About
            </ScrollLink>
          ) : (
            <a href="/#about" onClick={(e) => handleNavClick(e, 'about')}>
              About
            </a>
          )}
        </li>
        <li>
          {isHome ? (
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
            >
              Contact Us
            </ScrollLink>
          ) : (
            <a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')}>
              Contact Us
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
