import React from "react";
import styles from "../styles/Explore.css"; 

// Beach images import 
import beach1 from "../assets/explore/beach- 1.jpg";
import beach2 from "../assets/explore/beach-2.jpg";
import beach3 from"../assets/explore/beach-3.jpg";
import beach4 from "../assets/explore/beach-4.jpg";
import beach5 from "../assets/explore/beach-5.jpg";
import beach6 from "../assets/explore/beach-6.jpg";


//Famous Images import 
import f1 from "../assets/sigiriya.jpeg";
import f2 from "../assets/kandy.jpg";
import f3 from "../assets/galle-fort.jpg";
import f4 from "../assets/ella-rock.jpg";
import f5 from "../assets/culture.jpg";
import f6 from "../assets/eliya.JPG";
import Footer from "../components/Footer";


//Mountain Images import
import m1 from "../assets/explore/mon-1.jpg";
import m2 from "../assets/explore/mon-2.jpg";
import m3 from "../assets/explore/mon-3.jpeg";
import m4 from "../assets/explore/mon-4.jpg";
import m5 from "../assets/explore/mon-5.JPG";
import m6 from "../assets/explore/mon-6.jpg";

const Explore = () => {
  const beaches = [
    {
      name: "Unawatuna Beach",
      img: beach1,
      desc: "A golden sandy beach famous for snorkeling and palm trees.",
    },
    {
      name: "Mirissa Beach",
      img: beach2,
      desc: "Perfect for surfing, whale watching, and relaxing sunsets.",
    },
    {
      name: "Arugam Bay",
      img: beach3,
      desc: "Top surf destination with a laid-back coastal vibe.",
    },
    {
      name: "Bentota Beach",
      img: beach4,
      desc: "Popular for water sports and beautiful resorts.",
    },
    {
      name: "Nilaveli Beach",
      img: beach5,
      desc: "Quiet, serene beach near Trincomalee with crystal-clear waters.",
    },
    {
      name: "Hikkaduwa Beach",
      img: beach6,
      desc: "Known for coral reefs, snorkeling, and nightlife.",
    },
  ];

  const famousPlaces = [
    {
      name: "Sigiriya Rock Fortress",
      img: f1,
      desc: "An ancient rock fortress and UNESCO World Heritage Site.",
    },
    {
      name: "Temple of the Tooth",
      img: f2,
      desc: "Sacred Buddhist temple in Kandy, a cultural landmark.",
    },
    {
      name: "Galle Fort",
      img: f3,
      desc: "Historic Dutch fort town with colonial architecture.",
    },
    {
      name: "Ella Rock",
      img: f4,
      desc: "Scenic hiking destination with panoramic views.",
    },
    {
      name: "Dambulla Cave Temple",
      img: f5,
      desc: "Cave temple complex filled with Buddhist murals and statues.",
    },
    {
      name: "Nuwara Eliya",
      img: f6,
      desc: "Known as 'Little England', famous for tea plantations.",
    },
  ];
  
    const mountains = [
  {
    name: "Adam’s Peak (Sri Pada)",
    img: m1,
    desc: "A sacred mountain famous for the pilgrimage trail and sunrise views."
  },
  {
    name: "Pidurangala Rock",
    img: m2,
    desc: "Known for its panoramic view of Sigiriya Rock and surrounding landscapes."
  },
  {
    name: "Kirigalpotta",
    img: m3,
    desc: "Sri Lanka’s second highest mountain, ideal for hiking in Horton Plains."
  },
  {
    name: "Knuckles Mountain Range",
    img: m4,
    desc: "A UNESCO site with rugged peaks, cloud forests, and biodiversity."
  },
  {
    name: "Namunukula",
    img: m5,
    desc: "The ‘Nine Peaks’ mountain range overlooking Badulla and Ella."
  },
  {
    name: "Bible Rock (Bathalegala)",
    img: m6,
    desc: "A flat-topped mountain resembling an open book, iconic in Kegalle."
  }
];

 
  const renderGrid = (items) => (
    <div className="explore-grid">
      {items.map((place, index) => (
        <div className="explore-card" key={index}>
          <img src={place.img} alt={place.name} />
          <h3>{place.name}</h3>
          <p>{place.desc}</p>
        </div>
      ))}
    </div>
  );

  return (
    <>
    <div className="explore-container">
        <br></br>
        <br></br>
        <br></br>
      <section>
        <h2>Beaches of Sri Lanka</h2>
        {renderGrid(beaches)}
      </section>

      <section>
        <h2>Historical Places In Sri Lanka</h2>
        {renderGrid(famousPlaces)}
      </section>

      <section>
        <h2>Mountains in Sri Lanka</h2>
        {renderGrid(mountains)}
      </section>
    </div> 
    <Footer/>
    </>
);
};

export default Explore;
