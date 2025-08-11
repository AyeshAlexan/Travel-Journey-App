import React from 'react';
import '../styles/HeroSection.css';
import beach from '../assets/beach.jpg';
import nature from '../assets/nature.jpeg';
import hotel from '../assets/Hotel.JPG';
import mountain from '../assets/mountain.jpg';

const categories = [
  { img: beach, title: 'BEACH' },
  { img: nature, title: 'NATURE' },
  { img: hotel, title: 'HOTEL' },
  { img: mountain, title: 'MOUNTAIN' }
];

const HeroSection = () => {
  return (
    <div className="hero-section">
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

      <div className="hero-content">
        <div className="left-content">
          <h1>
            EXPLORING THE<br />
            BEAUTY OF<br />
            SRI LANKA.
          </h1>
          <button className="hero-btn">LEARN MORE</button>
        </div>

        <div className="scroll-wrapper">
          <div className="scroll-cards">
            {categories.map((item, index) => (
              <div className="scroll-card" key={index}>
                <img src={item.img} alt={item.title} />
                <div className="overlay-text">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
