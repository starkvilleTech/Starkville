import React, { useState } from 'react';
import './Testimonials.css';
// Import all images
import testimonialImage1 from '../assets/Image_fx (40).jpg';
import testimonialImage2 from '../assets/Image_fx (39).jpg';
import testimonialImage3 from '../assets/Image_fx (38).jpg';
import testimonialImage4 from '../assets/Image_fx (37).jpg';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "“Starkville simplified our entire process.”",
      review: "From planning to execution, everything became more efficient. It saved us time and money. — Mike O., Project Manager",
      image: testimonialImage1,
    },
    {
      name: "“The support feels personal.”",
      review: "The team at Starkville is always there when we need them. They understand our needs and provide tailored solutions. — John D., Business Owner",
      image: testimonialImage2,
    },
    {
      name: "“Built for the future.”",
      review: "Starkville's solutions are not just about today, they are designed to grow with us. We feel secure in our investment. — Sarah L., IT Director",
      image: testimonialImage3,
    },
    {
      name: "“Game-changer for productivity.”",
      review: "Starkville's tools have transformed how we work. Our team is more productive and focused on what matters. — Ada T., Operations Manager",
      image: testimonialImage4,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonials">
      <h2>What Users Say About Us</h2>
      
      {/* Mobile Slider */}
      <div className="testimonial-container mobile-slider">
        <div 
          className="testimonial-slider" 
          style={{ 
            transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
            width: `${testimonials.length * 100}%`
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="user-icon">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} avatar`} 
                />
              </div>
              <p className="user-name">{testimonial.name}</p>
              <p className="user-review">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Desktop Grid */}
      <div className="testimonial-container desktop-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="user-icon">
              <img 
                src={testimonial.image} 
                alt={`${testimonial.name} avatar`} 
              />
            </div>
            <p className="user-name">{testimonial.name}</p>
            <p className="user-review">{testimonial.review}</p>
          </div>
        ))}
      </div>

      <div className="slider-buttons">
        <button 
          onClick={prevSlide} 
          className="slider-button prev-button"
          aria-label="Previous testimonial"
        >
          &#8592; {/* Left arrow */}
        </button>
        <button 
          onClick={nextSlide} 
          className="slider-button next-button"
          aria-label="Next testimonial"
        >
          &#8594; {/* Right arrow */}
        </button>
      </div>
      
      <button className="view-more">View more</button>
    </section>
  );
};

export default Testimonials;