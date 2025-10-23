import React from "react";
import { useStopwatch } from "./hooks/useStopWatch";

const Stopwatch: React.FC = () => {
  const { time, isRunning, start, pause, reset } = useStopwatch();

  const milliseconds = `0${Math.floor((time % 1000) / 10)}`.slice(-2);
  const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
  const minutes = `0${Math.floor(time / 60000) % 60}`.slice(-2);
  const hours = `0${Math.floor(time / 3600000)}`.slice(-2);

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>
        {hours}:{minutes}:{seconds}:{milliseconds}
      </p>
      {isRunning ? (
        <button onClick={pause}>Pause</button>
      ) : (
        <button onClick={start}>Start</button>
      )}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
