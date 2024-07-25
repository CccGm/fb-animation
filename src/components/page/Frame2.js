import React, { useEffect, useRef } from "react";
import { useAppContext } from "../context";

export const Frame2 = () => {
  const { setSlidertabColor, setSliderShow, setFuggyColor, setFuggyRotate } =
    useAppContext();
  const animeRef = useRef(null);
  const LinesData = [
    { name: "we are believers Copy", show: false },
    { name: "fablers", show: true },
    { name: "seekers", show: true },
    { name: "explorers", show: false },
    { name: "dreamers", show: true },
    { name: "romanticists", show: true },
    { name: "chroniclers", show: true },
    { name: "creators", show: false },
    { name: "adventurers", show: true },
    { name: "influencers", show: true },
    { name: "narrators", show: false },
    { name: "innovators", show: true },
    { name: "mystics", show: true },
    { name: "we are storytellers", show: true },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSlidertabColor("#EEF51B");
          setFuggyColor("#EEF51B");
          setSliderShow(true);
          setFuggyRotate(true);
        }
      });
    });

    const elementsToAnimate = animeRef.current;
    observer.observe(elementsToAnimate);

    return () => {
      observer.unobserve(elementsToAnimate);
    };
  }, []);

  return (
    <div className="w-full bg-app-pink h-screen snap-start">
      <div className="grid grid-cols-2 h-full relative">
        <div className="flex justify-center items-center">
          <p
            style={{
              color: "#ffffff",
              fontSize: 128,
              fontFamily: "Geometric",
            }}
            ref={animeRef}>
            WE LIVE
            <br /> STORIES
          </p>
        </div>
        <div className="py-3 px-28">
          <div className="w-72 border-white border h-full grid grid-flow-row ">
            {LinesData.map((data, index) => {
              return (
                <div
                  className="border border-white hover:bg-app-yellow pl-5 flex justify-end transition-colors ease-out duration-1000"
                  key={index}>
                  <div className="flex w-full items-center">
                    <p
                      style={{
                        color: "#FF1F9F",
                        fontSize: 20,
                        fontFamily: "Poppins",
                      }}>
                      {data.name}
                    </p>
                  </div>
                  {data?.show && (
                    <div className="absolute ">
                      <div className="bg-white h-6 w-40 -mt-3" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
