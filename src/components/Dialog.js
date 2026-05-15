import { FaX } from "react-icons/fa6";
import image from "../media/dialog-image.jpg";

function Dialog() {
  return (
    <div>
      <button>
        <FaX />
      </button>
      <img src={image} alt="A lone sailboat reflected in a perfectly still, star-filled lake under the Milky Way." />
    </div>
  );
}

export default Dialog;
