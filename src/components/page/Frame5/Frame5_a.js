import React, { useEffect, useRef, useState } from "react";
import mahel from "../../../assets/images/page5/mahal.png";
import piano from "../../../assets/images/page5/piano.png";
import "./Frame5.css";
import { useAppContext } from "../../context";

export const Frame5_A = () => {
  const { setSlidertabColor, setSliderShow } = useAppContext();
  const [hover, setHovere] = useState(false);

  const animeRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            setSlidertabColor("#FFA616");
            setSliderShow(true);
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
    <div className="w-full bg-black h-screen snap-start overflow-hidden">
      <div className="flex" ref={animeRef}>
        <div
          className={`h-fit ${
            hover ? "w-3/4" : "w-1/2"
          } ease-in-out duration-500 ${animate ? "imageLeft" : ""}`}
          onMouseEnter={() => setHovere(true)}
          onMouseLeave={() => setHovere(false)}>
          <img src={mahel} alt="mahel" style={{ width: "100%" }} />
          <div className="flex justify-between p-7 items-center">
            <div>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontFamily: "Poppins",
                }}>
                Palace Hunting with Saloni
              </p>
              <p
                style={{
                  color: "#787878",
                  fontSize: 14,
                  fontFamily: "Poppins",
                }}>
                2.3 lakh views
              </p>
            </div>
            <div className="border-r border-b border-app-green p-3">
              <p
                style={{
                  color: "#00E94F",
                  fontSize: 14,
                  fontFamily: "Poppins",
                }}>
                # FuzzyBox Travel
              </p>
            </div>
          </div>
        </div>
        <div
          className={`h-fit ${
            hover ? "w-1/2" : "w-3/4"
          } ease-in-out duration-500 ${animate ? "imageRight" : ""}`}>
          <img src={piano} alt="piano" style={{ width: "100%" }} />
          <div className="flex justify-between p-7 items-center">
            <div>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontFamily: "Poppins",
                }}>
                The Corporate Music Talent Show
              </p>
              <p
                style={{
                  color: "#787878",
                  fontSize: 14,
                  fontFamily: "Poppins",
                }}>
                1.13 lakh views
              </p>
            </div>
            <div className="border-r border-b border-app-orange p-3">
              <p
                style={{
                  color: "#FFA616",
                  fontSize: 14,
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
