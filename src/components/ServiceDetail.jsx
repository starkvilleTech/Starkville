import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ServiceDetail.css';
import 'font-awesome/css/font-awesome.min.css';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const services = [
    { id: 1, description: 'IT Consulting',
       icon: 'fa-cogs', 
       content: 'Full in-depth explanation of Digital Transformation Solutions...', 
       p:'Practical, vendor‑neutral advice that turns technology into measurable outcomes.' },

    { id: 2, description: 'Digital & Business Transformation',
       icon: 'fa-robot', 
       content: 'Full in-depth explanation of AI & Data Analytics...',
       p:'Practical, vendor‑neutral advice that turns technology into measurable outcomes.' },
       
    { id: 3, description: 'Cloud Management',
       icon: 'fa-laptop', 
       content: 'Full in-depth explanation of IT Consulting & Strategy...',
       p:'Practical, vendor‑neutral advice that turns technology into measurable outcomes.'  },
    { id: 4, description: 'IT Operations', 
      icon: 'fa-shield-alt', 
      content: 'Full in-depth explanation of Business Continuity & Disaster Recovery...',
       p:'Practical, vendor‑neutral advice that turns technology into measurable outcomes.' },
     
    { id: 5, description: 'Project & Program Management',
       icon: 'fa-project-diagram',
       content: 'Full in-depth explanation of IT Projects & Program Management...',
       p:'Practical, vendor‑neutral advice that turns technology into measurable outcomes.' },
    { id: 6, description: 'AI & Process Automation',
       icon: 'fa-project-diagram', 
       content: 'Full in-depth explanation of AI & Process Automation...',
        p:'Practical, vendor‑neutral advice that turns technology into measurable outcomes.' },
    { id: 7, description: 'Business Continuity',
       icon: 'fa-project-diagram',
       content: 'Full in-depth explanation of Business Continuity & Disaster Recovery...',
        p:'Practical, vendor‑neutral advice that turns technology into measurable outcomes.' },
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
        <h1 className="service-title">{service.description}</h1>
      </div>

      <p className="service-description">{service.description}</p>
      <div className="service-content">{service.content}</div>
    </div>
  );
};

export default ServiceDetail;
