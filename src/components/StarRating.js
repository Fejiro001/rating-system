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
    <>
      <h1>Rate our Product</h1>
      {ratings.map((rate) => (
        <Star isHovered={isHovered} onHover={handleButtonHover} handleRating={handleRating} key={rate.index} />
      ))}
      <h2>Good</h2>
    </>
  );
}

export default StarRating;
