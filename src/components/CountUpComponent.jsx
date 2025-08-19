import React from 'react';
import CountUp from 'react-countup';
import './CountUpComponent.css'; 

const CountUpComponent = () => {
  return (
    <div className="countup-container">
      <div className="countup-box">
        <CountUp start={0} end={129} duration={2.5} separator="," suffix="+" />
        <p>Happy Clients</p>
      </div>
      <div className="separator">|</div> 
      <div className="countup-box">
        <CountUp start={0} end={108} duration={2.5} separator="," suffix="+" />
        <p>Partners</p>
      </div>
      <div className="separator">|</div> {/* Adding separator line */}
      <div className="countup-box">
        <CountUp start={0} end={133} duration={2.5} separator="," suffix="+" />
        <p>Projects</p>
      </div>
    </div>
  );
};

export default CountUpComponent;
