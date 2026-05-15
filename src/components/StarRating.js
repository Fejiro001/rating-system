import { useState } from "react";
import Star from "./Star";

function StarRating(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const ratings = [
    { index: 0, rating: "Terrible" },
    { index: 1, rating: "Bad" },
    { index: 2, rating: "Okay" },
    { index: 3, rating: "Good" },
    { index: 4, rating: "Excellent" }
  ];

  const handleRating = (e) => {
    console.log(e.target);
  };

  const handleButtonHover = () => {};

  return (
    <section>
      <h1>Rate Our Product</h1>
      <ul className="star-list">
        {ratings.map((rate) => (
          <li key={rate.index}>
            <Star isHovered={isHovered} onHover={handleButtonHover} handleRating={handleRating} />
          </li>
        ))}
      </ul>
      <h2></h2>
    </section>
  );
}

export default StarRating;
