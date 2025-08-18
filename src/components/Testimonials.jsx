import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "“Starkville simplified our entire process.”",
      review: "From planning to execution, everything became more efficient. It saved us time and money.  — Mike O., Project Manager",
      image: "src/assets/Image_fx (40).jpg",  
    },
    {
      name: "“The support feels personal.”",
      review: "The team at Starkville is always there when we need them. They understand our needs and provide tailored solutions. — John D., Business Owner",
      image: "src/assets/Image_fx (39).jpg", 
    },
    {
      name: "“Built for the future.”",
      review: "Starkville's solutions are not just about today, they are designed to grow with us. We feel secure in our investment. — Sarah L., IT Director",
      image: "src/assets/Image_fx (38).jpg", 
    },
    {
      name: "“Game-changer for productivity.”",
      review: "Starkville's tools have transformed how we work. Our team is more productive and focused on what matters. — Ada T., Operations Manager",
      image: "src/assets/Image_fx (37).jpg", 
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <h2>What Users Say About Us</h2>
      
      {/* Slider for mobile */}
      <div className="testimonial-container mobile-slider">
        <div className="testimonial-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="user-icon">
                <img src={testimonial.image} alt={`${testimonial.name} avatar`} />
              </div>
              <p className="user-name">{testimonial.name}</p>
              <p className="user-review">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Grid for tablet/desktop */}
      <div className="testimonial-container desktop-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="user-icon">
              <img src={testimonial.image} alt={`${testimonial.name} avatar`} />
            </div>
            <p className="user-name">{testimonial.name}</p>
            <p className="user-review">{testimonial.review}</p>
          </div>
        ))}
      </div>

      <div className="slider-buttons">
        <button onClick={prevSlide} className="slider-button prev-button">Prev</button>
        <button onClick={nextSlide} className="slider-button next-button">Next</button>
      </div>
      
      <button className="view-more">View more</button>
    </section>
  );
};

export default Testimonials;
