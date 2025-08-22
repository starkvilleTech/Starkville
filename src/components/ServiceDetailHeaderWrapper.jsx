import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';

const services = [
  { id: 1, title: 'Digital Transformation Solutions' },
  { id: 2, title: 'AI & Data Analytics' },
  { id: 3, title: 'IT Consulting & Strategy' },
  { id: 4, title: 'Business Continuity & Disaster Recovery' },
  { id: 5, title: 'IT Projects & Program Management' },
];

function ServiceDetailHeaderWrapper() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === parseInt(serviceId));
  const pageTitle = service ? service.title : 'Service Detail';

  return (
    <>
      <Header pageTitle={pageTitle} /> /* Pass title to header */
      <ServiceDetail />
      <Footer />
    </>
  );
}

export { ServiceDetailHeaderWrapper };
