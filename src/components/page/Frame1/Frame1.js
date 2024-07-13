import React, { useEffect, useRef, useState } from "react";
import Switch from "../../common/switch/app";
import cartoon from "../../../assets/images/page1/Kerfin7_NEA_2525 1.png";
import { SliderTab } from "../../common/sliderTab/app";
import light from "../../../assets/images/page1/Lights.png";
import camera from "../../../assets/images/page1/Camera.png";
import action from "../../../assets/images/page1/Clapper.png";
import "./Frame1.css";

export const Frame1 = () => {
  const [inView, setInView] = useState(false);
  const divRef = useRef(null);
  const images = [action, light, camera];
  const [currentIndex, setCurrentIndex] = useState(0);

  const [bore, setBore] = useState(true);
  const [rotateFuggy, setRotateFuggy] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    setTimeout(() => {
      setBore(false);
      setRotateFuggy(true);
    }, 3000);

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`w-full bg-black min-h-screen p-2 overflow-hidden relative snap-start ${
        bore ? "grayscale" : "grayscale-0"
      }`}>
      {/* <div className="flex h-fit w-full justify-end">
        <div
          style={{
            width: 200,
            height: 142,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          className={`fuggy-x-start fuggy-transform ${
            inView ? "fuggy-x-0" : ""
          }`}>
          <p
            className={`${
              rotateFuggy ? "rotate-[20deg]" : "rotate-0"
            } underline`}
            style={{
              color: "#ED1D24",
              fontFamily: "Feeling",
              fontSize: 24,
            }}>
            FuzzyBox
          </p>
        </div>
      </div> */}

      <div>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className={`image ${index === currentIndex ? "active" : ""} ${
              index ===
              (currentIndex === 0 ? images.length - 1 : currentIndex - 1)
                ? "fade-out"
                : ""
            }  ${index === 1 ? "pt-0" : "pt-14"} rotate`}
          />
        ))}
      </div>

      <div className="py-5 pl-40 mt-[350px] ">
        <p style={{ color: "#ED1D24", fontFamily: "Feeling", fontSize: 28 }}>
          <span style={{ color: currentIndex === 1 ? "#ffffff" : "#ED1D24" }}>
            lights
          </span>
          {"  "}
          <span style={{ color: currentIndex === 2 ? "#ffffff" : "#ED1D24" }}>
            {"  "}
            camera{"  "}
          </span>
          <span style={{ color: currentIndex === 0 ? "#ffffff" : "#ED1D24" }}>
            {"  "}
            create !
          </span>
        </p>
        <p
          ref={divRef}
          className={`translate-y-start transition-transform1 ${
            inView ? "translate-y-0" : ""
          }`}
          style={{
            color: "#ffffff",
            fontFamily: "Geometric",
            fontSize: 128,
            lineHeight: 1.3,
          }}>
          LIVE FROM
          <br /> FUZzYBOx MEDIA<span style={{ color: "#ED1D24" }}>.</span>
        </p>
        <div className="absolute top-[190px] left-[820px] bounce2">
          <img src={cartoon} alt="popcorn" />
        </div>
      </div>

      <div className="flex justify-end w-full pb-10 pr-10">
        <Switch bore={bore} setBore={setBore} />
      </div>
    </div>
  );
};
