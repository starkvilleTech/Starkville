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

import services from './data/ServicesData';
import 'font-awesome/css/font-awesome.min.css';


import allServicesHeader from './assets/tired.jpg'; 

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

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

// Service detail page - UNTOUCHED as requested
function ServiceDetailPageWrapper() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === parseInt(serviceId));

  const pageTitle = service?.title || 'Service Detail';
  const pageDescription = service?.subheading || '';
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


function AllServicesPage() {
  return (
    <>
      <Header
        pageTitle="All Services"
        pageDescription="Explore everything we offer in one place."
        boxedDescription={true}
        backgroundImage={allServicesHeader} 
      />
      <AllServices services={services} />
      <Footer />
    </>
  );
}

// Main app
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