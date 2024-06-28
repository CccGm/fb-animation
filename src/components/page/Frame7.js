import React from "react";
import { InfiniteLooper } from "../common/imageloop/app";
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

export const Frame7 = () => (
  <div className="w-full bg-black h-screen">
    <InfiniteLooper speed="20" direction="left">
      <div className="flex gap-3 contentBlock--one">
        <img src={img1} alt="scroll picture" />
        <img src={img2} alt="scroll picture" />
        <img src={img3} alt="scroll picture" />
        <img src={img4} alt="scroll picture" />
        <img src={img5} alt="scroll picture" />
        <img src={img6} alt="scroll picture" />
        <img src={img7} alt="scroll picture" />
        <img src={img8} alt="scroll picture" />
        <img src={img9} alt="scroll picture" />
        <img src={img10} alt="scroll picture" />
        <img src={img11} alt="scroll picture" />
        <img src={img12} alt="scroll picture" />
        <img src={img13} alt="scroll picture" />
        <img src={img14} alt="scroll picture" />
        <img src={img15} alt="scroll picture" />
      </div>
    </InfiniteLooper>
    <div className="flex justify-between pl-40 pr-56 items-end gap-5">
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
        <p style={{ color: "#ffffff", fontFamily: "Geometric", fontSize: 128 }}>
          CREATORS
        </p>
      </div>
      <div className="rotate-180 mb-12 min-w-60 h-fit">
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
