import { useEffect, useState } from "react";

// Types
import type { FC } from "react";

export type CountdownProps = {
  seconds: number; 
  onEnd: () => void;
};

export const Countdown: FC<CountdownProps> = ({ onEnd, seconds: _seconds }) => {
  const [ seconds, setSeconds ] = useState(_seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if(seconds - 1 === 0) {
        clearInterval(interval);
        return onEnd();
      }

      setSeconds((s) => s - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const render = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0")
    );
  };

  return (
    <span>{render(seconds)}</span> 
  );
};
