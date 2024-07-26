import React, { useEffect, useRef, useState } from "react";
import karfin from "../../../assets/images/page3/Kerfin7_NEA_2526 2.png";

export const MFrame3 = () => {
  const animeRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      });
    });

    const elementsToAnimate = animeRef.current;
    observer.observe(elementsToAnimate);

    return () => {
      observer.unobserve(elementsToAnimate);
      setAnimate(false);
    };
  }, []);

  return (
    <div className="w-full relative bg-black h-dvh snap-start overflow-hidden">
      <div className="p-8 pb-20 absolute  w-full h-full overflow-hidden">
        <div className="border flex h-full relative w-full">
          {/* border */}
          <>
            <div
              className={`absolute border border-app-gray h-20 top-0 left-0 ${
                animate ? "cameraframe-line-top-left" : ""
              }`}
            />
            <div
              className={`absolute border border-app-gray w-20 top-0 left-0  ${
                animate ? "cameraframe-line-top-left" : ""
              }`}
            />
            <div
              className={`absolute border border-app-gray h-20 bottom-0 left-0  ${
                animate ? "cameraframe-line-bottom-left" : ""
              }`}
            />
            <div
              className={`absolute border border-app-gray w-20 bottom-0 left-0 ${
                animate ? "cameraframe-line-bottom-left" : ""
              }`}
            />
            <div
              className={`absolute border border-app-gray h-20 top-0 right-0  ${
                animate ? "cameraframe-line-top-right" : ""
              }`}
            />
            <div
              className={`absolute border border-app-gray w-20 top-0 right-0  ${
                animate ? "cameraframe-line-top-right" : ""
              }`}
            />
            <div
              className={`absolute border border-app-gray h-20 bottom-0 right-0  ${
                animate ? "cameraframe-line-bottom-right" : ""
              }`}
            />
            <div
              className={`absolute border border-app-gray w-20 bottom-0 right-0 z-10  ${
                animate ? "cameraframe-line-bottom-right" : ""
              }`}
            />
            {/* plus */}
            <div className="absolute border border-app-gray h-12 top-1/2 left-1/2" />
            <div className="absolute border border-app-gray h-12 rotate-90 top-1/2 left-1/2" />
          </>
          {/* image */}
          <div
            className={`absolute -bottom-0 right-0 ${
              animate ? "karfin-popcornMobile" : ""
            }`}>
            <img
              src={karfin}
              alt="popcorn karfin"
              style={{ width: 150, height: 260 }}
            />
          </div>

          {/* rec & battery */}
          <div className="p-4 flex justify-between h-fit w-full">
            {/* rec */}
            <div className="flex w-fit gap-2 items-center">
              <div
                className={`bg-app-red w-3 h-3 rounded-full ${
                  animate ? "record-red" : ""
                }`}
              />
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 14,
                  fontFamily: "Geometric",
                  fontWeight: 800,
                }}>
                REC
              </p>
            </div>
            {/* battery */}
            <div className="flex items-center" ref={animeRef}>
              <div className="w-2 border-white h-4 border-2 -mr-[1.5px] " />
              <div className="border-2 border-white h-7 p-1 grid grid-flow-col gap-1 overflow-hidden">
                <div className={`w-1 ${animate ? "cell" : ""} `} />
                <div
                  className={`w-[6px] bg-app-green ${animate ? "cell" : ""} `}
                />
                <div
                  className={`w-[6px] bg-app-green ${animate ? "cell" : ""} `}
                />
                <div
                  className={`w-[6px] bg-app-green ${animate ? "cell" : ""} `}
                />
                <div
                  className={`w-[6px] bg-app-green ${animate ? "cell" : ""} `}
                />
              </div>
            </div>
          </div>
          {/* 4k */}
          <div
            className="absolute bottom-0 left-0 p-4 flex gap-3 items-center"
            ref={animeRef}>
            <p
              style={{
                color: "#ffffff",
                fontSize: 14,
                fontFamily: "Geometric",
                fontWeight: 800,
              }}>
              HD
            </p>
            <div className={`px-2 rounded-lg ${animate ? "k-blink" : ""} `}>
              <p
                style={{
                  fontSize: 14,
                  fontFamily: "Geometric",
                  fontWeight: 800,
                }}>
                4K
              </p>
            </div>
            <p
              style={{
                color: "#ffffff",
                fontSize: 14,
                fontFamily: "Geometric",
                fontWeight: 800,
              }}>
              8K
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
