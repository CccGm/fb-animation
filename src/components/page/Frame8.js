import React, { useEffect, useRef } from "react";
import { InfiniteLooper } from "../common/imageloopHorizantal/app";
import brand1 from "../../assets/images/page8/Brand 1.png";
import brand2 from "../../assets/images/page8/Brand 2.png";
import brand3 from "../../assets/images/page8/Brand 3.png";
import brand4 from "../../assets/images/page8/Brand 4.png";
import brand5 from "../../assets/images/page8/Brand 5.png";
import brand6 from "../../assets/images/page8/Brand 6.png";
import brand7 from "../../assets/images/page8/Brand 7.png";
import brand8 from "../../assets/images/page8/Brand 8.png";
import brand9 from "../../assets/images/page8/Brand 9.png";
import brand10 from "../../assets/images/page8/Brand 10.png";
import brand11 from "../../assets/images/page8/Brand 11.png";
import { useAppContext } from "../context";

export const Frame8 = () => {
  const { setSliderShow, setSliderAnimation, setFuggyColor, setFuggyRotate } =
    useAppContext();
  const animeRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSliderShow(false);
            setFuggyRotate(false);
            setFuggyColor("#FF1F9F");
            setSliderAnimation("");
          }
        });
      },
      { threshold: 0.01 }
    );

    const elementsToAnimate = animeRef.current;
    observer.observe(elementsToAnimate);

    return () => {
      observer.unobserve(elementsToAnimate);
    };
  }, []);
  const Blue = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
    brand10,
    brand11,
  ];

  const Green = [
    brand4,
    brand8,
    brand6,
    brand1,
    brand3,
    brand2,
    brand9,
    brand10,
    brand5,
    brand7,
    brand11,
  ];

  return (
    <div className="w-full bg-black h-screen snap-start overflow-hidden relative">
      <div className="rotate-[4deg] overflow-hidden mt-24" ref={animeRef}>
        <InfiniteLooper speed="20" direction="right">
          <div className="flex bg-app-blue p-5 contentBlock--two gap-5 h-[300px]">
            {Blue?.map((image, index) => {
              return (
                <div className="grid grid-flow-row gap-5" key={index}>
                  <div className="flex gap-5">
                    {Array.from({ length: 6 }, (_, index) => {
                      return (
                        <div className="w-6 h-8 bg-black rounded" key={index} />
                      );
                    })}
                  </div>
                  <img src={image} alt={`logo ` + index} />
                  <div className="flex gap-5">
                    {Array.from({ length: 6 }, (_, index) => {
                      return (
                        <div className="w-6 h-8 bg-black rounded" key={index} />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </InfiniteLooper>
      </div>
      <div className="-rotate-[4deg] bg-app-red">
        <InfiniteLooper speed="20" direction="left">
          <div className="flex bg-app-green p-5 contentBlock--two gap-5 h-[300px]">
            {Green?.map((image, index) => {
              return (
                <div className="grid grid-flow-row gap-5" key={index}>
                  <div className="flex gap-5">
                    {Array.from({ length: 6 }, (_, index) => {
                      return (
                        <div className="w-6 h-8 bg-black rounded" key={index} />
                      );
                    })}
                  </div>
                  <img src={image} alt={`logo ` + index} />
                  <div className="flex gap-5">
                    {Array.from({ length: 6 }, (_, index) => {
                      return (
                        <div className="w-6 h-8 bg-black rounded" key={index} />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </InfiniteLooper>
      </div>

      <div className="absolute bottom-16 right-[25%]">
        <p
          className=" underline"
          style={{
            color: "#0093FF",
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
          BRANDS
        </p>
      </div>
    </div>
  );
};
