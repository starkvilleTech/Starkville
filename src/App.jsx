import React from 'react';
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
  { id: 1, title: 'Digital Transformation Solutions' },
  { id: 2, title: 'AI & Data Analytics' },
  { id: 3, title: 'IT Consulting & Strategy' },
  { id: 4, title: 'Business Continuity & Disaster Recovery' },
  { id: 5, title: 'IT Projects & Program Management' },
];

function HomePage() {
  return (
    <>
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

// Wrapper for service detail page to pass pageTitle to Header
function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === parseInt(serviceId));
  const pageTitle = service ? service.title : 'Service Detail';

  return (
    <>
      <Header pageTitle={pageTitle} />
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
