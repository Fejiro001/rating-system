import { useState } from "react";
import Dialog from "./components/Dialog";
import StarRating from "./components/StarRating";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <main>
      <div className="container">
        <Dialog isDialogOpen={isDialogOpen} closeDialog={closeDialog} />
        <StarRating />
        <button className="open-dialog" onClick={openDialog}>
          Open Dialog
        </button>
      </div>
    </main>
  );
}

export default App;
