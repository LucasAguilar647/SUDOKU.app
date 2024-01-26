import React, { useState } from 'react';
import sudokuCoorect from '../assets/sudokuCorrect'
import '../css/SudokuBoard.css';

function SudokuBoard({ sudokuGrid }) {
  const [inputValues, setInputValues] = useState(sudokuGrid.map(row => row.slice()));
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event, rowIndex, colIndex) => {
    const { value } = event.target;
    const newInputValues = inputValues.map((row, rIndex) =>
      row.map((cell, cIndex) => (rIndex === rowIndex && cIndex === colIndex ? parseInt(value) || '' : cell))
    );
    setInputValues(newInputValues);

    if (parseInt(value) !== sudokuCoorect[rowIndex][colIndex]) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  console.log(isValid)

  return (
    <div className="sudoku-board">
      {inputValues.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className={`sudoku-cell ${!isValid ? 'invalid' : ''}`}>
              {sudokuGrid[rowIndex][colIndex] !== 0 ? (
                sudokuGrid[rowIndex][colIndex]
              ) : (
                <input
                  type="number"
                  autoComplete="off"
                  value={inputValues[rowIndex][colIndex]}
                  onChange={(event) => handleInputChange(event, rowIndex, colIndex)}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SudokuBoard;
