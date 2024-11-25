import React from 'react';
import './HowWeWork.scss';

const steps = [
  {
    id: 1,
    icon: "🩺",
    title: "Make Appointment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "#"
  },
  {
    id: 2,
    icon: "💼",
    title: "Get Consultant",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#"
  },
  {
    id: 3,
    icon: "😌",
    title: "Get Relief",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    link: "#"
  }
];

const HowWeWork = () => {
  return (
    <section className="how-we-work">
      <div className="section-header">
        <h2>How We Work</h2>
      </div>
      <div className="steps">
        {steps.map((step) => (
          <div key={step.id} className="step">
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <a href={step.link} className="read-more">Read More &raquo;</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
