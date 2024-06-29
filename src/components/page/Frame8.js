import React from "react";
import { InfiniteLooper } from "../common/imageloop/app";
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

export const Frame8 = () => {
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
    <div className="w-full bg-black min-h-screen">
      <div className="flex justify-end h-fit">
        <div
          style={{
            width: 200,
            height: 142,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}>
          <p
            className=" underline"
            style={{
              color: "#FF1F9F",
              fontFamily: "Feeling",
              fontSize: 24,
            }}>
            FuzzyBox
          </p>
        </div>
      </div>
      <div className="rotate-[4deg] overflow-hidden">
        <InfiniteLooper speed="20" direction="left">
          <div className="flex bg-app-blue p-5 contentBlock--two gap-5 h-[300px]">
            {Blue?.map((image, index) => {
              return (
                <div className="grid grid-flow-row gap-5">
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
                <div className="grid grid-flow-row gap-5">
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
      <div className="grid grid-cols-2 mt-10">
        <div />
        <div>
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
    </div>
  );
};
