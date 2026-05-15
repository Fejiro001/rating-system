import { FaRegStar } from "react-icons/fa6";

function Star(props) {
  const { onHover, handleRating } = props;

  return (
    <button onClick={handleRating} onMouseEnter={onHover}>
      <FaRegStar />
    </button>
  );
}

export default Star;
