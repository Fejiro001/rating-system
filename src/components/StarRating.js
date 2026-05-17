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

// Extra: pop sound on clicking the stars
const popSound = new Audio(audio);
popSound.type = "audio/wav";

function StarRating() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [clickedStar, setClickedStar] = useState(null);

  const handleRating = (index) => {
    // Pop sound depends on index of star
    popSound.volume = (index + 1) / ratings.length;
    popSound.play();
    setClickedStar(index);
  };

  const handleOnHover = (index) => {
    setActiveIndex(index);
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
