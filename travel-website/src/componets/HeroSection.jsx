import React from "react";
import '../Styles/HeroSection.css';
import beach from '../Assets/beach.jpg';
import nature from '../Assets/nature.jpg';
import hotel from '../Assets/hotel.jpg';
import mountain from '../Assets/mountain.jpg';
import heroBg from '../Assets/hero-bg.jpg';

const categories = [
    { img: beach, title: 'BEACH'},
    { img: nature, title: 'NATURE'},
    { img: hotel, title: 'HOTEL'},
    { img: mountain, title: 'MOUNTAIN'}];

    const HeroSection = () =>{
        return(
            <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
                <nav className="hero-nav">
                    <div className="logo">Travel Plan</div>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#explore">Explore</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </nav>

                < div className="hero-content">
                <div className="left-content">
                    <p className="subheading">Travel Plan</p>
                    <h1>NEVER STOP<br/>EXPLORING THE <br/> WORLD.</h1>
                    <button className="hero-btn">LEARN MORE</button>
                </div>
           <div className="scroll-cards">
          {categories.map((item, i) => (
            <div className="scroll-card" key={i}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;