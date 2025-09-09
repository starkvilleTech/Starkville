import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import services from '../data/ServicesData';

function ServiceDetailHeaderWrapper() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === parseInt(serviceId));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fallback if service not found
  if (!service) return <div>Service not found!</div>;

  // Prepare props for Header
  const headerProps = {
    pageTitle: service.title,
    pageDescription: service.subheading,
    boxedDescription: true,
    backgroundImage: service.image, 
  };

  return (
    <>
      <Header {...headerProps} />
      <ServiceDetail />
      <Footer />
    </>
  );
}

export { ServiceDetailHeaderWrapper };
