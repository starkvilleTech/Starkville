import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import backgroundImage from '../assets/Mask groupo.png';

const Service = ({ id }) => {
  const services = [
    { 
      id: 1, 
      title: 'IT Consulting', 
      description: 'At Starkville Tech, we assist leadership teams in translating business goals into clear, actionable technology strategies. From current-state assessments to multi-year roadmaps...',
      icon: 'fa-briefcase', 
      detailPage: '/service-details/1'  
    },
    { 
      id: 2,
      title: 'Digital & Business Transformation', 
      description: 'Transformation succeeds when strategy, process, people, and technology move together. We help you redesign services, streamline processes, and deploy digital platforms...',
      icon: 'fa-exchange-alt',
      detailPage: '/service-details/2'
    },
    { 
      id: 3,
      title: 'Cloud Management', 
      description: 'We design, deploy, and operate cloud environments tailored to your security, compliance, performance, and budget requirements—across public, private, and hybrid models...',
      icon: 'fa-cloud', 
      detailPage: '/service-details/3'
    },
    { 
      id: 4,
      title: 'IT Operations', 
      description: 'We build and run scalable IT operations that keep your organization productive and protected. From service desk to vendor management and observability...',
      icon: 'fa-cogs', 
      detailPage: '/service-details/4'
    },
    { 
      id: 5,
      title: 'Project & Program Management', 
      description: 'We provide hands‑on delivery leadership across projects and portfolios. Our PMs and program leads combine Agile and traditional methods to manage risk, align stakeholders...',
      icon: 'fa-tasks', 
      detailPage: '/service-details/5'
    },
    { 
      id: 6,
      title: 'AI & Process Automation', 
      description: 'We help organizations automate manual work, improve decisions, and unlock new value with AI—safely and pragmatically. We start with high‑ROI use cases, build secure integrations, and set up governance for responsible AI...',
      icon: 'fa-robot', 
      detailPage: '/service-details/6'
    },
    { 
      id: 7,
      title: 'Business Continuity', 
      description: 'From cyber incidents to severe weather, disruptions are inevitable. We design and implement business continuity and disaster recovery (BC/DR) capabilities to protect your people, data, and critical services...',
      icon: 'fa-shield-alt', 
      detailPage: '/service-details/7'
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
          <button 
            className="slider-arrow left-arrow" 
            onClick={handlePrev} 
            aria-label="Previous"
          >
            &#8592;
          </button>

          <div className="slider-wrapper">
            <div 
              className="slider-track" 
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {services.map((service) => (
                <div 
                  className="services-card" 
                  key={service.id} 
                  style={{ width: `${100 / visibleCount}%`, minWidth: isDesktop ? '320px' : '100%' }}
                >
                  <div className="service-icon">
                    <i className={`fa ${service.icon}`} aria-hidden="true"></i>
                  </div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                  {/* Read More Link */}
                  <Link to={service.detailPage} className="read-more-link">Read More</Link>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="slider-arrow right-arrow" 
            onClick={handleNext} 
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
