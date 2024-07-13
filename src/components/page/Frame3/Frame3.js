import React from "react";
import karfin from "../../../assets/images/page3/Kerfin7_NEA_2526 2.png";
import "./Frame3.css";

export const Frame3 = () => {
  return (
    <div className="w-full relative bg-black min-h-screen snap-start">
      <div className="p-24 absolute  w-full h-full overflow-hidden">
        <div className="border flex h-full relative w-full">
          {/* border */}
          <>
            <div className="absolute border-2 border-app-gray h-64 top-0 left-0 cameraframe-line-top-left" />
            <div className="absolute border-2 border-app-gray w-64 top-0 left-0 cameraframe-line-top-left" />
            <div className="absolute border-2 border-app-gray h-64 bottom-0 left-0 cameraframe-line-bottom-left" />
            <div className="absolute border-2 border-app-gray w-64 bottom-0 left-0 cameraframe-line-bottom-left" />
            <div className="absolute border-2 border-app-gray h-64 top-0 right-0 cameraframe-line-top-right" />
            <div className="absolute border-2 border-app-gray w-64 top-0 right-0 cameraframe-line-top-right" />
            <div className="absolute border-2 border-app-gray h-64 bottom-0 right-0 cameraframe-line-bottom-right" />
            <div className="absolute border-2 border-app-gray w-64 z-10 bottom-0 right-0 cameraframe-line-bottom-right" />

            {/* plus */}
            <div className="absolute border-2 border-app-gray h-10 top-1/2 left-1/2" />
            <div className="absolute border-2 border-app-gray h-10 rotate-90 top-1/2 left-1/2" />
          </>
          {/* image */}
          <div className="absolute -bottom-0 right-0 karfin-popcorn">
            <img src={karfin} alt="popcorn karfin" />
          </div>

          {/* rec & battery */}
          <div className="p-10 flex justify-between h-fit w-full">
            {/* rec */}
            <div className="flex w-fit gap-2 items-center">
              <div className="bg-app-red w-5 h-5 rounded-full record-red" />
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 22,
                  fontFamily: "Geometric",
                  fontWeight: 800,
                }}>
                REC
              </p>
            </div>
            {/* battery */}
            <div className="flex items-center">
              <div className="w-2 border-white h-5 border-2 -mr-[1.5px] " />
              <div className="border-2 border-white h-10 p-1 grid grid-flow-col gap-1 overflow-hidden">
                <div className="w-2 cell" />
                <div className="bg-app-green w-[10px] cell" />
                <div className="bg-app-green w-[10px] cell" />
                <div className="bg-app-green w-[10px] cell" />
                <div className="bg-app-green w-[10px] cell" />
              </div>
            </div>
          </div>
          {/* 4k */}
          <div className="absolute bottom-0 left-0 p-10 flex gap-3 items-center">
            <p
              style={{
                color: "#ffffff",
                fontSize: 22,
                fontFamily: "Geometric",
                fontWeight: 800,
              }}>
              HD
            </p>
            <div className="px-4 rounded-lg k-blink">
              <p
                style={{
                  fontSize: 22,
                  fontFamily: "Geometric",
                  fontWeight: 800,
                }}>
                4K
              </p>
            </div>
            <p
              style={{
                color: "#ffffff",
                fontSize: 22,
                fontFamily: "Geometric",
                fontWeight: 800,
              }}>
              8K
            </p>
          </div>

          {/* Digit Number */}

          <div class="countdown-number">
            <div>00</div>
            <div>:</div>
            <div>00</div>
            <div>:</div>
            <div class="h-12 overflow-hidden grid grid-flow-row gap-1">
              <div className="counter-number">00</div>
              <div className="counter-number">01</div>
              <div className="counter-number">02</div>
              <div className="counter-number">03</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
