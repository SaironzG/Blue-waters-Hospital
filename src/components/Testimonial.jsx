// Testimonial.js
import React from 'react';
import './Testimonial.scss';
import people from "../assets/profile.png"

const testimonials = [
  {
    name: 'Rasalina De Willam',
    role: 'DIC Manager',
    image: [people],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Alexar Dentinxa',
    role: 'Founder & CEO',
    image: [people],
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Jobayer Ali Khanna',
    role: 'DIC Manager',
    image:[people],
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;