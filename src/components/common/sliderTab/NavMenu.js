import React, { useState } from "react";
import { SliderTab } from "./app";
import { FacebookSvg } from "../../../assets/svg/FacebookSvg";
import { InstaSvg } from "../../../assets/svg/InstaSvg";
import { Menusvg } from "../../../assets/svg/Menusvg";
import { YtSvg } from "../../../assets/svg/ytSvg";
import { LinkdianSvg } from "../../../assets/svg/LinkdianSvg";

export const NavMenu = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const CallcloseSide = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div className="bg-app-pink">
      <SliderTab show={showSideBar} closeSidebar={CallcloseSide} />
      <div
        className="flex items-center gap-4 justify-center w-full transition-opacity duration-500"
        style={{
          position: "fixed",
          bottom: 20,
          zIndex: 10,
          opacity: showSideBar ? 0 : 1,
        }}>
        <div
          className=" bg-app-offBlack rounded-full justify-center items-center flex hover:bg-app-facebook transition-colors duration-500 hover:cursor-pointer"
          style={{ width: 52, height: 52 }}>
          <FacebookSvg />
        </div>
        <div
          className=" bg-app-offBlack rounded-full justify-center items-center flex hover:bg-[radial-gradient(circle_at_30%_107%,_#fdf497_0%,_#fdf497_5%,_#fd5949_45%,_#d6249f_60%,_#285AEB_90%)] transition-colors duration-500 hover:cursor-pointer"
          style={{ width: 52, height: 52 }}>
          <InstaSvg />
        </div>
        <div
          className="flex justify-center bg-app-offBlack items-center rounded-full  hover:cursor-pointer"
          style={{ width: 72, height: 72 }}
          onClick={CallcloseSide}>
          <div
            className=" bg-app-red rounded-full justify-center items-center flex menu-icon transition-all duration-500"
            style={{ width: 52, height: 52 }}>
            <Menusvg />
          </div>
        </div>
        <div
          className=" bg-app-offBlack rounded-full justify-center items-center flex hover:bg-app-youtube transition-colors duration-500 hover:cursor-pointer"
          style={{ width: 52, height: 52 }}>
          <YtSvg />
        </div>
        <div
          className=" bg-app-offBlack rounded-full justify-center items-center flex hover:bg-app-linkdian transition-colors duration-500  hover:cursor-pointer"
          style={{ width: 52, height: 52 }}>
          <LinkdianSvg />
        </div>
      </div>
    </div>
  );
};
