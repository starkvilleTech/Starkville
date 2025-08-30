import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';

const services = [
  {
    id: 1,
    title: 'IT Consulting',
    p: 'Practical, vendor‑neutral advice that turns technology into measurable outcomes.',
  },
  {
    id: 2,
    title: 'Digital & Business Transformation',
    p: 'Human‑centered change that delivers measurable, enterprise‑wide impact.',
  },
  {
    id: 3,
    title: 'Cloud Management',
    p: 'Architecture, migration, and day-2 operations for major cloud platforms.',
  },
  {
    id: 4,
    title: 'IT Operations',
    p: 'ITIL‑aligned processes, modern tooling, and a customer‑first service desk.',
  },
  {
    id: 5,
    title: 'Project & Program Management',
    p: 'Governance, methods, and leadership to deliver complex initiatives on time and on budget.',
  },
  {
    id: 6,
    title: 'AI & Process Automation',
    p: 'From quick‑win automations to enterprise AI platforms with governance.',
  },
  {
    id: 7,
    title: 'Business Continuity',
    p: 'Design, testing, and execution to keep critical services running through disruption.',
  },
];

function ServiceDetailHeaderWrapper() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === parseInt(serviceId));
  const pageTitle = service ? service.title : 'Service Detail';
  const pageDescription = service ? service.p : '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        boxedDescription={true} // keeps the paragraph in a box
      />
      <ServiceDetail />
      <Footer />
    </>
  );
}

export { ServiceDetailHeaderWrapper };
