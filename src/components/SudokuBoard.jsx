import React, { useState } from 'react';
import sudokuComplete from '../assets/sudokuComplete'
import '../css/SudokuBoard.css';

function SudokuBoard({ sudokuIncomplete }) {
  const [inputValues, setInputValues] = useState(sudokuIncomplete.map(row => row.slice()));
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event, rowIndex, colIndex) => {
    const { value } = event.target;
    const newInputValues = inputValues.map((row, rIndex) =>
      row.map((cell, cIndex) => (rIndex === rowIndex && cIndex === colIndex ? parseInt(value) || '' : cell))
    );
    setInputValues(newInputValues);

    if (parseInt(value) !== sudokuComplete[rowIndex][colIndex]) {
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
              {sudokuIncomplete[rowIndex][colIndex] !== 0 ? (
                sudokuIncomplete[rowIndex][colIndex]
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
