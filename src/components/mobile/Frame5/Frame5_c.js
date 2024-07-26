import React, { useEffect, useRef, useState } from "react";
import house from "../../../assets/images/page5/house.png";
import radio from "../../../assets/images/page5/radio.png";

export const MFrame5_c = () => {
  const animeRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
          } else {
            setAnimate(false);
          }
        });
      },
      { threshold: 0.01 }
    );

    const elementsToAnimate = animeRef.current;
    observer.observe(elementsToAnimate);

    return () => {
      observer.unobserve(elementsToAnimate);
      setAnimate(false);
    };
  }, []);

  return (
    <div className="w-full bg-black h-dvh snap-start overflow-hidden">
      <div className="flex flex-col gap-5" ref={animeRef}>
        <div
          className={`h-fit  ease-in-out duration-500 ${
            animate ? "imageLeft" : ""
          }`}>
          <div className="flex justify-center items-center">
            <img
              src={house}
              alt="house"
              style={{ width: "90%", height: "80%" }}
            />
          </div>

          <div className="px-4 pt-2">
            <p
              style={{
                color: "#ffffff",
                fontSize: 16,
                fontFamily: "Poppins",
              }}>
              Unrevealing the Secrets of the Abandoned House
            </p>
          </div>
          <div className="flex justify-between items-end w-full px-4">
            <p
              style={{
                color: "#787878",
                fontSize: 12,
                fontFamily: "Poppins",
              }}>
              98k views
            </p>
            <div className="border-r border-b border-app-blue p-3 w-fit">
              <p
                style={{
                  color: "#0093FF",
                  fontSize: 12,
                  fontFamily: "Poppins",
                }}>
                # FuzzyBox Travel
              </p>
            </div>
          </div>
        </div>
        <div
          className={`h-fit  ease-in-out duration-500 ${
            animate ? "imageRight" : ""
          }`}>
          <div className="flex justify-center items-center">
            <img
              src={radio}
              alt="radio"
              style={{ width: "90%", height: "80%" }}
            />
          </div>

          <div className="px-4 pt-2">
            <p
              style={{
                color: "#ffffff",
                fontSize: 16,
                fontFamily: "Poppins",
              }}>
              GenZ’s vs Millenials
            </p>
          </div>
          <div className="flex justify-between items-end w-full px-4">
            <p
              style={{
                color: "#787878",
                fontSize: 12,
                fontFamily: "Poppins",
              }}>
              89k views
            </p>
            <div className="border-r border-b border-app-pink p-3 w-fit">
              <p
                style={{
                  color: "#FF1F9F",
                  fontSize: 12,
                  fontFamily: "Poppins",
                }}>
                # FuzzyBox Travel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
