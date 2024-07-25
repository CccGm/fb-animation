import React, { useState } from "react";
import { SliderTab } from "./app";
import { FacebookSvg } from "../../../assets/svg/FacebookSvg";
import { InstaSvg } from "../../../assets/svg/InstaSvg";
import { Menusvg } from "../../../assets/svg/Menusvg";
import { YtSvg } from "../../../assets/svg/ytSvg";
import { LinkdianSvg } from "../../../assets/svg/LinkdianSvg";
import { useAppContext } from "../../context";
import "./app.css";

export const NavMenu = () => {
  const { slidertabColor, sliderShow, sliderAnimation, bore } = useAppContext();
  const [showSideBar, setShowSideBar] = useState(false);
  const CallcloseSide = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div
      className={`fixed bottom-5 z-30 ${sliderAnimation} ${
        bore ? "grayscale" : "grayscale-0"
      }`}
      style={{ display: sliderShow ? "" : "none" }}>
      <SliderTab show={showSideBar} closeSidebar={CallcloseSide} />
      <div
        className="flex items-center gap-4 justify-center w-full "
        style={{
          bottom: 20,
          opacity: showSideBar ? 0 : 1,
          zIndex: 20,
        }}>
        <div
          className={` bg-app-offBlack rounded-full justify-center items-center flex hover:bg-app-facebook transition-colors duration-500 hover:cursor-pointer ${
            sliderAnimation === "slideAnime1" ? "leftSliderChild1" : ""
          }`}
          style={{ width: 52, height: 52 }}>
          <FacebookSvg />
        </div>
        <div
          className={` bg-app-offBlack rounded-full justify-center items-center flex hover:bg-[radial-gradient(circle_at_30%_107%,_#fdf497_0%,_#fdf497_5%,_#fd5949_45%,_#d6249f_60%,_#285AEB_90%)] transition-colors duration-500 hover:cursor-pointer ${
            sliderAnimation === "slideAnime1" ? "leftSliderChild2" : ""
          }`}
          style={{ width: 52, height: 52 }}>
          <InstaSvg />
        </div>
        <div
          className={`flex justify-center bg-app-offBlack items-center rounded-full  hover:cursor-pointer ${
            sliderAnimation === "slideAnime1" ? "sliderMainCircle" : ""
          }`}
          style={{ width: 72, height: 72, zIndex: 10 }}
          onClick={CallcloseSide}>
          <div
            className="rounded-full justify-center items-center flex menu-icon transition-all duration-500"
            style={{ width: 52, height: 52, backgroundColor: slidertabColor }}>
            <Menusvg />
          </div>
        </div>
        <div
          className={` bg-app-offBlack rounded-full justify-center items-center flex hover:bg-app-youtube transition-colors duration-500 hover:cursor-pointer ${
            sliderAnimation === "slideAnime1" ? "rightSliderChild1" : ""
          }`}
          style={{ width: 52, height: 52 }}>
          <YtSvg />
        </div>
        <div
          className={` bg-app-offBlack rounded-full justify-center items-center flex hover:bg-app-linkdian transition-colors duration-500  hover:cursor-pointer  ${
            sliderAnimation === "slideAnime1" ? "rightSliderChild2" : ""
          }`}
          style={{ width: 52, height: 52 }}>
          <LinkdianSvg />
        </div>
      </div>
    </div>
  );
};
