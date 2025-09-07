import React, { useMemo } from 'react';
import './LogoRow.css';
import comresk from '../assets/DFA png-02.png';
import spielonic from '../assets/fussion9.png';
import guiltbin from '../assets/Pelago All White Logo.png';
import marvaty from '../assets/Slate pNG3-02.png';
import orblo from '../assets/To Size Deepslate-01.png';


const LogoRow = () => {
  
  const logos = useMemo(() => [
    { src: comresk, alt: 'Comresk', key: 'comresk' },
    { src: spielonic, alt: 'Spielonic', key: 'spielonic' },
    { src: guiltbin, alt: 'Guiltbin', key: 'guiltbin' },
    { src: marvaty, alt: 'Marvaty', key: 'marvaty' },
    { src: orblo, alt: 'Orblo', key: 'orblo' }
  ], []);

  // Generate multiple instances for seamless animation
  const logoInstances = useMemo(() => {
    
    return Array(4).fill().flatMap((_, instance) => 
      logos.map(logo => ({
        ...logo,
        key: `${logo.key}-instance-${instance}`
      }))
    );
  }, [logos]);

  return (
    <section 
      className="logo-row-wrapper" 
      aria-label="Trusted by companies"
    >
      <div className="logo-row">
        {logoInstances.map((logo) => (
          <img
            key={logo.key}
            src={logo.src}
            alt={logo.alt}
            className="logo-row__image"
            loading="lazy" // Lazy load images for better performance
          />
        ))}
      </div>
    </section>
  );
};

export default LogoRow;