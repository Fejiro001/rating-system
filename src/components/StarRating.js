import { useState } from "react";
import Star from "./Star";
import audio from "../media/audio/bubble-pop.wav";

const ratings = [
  { index: 0, rating: "Terrible" },
  { index: 1, rating: "Bad" },
  { index: 2, rating: "Average" },
  { index: 3, rating: "Good" },
  { index: 4, rating: "Excellent" }
];

const popSound = new Audio(audio);
popSound.type = "audio/wav";
popSound.volume = 0.4;

function StarRating() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [clickedStar, setClickedStar] = useState(null);

  const handleRating = (index) => {
    popSound.play();
    setClickedStar(index);
  };

  const handleOnHover = (index) => {
    setActiveIndex(index);
    setIsHovered(true);
  };

  const handleNotHovered = () => {
    setActiveIndex(clickedStar);
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
              onHover={() => handleOnHover(rate.index)}
              onLeave={handleNotHovered}
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
