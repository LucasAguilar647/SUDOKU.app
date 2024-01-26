import SudokuBoard from "./components/SudokuBoard";
import sudokuIncomplete from "./assets/sudokuIncomplete";
import "./css/app.css";

function App() {
  return (
    <div className="container">
      <div className="recuadro-juego">
        <h1>SUDOKU</h1>

        <button>Pista</button>

        <SudokuBoard sudokuIncomplete={sudokuIncomplete} />

      </div>
    </div>
  );
}

export default App;
