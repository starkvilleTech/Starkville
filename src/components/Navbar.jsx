import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
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
      <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="hamburger"></span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link
            to="home" // Set the target ID of the section to scroll to
            smooth={true}
            duration={500} // Scroll duration
            offset={-70} // Optional offset for navbar height
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
