import React from "react";
import styles from  "../styles/TrendingSection.module.css";
import kandy from "../assets/kandy.jpg";
import anuradhapura from "../assets/anuradhapura.jpg";
import galle from "../assets/galle.jpg";        
import sigiriya from "../assets/sigiriya.jpg";
import  Ruwananw from "../assets/Ruwanwelisaya.jpg";

const trendingData = [
    {img : kandy, label: "Kandy"},
    {img : anuradhapura, label: "Anuradhapura"},
    {img : galle, label: "Galle"},
    {img : sigiriya, label: "Sigiriya"},
    {img : Ruwananw, label: "Ruwanwelisaya"}
];

const TrendingSection = () => {
    return(
        <div  clasName="trending-container">
            <h2>What's Trending in Sri Lanka</h2>
            <div className="trending-scroll">
                {trendingData.map((item, index)=> (
                    <div className="trending-card" key={index}>
                        <div className = "bg-number">{index +1}</div>
                        <img src={item.img} alt={item.label} />
                        <div className="label"> Recently Added</div>
                        <div className="caption">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingSection;
