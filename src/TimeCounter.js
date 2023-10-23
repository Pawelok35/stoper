import React from 'react';

function TimeCounter({ time, setTime, timerOn, setTimerOn }) {
  return (
    <>
      <div>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + ((time / 10) % 100)).slice(-2)}:</span>
        <span>{('0' + ((time / 1) % 1000))}</span>
      </div>

      <div>
        <button onClick={() => setTimerOn(true)}>Start</button>
        <button onClick={() => setTimerOn(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </>
  );
}

export default TimeCounter;