import React from "react";
import phone from "../../../assets/images/page6/phone.png";
import movie from "../../../assets/images/page6/movies cd.png";
import camera from "../../../assets/images/page6/camera man.png";
import lady from "../../../assets/images/page6/ladie.png";
import { InfiniteLooper } from "../../common/imageloopHorizantal/app";

export const MFrame6 = () => {
  return (
    <div className="w-full bg-black flex flex-col gap-2 h-dvh snap-start overflow-hidden">
      <div className="flex flex-col bg-app-orange pl-5  py-10">
        <p
          className=" underline"
          style={{
            color: "#5A0FE8",
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
            lineHeight: 1.2,
            marginTop: 12,
          }}>
          GOSSIP <br /> GAZETTE
        </p>
      </div>

      <InfiniteLooper speed="20" direction="left">
        <div className="flex gap-2 contentBlock--three">
          <img src={phone} alt="Image 1" style={{ width: 160, height: 205 }} />
          <img src={camera} alt="Image 2" style={{ width: 160, height: 205 }} />
          <img src={movie} alt="Image 3" style={{ width: 160, height: 205 }} />
          <img src={lady} alt="Image 4" style={{ width: 160, height: 205 }} />
        </div>
      </InfiniteLooper>

      <InfiniteLooper speed="20" direction="right">
        <div className="flex gap-2 contentBlock--three ">
          <img src={phone} alt="Image 1" style={{ width: 160, height: 205 }} />
          <img src={camera} alt="Image 2" style={{ width: 160, height: 205 }} />
          <img src={movie} alt="Image 3" style={{ width: 160, height: 205 }} />
          <img src={lady} alt="Image 4" style={{ width: 160, height: 205 }} />
        </div>
      </InfiniteLooper>
    </div>
  );
};
