import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
      <h1 className="text-3xl font-bold mb-6">Stopwatch</h1>
      <Card>
        <CardContent className="flex flex-col items-center p-6">
          <div className="text-6xl font-mono mb-6">
            {hours}:{minutes}:{seconds}.
            <span className="text-4xl">{milliseconds}</span>
          </div>
          <div className="space-x-4">
            <Button onClick={startPause}>
              {isRunning ? "Pause" : "Start"}
            </Button>
            <Button onClick={reset}>Reset</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
