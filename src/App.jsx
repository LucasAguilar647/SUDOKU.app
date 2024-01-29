import SudokuBoard from "./components/SudokuBoard";
import sudokuIncomplete from "./assets/sudokuIncomplete";
import { useState } from "react";
import "./css/app.css";
import { PantallaGanador } from "./components/PantallaGanador";

function App() {
  const [isComplete, setIsComplete] = useState(24);

  return (
    <div className="container">
      <div className="recuadro-juego">
        {isComplete === 25 ? (
          <PantallaGanador />
        ) : (
          <>
            <h1>SUDOKU</h1>
            
            <SudokuBoard
              sudokuIncomplete={sudokuIncomplete}
              isComplete={isComplete}
              setIsComplete={setIsComplete}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
