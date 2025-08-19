import React from 'react';
import './App.css';
import Header from './components/Header';
import CountUpComponent from './components/CountUpComponent'; 
import About from './components/About';
import Logo from './components/Logo'; 
import Service from './components/Service.jsx';
import Testimonials from './components/Testimonials'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CountUpComponent /> 
      <About />
      <Logo /> 
      <Service /> 
      <Testimonials />
      < Footer />
    </div>
  );
}

export default App;
