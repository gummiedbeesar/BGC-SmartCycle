import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-item-box">
        <Link to="/" className="nav-item">
          Home
        </Link>
      </div>

      <div className="nav-item-box">
        <Link to="/about" className="nav-item">
          About Us
        </Link>
      </div>
      
      <div className="nav-item-box">
        <Link to="/goal" className="nav-item">
          Our Goal
        </Link>
      </div>
      
      {/* <div className="nav-item-box">
        <Link to="/resources" className="nav-item">
          Resources
        </Link>
      </div> */}
    </div>
  );
};

export { Navbar };
