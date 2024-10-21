import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // 10ミリ秒ごとに更新
      }, 10);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);
  const formatTime = (time: number) => {
    const getSeconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const getMinutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const getHours = `0${Math.floor((time / 3600000) % 24)}`.slice(-2);
    const getMilliseconds = Math.floor((time % 1000) / 10);
    return {
      hours: getHours,
      minutes: getMinutes,
      seconds: getSeconds,
      milliseconds:
        getMilliseconds < 10 ? `0${getMilliseconds}` : getMilliseconds, // ゼロパディング
    };
  };
  const { hours, minutes, seconds, milliseconds } = formatTime(time);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Stopwatch App</h1>
      <div className="elapsed-time">
        {hours}:{minutes}:{seconds}:
        <span className="milliseconds">{milliseconds}</span>
      </div>
      <div>
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? "Stop" : "Start"}
        </button>
        <button
          onClick={() => {
            setIsActive(false);
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default Stopwatch;
