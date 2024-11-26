import React, { useState } from "react";
import "./StartLoading.scss";

const StartLoading = () => {
  const [speed, setSpeed] = useState(3); // Default speed in seconds

  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
  };

  return (
    <div className="ecg-waveform-container">
      <div className="ecg-waveform-wrapper">
        {/* ECG Line Animation */}
        <div
          className="ecg-line"
          style={{ animationDuration: `${speed}s` }}
        ></div>
        {/* Pulse Indicator */}
        <div className="pulse-indicator"></div>
      </div>
      <p className="loading-text">Loading ... wait a bit</p>

   
      
    </div>
  );
};

export default StartLoading;
