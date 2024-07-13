import React, { useEffect, useState } from "react";
import "./Test.css";
import { NavMenu } from "../common/sliderTab/NavMenu";

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
    <div className="bg-app-pink">
      <div className="countdown flex gap-3 items-center text-3xl">
        <div class="digit" id="hours">
          00
        </div>
        <div class="colon">:</div>
        <div class="digit" id="minutes">
          00
        </div>
        <div class="colon">:</div>
        <div class="digit move" id="seconds">
          {secound}
        </div>
      </div>
    </div>
  );
};
