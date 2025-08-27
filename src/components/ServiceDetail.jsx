import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ServiceDetail.css';
import 'font-awesome/css/font-awesome.min.css';

const services = [
  {
    id: 1,
    icon: 'fa-cogs',
    subheading: 'Practical, vendor‑neutral advice that turns technology into measurable outcomes.',
    overview:
      'At Starkville Tech, we assist leadership teams in translating business goals into clear, actionable technology strategies.',
    outcomes: [
      'A fit-for-purpose technology roadmap aligned to business objectives and budgets',
      'Rationalized application and vendor portfolios with cost/benefit analysis',
      'Clear governance, KPIs/OKRs, and operating model for delivery and accountability',
      'Risk‑reduction actions across security, continuity, and compliance',
    ],
    cta: 'Book a strategy session →',
  },
  {
    id: 2,
    icon: 'fa-robot',
    subheading: 'Human‑centered change that delivers measurable, enterprise‑wide impact.',
    overview:
      'Transformation succeeds when strategy, process, people, and technology move together. We help you redesign services.',
    outcomes: [
      'Transformation roadmap and benefits case',
      'Target operating model (TOM) and change plan',
      'Experience blueprints and process maps',
      'KPI dashboard and runbook',
    ],
    cta: 'Start your transformation assessment →',
  },
  {
    id: 3,
    icon: 'fa-laptop',
    subheading: 'Architecture, migration, and day-2 operations for major cloud platforms.',
    overview:
      'We design, deploy, and operate cloud environments tailored to your security, compliance, performance, and budget.',
    outcomes: [
      'Architecture and security design docs',
      'Migration runbooks and cutover plan',
      'Ops handbook, SLAs/SLOs, and cost dashboard',
    ],
    cta: 'Request a cloud readiness review →',
  },
  {
    id: 4,
    icon: 'fa-shield-alt',
    subheading: 'ITIL‑aligned processes, modern tooling, and a customer‑first service desk.',
    overview:
      'We build and run scalable IT operations that keep your organization productive and protected.',
    outcomes: [
      'ITSM playbooks and runbooks',
      'Service catalog and SLA/XLA pack',
      'Operations dashboard and quarterly review cadence',
    ],
    cta: 'Talk to us about your IT operations goals →',
  },
  {
    id: 5,
    icon: 'fa-project-diagram',
    subheading: 'Governance, methods, and leadership to deliver complex initiatives on time and on budget.',
    overview:
      'We provide hands‑on delivery leadership across projects and portfolios.',
    outcomes: [
      'Charter, plan, budget, and risk register',
      'Status dashboards and stakeholder comms pack',
      'Benefits register and lessons learned',
    ],
    cta: 'Get delivery leadership for your next initiative →',
  },
  {
    id: 6,
    icon: 'fa-brain',
    subheading: 'From quick‑win automations to enterprise AI platforms with governance.',
    overview:
      'We help organizations automate manual work, improve decisions, and unlock new value with AI—safely and pragmatically.',
    outcomes: [
      'Use‑case portfolio and value model',
      'Working prototypes/pilots with measured KPIs',
      'Production runbooks, dashboards, and governance artifacts',
    ],
    cta: 'Explore your first three automation candidates →',
  },
  {
    id: 7,
    icon: 'fa-sync-alt',
    subheading: 'Design, testing, and execution to keep critical services running through disruption.',
    overview:
      'From cyber incidents to severe weather, disruptions are inevitable. We make sure you’re ready.',
    outcomes: [
      'BIA report and prioritized recovery portfolio',
      'Continuity plans and DR runbooks',
      'Exercise playbooks and after‑action reports',
    ],
    cta: 'Schedule a continuity and DR readiness review →',
  }
];

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const service = services.find((s) => s.id === parseInt(serviceId));

  if (!service) return <div className="service-not-found">Service not found!</div>;

  return (
    <div className="service-detail-container">
      <div className="top-bar">
        <button className="back-button" onClick={() => navigate(-1)}>&#8592; Back</button>
        <i className={`fa ${service.icon} service-icon`}></i>
      </div>

      <h1 className="service-title">{service.title}</h1>

      <p className="service-subheading">{service.subheading}</p>
      <div className="service-overview">{service.overview}</div>

      <ul className="service-outcomes">
        {service.outcomes.map((item, index) => (
          <li key={index}>🔧. {item}</li>
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
