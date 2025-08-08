import React from "react";
import styles from  "../styles/TrendingSection.css";
import kandy from "../assets/kandy.jpg";
import anuradhapura from "../assets/anuradhapura.jpg";
import galle from "../assets/galle.jpg";        
import sigiriya from "../assets/sigiriya.jpeg";
import Ruwananw from "../assets/Ruwanweli Maha Seya.jpg";
import ella from "../assets/ela.jpeg"; 
import face from "../assets/galle-face-beach-seen.jpg";


const trendingPlaces = [
    {img: kandy, label: "Kandy"},
    {img: anuradhapura, label: "Anuradhapura"},
    {img: galle, label: "Galle"},
    {img: sigiriya, label: "Sigiriya"},
    {img: Ruwananw, label: "Ruwanwelisaya"},
    {img: ella, label: "Ella"},
    {img: face, label: "Galle Face Beach"}
];

const TrendingSection = () => (
  <section className="trending-section">
    <h2 className="trending-title">Trending Places</h2>
    <div className="trending-cards">
      {trendingPlaces.map((place, idx) => (
        <div className="trending-card" key={place.label}>
          <span className="rank-badge">{idx + 1}</span>
          <img src={place.img} alt={place.label} />
          <div className="trending-card-title">{place.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TrendingSection;
