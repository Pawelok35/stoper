import React, { useEffect, useState } from 'react';
import FormattedTime from './FormattedTime';

function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const handleStart = () => {
    setTimerOn(true);
  };

  const handleStop = () => {
    setTimerOn(false);
  };

  const handleReset = () => {
    setTime(0);
  };

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="timers">
      <h2>STOPER</h2>
      <FormattedTime time={time} />
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;