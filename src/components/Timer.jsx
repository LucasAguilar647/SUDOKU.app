import React, { useState, useEffect } from 'react';
import '../css/timer.css'

const Timer = ({ setTiempo }) => {
  const initialSeconds = 0;
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
      setTiempo(prevTiempo => prevTiempo + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [setTiempo]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const remainingSeconds = timeInSeconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <p>Tiempo: {formatTime(seconds)}</p>
  );
};

export default Timer;
