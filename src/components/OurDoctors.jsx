import React from "react";
import profile from "../assets/profile.png";
import group3 from "../assets/doclines.png";
import group4 from "../assets/doclines2.png";
import "./OurDoc.scss"

const DoctorCard = ({ profile, name, job }) => {
  return (
    <div className="doctor-card">
      <div className="doctor-image">
        <img src={profile} alt={`${name}'s profile`} />
      </div>
      <div className="doctor-info">
        <h3>{name}</h3>
        <p>{job}</p>
      </div>
    </div>
  );
};

const Doctors = () => {
  const doctors = [
    { name: "Smith Hellen", job: "Psychiatrist", profile },
    { name: "John Smith", job: "Psychiatrist", profile },
    { name: "Nyasha Petro", job: "Psychiatrist", profile },
    { name: "Blessing Gaps", job: "Psychiatrist", profile },
    { name: "John Bean", job: "Psychiatrist", profile },
    { name: "Hellen Baby", job: "Psychiatrist", profile },
  ];

  return (
    <div className="doctors-section">
      <img src={group3} alt="Decorative line 2" className="line2" />
      <img src={group4} alt="Decorative line 1" className="line1" />

      <div className="doctors-header">
        <div className="header-text">
          <h3>Our Doctors</h3>
          <h1>Meet Our Specialists</h1>
        </div>
        <button className="view-more-btn">View More</button>
      </div>

      <div className="doctor-cards-wrapper">
        {doctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            profile={doctor.profile}
            name={doctor.name}
            job={doctor.job}
          />
        ))}
      </div>
    </div>
  );
};

export default Doctors;