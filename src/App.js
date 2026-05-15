import Dialog from "./components/Dialog";
import StarRating from "./components/StarRating";

function App() {
  return (
    <main>
      <StarRating />
      <Dialog/>
      <button className="open-dialog">Open Dialog</button>
    </main>
  );
}

export default App;
