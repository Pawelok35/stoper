import React, { useEffect, useState } from 'react';
import './app.module.scss';
import TimeCounter from './TimeCounter';
function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
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
      <TimeCounter
        time={time}
        setTime={setTime}
        timerOn={timerOn}
        setTimerOn={setTimerOn}
      />
    </div>
  );
}

export default App;
