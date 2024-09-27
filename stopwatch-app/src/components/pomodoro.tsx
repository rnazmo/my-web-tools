import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Pomodoro() {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isFocusTime, setIsFocusTime] = useState(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isRunning && time > 0) {
      intervalId = setInterval(() => setTime((time) => time - 1), 1000);
    } else if (time === 0) {
      setIsFocusTime(!isFocusTime);
      setTime(isFocusTime ? 5 * 60 : 25 * 60);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time, isFocusTime]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(25 * 60);
    setIsRunning(false);
    setIsFocusTime(true);
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
      <h1 className="text-3xl font-bold mb-6">Pomodoro Timer</h1>
      <Card>
        <CardContent className="flex flex-col items-center p-6">
          <div className="text-2xl mb-4">
            {isFocusTime ? "Focus" : "Short Break"}
          </div>
          <div className="text-6xl font-mono mb-6">{formatTime(time)}</div>
          <div className="space-x-4">
            <Button onClick={startStop}>{isRunning ? "Stop" : "Start"}</Button>
            <Button onClick={reset}>Reset</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
