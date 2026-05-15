import { FaStar } from "react-icons/fa6";

function Star(props) {
  const { activeIndex, isHovered, onHover, handleRating } = props;

  return (
    <button className="star-button" onClick={handleRating} onMouseEnter={onHover}>
      <FaStar className={`star ${isHovered && activeIndex ? "fill-star" : ""}`} />
    </button>
  );
}

export default Star;
