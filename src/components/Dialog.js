import { FaX } from "react-icons/fa6";
import image from "../media/dialog-image.jpg";

function Dialog(props) {
  const { isDialogOpen, closeDialog } = props;

  return (
    <dialog open={isDialogOpen}>
      <button className="close-dialog" onClick={closeDialog}>
        <FaX />
      </button>
      <img src={image} alt="A lone sailboat reflected in a perfectly still, star-filled lake under the Milky Way." />
    </dialog>
  );
}

export default Dialog;
