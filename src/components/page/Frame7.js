import React, { useEffect, useRef } from "react";
import { InfiniteLooper } from "../common/imageloopHorizantal/app";
import img1 from "../../assets/images/page7/Rectangle 133.png";
import img2 from "../../assets/images/page7/Rectangle 134.png";
import img3 from "../../assets/images/page7/Rectangle 135.png";
import img4 from "../../assets/images/page7/Rectangle 136.png";
import img5 from "../../assets/images/page7/Rectangle 137.png";
import img6 from "../../assets/images/page7/Rectangle 138.png";
import img7 from "../../assets/images/page7/Rectangle 139.png";
import img8 from "../../assets/images/page7/Rectangle 140.png";
import img9 from "../../assets/images/page7/Rectangle 141.png";
import img10 from "../../assets/images/page7/Rectangle 142.png";
import img11 from "../../assets/images/page7/Rectangle 143.png";
import img12 from "../../assets/images/page7/Rectangle 144.png";
import img13 from "../../assets/images/page7/Rectangle 145.png";
import img14 from "../../assets/images/page7/Rectangle 146.png";
import img15 from "../../assets/images/page7/Rectangle 147.png";
import { useAppContext } from "../context";

export const Frame7 = () => {
  const {
    setSlidertabColor,
    setSliderShow,
    setFuggyRotate,
    setFuggyColor,
    setFuggyHide,
  } = useAppContext();
  const animeRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSlidertabColor("#EEF51B");
          setFuggyRotate(false);
          setFuggyColor("#EEF51B");
          setFuggyHide(false);
          setSliderShow(true);
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
    <div className="w-full bg-black h-screen py-8 snap-start overflow-hidden">
      <InfiniteLooper speed="20" direction="left">
        <div className="flex gap-3 contentBlock--one">
          <img src={img15} alt="scroll pic" className="pt-24 pb-0" />
          <img src={img12} alt="scroll pic" className="pt-20 pb-4" />
          <img src={img11} alt="scroll pic" className="pt-16 pb-8" />
          <img src={img1} alt="scroll pic" className="pt-12 pb-12" />
          <img src={img2} alt="scroll pic" className="pt-8 pb-16" />
          <img src={img3} alt="scroll pic" className="pt-5 pb-[70px]" />
          <img src={img4} alt="scroll pic" className="pt-2 pb-[82px]" />
          <img src={img5} alt="scroll pic" className="pt-0 pb-24" />
          <img src={img6} alt="scroll pic" className="pt-2 pb-[82px]" />
          <img src={img7} alt="scroll pic" className="pt-5 pb-[70px]" />
          <img src={img8} alt="scroll pic" className="pt-8 pb-16" />
          <img src={img9} alt="scroll pic" className="pt-12 pb-12" />
          <img src={img10} alt="scroll pic" className="pt-16 pb-8" />
          <img src={img13} alt="scroll pic" className="pt-20 pb-4" />
          <img src={img14} alt="scroll pic" className="pt-24 pb-0" />
        </div>
      </InfiniteLooper>
      <div
        className="flex justify-between pl-40 pr-56 items-end gap-5"
        ref={animeRef}>
        <div>
          <p
            className="underline mt-16"
            style={{
              color: "#00E94F",
              fontFamily: "Feeling",
              fontSize: 24,
            }}>
            FuzzyBox
          </p>
          <p
            style={{
              color: "#ffffff",
              fontFamily: "Geometric",
              fontSize: 128,
            }}>
            CREATORS
          </p>
        </div>
        <div className="rotate-180 mb-12 min-w-80 h-fit">
          <InfiniteLooper speed="10" direction="right">
            <div className="flex gap-3 contentBlock--one">
              <div className="h-3 border border-app-yellow" />
              <div className="h-4 border border-app-yellow" />
              <div className="h-5 border border-app-yellow" />
              <div className="h-6 border border-app-yellow" />
              <div className="h-7 border border-app-yellow" />
              <div className="h-8 border border-app-yellow" />
              <div className="h-7 border border-app-yellow" />
              <div className="h-6 border border-app-yellow" />
              <div className="h-5 border border-app-yellow" />
              <div className="h-4 border border-app-yellow" />
              <div className="h-3 border border-app-yellow" />
            </div>
          </InfiniteLooper>
        </div>
      </div>
    </div>
  );
};
