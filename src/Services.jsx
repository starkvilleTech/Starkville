import React from 'react';
import './Services.css'; // Assuming it's in the same folder
import maskImage from '../src/assets/Mask group.png'; // Adjust path if necessary

const Service = () => {
  return (
    <div 
      className="service-container"
      style={{ maskImage: `url(${maskImage})`, WebkitMaskImage: `url(${maskImage})` }} // Apply mask-image for webkit support
    >
      {/* Overlay div */}
      <div className="overlays"></div>
      
      <div className="service-content">
        <h2 className="service-title">Our services</h2>

        <div className="service-cards">
          <div className="service-card">
            <h3 className="cards-title">Lorem</h3>
            <p className="cards-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eaque.</p>
          </div>
          <div className="service-card">
            <h3 className="cards-title">Lorem</h3>
            <p className="cards-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, non.</p>
          </div>
          <div className="service-card">
            <h3 className="cards-title">Lorem</h3>
            <p className="cards-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, exercitationem.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
