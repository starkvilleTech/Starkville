import React from 'react';
import Navbar from './Navbar';
import './Header.css';

const Header = ({ pageTitle, pageDescription }) => {
  return (
    <header className="header">
      <Navbar />

      <div className="hero">
        {pageTitle ? (
          <>
            
            <h1>{pageTitle}</h1>
            {pageDescription && <p>{pageDescription}</p>} 
          </>
        ) : (
          <>
            
            <h1>
              Transformation <br />
              With Technology!
            </h1>
            <p>Build Smarter, Grow Better!</p>
            <button className="ctas-button">Get Started</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
