import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const startTimer = (duration: number) => {
    setTime(duration);
    setIsActive(true);
  };

  return (
    <div>
      <h2>タイマー</h2>
      <div>{time}s</div>
      {!isActive && (
        <>
          <button onClick={() => startTimer(60)}>60秒タイマー開始</button>
          <button onClick={() => startTimer(120)}>120秒タイマー開始</button>
        </>
      )}
      {isActive && (
        <button onClick={() => setIsActive(false)}>一時停止</button>
      )}
    </div>
  );
};

export default Timer;
