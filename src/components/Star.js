import { FaStar } from "react-icons/fa6";

function Star(props) {
  const { activeIndex, onHover, onLeave, handleRating } = props;

  return (
    <button className="star-button" onClick={handleRating} onMouseEnter={onHover} onMouseLeave={onLeave} onFocus={onHover} onBlur={onLeave}>
      <FaStar className={`star ${activeIndex ? "fill-star" : ""}`} />
    </button>
  );
}

export default Star;
