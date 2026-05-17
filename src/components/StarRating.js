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

function StarRating() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [clickedStar, setClickedStar] = useState(null);

  // Extra: pop sound on clicking the stars
  const playPop = (volume) => {
    const popSound = new Audio(audio);
    popSound.type = "audio/wav";
    popSound.volume = volume;
    popSound.play();
  };

  const handleRating = (index) => {
    // Pop sound depends on index of star
    playPop((index + 1) / ratings.length);
    setClickedStar(index);
  };

  const handleStarPreview = (index) => {
    setActiveIndex(index);
  };

  const handleClearPreview = () => {
    setActiveIndex(clickedStar);
  };

  return (
    <section>
      <h1>Rate Our Product</h1>
      <ul className="star-list">
        {ratings.map((rate) => (
          <li key={rate.index}>
            <Star
              activeIndex={activeIndex !== null && (rate.index === activeIndex || rate.index < activeIndex)}
              onHover={() => handleStarPreview(rate.index)}
              onLeave={handleClearPreview}
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
