import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  
import './Service.css';
import backgroundImage from '../assets/Mask groupo.png';

const Service = ({ id }) => {
  const services = [
    { 
      title: 'Digital Transformation Solutions', 
      description: 'Modernizing legacy systems, automating workflows, and integrating new digital tools for efficiency.',
      icon: 'fa-cogs',
      detailPage: '/service-details/1'  // Link to detailed page
    },
    { 
      title: 'AI & Data Analytics', 
      description: 'Building AI-powered applications, predictive analytics, and data-driven insights for smarter decision-making.',
      icon: 'fa-robot',
      detailPage: '/service-details/2'
    },
    { 
      title: 'IT Consulting & Strategy', 
      description: 'Offering expert guidance on IT infrastructure, operations, and long-term technology planning.',
      icon: 'fa-laptop',
      detailPage: '/service-details/3'
    },
    { 
      title: 'Business Continuity & Disaster Recovery', 
      description: 'Designing strategies and systems to ensure uninterrupted operations during disruptions.',
      icon: 'fa-shield-alt',
      detailPage: '/service-details/4'
    },
    { 
      title: 'IT Projects & Program Management', 
      description: 'Planning, executing, and managing large-scale IT initiatives for governments and private organizations.',
      icon: 'fa-project-diagram',
      detailPage: '/service-details/5'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCount = isDesktop ? 3 : 1;

  const handleNext = () => {
    if (currentIndex < services.length - visibleCount) {
      setCurrentIndex(prev => prev + 1);
    } else if (!isDesktop) {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else if (!isDesktop) {
      setCurrentIndex(services.length - visibleCount);
    }
  };

  return (
    <div id={id} className="services-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="services-content">
        <h2 className="services-title">Our Services</h2>
        <div className="slider-container">
          <button className="slider-arrow left-arrow" onClick={handlePrev} aria-label="Previous">&#8592;</button>

          <div className="slider-wrapper">
            <div className="slider-track" style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}>
              {services.map((service, index) => (
                <div className="services-card" key={index} style={{ width: `${100 / visibleCount}%`, minWidth: isDesktop ? '320px' : '100%' }}>
                  <div className="service-icon">
                    <i className={`fa ${service.icon}`}></i>
                  </div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                  {/* Read More Link */}
                 <Link to={service.detailPage} className="read-more-link">Read More</Link>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-arrow right-arrow" onClick={handleNext} aria-label="Next">&#8594;</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
