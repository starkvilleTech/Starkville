import React from 'react';
import './App.css';
import Header from './components/Header';
import CountUpComponent from './components/CountUpComponent'; 
import About from './components/About';
import Logo from './components/Logo'; 
import Services from './Services'; // Import the Services component


function App() {
  return (
    <div className="App">
      <Header />
      <CountUpComponent /> {/* Add the CountUpComponent here */}
      <About />
      <Logo /> 
      <Services /> 
      
      
    </div>
  );
}

export default App;
