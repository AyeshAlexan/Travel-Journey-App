import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <nav className="hero-nav">
      <div className="logo">Travel Lanka</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="social-icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
    </nav>
  );
}

export default NavBar;
