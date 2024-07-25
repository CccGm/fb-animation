import React, { useEffect, useRef, useState } from "react";
import { Emailsvg } from "../../../assets/svg/Emailsvg";
import { Phonesvg } from "../../../assets/svg/Phonesvg";
import MumbaiClock from "../../common/MumbaiClock/MumbaiClock";
import { UaeClock } from "../../common/uaeClock/UaeClock";
import { useAppContext } from "../../context";

export const MFrame10 = () => {
  const { setSliderShow, setSliderAnimation, setFuggyHide } = useAppContext();
  const animeRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  return (
    <div className="w-full bg-black overflow-hidden snap-start ">
      <div className="flex flex-col pl-5">
        <div className="my-10">
          <p
            style={{
              color: "#FF1F9F",
              fontFamily: "Feeling",
              fontSize: 14,
              textDecoration: "underline",
            }}
            ref={animeRef}>
            FuzzyBox
          </p>
          <p
            style={{
              color: "#00E94F",
              fontFamily: "Poppins",
              fontSize: 12,
              fontWeight: "lighter",
              marginTop: 20,
            }}>
            lights camera create.
          </p>
          <p
            style={{
              color: "#ffffff",
              fontFamily: "Poppins",
              fontSize: 14,
              fontWeight: "lighter",
              marginTop: 30,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
            <Emailsvg /> hello@fuzzybox.live
          </p>
          <p
            style={{
              color: "#ffffff",
              fontFamily: "Poppins",
              fontSize: 14,
              fontWeight: "lighter",
              marginTop: 5,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
            <Phonesvg /> +91 9876543210
          </p>
        </div>

        <div className="flex items-center gap-2 -ml-5">
          <div className="scale-75">
            <MumbaiClock bgColorClock={"#FF1F9F"} bgColorSec={"#00E94F"} />
          </div>
          <div>
            <p
              style={{
                color: "#00E94F",
                fontFamily: "Feeling",
                fontSize: 16,
              }}>
              mumBai
            </p>
            <p
              style={{
                color: "#ffffff",
                fontFamily: "Poppins",
                fontSize: 14,
                fontWeight: "lighter",
                marginTop: 20,
              }}>
              Near Infinity Mall, Andheri <br /> West, Mumbai, India
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 -ml-5">
          <div className="scale-75">
            <UaeClock bgColorClock={"#00E94F"} bgColorSec={"#FF1F9F"} />
          </div>
          <div>
            <p
              style={{
                color: "#FF1F9F",
                fontFamily: "Feeling",
                fontSize: 16,
              }}>
              uAe
            </p>
            <p
              style={{
                color: "#ffffff",
                fontFamily: "Poppins",
                fontSize: 14,
                fontWeight: "lighter",
                marginTop: 20,
              }}>
              Downtown Dubai,
              <br /> United Arab Emirates
            </p>
          </div>
        </div>

        <p
          style={{
            color: "#ffffff",
            fontFamily: "Poppins",
            fontSize: 14,
            fontWeight: "lighter",
            marginTop: 30,
          }}>
          <span style={{ color: "#787878" }}> @copyright 2023 |</span> {"  "}
          fuzzyBox
        </p>
      </div>

      <div
        className={`flex overflow-hidden items-center mt-5 h-7 ${
          animate ? "footerRow" : ""
        }`}>
        <div className="flex gap-3 h-fit bg-white">
          {Array.from({ length: 500 }, (_, index) => {
            return (
              <div key={index}>
                <div className="w-6 h-9 border-4 -my-2 border-white bg-black rotation " />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
