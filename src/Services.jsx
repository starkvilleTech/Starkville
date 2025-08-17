import React from 'react';
import './services.css';
import backgroundImage from '../src/assets/Mask group.png';

const service = () => {
  return (
    <div 
      className="service-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay div */}
      <div className="overlays"></div>
      
      <div className="service-content">
        <h2 className="service-title">Our services</h2>

        <div className="service-cards">
          <div className="service-card">
            <h3 className="cards-title">lorem</h3>
            <p className="cards-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eaque.</p>
          </div>
          <div className="service-card">
            <h3 className="cards-title">lorem</h3>
            <p className="cards-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, non.</p>
          </div>
          <div className="service-card">
            <h3 className="cards-title">lorem</h3>
            <p className="cards-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, exercitationem.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;