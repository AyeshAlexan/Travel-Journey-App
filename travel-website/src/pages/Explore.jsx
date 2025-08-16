import React from "react";

const Explore = () => {
  const beaches = [
    {
      name: "Unawatuna Beach",
      img: "../assets/explore/beach-1.jpg",
      desc: "A golden sandy beach famous for snorkeling and palm trees.",
    },
    {
      name: "Mirissa Beach",
      img: "../assets/explore/beach-2.jpg",
      desc: "Perfect for surfing, whale watching, and relaxing sunsets.",
    },
    {
      name: "Arugam Bay",
      img: "../assets/explore/beach-3.jpg",
      desc: "Top surf destination with a laid-back coastal vibe.",
    },
    {
      name: "Bentota Beach",
      img: "../assets/explore/beach-4.jpg",
      desc: "Popular for water sports and beautiful resorts.",
    },
    {
      name: "Nilaveli Beach",
      img: "../assets/explore/beach-5.jpg",
      desc: "Quiet, serene beach near Trincomalee with crystal-clear waters.",
    },
    {
      name: "Hikkaduwa Beach",
      img: "../assets/explore/hikkaduwa.jpg",
      desc: "Known for coral reefs, snorkeling, and nightlife.",
    },
  ];

  const famousPlaces = [
    {
      name: "Sigiriya Rock Fortress",
      img: "/assets/sigiriya.jpg",
      desc: "An ancient rock fortress and UNESCO World Heritage Site.",
    },
    {
      name: "Temple of the Tooth",
      img: "/assets/kandy.jpg",
      desc: "Sacred Buddhist temple in Kandy, a cultural landmark.",
    },
    {
      name: "Galle Fort",
      img: "/assets/galle.jpg",
      desc: "Historic Dutch fort town with colonial architecture.",
    },
    {
      name: "Ella Rock",
      img: "/assets/ella.jpg",
      desc: "Scenic hiking destination with panoramic views.",
    },
    {
      name: "Dambulla Cave Temple",
      img: "/assets/dambulla.jpg",
      desc: "Cave temple complex filled with Buddhist murals and statues.",
    },
    {
      name: "Nuwara Eliya",
      img: "/assets/nuwara.jpg",
      desc: "Known as 'Little England', famous for tea plantations.",
    },
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
    <div className="explore-container">
      <section>
        <h2>Beaches of Sri Lanka</h2>
        {renderGrid(beaches)}
      </section>

      <section>
        <h2>Famous Places</h2>
        {renderGrid(famousPlaces)}
      </section>
    </div>
  );
};

export default Explore;
