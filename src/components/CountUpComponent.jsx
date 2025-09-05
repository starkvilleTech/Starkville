import React from 'react';
import CountUp from 'react-countup';
import './CountUpComponent.css';

const stats = [
  { label: 'Happy Clients', end: 30 },
  { label: 'Partners', end: 15 },
  { label: 'Projects', end: 10 },
];

const CountUpComponent = () => {
  return (
    <section className="countup-container">
      {stats.map((stat, index) => (
        <React.Fragment key={stat.label}>
          <div className="countup-box">
            <CountUp
              start={0}
              end={stat.end}
              duration={2.5}
              separator=","
              suffix="+"
              className="countup-number"
            />
            <p className="countup-label">{stat.label}</p>
          </div>
          {index < stats.length - 1 && <div className="separator">|</div>}
        </React.Fragment>
      ))}
    </section>
  );
};

export default CountUpComponent;
