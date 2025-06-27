import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"> <i class="ri-road-map-line"></i> easyTour</div>
      <ul className="navbar-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/packages">PACKAGES</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
      <Link to="/Signin">
        <button className="login-btn">LOGIN / REGISTER</button>
      </Link>
    </nav>
  );
};

export default Navbar;