import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ServiceDetail.css';
import 'font-awesome/css/font-awesome.min.css';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const services = [
    { 
      id: 1, 
      
      description: 'Modernizing legacy systems, automating workflows, and integrating new digital tools for efficiency.',
      icon: 'fa-cogs',
      content: 'Full in-depth explanation of Digital Transformation Solutions...' 
    },
    { 
      id: 2, 
       
      description: 'Building AI-powered applications, predictive analytics, and data-driven insights for smarter decision-making.',
      icon: 'fa-robot',
      content: 'Full in-depth explanation of AI & Data Analytics...' 
    },
    { 
      id: 3, 
      
      description: 'Offering expert guidance on IT infrastructure, operations, and long-term technology planning.',
      icon: 'fa-laptop',
      content: 'Full in-depth explanation of IT Consulting & Strategy...' 
    },
    { 
      id: 4, 
      
      description: 'Designing strategies and systems to ensure uninterrupted operations during disruptions.',
      icon: 'fa-shield-alt',
      content: 'Full in-depth explanation of Business Continuity & Disaster Recovery...' 
    },
    { 
      id: 5, 
      
      description: 'Planning, executing, and managing large-scale IT initiatives for governments and private organizations.',
      icon: 'fa-project-diagram',
      content: 'Full in-depth explanation of IT Projects & Program Management...' 
    },
  ];

  const service = services.find(s => s.id === parseInt(serviceId));

  if (!service) return <div className="service-not-found">Service not found!</div>;

  return (
    <div className="service-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        &#8592; Back
      </button>

      <div className="service-header">
        <i className={`fa ${service.icon} service-icon`}></i>
        <h1 className="service-title">{service.title}</h1>
      </div>

      <p className="service-description">{service.description}</p>
      <div className="service-content">{service.content}</div>
    </div>
  );
};

export default ServiceDetail;
