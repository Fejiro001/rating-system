import { useState } from "react";
import Star from "./Star";

function StarRating(props) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const ratings = [
    { index: 0, rating: "Terrible" },
    { index: 1, rating: "Bad" },
    { index: 2, rating: "Okay" },
    { index: 3, rating: "Good" },
    { index: 4, rating: "Excellent" }
  ];

  const handleRating = (e) => {};

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
              activeIndex={activeIndex === rate.index}
              isHovered={isHovered}
              onHover={() => handleButtonHover(rate.index)}
              handleRating={handleRating}
            />
          </li>
        ))}
      </ul>
      <h2></h2>
    </section>
  );
}

export default StarRating;
