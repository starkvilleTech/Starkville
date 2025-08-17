import React from 'react';
import './App.css';
import Header from './components/Header';
import CountUpComponent from './components/CountUpComponent'; // Import the CountUpComponent
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <CountUpComponent /> {/* Add the CountUpComponent here */}
      <About />
    </div>
  );
}

export default App;
