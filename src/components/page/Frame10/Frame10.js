import React, { useEffect, useRef, useState } from "react";
import { Emailsvg } from "../../../assets/svg/Emailsvg";
import { Phonesvg } from "../../../assets/svg/Phonesvg";
import MumbaiClock from "../../common/MumbaiClock/MumbaiClock";
import "./Frame10.css";
import { UaeClock } from "../../common/uaeClock/UaeClock";

export const Frame10 = () => {
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
    <div className="w-full bg-black overflow-hidden snap-start ">
      <div className="flex p-20 justify-between" ref={animeRef}>
        <div className="mt-8">
          <p
            style={{
              color: "#FF1F9F",
              fontFamily: "Feeling",
              fontSize: 24,
              textDecoration: "underline",
            }}>
            FuzzyBox
          </p>
          <p
            style={{
              color: "#00E94F",
              fontFamily: "Poppins",
              fontSize: 20,
              fontWeight: "lighter",
              marginTop: 40,
            }}>
            lights camera create.
          </p>
          <p
            style={{
              color: "#ffffff",
              fontFamily: "Poppins",
              fontSize: 20,
              fontWeight: "lighter",
              marginTop: 30,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
            <Emailsvg /> hello@fuzzybox.live
          </p>
          <p
            style={{
              color: "#ffffff",
              fontFamily: "Poppins",
              fontSize: 20,
              fontWeight: "lighter",
              marginTop: 5,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
            <Phonesvg /> +91 9876543210
          </p>
          <p
            style={{
              color: "#ffffff",
              fontFamily: "Poppins",
              fontSize: 20,
              fontWeight: "lighter",
              marginTop: 60,
            }}>
            <span style={{ color: "#787878" }}> @copyright 2023 |</span>{" "}
            fuzzyBox
          </p>
        </div>
        <div className="flex -mt-12">
          <div className="text-center">
            <MumbaiClock bgColorClock={"#FF1F9F"} bgColorSec={"#00E94F"} />
            <p
              style={{
                color: "#00E94F",
                fontFamily: "Feeling",
                fontSize: 28,
              }}>
              mumBai
            </p>
            <p
              style={{
                color: "#ffffff",
                fontFamily: "Poppins",
                fontSize: 20,
                fontWeight: "lighter",
                marginTop: 30,
              }}>
              Near Infinity Mall, Andheri <br /> West, Mumbai, India
            </p>
          </div>
          <div className="text-center">
            <UaeClock bgColorClock={"#00E94F"} bgColorSec={"#FF1F9F"} />
            <p
              style={{
                color: "#FF1F9F",
                fontFamily: "Feeling",
                fontSize: 28,
              }}>
              uAe
            </p>
            <p
              style={{
                color: "#ffffff",
                fontFamily: "Poppins",
                fontSize: 20,
                fontWeight: "lighter",
                marginTop: 30,
              }}>
              Downtown Dubai,
              <br /> United Arab Emirates
            </p>
          </div>
        </div>
      </div>

      <div
        className={`flex overflow-hidden items-center h-7 ${
          animate ? "footerRow" : ""
        }`}>
        <div className="flex gap-3 h-fit bg-white">
          {Array.from({ length: 500 }, (_, index) => {
            return (
              <div key={index}>
                <div className="w-6 h-9 border-4 -my-2 border-white bg-black rotation " />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
