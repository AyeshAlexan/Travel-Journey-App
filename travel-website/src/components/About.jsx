import React from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

function About () {
    return(
        <>
        <NavBar/>
        <div className="about-hero">
            <div className="overlay">
                <h1>About Us</h1>
            </div>
        </div>

        <section className="about-details">
            <div className="container">
                <h2>Our Story</h2>
                <p>
            Welcome to our travel journey website! We help explorers discover
            amazing destinations, plan trips, and make unforgettable memories.
                </p>
                <p>
            Our mission is to inspire and guide travelers from around the world
            with curated travel experiences, tips, and recommendations.

                </p>
            </div>
        </section>
        <Footer/>
        </>
    );
};

export default About;