import React from "react";
import "../styles/Reviews.css";

const reviewsData = [
  {
    name: "Sarah Williams",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    comment: "Absolutely loved the trip! The service and locations were amazing.",
  },
  {
    name: "John Smith",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4,
    comment: "Great experience overall, just wish the hotel was closer to the beach."
  },
  {
    name: "Emily Davis",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    comment: "This was the most beautiful place I’ve ever visited!"
  },
  {
    name: "Michael Johnson",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 4,
    comment: "Loved the trip, but the weather was a bit unpredictable."
  },
  {
    name: "Sophia Brown",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 5,
    comment: "Perfect in every way! Will book again next year."
  },
  {
    name: "David Wilson",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 3,
    comment: "Good service, but I think the price could be a little lower."
  }
];

const StarRating = ({ count }) => {
  return (
    <div className="stars">
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2>Traveler Reviews</h2>
      <p className="subtitle">See what our travelers have to say about their experiences</p>
      <div className="reviews-grid">
        {reviewsData.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={review.img} alt={review.name} className="profile-pic" />
            <h3>{review.name}</h3>
            <StarRating count={review.rating} />
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
