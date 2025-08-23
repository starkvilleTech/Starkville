import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../assets/SVT PNG-11 1.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
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
          <Link to="home" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
