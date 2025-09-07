import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useLocation,
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import CountUpComponent from './components/CountUpComponent';
import About from './components/About';
import Logo from './components/Logo';
import Service from './components/Service';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import AllServices from './components/AllServices';

import 'font-awesome/css/font-awesome.min.css';

// Static Service Data with Background Images 
const services = [
  {
    id: 1,
    title: 'IT Consulting',
    p: 'Practical, vendor‑neutral advice that turns technology into measurable outcomes.',
    image: '/images/IT Ops.jpg',
  },
  {
    id: 2,
    title: 'Digital & Business Transformation',
    p: 'Human‑centered change that delivers measurable, enterprise‑wide impact.',
    image: '/images/Image_fx (58).jpg',
  },
  {
    id: 3,
    title: 'Cloud Management',
    p: 'Architecture, migration, and day-2 operations for major cloud platforms.',
    image: '/images/Cloud Management.jpg',
  },
  {
    id: 4,
    title: 'IT Operations',
    p: 'ITIL‑aligned processes, modern tooling, and a customer‑first service desk.',
    image: '/images/IT Ops.jpg',
  },
  {
    id: 5,
    title: 'Project & Program Management',
    p: 'Governance, methods, and leadership to deliver complex initiatives on time and on budget.',
    image: '/images/Project Mgt).jpg',
  },
  {
    id: 6,
    title: 'AI & Process Automation',
    p: 'From quick‑win automations to enterprise AI platforms with governance.',
    image: '/images/AI & Process.jpg',
  },
  {
    id: 7,
    title: 'Business Continuity',
    p: 'Design, testing, and execution to keep critical services running through disruption.',
    image: '/images/Business Continuity.jpg',
  },
];

//  Scroll to Top on Route Change 
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Homepage 
function HomePage() {
  return (
    <>
      <Header />
      <CountUpComponent />
      <About />
      <Logo />
      <Service id="services" services={services} />
      <Testimonials />
      <Footer />
    </>
  );
}

// Service Detail Page Wrapper 
function ServiceDetailPageWrapper() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === parseInt(serviceId));
  const pageTitle = service?.title || 'Service Detail';
  const pageDescription = service?.p || '';
  const backgroundImage = service?.image || '/images/default-service-bg.png';

  return (
    <>
      <Header
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        boxedDescription={true}
        backgroundImage={backgroundImage}
      />
      <ServiceDetail />
      <Footer />
    </>
  );
}

// All Services Grid Page 
function AllServicesPage() {
  return (
    <>
      <Header
        pageTitle="All Services"
        pageDescription="Explore everything we offer in one place."
        boxedDescription={true}
      />
      <AllServices services={services} />
      <Footer />
    </>
  );
}

// App Router
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service-details/:serviceId" element={<ServiceDetailPageWrapper />} />
        <Route path="/services" element={<AllServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
