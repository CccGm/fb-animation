import React from "react";
import { useAppContext } from "../../context";
import "./app.css";

export const FuggyText = () => {
  const { fuggyColor, fuggyRotate, fuggyHide, fuggyANimation, bore } =
    useAppContext();
  return (
    <div
      className={`${fuggyANimation} ${bore ? "grayscale" : "grayscale-0"}`}
      style={{
        height: 142,
        width: 200,
        justifyContent: "center",
        display: fuggyHide ? "none" : "flex",
        alignItems: "center",
        position: "fixed",
        zIndex: 30,
        top: 0,
      }}>
      <p
        className={`${
          fuggyRotate ? "rotate-[20deg] " : ""
        } transition-transform duration-700`}
        style={{
          fontSize: 24,
          fontFamily: "Feeling",
          textDecoration: "underline",
          color: fuggyColor,
        }}>
        FuggyBox
      </p>
    </div>
  );
};
