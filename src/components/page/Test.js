import React, { useEffect, useState } from "react";
import "./Test.css";
import MumbaiClock from "../common/MumbaiClock/MumbaiClock";

export const Test = () => {
  const [secound, setSecound] = useState("00");

  useEffect(() => {
    let seconds = 0;

    setTimeout(() => {
      const interval = setInterval(() => {
        seconds++;
        setSecound(String(seconds).padStart(2, "0"));

        if (seconds >= 3) {
          clearInterval(interval);
        }
      }, 1000);
    }, 2000);
  }, []);

  return (
    <div className="bg-app-red">
      <MumbaiClock bgColorClock={"#FF1F9F"} bgColorSec={"#00E94F"} />
    </div>
  );
};
