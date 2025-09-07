import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import services from '../data/ServicesData'; // ✅ make sure this file actually exists and exports the array

function ServiceDetailHeaderWrapper() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === parseInt(serviceId));
  const pageTitle = service ? service.title : 'Service Detail';
  const pageDescription = service ? service.subheading : '';
  const backgroundImage = service ? service.image : '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        boxedDescription={true}
        backgroundImage={backgroundImage} // ✅ this is crucial
      />
      <ServiceDetail />
      <Footer />
    </>
  );
}

export { ServiceDetailHeaderWrapper };
