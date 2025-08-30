import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';

const services = [
  {
    id: 1,
    title: 'IT Consulting',
    p: 'Practical, vendor‑neutral advice that turns technology into measurable outcomes.',
    headerImage: '/images/Mask groupo.png'
  },
  {
    id: 2,
    title: 'Digital & Business Transformation',
    p: 'Human‑centered change that delivers measurable, enterprise‑wide impact.',
    headerImage: '/images/Mask groupo.png'
  },
  {
    id: 3,
    title: 'Cloud Management',
    p: 'Architecture, migration, and day-2 operations for major cloud platforms.',
    headerImage: '/images/Mask groupo.png'
  },
  {
    id: 4,
    title: 'IT Operations',
    p: 'ITIL‑aligned processes, modern tooling, and a customer‑first service desk.',
    headerImage: '/images/Mask groupo.png'
  },
  {
    id: 5,
    title: 'Project & Program Management',
    p: 'Governance, methods, and leadership to deliver complex initiatives on time and on budget.',
    headerImage: '/images/Mask groupo.png'
  },
  {
    id: 6,
    title: 'AI & Process Automation',
    p: 'From quick‑win automations to enterprise AI platforms with governance.',
    headerImage: '/images/Mask groupo.png'
  },
  {
    id: 7,
    title: 'Business Continuity',
    p: 'Design, testing, and execution to keep critical services running through disruption.',
    headerImage: '/images/Mask groupo.png'
  },
];

function ServiceDetailHeaderWrapper() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === parseInt(serviceId));
  const pageTitle = service ? service.title : 'Service Detail';
  const pageDescription = service ? service.p : '';
  const backgroundImage = service?.headerImage;

  return (
    <>
      <Header
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        backgroundImage={backgroundImage}
      />
      <ServiceDetail />
      <Footer />
    </>
  );
}

export { ServiceDetailHeaderWrapper };
