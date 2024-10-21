import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Timer() {
  const [time, setTime] = useState(5 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isRunning && time > 0) {
      intervalId = setInterval(() => setTime((time) => time - 1), 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const startStop = () => {
    if (time > 0) {
      setIsRunning(!isRunning);
    }
  };

  const reset = () => {
    setTime(5 * 60);
    setIsRunning(false);
  };

  const addTime = (seconds: number) => {
    setTime((time) => time + seconds);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${padWithZero(minutes)}:${padWithZero(remainingSeconds)}`;
  };

  const padWithZero = (num: number, length: number = 2): string =>
    num.toString().padStart(length, "0");

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Timer</h1>
      <Card>
        <CardContent className="flex flex-col items-center p-6">
          <div className="text-6xl font-mono mb-6">{formatTime(time)}</div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[1, 5, 10, 30, 60, 300].map((seconds) => (
              <Button key={seconds} onClick={() => addTime(seconds)}>
                +{seconds}sec
              </Button>
            ))}
          </div>
          <div className="space-x-4">
            <Button onClick={startStop}>{isRunning ? "Pause" : "Start"}</Button>
            <Button onClick={reset}>Reset</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
