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
    {img :kandy,label: "Kandy Esala Perahera"},
    {img : ella,label: "Ella -Kandy"},
    {img : jaffna,label: "Jaffna Fort"},
    {img : waterfall,label: "Bambarakanda Falls"},
    {img : colombo,label: "Colombo City"},   
    {img : gallfort,label: "Galle Fort"}
];

return(
    <section className="top-destinations">
        <h2>Top Destinations</h2>
        <p className="subtitle">Discover the most breathtaking spots Sri Lanka has to offer</p>
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