import React from 'react';
import { Link } from 'react-router-dom';
import './AllServices.css';
import services from "../data/ServicesData";


/*const services = [
  {
    id: 1,
    title: 'IT Consulting',
    description: 'Vendor-neutral advice for tech strategy and governance.',
    icon: 'fa-briefcase',
  },
  {
    id: 2,
    title: 'Digital & Business Transformation',
    description: 'Enterprise-wide change using tech, design, and agile methods.',
    icon: 'fa-exchange-alt',
  },
  {
    id: 3,
    title: 'Cloud Management',
    description: 'Architecture, migration, and operations for major cloud platforms.',
    icon: 'fa-cloud',
  },
  {
    id: 4,
    title: 'IT Operations',
    description: 'Modern tooling, service desks, and observability.',
    icon: 'fa-cogs',
  },
  {
    id: 5,
    title: 'Project & Program Management',
    description: 'Agile and traditional methods for complex delivery.',
    icon: 'fa-tasks',
  },
  {
    id: 6,
    title: 'AI & Process Automation',
    description: 'Unlocking new value through automation and governance.',
    icon: 'fa-robot',
  },
  {
    id: 7,
    title: 'Business Continuity',
    description: 'Keep critical services running through disruption.',
    icon: 'fa-shield-alt',
  },
];
*/
const AllServices = () => {
  return (
    <div className="all-services-container">
      <h1 className="all-services-title">All Our Services</h1>
      <div className="all-services-grid">
        {services.map((service) => (
          <Link
            to={`/service-details/${service.id}`}
            key={service.id}
            className="all-service-box"
          >
            <i className={`fa ${service.icon}`} aria-hidden="true"></i>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
