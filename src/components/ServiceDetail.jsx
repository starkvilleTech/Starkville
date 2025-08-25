import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ServiceDetail.css';
import 'font-awesome/css/font-awesome.min.css';

const services = [
  {
    id: 1,
    title: 'IT Consulting',
    icon: 'fa-cogs',
    subheading: 'Practical, vendor‑neutral advice that turns technology into measurable outcomes.',
    overview:
      'At Starkville Tech, we assist leadership teams in translating business goals into clear, actionable technology strategies...',
    outcomes: [
      'A fit-for-purpose technology roadmap aligned to business objectives and budgets',
      'Rationalized application and vendor portfolios with cost/benefit analysis',
      'Clear governance, KPIs/OKRs, and operating model for delivery and accountability',
      'Risk‑reduction actions across security, continuity, and compliance',
    ],
    cta: 'Book a strategy session →',
  },
];

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const service = services.find((s) => s.id === parseInt(serviceId));

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

      <p className="service-subheading">{service.subheading}</p>
      <div className="service-overview">{service.overview}</div>

      <ul className="service-outcomes">
        {service.outcomes.map((item, index) => (
          <li key={index}>✔️ {item}</li>
        ))}
      </ul>

      <button className="cta-button" onClick={() => setShowForm(!showForm)}>
        {service.cta}
      </button>

      {showForm && (
        <form className="consultation-form">
          <h2>Schedule a Consultation</h2>
          <label>First Name*<input type="text" required /></label>
          <label>Last Name*<input type="text" required /></label>
          <label>Company Name<input type="text" /></label>
          <label>Company Email*<input type="email" required /></label>
          <label>Company Website<input type="url" /></label>
          <label>Address<input type="text" /></label>
          <label>Date Available for Consultation<input type="date" /></label>
          <label>Consultation Details<textarea rows="4" /></label>
          <label>Other Details<textarea rows="3" /></label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ServiceDetail;
