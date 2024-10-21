import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [elapsedMilliSeconds, setElapsedMilliSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isRunning) {
      intervalId = setInterval(
        () => setElapsedMilliSeconds((time) => time + 10),
        10,
      ); // Update per 10ms
    }
    return () => clearInterval(intervalId);
  }, [isRunning, elapsedMilliSeconds]);

  const startPause = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setElapsedMilliSeconds(0);
  };
  const extractTime = (
    ms: number,
  ): {
    hours: string;
    minutes: string;
    seconds: string;
    milliseconds: string;
  } => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor(ms % 1000);
    return {
      hours: padWithZero(hours),
      minutes: padWithZero(minutes),
      seconds: padWithZero(seconds),
      milliseconds: padWithZero(milliseconds / 10), // Show only last 2 digits of milliseconds
    };
  };

  const padWithZero = (num: number, length: number = 2): string =>
    num.toString().padStart(length, "0");

  const { hours, minutes, seconds, milliseconds } =
    extractTime(elapsedMilliSeconds);

  return (
    <>
      <h1>Stopwatch</h1>
      <div>
        <div>
          {hours}:{minutes}:{seconds}.<span>{milliseconds}</span>
        </div>
        <div>
          <button onClick={startPause}>{isRunning ? "Pause" : "Start"}</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}
