// ServiceDetailHeaderWrapper.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';

const services = [
  { id: 1, title: 'IT Consulting', p: 'Practical, vendor‑neutral advice that turns technology into measurable outcomes.' },
  { id: 2, title: 'Digital & Business Transformation', p: 'Practical, vendor‑neutral advice that turns technology into measurable outcomes.' },
  { id: 3, title: 'Cloud Management', p: 'Practical, vendor‑neutral advice that turns technology into measurable outcomes.' },
  { id: 4, title: 'IT Operations', p: 'Practical, vendor‑neutral advice that turns technology into measurable outcomes.' },
  { id: 5, title: 'Project & Program Management', p: 'Practical, vendor‑neutral advice that turns technology into measurable outcomes.' },
  { id: 6, title: 'AI & Process Automation', p: 'Practical, vendor‑neutral advice that turns technology into measurable outcomes.' },
  { id: 7, title: 'Business Continuity', p: 'Practical, vendor‑neutral advice that turns technology into measurable outcomes.' },
];

function ServiceDetailHeaderWrapper() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === parseInt(serviceId));
  const pageTitle = service ? service.title : 'Service Detail';
  const pageDescription = service ? service.p : '';

  console.log("pageTitle: ", pageTitle);  // Add this log
  console.log("pageDescription: ", pageDescription);  // Add this log

  return (
    <>
      <Header pageTitle={pageTitle} pageDescription={pageDescription} />

      <ServiceDetail />
      <Footer />
    </>
  );
}

export { ServiceDetailHeaderWrapper };
