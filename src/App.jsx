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
import allServicesHeader from './assets/tired.jpg'; // ✅ your custom header image
import 'font-awesome/css/font-awesome.min.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Layout component to handle consistent structure
function Layout({ children, headerProps = {} }) {
  return (
    <>
      <Header {...headerProps} />
      {children}
      <Footer />
    </>
  );
}

// Home page
function HomePage() {
  return (
    <>
      <CountUpComponent />
      <About />
      <Logo />
      <Service id="services" services={services} />
      <Testimonials />
    </>
  );
}

// Service detail wrapper
function ServiceDetailPageWrapper() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === parseInt(serviceId));

  const pageTitle = service?.title || 'Service Detail';
  const pageDescription = service?.subheading || '';
  const backgroundImage = service?.image || '/images/default-service-bg.png';

  return (
    <ServiceDetail 
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      backgroundImage={backgroundImage}
    />
  );
}

// Main App
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />

        <Route path="/service-details/:serviceId" element={
          <Layout headerProps={{
            pageTitle: "Service Details",
            boxedDescription: true
          }}>
            <ServiceDetailPageWrapper />
          </Layout>
        } />

        <Route path="/services" element={
          <Layout headerProps={{
            pageTitle: "All Our Services",
            pageDescription: "Explore everything we offer in one place.",
            boxedDescription: true,
            backgroundImage: allServicesHeader
          }}>
            <AllServices services={services} />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
