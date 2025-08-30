import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import backgroundImage from '../assets/Mask groupo.png';

const Service = ({ id }) => {
  const services = [
    {
      id: 1,
      title: 'IT Consulting',
      description: 'At Starkville Tech, we assist leadership teams in translating business goals into clear, actionable technology strategies...',
      icon: 'fa-briefcase',
      detailPage: '/service-details/1'
    },
    {
      id: 2,
      title: 'Digital & Business Transformation',
      description: 'Transformation succeeds when strategy, process, people, and technology move together...',
      icon: 'fa-exchange-alt',
      detailPage: '/service-details/2'
    },
    {
      id: 3,
      title: 'Cloud Management',
      description: 'We design, deploy, and operate cloud environments tailored to your security, compliance, performance...',
      icon: 'fa-cloud',
      detailPage: '/service-details/3'
    },
    {
      id: 4,
      title: 'IT Operations',
      description: 'We build and run scalable IT operations that keep your organization productive and protected...',
      icon: 'fa-cogs',
      detailPage: '/service-details/4'
    },
    {
      id: 5,
      title: 'Project & Program Management',
      description: 'We provide hands‑on delivery leadership across projects and portfolios...',
      icon: 'fa-tasks',
      detailPage: '/service-details/5'
    },
    {
      id: 6,
      title: 'AI & Process Automation',
      description: 'We help organizations automate manual work, improve decisions, and unlock new value with AI...',
      icon: 'fa-robot',
      detailPage: '/service-details/6'
    },
    {
      id: 7,
      title: 'Business Continuity',
      description: 'From cyber incidents to severe weather, disruptions are inevitable...',
      icon: 'fa-shield-alt',
      detailPage: '/service-details/7'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
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
    <div
      id={id}
      className="services-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      ref={sectionRef}
    >
      <div className="services-content">
        <h2 className="services-title">Our Services</h2>
        <div className="slider-container">
          <button className="slider-arrow left-arrow" onClick={handlePrev} aria-label="Previous">
            &#8592;
          </button>

          <div className="slider-wrapper">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {services.map((service, index) => (
                <div
                  className={`services-card ${inView ? 'animate-slide-down' : ''}`}
                  key={service.id}
                  style={{
                    width: `${100 / visibleCount}%`,
                    minWidth: isDesktop ? '320px' : '100%',
                    animationDelay: `${index * 0.15}s`
                  }}
                >
                  <div className="service-icon">
                    <i className={`fa ${service.icon}`} aria-hidden="true"></i>
                  </div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                  <Link to={service.detailPage} className="read-more-link">
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-arrow right-arrow" onClick={handleNext} aria-label="Next">
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
