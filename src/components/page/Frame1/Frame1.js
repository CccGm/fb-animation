import React, { useEffect, useRef, useState } from "react";
import Switch from "../../common/switch/app";
import cartoon from "../../../assets/images/page1/Kerfin7_NEA_2525 1.png";
import light from "../../../assets/images/page1/Lights.png";
import camera from "../../../assets/images/page1/Camera.png";
import action from "../../../assets/images/page1/Clapper.png";
import "./Frame1.css";
import { useAppContext } from "../../context";

export const Frame1 = () => {
  const {
    setSlidertabColor,
    setSliderShow,
    bore,
    setBore,
    setFuggyRotate,
    setFuggyColor,
  } = useAppContext();
  const images = [action, light, camera];
  const [currentIndex, setCurrentIndex] = useState(0);

  const animeRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    setTimeout(() => {
      setBore(false);
      setFuggyRotate(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // entry.target.classList.add("in-view");
          setAnimate(true);
          setSlidertabColor("#ED1D24");
          setFuggyColor("#ED1D24");
          setSliderShow(true);
        }
        // else {
        // entry.target.classList.remove("in-view");
        // setAnimate(false);
        // }
      });
    });

    const elementsToAnimate = animeRef.current;
    observer.observe(elementsToAnimate);

    return () => {
      observer.unobserve(elementsToAnimate);
    };
  }, []);

  return (
    <div
      className={`w-full bg-black h-screen p-2 overflow-hidden relative snap-start  ${
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
        <p
          style={{ color: "#ED1D24", fontFamily: "Feeling", fontSize: 28 }}
          ref={animeRef}>
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
          className={`translate-y-start transition-transform1 ${
            animate ? "translate-y-0" : ""
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
        <div
          className={`absolute top-[190px] left-[820px] ${
            animate ? "bounce2" : ""
          }`}>
          <img src={cartoon} alt="popcorn" />
        </div>
      </div>

      <div className="flex justify-end w-full pb-10 pr-10 boreSwitch">
        <Switch bore={bore} setBore={setBore} />
      </div>
    </div>
  );
};
