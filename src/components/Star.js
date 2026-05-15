import { FaStar } from "react-icons/fa6";

function Star(props) {
  const { onHover, handleRating } = props;

  return (
    <button className="star-button" onClick={handleRating} onMouseEnter={onHover}>
      <FaStar className="star" />
    </button>
  );
}

export default Star;
