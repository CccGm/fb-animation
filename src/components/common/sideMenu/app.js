import React from "react";
import "./app.css";
import { FacebookSvg } from "../../../assets/svg/FacebookSvg";
import { InstaSvg } from "../../../assets/svg/InstaSvg";
import { YtSvg } from "../../../assets/svg/ytSvg";
import { LinkdianSvg } from "../../../assets/svg/LinkdianSvg";

export const SideMenu = ({ open }) => {
  return (
    <div className="overflow-x-hidden">
      <div className={`sidenav ${open ? "show left-0" : "-left-[100%]"}`}>
        <a href="#home">H_ome</a>
        <a href="#services">Ab_out</a>
        <a href="#clients">Gall_ery</a>
        <a href="#contact">Contac_t</a>
        <div
          className={`flex items-center gap-4 justify-center w-full icon-sidemenu ${
            open ? "show" : ""
          }`}>
          <div
            className={` bg-white rounded-full justify-center items-center flex`}
            style={{ width: 48, height: 48 }}>
            <FacebookSvg notWhite />
          </div>
          <div
            className={` bg-white rounded-full justify-center items-center flex `}
            style={{ width: 48, height: 48 }}>
            <InstaSvg notWhite />
          </div>

          <div
            className={` bg-white rounded-full justify-center items-center flex`}
            style={{ width: 48, height: 48 }}>
            <YtSvg notWhite />
          </div>
          <div
            className={` bg-white rounded-full justify-center items-center flex`}
            style={{ width: 48, height: 48 }}>
            <LinkdianSvg notWhite />
          </div>
        </div>
      </div>
    </div>
  );
};
