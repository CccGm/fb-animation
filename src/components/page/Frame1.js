import React from "react";
import Switch from "../common/switch/app";
import cartoon from "../../assets/images/page1/Kerfin7_NEA_2525 1.png";
import { SliderTab } from "../common/sliderTab/app";

export const Frame1 = () => {
  return (
    <div className="w-full bg-black h-screen p-2">
      <div className="flex h-fit w-full justify-end ">
        <div
          style={{
            width: 200,
            height: 142,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}>
          <p
            className="rotate-[20deg] underline"
            style={{
              color: "#787878",
              fontFamily: "Feeling",
              fontSize: 24,
            }}>
            FuzzyBox
          </p>
        </div>
      </div>
      <div className="py-5 pl-36 ">
        <p style={{ color: "#787878", fontFamily: "Feeling", fontSize: 28 }}>
          lights camera <span style={{ color: "#ffffff" }}> create !</span>
        </p>
        <p style={{ color: "#ffffff", fontFamily: "Geometric", fontSize: 128 }}>
          LIVE FROM
          <br /> FUZzYBOx MEDIA<span style={{ color: "#ED1D24" }}>.</span>
        </p>
        <div className="absolute -top-[45px] left-[810px]">
          <img src={cartoon} alt="popcorn" />
        </div>
      </div>
      <div className="grid grid-cols-3  px-8">
        <div />
        {/* <div className="grid grid-flow-col gap-2 justify-center items-center">
          <div>
            <img src="" alt="facebook" />
          </div>
          <div>
            <img src="" alt="instagram" />
          </div>
          <div>
            <img src="" alt="facebook" />
          </div>
          <div>
            <img src="" alt="youtube" />
          </div>
          <div>
            <img src="" alt="indeed" />
          </div>
        </div> */}
        <SliderTab />
        <div className="flex justify-end">
          <Switch />
        </div>
      </div>
    </div>
  );
};
