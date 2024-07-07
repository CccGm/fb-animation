import React, { useState } from "react";
import cameraMan from "../../assets/images/page4/camera man.png";
import persons from "../../assets/images/page4/persons.png";
import "./Test.css";

export const Test = () => {
  const [radio, setRadio] = useState(true);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="w-full bg-black h-screen"
      style={{
        paddingTop: "1%",
        paddingBottom: "1%",
        paddingLeft: "0.5%",
        paddingRight: "0.5%",
      }}>
      <div>
        <div className="cut-line-horizontal line-horizontal-1" />
        <div className="cut-line-horizontal line-horizontal-2" />
        <div className="cut-line-horizontal line-horizontal-3" />
        <div className="cut-line-horizontal line-horizontal-4" />
        <div className="cut-line-horizontal line-horizontal-5" />
      </div>
      <div>
        <div className="cut-line-vertical line-vertical-1" />
        <div className="cut-line-vertical line-vertical-2" />
        <div className="cut-line-vertical line-vertical-3" />
        <div className="cut-line-vertical line-vertical-4" />
        <div className="cut-line-vertical line-vertical-5" />
      </div>
      <div>
        <div
          className="image-section box-1"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
          <div className={`overlay ${hover ? "hover-effect" : ""}`}>
            <p className="text">Your Text Here</p>
          </div>
        </div>
      </div>
    </div>
  );
};
