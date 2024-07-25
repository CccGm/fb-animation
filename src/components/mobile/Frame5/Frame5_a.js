import React, { useEffect, useRef, useState } from "react";
import popcorn from "../../../assets/images/page5/popcorn.png";
import food from "../../../assets/images/page5/food.png";
import murti from "../../../assets/images/page5/murti.png";

export const MFrame5_a = () => {
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
    <div className="w-full bg-black h-screen snap-start overflow-hidden">
      <div
        className={`h-[186px] w-full bg-app-red flex flex-col items-center justify-center ${
          animate ? "popcorn-container-hide" : ""
        }`}>
        <div>
          <p
            className=" underline mt-8"
            style={{
              color: "#EEF51B",
              fontFamily: "Feeling",
              fontSize: 14,
            }}>
            FuzzyBox
          </p>
          <p
            style={{
              color: "#ffffff",
              fontFamily: "Geometric",
              fontSize: 64,
            }}>
            CREATIONS
          </p>
        </div>
      </div>
      {/* image screen 1 */}
      <div className="flex flex-col gap-5" ref={animeRef}>
        <div
          className={`h-fit ease-in-out duration-500 ${
            animate ? "imageLeft" : ""
          }`}>
          <div className="flex justify-center items-center">
            <img
              src={food}
              alt="food"
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
              Exploring Pav Bhaji on the Streets of Mumbai
            </p>
          </div>
          <div className="flex justify-between items-end w-full px-4">
            <p
              style={{
                color: "#787878",
                fontSize: 12,
                fontFamily: "Poppins",
              }}>
              2.2 lakh views
            </p>

            <div className="border-r border-b border-app-yellow p-3 w-fit">
              <p
                style={{
                  color: "#EEF51B",
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
              src={murti}
              alt="murti"
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
              Antique stuffs from Jodhpur
            </p>
          </div>
          <div className="flex justify-between items-end w-full px-4">
            <p
              style={{
                color: "#787878",
                fontSize: 12,
                fontFamily: "Poppins",
              }}>
              1.8 lakh views
            </p>
            <div className="border-r border-b border-app-red p-3 w-fit">
              <p
                style={{
                  color: "#ED1D24",
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
