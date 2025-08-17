import React from 'react';
import './About.css';
import backgroundImage from '../assets/hauss-01 1.png';

const About = () => {
  return (
    <div 
      className="about-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay div */}
      <div className="overlay"></div>
      
      <div className="about-content">
        <h2 className="about-title">About Starkville</h2>

        <div className="about-cards">
          <div className="about-card">
            <h3 className="card-title">About Us</h3>
            <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eaque.</p>
          </div>
          <div className="about-card">
            <h3 className="card-title">Our Mission</h3>
            <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, non.</p>
          </div>
          <div className="about-card">
            <h3 className="card-title">Our Vision</h3>
            <p className="card-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, exercitationem.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;