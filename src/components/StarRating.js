import { useState } from "react";
import Star from "./Star";

function StarRating(props) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [clickedStar, setClickedStar] = useState(null);

  const ratings = [
    { index: 0, rating: "Terrible" },
    { index: 1, rating: "Bad" },
    { index: 2, rating: "Average" },
    { index: 3, rating: "Good" },
    { index: 4, rating: "Excellent" }
  ];

  const handleRating = (index) => {
    setClickedStar(index);
  };

  const handleButtonHover = (index) => {
    setActiveIndex(index);
    setIsHovered(true);
  };

  return (
    <section>
      <h1>Rate Our Product</h1>
      <ul className="star-list">
        {ratings.map((rate) => (
          <li key={rate.index}>
            <Star
              isHovered={isHovered}
              activeIndex={activeIndex === rate.index || rate.index < activeIndex}
              onHover={() => handleButtonHover(rate.index)}
              handleRating={() => handleRating(rate.index)}
            />
          </li>
        ))}
      </ul>
      <h2>{ratings[clickedStar]?.rating ?? ""}</h2>
    </section>
  );
}

export default StarRating;
