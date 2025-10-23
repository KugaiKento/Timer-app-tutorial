import { useState, useRef, useCallback } from "react";

export function useStopwatch() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null); // number | null を明示

  const start = useCallback(() => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = window.setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  }, [isRunning]);

  const pause = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    setIsRunning(false);
    setTime(0);
  }, []);

  return { time, isRunning, start, pause, reset };
}
