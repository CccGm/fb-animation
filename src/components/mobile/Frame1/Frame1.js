import React, { useEffect, useRef, useState } from "react";
import Switch from "../../common/switch/app";
import cartoon from "../../../assets/images/page1/Kerfin7_NEA_2525 1.png";
import light from "../../../assets/images/page1/Lights.png";
import camera from "../../../assets/images/page1/Camera.png";
import action from "../../../assets/images/page1/Clapper.png";
import { Menusvg } from "../../../assets/svg/Menusvg";
import { SideMenu } from "../../common/sideMenu/app";

export const MFrame1 = () => {
  const images = [action, light, camera];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bore, setBore] = useState(true);
  const animeRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [rotateFuggy, setFuggyRotate] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    setTimeout(() => {
      setBore(false);
      setFuggyRotate(true);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setIsOpenMenu(false);
        }
      });
    });

    const elementsToAnimate = animeRef.current;
    observer.observe(elementsToAnimate);

    return () => {
      observer.unobserve(elementsToAnimate);
    };
  }, []);
  return (
    <div
      className={`w-full bg-black h-dvh p-2 overflow-hidden relative snap-start  ${
        bore ? "grayscale" : "grayscale-0"
      }`}>
      <SideMenu open={isOpenMenu} />
      <div className="flex h-fit w-full justify-end">
        <div
          style={{
            width: 122,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            zIndex: 10,
          }}
          className={` fuggy-transform `}>
          <p
            className={`${
              rotateFuggy ? "rotate-[20deg]" : "rotate-0"
            } underline transition-all duration-700`}
            style={{
              color: isOpenMenu ? "white" : "#ED1D24",
              fontFamily: "Feeling",
              fontSize: 14,
            }}>
            FuzzyBox
          </p>
        </div>
      </div>

      <div className="pl-5 -mt-5">
        <p
          className={`translate-y-start transition-transform1 ${
            animate ? "translate-y-0" : ""
          }`}
          style={{
            color: "#ffffff",
            fontFamily: "Geometric",
            fontSize: 64,
            lineHeight: 1.1,
          }}>
          LIVE <br /> FROM
          <br /> FUZzYBOx <br /> MEDIA
          <span style={{ color: "#ED1D24" }}>.</span>
        </p>
        <p
          style={{
            color: "#ED1D24",
            fontFamily: "Feeling",
            fontSize: 14,
            lineHeight: 3,
          }}
          ref={animeRef}>
          <span style={{ color: currentIndex === 1 ? "#ffffff" : "#ED1D24" }}>
            lights
          </span>
          {"    "}
          <span style={{ color: currentIndex === 2 ? "#ffffff" : "#ED1D24" }}>
            {"     "}
            camera{"      "}
          </span>
          <span style={{ color: currentIndex === 0 ? "#ffffff" : "#ED1D24" }}>
            {"    "}
            create !
          </span>
        </p>
      </div>

      <div className="flex justify-start w-full pl-4 mt-3 boreSwitchMob z-50 ">
        <Switch bore={bore} setBore={setBore} />
      </div>
      <div
        className={`absolute bottom-5 right-2 -z-10  ${
          animate ? "bounce2" : ""
        }`}>
        <img src={cartoon} alt="popcorn" style={{ height: 260 }} />
      </div>

      <div
        className={`flex justify-center bg-app-offBlack items-center rounded-full  absolute bottom-5 left-3 menu-transform`}
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
