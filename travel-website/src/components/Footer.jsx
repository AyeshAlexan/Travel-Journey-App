import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-name">Travel Lanka</h2>
      <p className="footer-tagline">Excellence in travel experiences</p>

      <nav className="footer-links">
        <a href="../components/HeroSection.jsx">Home</a>
        <a href="#">About</a>
        <a href="#">Explore</a>
        <a href="#">Contact</a>
      </nav>

      <div className="footer-social">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedin /></a>
      </div>

      <p className="footer-legal">
        © {new Date().getFullYear()} Travel Lanka. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
