import React from "react";
import "../styles/Footer.css";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-name">Travel Lanka</h2>
      <p className="footer-tagline">Excellence in travel experiences</p>

      <nav className="footer-links">
        <a href="../pages/Home.jsx">Home</a>
        <a href="../pages/About.jsx">About</a>
        <a href="../pages/Explore.jsx">Explore</a>
        <a href="../pages/Contact.jsx">Contact</a>
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
