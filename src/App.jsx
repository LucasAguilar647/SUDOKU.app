import SudokuBoard from "./components/SudokuBoard";
import sudokuGrid from "./assets/sudokuGrid";
import "./css/app.css";

function App() {
  return (
    <div className="container">
      <div>
        <h1>SUDOKU</h1>

        <SudokuBoard sudokuGrid={sudokuGrid} />
      </div>
    </div>
  );
}

export default App;
