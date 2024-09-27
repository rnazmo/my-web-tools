import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedMilliSec, setElapsedMilliSec] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isRunning) {
      intervalId = setInterval(
        () => setElapsedMilliSec((prevTime) => prevTime + 10),
        10
      ); // Update per 10ms
    }
    return () => clearInterval(intervalId);
  }, [isRunning, elapsedMilliSec]);

  const toggleRunning = () => {
    setIsRunning((isRunning) => !isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setElapsedMilliSec(0);
  };
  const extractTime = (
    milliSec: number
  ): {
    hours: string;
    minutes: string;
    seconds: string;
    milliseconds: string;
  } => {
    const hours = Math.floor(milliSec / 3600000);
    const minutes = Math.floor((milliSec % 3600000) / 60000);
    const seconds = Math.floor((milliSec % 60000) / 1000);
    const milliseconds = Math.floor(milliSec % 1000);
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
    extractTime(elapsedMilliSec);

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Stopwatch</h1>
      <Card>
        <CardContent className="flex flex-col items-center p-6">
          <div className="text-6xl font-mono mb-6">
            {hours}:{minutes}:{seconds}.
            <span className="text-4xl">{milliseconds}</span>
          </div>
          <div className="space-x-4">
            <Button onClick={toggleRunning}>
              {isRunning ? "Pause" : "Start"}
            </Button>
            <Button onClick={reset}>Reset</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
