import React, { useState, useEffect } from 'react';
import './Service.css';
import backgroundImage from '../assets/Mask groupo.png';

const Service = () => {
  const service = [
    { title: 'Digital Transformation Solutions', description: 'Modernizing legacy systems, automating workflows, and integrating new digital tools for efficiency.' },
    { title: 'AI & Data Analytics', description: 'Building AI-powered applications, predictive analytics, and data-driven insights for smarter decision-making.' },
    { title: 'IT Consulting & Strategy', description: 'Offering expert guidance on IT infrastructure, operations, and long-term technology planning.' },
    { title: 'Business Continuity & Disaster Recovery', description: 'Designing strategies and systems to ensure uninterrupted operations during disruptions.' },
    { title: 'IT Projects & Program Management', description: 'Planning, executing, and managing large-scale IT initiatives for governments and private organizations.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCount = isDesktop ? 4 : 1;

  const handleNext = () => {
    if (currentIndex < service.length - visibleCount) {
      setCurrentIndex(currentIndex + 2);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div
      className="services-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="services-content">
        <h2 className="services-title">Our Services</h2>
        <div className="slider-container">
          {/* Left Arrow */}
          <button
            className="slider-arrow left-arrow"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous"
          >
            &#8592;
          </button>

          {/* Slider Content */}
          <div className="slider-wrapper">
            <div
              className="slider-track"
              style={{
                transform: `translateX(-${(100 / visibleCount) * currentIndex}%)`,
                width: `${(service.length / visibleCount) * 100}%`,
              }}
            >
              {service.map((service, index) => (
                <div
                  className="services-card"
                  key={index}
                  style={{ width: `${100 / service.length}%` }}
                >
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="slider-arrow right-arrow"
            onClick={handleNext}
            disabled={currentIndex >= service.length - visibleCount}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
