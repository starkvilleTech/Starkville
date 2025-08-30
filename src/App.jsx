import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CountUpComponent from './components/CountUpComponent';
import About from './components/About';
import Logo from './components/Logo';
import Service from './components/Service';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import 'font-awesome/css/font-awesome.min.css';

const services = [
  { id: 1, title: 'IT Consulting', p: 'Practical, vendor‑neutral advice that turns technology into measurable outcomes.' },
  { id: 2, title: 'Digital & Business Transformation', p: 'Human‑centered change that delivers measurable, enterprise‑wide impact.' },
  { id: 3, title: 'Cloud Management', p: 'Architecture, migration, and day-2 operations for major cloud platforms.' },
  { id: 4, title: 'IT Operations', p: 'ITIL‑aligned processes, modern tooling, and a customer‑first service desk.' },
  { id: 5, title: 'Project & Program Management', p: 'Governance, methods, and leadership to deliver complex initiatives on time and on budget.' },
  { id: 6, title: 'AI & Process Automation', p: 'From quick‑win automations to enterprise AI platforms with governance.' },
  { id: 7, title: 'Business Continuity', p: 'Design, testing, and execution to keep critical services running through disruption.' },
];

function HomePage() {
  return (
    <>
      {/* Header uses default background */}
      <Header />
      <CountUpComponent />
      <About />
      <Logo />
      <Service id="services" />
      <Testimonials />
      <Footer />
    </>
  );
}

function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === parseInt(serviceId));
  const pageTitle = service ? service.title : 'Service Detail';
  const pageDescription = service ? service.p : '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Always uses default header background */}
      <Header
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        boxedDescription={true} // keeps the description in a box
      />
      <ServiceDetail />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service-details/:serviceId" element={<ServiceDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
