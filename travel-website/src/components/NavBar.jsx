import React from "react";
import styles from "../styles/Narbar.css";

const NavBar = () =>{
    return(
        <nav className="hero-nav">
        <div className="logo">Travel Lanka</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Explore</li>
          <li>Contact</li>
        </ul>
        <div className="social-icons">
          <i className="fa fa-search"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
      </nav>
    );
};

export default NavBar;