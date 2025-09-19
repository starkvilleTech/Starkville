import React, { useState, useRef, useCallback } from 'react';
import './Testimonials.css';
import testimonialImage1 from '../assets/man.jpg';
import testimonialImage2 from '../assets/Image_fx (39).jpg';
import testimonialImage3 from '../assets/Image_fx (38).jpg';
import testimonialImage4 from '../assets/woman.jpg';
import testimonialImage5 from '../assets/colored.jpg';
import testimonialImage6 from '../assets/man0.jpg';


const Testimonials = ({ id }) => {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);

  const testimonials = [
    {
      name: "“Starkville simplified our entire process.”",
      review: "“Starkville Tech helped us align our IT roadmap with our business strategy. Their vendor-neutral advice saved us time and reduced costs significantly.” — CIO, Government Agency",
      image: testimonialImage1,
      rating: 5 
    },
    {
      name: "“The support feels personal.”",
      review: "“Our operations are more efficient than ever. Cycle times dropped by nearly 30%, and customer satisfaction scores improved within months.” — Director of Operations, Healthcare Firm",
      image: testimonialImage2,
      rating: 4 
    },
    {
      name: "“Built for the future.”",
      review: "“The team designed a secure cloud environment for us and optimized costs. Their expertise in compliance gave us peace of mind.” — CTO, Financial Services Company",
      image: testimonialImage3,
      rating: 4 
    },
    {
      name: "“Game-changer for productivity.”",
      review: "“Service desk response times improved drastically. The automation and monitoring they set up keep our systems running smoothly every day.” — IT Manager, Mid-Sized Enterprise",
      image: testimonialImage4,
      rating: 5 
    },
    {
      name: "“Efficient and scalable.”",
      review: "“From cloud infrastructure to day-to-day IT support, Starkville delivers consistently. We're scaling with confidence.” — Head of IT, Retail Company",
      image: testimonialImage5,
      rating: 5 
    },
    {
      name: "“Top-tier cybersecurity.”",
      review: "“They implemented security protocols that passed our toughest audits. We now sleep better.” — CISO, Legal Firm",
      image: testimonialImage6,
      rating: 4 
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star"}>
          {i <= rating ? "★" : "☆"}
        </span>
      );
    }
    return <div className="rating-stars">{stars}</div>;
  };

  const toggleShowAll = () => {
    setShowAll(prev => !prev);
    if (showAll && containerRef.current) {
      setTimeout(() => {
        containerRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 4);

  return (
    <section id={id} className="testimonials" ref={containerRef}>
      <h2>What Users Say About Us</h2>

      <div className={`testimonial-container desktop-grid ${showAll ? 'expanded' : ''}`}>
        {displayedTestimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className={`testimonial-card ${index >= 4 ? 'hidden-testimonial' : ''}`}
            style={{ 
              animationDelay: index >= 4 ? `${(index-4) * 0.2}s` : '0s',
              opacity: index >= 4 && !showAll ? 0 : 1,
              height: index >= 4 && !showAll ? 0 : 'auto',
              overflow: index >= 4 && !showAll ? 'hidden' : 'visible',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="user-icon">
              <img src={testimonial.image} alt={`${testimonial.name} avatar`} />
            </div>
            <p className="user-name">{testimonial.name}</p>
            <p className="user-review">{testimonial.review}</p>
            {renderStars(testimonial.rating)}
          </div>
        ))}
      </div>

      {testimonials.length > 4 && (
        <button className="view-more" onClick={toggleShowAll}>
          {showAll ? 'View less' : 'View more'}
        </button>
      )}
    </section>
  );
};

export default Testimonials;