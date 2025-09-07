import React from 'react';
import Navbar from './Navbar';
import './Header.css';

const Header = ({ pageTitle, pageDescription, boxedDescription, backgroundImage }) => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  const headerStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
      }
    : {};

  return (
    <header className="header" style={headerStyle}>
      <Navbar />
      <div className="hero">
        {pageTitle ? (
          <>
            <h1>{pageTitle}</h1>
            {pageDescription && (
              <p className={boxedDescription ? 'header-description-boxed' : 'header-description'}>
                {pageDescription}
              </p>
            )}
          </>
        ) : (
          <>
            <h1>
              Transformation <br />
              With Technology!
            </h1>
            <p className="header-description">Build Smarter, Grow Better!</p>
            <button className="ctas-button" onClick={scrollToServices}>
              Explore Our Services
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
