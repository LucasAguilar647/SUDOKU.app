import SudokuBoard from "./components/SudokuBoard";
import sudokuIncomplete from "./assets/sudokuIncomplete";
import "./css/app.css";

function App() {
  return (
    <div className="container">
      <div>
        <h1>SUDOKU</h1>

        <SudokuBoard sudokuIncomplete={sudokuIncomplete} />
      </div>
    </div>
  );
}

export default App;
