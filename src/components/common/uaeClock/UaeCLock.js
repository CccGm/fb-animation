import React, { useEffect } from "react";
import "./app.css";

const UaeClock = ({ bgColorClock, bgColorSec }) => {
  useEffect(() => {
    const clock = () => {
      const date = new Date();

      const localTime = date.getTime();
      const localOffset = date.getTimezoneOffset() * 60000;

      const utc = localOffset + localTime;

      const offset = 4;
      const UAE = utc + 3600000 * offset;

      const UaeTime = new Date(UAE);
      const hours1 = ((UaeTime.getHours() + 11) % 12) + 1;
      const minutes1 = UaeTime.getMinutes();
      const seconds1 = UaeTime.getSeconds();

      const hour1 = hours1 * 30;
      const minute2 = minutes1 * 6;
      const second3 = seconds1 * 6;

      document.querySelector(".ho").style.transform = `rotate(${hour1}deg)`;
      document.querySelector(".minu").style.transform = `rotate(
        ${minute2}deg
      )`;
      document.querySelector(".seco").style.transform = `rotate(
        ${second3}deg
      )`;
    };

    clock();
    const interval = setInterval(clock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock w-[350px]" style={{ backgroundColor: bgColorClock }}>
      <div className="wrap">
        <span className="ho"></span>
        <span className="minu"></span>
        <span className="seco" style={{ backgroundColor: bgColorSec }}></span>
        <span className="do" style={{ backgroundColor: bgColorSec }}></span>
      </div>
    </div>
  );
};

export default UaeClock;
