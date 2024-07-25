import React, { useEffect, useRef, useState } from "react";
import house from "../../../assets/images/page5/house.png";
import radio from "../../../assets/images/page5/radio.png";
import "./Frame5.css";
import { useAppContext } from "../../context";

export const Frame5_B = () => {
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
            setSlidertabColor("#FF1F9F");
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
            hover ? "w-1/2" : "w-3/4"
          } ease-in-out duration-500 ${animate ? "imageLeft" : ""}`}>
          <img src={house} alt="house" style={{ width: "100%" }} />
          <div className="flex justify-between p-7 items-center">
            <div>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontFamily: "Poppins",
                }}>
                Unrevealing the Secrets of the Abandoned House
              </p>
              <p
                style={{
                  color: "#787878",
                  fontSize: 14,
                  fontFamily: "Poppins",
                }}>
                98k views
              </p>
            </div>
            <div className="border-r border-b border-app-blue p-3">
              <p
                style={{
                  color: "#0093FF",
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
            hover ? "w-3/4" : "w-1/2"
          } ease-in-out duration-500 ${animate ? "imageRight" : ""}`}
          onMouseEnter={() => setHovere(true)}
          onMouseLeave={() => setHovere(false)}>
          <img src={radio} alt="radio" style={{ width: "100%" }} />
          <div className="flex justify-between p-7 items-center">
            <div>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontFamily: "Poppins",
                }}>
                GenZ’s vs Millenials
              </p>
              <p
                style={{
                  color: "#787878",
                  fontSize: 14,
                  fontFamily: "Poppins",
                }}>
                89k views
              </p>
            </div>
            <div className="border-r border-b border-app-pink p-3">
              <p
                style={{
                  color: "#FF1F9F",
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
