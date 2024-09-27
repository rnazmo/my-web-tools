import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTimeInMilliseconds, setElapsedTimeInMilliseconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTimeInMilliseconds((prevTime) => prevTime + 10); // 10ミリ秒ごとに更新
      }, 10);
    } else if (!isRunning && elapsedTimeInMilliseconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, elapsedTimeInMilliseconds]);

  const formatTime = (elapsedTimeInMilliseconds: number): {
    hours: string;
    minutes: string;
    seconds: string;
    milliseconds: string;
  } => {
    const hours = Math.floor(elapsedTimeInMilliseconds / 3600000);
    const minutes = Math.floor((elapsedTimeInMilliseconds % 3600000) / 60000);
    const seconds = Math.floor((elapsedTimeInMilliseconds % 60000) / 1000);
    const milliseconds = Math.floor(elapsedTimeInMilliseconds % 1000);

    return {
      hours: padWithZero(hours),
      minutes: padWithZero(minutes),
      seconds: padWithZero(seconds),
      milliseconds: padWithZero(milliseconds / 10), // Show only last 2 digits of milliseconds
    };
  };

  const padWithZero = (num: number, length: number = 2): string =>
    num.toString().padStart(length, "0");
  const { hours, minutes, seconds, milliseconds } = formatTime(elapsedTimeInMilliseconds);

  const toggleRunning = () => {
    setIsRunning((isRunning) => !isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setElapsedTimeInMilliseconds(0);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <div className="display-1 mb-4 font-monospace">
            {hours}:{minutes}:{seconds}.
            <span className="display-6">{milliseconds}</span>
          </div>
          <div>
            {!isRunning ? (
              <Button
                variant="primary"
                size="lg"
                onClick={toggleRunning}
                className="me-2"
              >
                Start
              </Button>
            ) : (
              <Button
                variant="warning"
                size="lg"
                onClick={toggleRunning}
                className="me-2"
              >
                Pause
              </Button>
            )}
            <Button
              variant="danger"
              size="lg"
              onClick={reset}
            >
              Reset
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Stopwatch;
