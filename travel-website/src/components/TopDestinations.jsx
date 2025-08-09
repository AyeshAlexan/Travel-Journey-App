import React from "react";
import styles from "../styles/TopDestinations.css";
import kandy from "../assets/kandy1.jpeg";
import ella from "../assets/ella-tr.jpg";
import jaffna from "../assets/jaffna.jpg";
import waterfall from "../assets/waterfalls.jpg";
import colombo from "../assets/colombo.jpg";
import gallfort from "../assets/galle-fort.jpg";

const TopDestinations = () => {
const destinations = [
    {img :kandy,label: "Kandy"},
    {img : ella,label: "Ella"},
    {img : jaffna,label: "Jaffna"},
    {img : waterfall,label: "Waterfall"},
    {img : colombo,label: "Colombo"},   
    {img : gallfort,label: "Galle Fort"}
];

return(
    <section className="top-destinations">
        <h2>Top Destinations</h2>
        <div className="destination-grid">
            {destinations.map((place, index)=>(
                <div className="destination-card" key={index}>
                    <img src={place.img} alt={place.label}/>
                    <div className="destination-name">{place.label}</div>
                </div>
            ))}
        </div>
    </section>
);
};

export default TopDestinations;