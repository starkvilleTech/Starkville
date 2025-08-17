import React from 'react';
import Navbar from './Navbar';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="hero">
        <h1>Transformation <br />
        With Technology!</h1>
        <button className="cta-button">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
