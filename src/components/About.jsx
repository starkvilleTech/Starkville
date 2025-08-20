import React, { useState } from 'react';
import './About.css';
import backgroundImage from '../assets/Mask group4.png';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const contentData = [
    {
      title: 'About Us',
      content:
        'We are a tech company helping governments and businesses achieve digital and business transformation through IT projects, AI, consulting, and continuity planning.',
    },
    {
      title: 'Our Mission',
      content:
        'To deliver smart, secure, and reliable tech solutions that drive growth and resilience.',
    },
    {
      title: 'Our Vision',
      content:
        'To be the leading partner in digital transformation for government and private enterprises.',
    },
  ];

  return (
    <div
      id="about" // Adding id here for smooth scrolling
      className="about-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="about-content">
        <h2 className="about-title">About Starkville</h2>

        <div className="about-cards">
          {contentData.map((item, index) => (
            <div className="about-card" key={index}>
              {/* The title is rendered inside the button */}
              <button
                className="card-toggle"
                onClick={() => toggleCard(index)}
              >
                {item.title}
              </button>

              {/* The description wrapper */}
              <div
                className={`card-description-wrapper ${
                  activeIndex === index ? 'active' : ''
                }`}
              >
                <p className="card-description">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
