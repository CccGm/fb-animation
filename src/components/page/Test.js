import React, { useEffect, useState } from "react";
import "./Test.css";
import MumbaiClock from "../common/MumbaiClock/MumbaiClock";
import { SideMenu } from "../common/sideMenu/app";
import { Menusvg } from "../../assets/svg/Menusvg";

export const Test = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="h-dvh bg-app-yellow">
      <SideMenu open={isOpenMenu} />

      <div
        className={`flex justify-center bg-app-offBlack items-center rounded-full  absolute bottom-5 left-3`}
        style={{ width: 54, height: 54, zIndex: 10 }}
        onClick={() => {
          setIsOpenMenu(!isOpenMenu);
        }}>
        <div
          className={`rounded-full justify-center items-center flex ease-in-out transition-all duration-1000 ${isOpenMenu}`}
          style={{
            width: isOpenMenu ? 54 : 40,
            height: isOpenMenu ? 54 : 40,
            backgroundColor: isOpenMenu ? "white" : "#ED1D24",
          }}>
          <Menusvg />
        </div>
      </div>
    </div>
  );
};
