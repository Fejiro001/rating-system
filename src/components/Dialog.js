import { FaX } from "react-icons/fa6";
import image from "../media/images/dialog-image.jpg";

function Dialog(props) {
  const { isDialogOpen, closeDialog } = props;

  return (
    <div className={`dialog-container ${isDialogOpen ? "" : "hide"}`}>
      <div className="dialog" open={isDialogOpen}>
        <button className="close-dialog" onClick={closeDialog} title="Close dialog">
          <FaX />
        </button>
        <img src={image} alt="A lone sailboat reflected in a perfectly still, star-filled lake under the Milky Way." />
      </div>
    </div>
  );
}

export default Dialog;
