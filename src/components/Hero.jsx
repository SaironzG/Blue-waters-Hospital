import React from "react";
import girl from "../assets/Group 1.png";
import line from "../assets/Group 3.png";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="text">
        <img className="line" src={line} alt="Decorative line" />
        <h1>
          TAKE <span className="hero-fade">CARE</span> OF YOUR{" "}
          <span className="hero-fade">HEALTH</span>
          <br />
          NOW..
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere totam,
          <br />
          iure fuga corrupti ullam alias illo placeat sed quasi?
        </p>
        <button className="hero-btn">Get Started</button>
      </div>
      <div className="pic">
        <img src={girl} alt="Health illustration" />
      </div>
    </div>
  );
}

export default Hero;
