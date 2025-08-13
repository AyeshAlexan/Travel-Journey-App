import React from 'react';
import styles from '../styles/NavBar.css';

function NavBar() {
  return (
       <nav className="hero-nav">
        <div className="logo">Travel Lanka</div>
        <ul className="nav-links">
        <a href="../components/HeroSection.jsx">Home</a>
        <a href="../components/About.jsx">About</a>
        <a href="../components/Explore.jsx">Explore</a>
        <a href="../components/Contact.jsx">Contact</a>
        </ul>
        <div className="social-icons">
          <i className="fa fa-search"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
      </nav>
    
  );
}

export default NavBar;