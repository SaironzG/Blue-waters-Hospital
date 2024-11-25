import React from "react";
import "./OtherServices.scss";
import microscope from "../assets/miscroscope.png";

const services = [
  { id: 1, title: "Major Operation", icon: "🔬", description: "Lorem ipsum dolor sit amet." },
  { id: 2, title: "Dermatology", icon: "💆‍♀️", description: "Consectetur adipiscing elit." },
  { id: 3, title: "Pro Surgery", icon: "🩺", description: "Sed do eiusmod tempor incididunt." },
  { id: 4, title: "Ambulance Service", icon: "🚑", description: "Labore et dolore magna aliqua." },
  { id: 5, title: "Corona Virus Test", icon: "🦠", description: "Ut enim ad minim veniam." },
];

const OtherServices = () => {
  return (
    <div className="service-section">
      <div className="central-image">
        <img
          src={microscope}
          alt="Microscope"
        />
      </div>
      <div className="service-items">
        {services.map((service, index) => (
          <div key={service.id} className="service-item">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherServices;
