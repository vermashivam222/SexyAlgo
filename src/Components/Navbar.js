import React from "react";
import "./Navbar.css";


export default function Navbar() {
  return (
    <nav className="main-nav">
      <div className="logo-name">The Ace Algo.</div>
      <div className="menu-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/marketplace">About Us</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="butn">
        <a href="/contact">
          {" "}
          <button type="button" className="btn btn-outline-info">
            Login
          </button>
        </a>
      </div>
    </nav>
  );
}
