import { useState } from "react";
import { PantallaGanador } from "./components/PantallaGanador";
import SudokuBoard from "./components/SudokuBoard";
import sudokuIncomplete from "./assets/sudokuIncomplete";
import Timer from "./components/Timer";
import "./css/app.css";

function App() {
  const [isComplete, setIsComplete] = useState(0);
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);

  return (
    <div className="container">
      <div className="recuadro-juego">
        {isComplete === 25 ? (
          <PantallaGanador tiempoTranscurrido={tiempoTranscurrido} />
        ) : (
          <>
            <h1>SUDOKU</h1>

            <SudokuBoard
              sudokuIncomplete={sudokuIncomplete}
              isComplete={isComplete}
              setIsComplete={setIsComplete}
            />
            <Timer setTiempo={setTiempoTranscurrido} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
