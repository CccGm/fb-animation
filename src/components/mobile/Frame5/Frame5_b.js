import React, { useEffect, useRef, useState } from "react";
import mahel from "../../../assets/images/page5/mahal.png";
import piano from "../../../assets/images/page5/piano.png";

export const MFrame5_b = () => {
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
              src={mahel}
              alt="mahel"
              style={{ width: "90%", height: "80%" }}
            />
          </div>

          <div className="px-4 pt-2">
            <p
              style={{
                color: "#ffffff",
                fontSize: 14,
                fontFamily: "Poppins",
              }}>
              Palace Hunting with Saloni
            </p>
          </div>
          <div className="flex justify-between items-end w-full px-4">
            <p
              style={{
                color: "#787878",
                fontSize: 12,
                fontFamily: "Poppins",
              }}>
              2.3 lakh views
            </p>

            <div className="border-r border-b border-app-green p-3 w-fit">
              <p
                style={{
                  color: "#00E94F",
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
              src={piano}
              alt="piano"
              style={{ width: "90%", height: "80%" }}
            />
          </div>

          <div className="px-4 pt-2">
            <p
              style={{
                color: "#ffffff",
                fontSize: 14,
                fontFamily: "Poppins",
              }}>
              The Corporate Music Talent Show
            </p>
          </div>
          <div className="flex justify-between items-end w-full px-4">
            <p
              style={{
                color: "#787878",
                fontSize: 12,
                fontFamily: "Poppins",
              }}>
              1.13 lakh views
            </p>

            <div className="border-r border-b border-app-orange p-3 w-fit">
              <p
                style={{
                  color: "#FFA616",
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
