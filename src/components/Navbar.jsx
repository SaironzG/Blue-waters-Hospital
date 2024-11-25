import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import "./Navbar.scss";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <img src={logo} alt="Logo" />
        </a>

        {/* Desktop Navigation */}
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li className="navbar-link">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-link">
            <a href="#about">About</a>
          </li>
          <li className="navbar-link">
            <a href="#department">Department</a>
          </li>
          <li className="navbar-link">
            <a href="#pages">Pages</a>
          </li>
          <li className="navbar-link">
            <a href="#blog">Blog</a>
          </li>
          <li className="navbar-link">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Appointment Button */}
        <button className="navbar-appointment-btn">Make Appointment</button>

        {/* Mobile Menu Button */}
        <button
          className={`navbar-menu-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="navbar-mobile-links">
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#department" onClick={() => setMenuOpen(false)}>
              Department
            </a>
          </li>
          <li>
            <a href="#pages" onClick={() => setMenuOpen(false)}>
              Pages
            </a>
          </li>
          <li>
            <a href="#blog" onClick={() => setMenuOpen(false)}>
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
          <li>
            <button
              className="mobile-appointment-btn"
              onClick={() => setMenuOpen(false)}
            >
              Make Appointment
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;