import React, { useState } from "react";
import cameraMan from "../../../assets/images/page4/camera man.png";
import persons from "../../../assets/images/page4/persons.png";
import "./frame4.css";

export const Frame4 = () => {
  const [radio, setRadio] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div div className="w-full bg-black h-screen py-6 px-2">
      {/* cut lines */}
      <div>
        {/* horizantal lines */}
        <div>
          <div class="cut-line-horizontal line-horizontal-1" />
          <div class="cut-line-horizontal line-horizontal-2" />
          <div class="cut-line-horizontal line-horizontal-3" />
          <div class="cut-line-horizontal line-horizontal-4" />
          <div class="cut-line-horizontal line-horizontal-5" />
        </div>
        {/* vertical line */}
        <div>
          <div class="cut-line-vertical line-vertical-1" />
          <div class="cut-line-vertical line-vertical-2" />
          <div class="cut-line-vertical line-vertical-3" />
          <div class="cut-line-vertical line-vertical-4" />
          <div class="cut-line-vertical line-vertical-5" />
        </div>
      </div>
      {/* hover box */}
      <div>
        <div class="image-section section-1" />
      </div>
      {/* <div className=" absolute border border-app-pink">
        <div className="w-32 h-32 bg-app-red"></div>
      </div> */}
      <div className="w-full h-full">
        <img
          src={radio ? persons : cameraMan}
          alt="camera man"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};
