import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Stopwatch() {
  const [isActive, setIsActive] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 10); // 10ミリ秒ごとに更新
      }, 10);
    } else if (!isActive && elapsedTime !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, elapsedTime]);

  function formatTime(elapsedTime: number): {
    hours: string;
    minutes: string;
    seconds: string;
    milliseconds: string;
  } {
    // 時間の計算：経過時間（elapsedTime）を、1時間あたりのミリ秒数（3600000ミリ秒）で割る
    const getHours = Math.floor(elapsedTime / 3600000);
    // 分の計算：時間の計算して残ったミリ秒数（`elapsedTime % 3600000`）を、1分あたりのミリ秒数（60000ミリ秒）で割る
    const getMinutes = Math.floor((elapsedTime % 3600000) / 60000);
    // 秒の計算：分の計算して残ったミリ秒数（`elapsedTime % 60000`）を、1秒あたりのミリ秒数（1000ミリ秒）で割る
    const getSeconds = Math.floor((elapsedTime % 60000) / 1000);
    // ミリ秒の計算：秒の計算して残ったミリ秒数（`elapsedTime % 1000`）を、そのまま使う
    const getMilliseconds = Math.floor(elapsedTime % 1000);

    return {
      hours: padZero(getHours),
      minutes: padZero(getMinutes),
      seconds: padZero(getSeconds),
      milliseconds: padZero(Math.floor(getMilliseconds / 10)), // ミリ秒は下2桁だけ表示したい
    };
  }

  function padZero(num: number, length: number = 2): string {
    return num.toString().padStart(length, "0");
  }

  const { hours, minutes, seconds, milliseconds } = formatTime(elapsedTime);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <div className="display-1 mb-4 font-monospace">
            {hours}:{minutes}:{seconds}.
            <span className="display-6">{milliseconds}</span>
          </div>
          <div>
            {!isActive ? (
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsActive(!isActive)}
                className="me-2"
              >
                Start
              </Button>
            ) : (
              <Button
                variant="warning"
                size="lg"
                onClick={() => setIsActive(!isActive)}
                className="me-2"
              >
                Pause
              </Button>
            )}
            <Button
              variant="danger"
              size="lg"
              onClick={() => {
                setIsActive(false);
                setElapsedTime(0);
              }}
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
