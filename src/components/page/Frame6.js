import React from "react";
import phone from "../../assets/images/page6/phone.png";
import movie from "../../assets/images/page6/movies cd.png";
import camera from "../../assets/images/page6/camera man.png";
import lady from "../../assets/images/page6/ladie.png";
import { InfiniteLooper } from "../common/imageloopVertical/app";

export const Frame6 = () => {
  return (
    <div className="w-full bg-black grid grid-cols-2 gap-3 h-screen">
      <div className="grid grid-cols-2 h-screen">
        <div className="overflow-hidden">
          <InfiniteLooper speed="4" direction="left">
            <div className="flex flex-col gap-3">
              <img src={phone} alt="phone" className="w-full " />

              <img src={camera} alt="camera" className="w-full " />
              <img src={movie} alt="movie cd" className="w-full" />
              <img src={lady} alt="lady" className="w-full" />
            </div>
          </InfiniteLooper>
        </div>
        <div className="overflow-hidden ">
          <InfiniteLooper speed="4" direction="right">
            <div className="flex flex-col gap-3">
              <img src={phone} alt="phone" className="w-full " />
              <img src={camera} alt="camera" className="w-full " />
              <img src={movie} alt="movie cd" className="w-full" />
              <img src={lady} alt="lady" className="w-full" />
            </div>
          </InfiniteLooper>
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
            }}>
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
