import React from "react";
import "./SecondNavbar.scss";

function SecondNavbar() {
  return (
    <div className="nav-wrapper">
      <form action="#" className="nav-form">
        <input type="text" placeholder="Name" className="form-input" />
        <input type="email" placeholder="Email" className="form-input" />
        <select name="department" id="department" className="form-select">
          <option value="">Select Department</option>
          <option value="Dental Care">Dental Care</option>
          <option value="Eye Care">Eye Care</option>
          <option value="Blood Test">Blood Test</option>
          <option value="Checkup">Check Up</option>
        </select>
        <button className="form-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default SecondNavbar;
