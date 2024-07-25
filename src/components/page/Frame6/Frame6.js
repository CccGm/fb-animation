import React, { useEffect, useRef } from "react";
import phone from "../../../assets/images/page6/phone.png";
import movie from "../../../assets/images/page6/movies cd.png";
import camera from "../../../assets/images/page6/camera man.png";
import lady from "../../../assets/images/page6/ladie.png";
import "./Frame6.css";
import { useAppContext } from "../../context";

export const Frame6 = () => {
  const { setSliderShow, setSliderAnimation, setFuggyHide } = useAppContext();
  const animeRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSliderShow(false);
          setFuggyHide(true);
          setSliderAnimation("");
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
    <div className="w-full bg-black grid grid-cols-2 gap-3 h-screen snap-start overflow-hidden">
      <div className="grid grid-cols-2 h-screen gap-3">
        <div className="overflow-hidden">
          <div className="scroll-container">
            <div className="scroll-content scroll-content-up grid grid-flow-row gap-3">
              <img src={phone} alt="Image 1" />
              <img src={camera} alt="Image 2" />
              <img src={movie} alt="Image 3" />
              <img src={lady} alt="Image 4" />

              <img src={phone} alt="Image 1" />
              <img src={camera} alt="Image 2" />
              <img src={movie} alt="Image 3" />
              <img src={lady} alt="Image 4" />
            </div>
          </div>
        </div>
        <div className="overflow-hidden ">
          <div className="scroll-container">
            <div className="scroll-content scroll-content-down grid grid-flow-row gap-3">
              <img src={phone} alt="Image 1" />
              <img src={camera} alt="Image 2" />
              <img src={movie} alt="Image 3" />
              <img src={lady} alt="Image 4" />

              <img src={phone} alt="Image 1" />
              <img src={camera} alt="Image 2" />
              <img src={movie} alt="Image 3" />
              <img src={lady} alt="Image 4" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center bg-app-orange">
        <div>
          <p
            className=" underline"
            style={{
              color: "#5A0FE8",
              fontFamily: "Feeling",
              fontSize: 24,
            }}
            ref={animeRef}>
            FuzzyBox
          </p>
          <p
            style={{
              color: "#ffffff",
              fontFamily: "Geometric",
              fontSize: 128,
            }}>
            GOSSIP <br /> GAZETTE
          </p>
        </div>
      </div>
    </div>
  );
};
