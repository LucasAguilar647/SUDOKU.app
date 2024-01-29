import React from 'react'
import '../css/pantallaGanador.css'


export const PantallaGanador = ({ tiempoTranscurrido }) => {

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const remainingSeconds = timeInSeconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      };
      
  return (
    <div>
        <h1>¡Felicidades!</h1>
        <h3>Ha completado el SUDOKU en {formatTime(tiempoTranscurrido)} minutos</h3>
    </div>    
  );
};
