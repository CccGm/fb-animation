import React, { useEffect } from "react";
import "./app.css";

const MumbaiClock = ({ bgColorClock, bgColorSec }) => {
  useEffect(() => {
    const clock = () => {
      const date = new Date();

      const hours = ((date.getHours() + 11) % 12) + 1;
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const hour = hours * 30;
      const minute = minutes * 6;
      const second = seconds * 6;

      document.querySelector(".hour").style.transform = `rotate(${hour}deg)`;
      document.querySelector(".minute").style.transform = `rotate(
        ${minute}deg
      )`;
      document.querySelector(".second").style.transform = `rotate(
        ${second}deg
      )`;
    };

    clock();
    const interval = setInterval(clock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-fit">
      <div
        className="clockWrapMumbai"
        style={{ backgroundColor: bgColorClock }}>
        <span className="hour"></span>
        <span className="minute"></span>
        <span className="second" style={{ backgroundColor: bgColorSec }}></span>
        <span className="dot" style={{ backgroundColor: bgColorSec }}></span>
      </div>
    </div>
  );
};

export default MumbaiClock;
