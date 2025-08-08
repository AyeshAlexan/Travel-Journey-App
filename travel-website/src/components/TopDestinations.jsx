import React from "react";
import styles from "../styles/TopDestinations.css";
import kandy from "../assets/kandy1.jpeg";
import ella from "../assets/ella-tr.jpg";
import jaffna from "../assets/jaffna.jpg";

const TopDestinations = () => {
const destinations = [
    {img :kandy,label: "Kandy"},
    {img : ella,label: "Ella"},
    {img : jaffna,label: "Jaffna"},
];

return(
    <section className="top-destinations">
        <h2>Top Destinations</h2>
        <div className="destination-grid">
            {destinations.map((place, index)=>(
                <div className="destination-card" key={index}>
                    <img src={place.img} alt={place.label}/>
                    <div className="destination-label">{place.label}</div>
                </div>
            ))}
        </div>
    </section>
);
};

export default TopDestinations;