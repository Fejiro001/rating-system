import { FaStar } from "react-icons/fa6";

function Star(props) {
  const { isHovered, activeIndex, onHover, onLeave, handleRating } = props;

  return (
    <button className="star-button" onClick={handleRating} onMouseEnter={onHover} onMouseLeave={onLeave}>
      <FaStar className={`star ${isHovered && activeIndex ? "fill-star" : ""}`} />
    </button>
  );
}

export default Star;
