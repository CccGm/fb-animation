import React, { useState } from "react";
import cameraMan from "../../../assets/images/page4/camera man.png";
import persons from "../../../assets/images/page4/persons.png";
import karefin from "../../../assets/images/page3/Kerfin7_NEA_2526 2.png";
import CustomizedSwitches from "../../common/switchSpeaker/app";
import "./frame4.css";

export const Frame4 = () => {
  const [radio, setRadio] = useState(false);
  const [hover, setHover] = useState(false);
  const [hoverOut, setHoverOut] = useState(false);

  const onChangeRadio = () => {
    setHoverOut(false);
    setRadio(!radio);
  };

  return (
    <div
      className="w-full bg-black h-screen"
      style={{
        paddingTop: "1%",
        paddingBottom: "1%",
        paddingLeft: "0.5%",
        paddingRight: "0.5%",
      }}>
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
      <div className="overflow-hidden">
        <div
          class={`image-section box-1  ${
            hover
              ? radio
                ? "hover-effect-blue-left "
                : "hover-effect-yellow-left "
              : ""
          } ${
            hoverOut && !hover
              ? radio
                ? "hover-effect-blue-left-back"
                : "hover-effect-yellow-left-back"
              : ""
          }`}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
            setHoverOut(true);
          }}>
          <div className="text" />
        </div>
        <div class="image-section box-2" />
        <div class="image-section box-3" />
        <div
          class={`image-section box-4 ${
            hover
              ? radio
                ? "hover-effect-blue-left "
                : "hover-effect-yellow-left "
              : ""
          } ${
            hoverOut && !hover
              ? radio
                ? "hover-effect-blue-left-back"
                : "hover-effect-yellow-left-back"
              : ""
          }`}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
            setHoverOut(true);
          }}>
          <div className="text">{radio ? `Video Production` : "Podcasts"}</div>
        </div>
        <div class="image-section box-5" />
        <div
          class={`image-section box-6 
          ${
            hover
              ? radio
                ? "hover-effect-blue-bottom"
                : "hover-effect-yellow-bottom"
              : ""
          }  
          ${
            hoverOut && !hover
              ? radio
                ? "hover-effect-blue-bottom-back"
                : "hover-effect-yellow-bottom-back"
              : ""
          }`}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
            setHoverOut(true);
          }}>
          <div className="text">
            {radio ? "Content Strategy" : "Mini Series"}
          </div>
        </div>
        <div class="image-section box-7" />
        <div
          class={`image-section box-8 ${
            hover
              ? radio
                ? "hover-effect-blue-top"
                : "hover-effect-yellow-top"
              : ""
          } ${
            hoverOut && !hover
              ? radio
                ? "hover-effect-blue-top-back"
                : "hover-effect-yellow-top-back"
              : ""
          }`}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
            setHoverOut(true);
          }}>
          <div className="text">
            {radio ? "Digital Marketing" : "Food Videos"}
          </div>
        </div>
        <div
          class={`image-section box-9 ${
            hover
              ? radio
                ? "hover-effect-blue-right"
                : "hover-effect-yellow-right"
              : ""
          } ${
            hoverOut && !hover
              ? radio
                ? "hover-effect-blue-right-back"
                : "hover-effect-yellow-right-back"
              : ""
          }`}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
            setHoverOut(true);
          }}>
          <div className="text">
            {radio
              ? "Performance & Collaboration"
              : " Travel & Lifestyle  Videos"}
          </div>
        </div>
        <div class="image-section box-10" />
        <div class="image-section box-11" />
        <div
          class={`image-section box-12 ${
            hover
              ? radio
                ? "hover-effect-blue-top"
                : "hover-effect-yellow-top"
              : ""
          } ${
            hoverOut && !hover
              ? radio
                ? "hover-effect-blue-top-back"
                : "hover-effect-yellow-top-back"
              : ""
          }`}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
            setHoverOut(true);
          }}>
          <div className="text">
            {radio ? "Public Relation Management" : " Reaction Videos"}
          </div>
        </div>
        <div
          class={`image-section box-13 ${
            hover
              ? radio
                ? "hover-effect-blue-left"
                : "hover-effect-yellow-left"
              : ""
          } ${
            hoverOut && !hover
              ? radio
                ? "hover-effect-blue-left-back"
                : "hover-effect-yellow-left-back"
              : ""
          }`}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
            setHoverOut(true);
          }}>
          <div className="text">
            {radio ? "Design Services" : "Music Videos"}
          </div>
        </div>
        <div class="image-section box-14" />
        <div
          class={`image-section box-15 ${
            hover
              ? radio
                ? "hover-effect-blue-bottom"
                : "hover-effect-yellow-bottom"
              : ""
          } ${
            hoverOut && !hover
              ? radio
                ? "hover-effect-blue-bottom-back"
                : "hover-effect-yellow-bottom-back"
              : ""
          }`}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
            setHoverOut(true);
          }}>
          <div className="text" />
        </div>
      </div>
      {/* image  */}
      <div className="w-full h-full ">
        <img
          src={radio ? persons : cameraMan}
          alt="camera man"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      {/* switch */}
      <div className="switch-kerfin flex items-center flex-col w-fit">
        <div className="-mb-1">
          <img src={karefin} alt="karefin" />
        </div>
        <div className="-ml-5">
          <CustomizedSwitches checked={radio} change={onChangeRadio} />
        </div>
      </div>
    </div>
  );
};
