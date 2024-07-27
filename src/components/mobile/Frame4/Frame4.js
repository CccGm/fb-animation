import React, { useEffect, useRef, useState } from "react";
import cameraMan from "../../../assets/images/page4/cameraMan_mob.png";
import persons from "../../../assets/images/page4/people_mob.png";
import karefin from "../../../assets/images/page3/Kerfin7_NEA_2526 2.png";
import CustomizedSwitches from "../../common/switchSpeaker/app";
import "./frame4.css";

export const MFrame4 = () => {
  const [radio, setRadio] = useState(false);
  const [hover, setHover] = useState(false);
  const [textAnime, setTextAnime] = useState(false);

  const animeRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          setTimeout(() => {
            setHover(true);
          }, 4000);
        } else {
          setTimeout(() => {
            setAnimate(false);
            setHover(false);
            setRadio(false);
            setTextAnime(false);
          }, 100);
        }
      });
    });

    const elementsToAnimate = animeRef.current;
    observer.observe(elementsToAnimate);

    return () => {
      observer.unobserve(elementsToAnimate);
      setAnimate(false);
      setHover(false);
      setRadio(false);
      setTextAnime(false);
    };
  }, []);

  const onChangeRadio = () => {
    setRadio(!radio);
    setTextAnime(true);
  };

  return (
    <div
      className="w-full bg-black h-dvh relative pt-8 overflow-hidden snap-start"
      id="section4">
      {/* cut lines */}
      <div>
        {/* horizantal lines --- */}
        <div className="flex justify-center items-center">
          <div
            className={`${
              animate ? "cut-line-horizontal-Mob  line-horizontal-Mob-1" : ""
            }`}
          />
          <div
            className={` ${
              animate ? "cut-line-horizontal-Mob  line-horizontal-Mob-2" : ""
            }`}
          />
          <div
            className={` ${
              animate ? "cut-line-horizontal-Mob  line-horizontal-Mob-3" : ""
            }`}
          />
          <div
            className={`${
              animate ? "cut-line-horizontal-Mob  line-horizontal-Mob-4" : ""
            }`}
          />
          <div
            className={`${
              animate ? "cut-line-horizontal-Mob  line-horizontal-Mob-5" : ""
            }`}
          />
        </div>
        {/* vertical line || */}
        <div>
          <div
            className={`${
              animate ? "cut-line-vertical-Mob line-vertical-Mob-1" : ""
            }`}
          />
          <div
            className={`${
              animate ? "cut-line-vertical-Mob line-vertical-Mob-2" : ""
            }`}
          />
          <div
            className={`${
              animate ? "cut-line-vertical-Mob line-vertical-Mob-3" : ""
            }`}
          />
          <div
            className={`${
              animate ? "cut-line-vertical-Mob line-vertical-Mob-4" : ""
            }`}
          />
          <div
            className={`${
              animate ? "cut-line-vertical-Mob line-vertical-Mob-5" : ""
            }`}
          />
        </div>
      </div>

      {/* hover box */}
      <div className="overflow-hidden">
        <div className={`image-section-mob ${animate ? "mob-box-1" : ""}`} />
        <div
          className={`image-section-mob ${animate ? "mob-box-2" : ""} ${
            hover
              ? radio
                ? "hover-effect-blue-left "
                : "hover-effect-yellow-left "
              : ""
          }`}>
          <div className="mobtext" />
        </div>
        <div className={`image-section-mob ${animate ? "mob-box-3" : ""}`} />
        <div
          className={`image-section-mob ${animate ? "mob-box-4" : ""} ${
            hover
              ? radio
                ? "hover-effect-blue-left "
                : "hover-effect-yellow-left "
              : ""
          }`}>
          <div className="mobtext">
            {radio ? "Public Relation Management" : " Reaction Videos"}
          </div>
        </div>
        <div
          className={`image-section-mob ${animate ? "mob-box-5" : ""} ${
            hover
              ? radio
                ? "hover-effect-blue-bottom"
                : "hover-effect-yellow-bottom"
              : ""
          }`}>
          <div className="mobtext">
            {radio ? "Design Services" : "Music Videos"}
          </div>
        </div>
        <div
          className={`image-section-mob ${animate ? "mob-box-6" : ""} ${
            hover
              ? radio
                ? "hover-effect-blue-right"
                : "hover-effect-yellow-right"
              : ""
          }`}>
          <div className="mobtext">
            {radio ? "Digital Marketing" : "Food Videos"}
          </div>
        </div>
        <div
          className={`image-section-mob ${animate ? "mob-box-7" : ""} ${
            hover
              ? radio
                ? "hover-effect-blue-bottom"
                : "hover-effect-yellow-bottom"
              : ""
          }`}>
          <div className="mobtext">
            {radio
              ? "Performance & Collaboration"
              : " Travel & Lifestyle  Videos"}
          </div>
        </div>
        <div className={`image-section-mob ${animate ? "mob-box-8" : ""}`} />
        <div
          className={`image-section-mob ${animate ? "mob-box-9" : ""} ${
            hover
              ? radio
                ? "hover-effect-blue-bottom"
                : "hover-effect-yellow-bottom"
              : ""
          }`}>
          <div className="mobtext">
            {radio ? "Content Strategy" : "Mini Series"}
          </div>
        </div>
        <div className={`image-section-mob ${animate ? "mob-box-10" : ""}`} />
        <div
          className={`image-section-mob ${animate ? "mob-box-11" : ""} ${
            hover
              ? radio
                ? "hover-effect-blue-left "
                : "hover-effect-yellow-left "
              : ""
          }`}>
          <div className="mobtext">
            {radio ? `Video Production` : "Podcasts"}
          </div>
        </div>
        <div className={`image-section-mob ${animate ? "mob-box-12" : ""}`} />
        <div
          className={`image-section-mob ${animate ? "mob-box-13" : ""} ${
            hover
              ? radio
                ? "hover-effect-blue-top "
                : "hover-effect-yellow-top "
              : ""
          }`}>
          <div className="mobtext" />
        </div>
        <div className={`image-section-mob ${animate ? "mob-box-14" : ""}`} />
      </div>

      {/* image  */}
      <div className="w-full h-full flex justify-center">
        <img
          src={radio ? persons : cameraMan}
          alt="camera man"
          style={{ width: "90%", height: "78%" }}
          ref={animeRef}
        />
      </div>

      {/*  kerfin */}
      <div className={`switch-kerfinMob ${animate ? "karfinAnime " : ""}`}>
        <img src={karefin} alt="karefin" style={{ width: 150, height: 260 }} />
      </div>

      {/* switch */}
      <div
        className={`-ml-5 absolute bottom-[20%] right-4 opacity-0 z-50 ${
          animate ? "switchAnime" : ""
        }`}>
        <CustomizedSwitches checked={radio} change={onChangeRadio} Mob={true} />
      </div>

      {/* text */}
      <div className="pl-5 -bottom-2 absolute ">
        <div className={`flex gap-5 ${animate ? "mini-fuggy" : ""}`}>
          <p
            style={{
              color: radio ? "#FFA616" : "#0093FF",
              fontFamily: "Feeling",
              fontSize: 14,
              textDecoration: "underline",
            }}>
            FuzzyBox
          </p>
          <p
            style={{
              color: radio ? "#0093FF" : "#FFA616",
              fontFamily: "Feeling",
              fontSize: 14,
            }}>
            as a
          </p>
        </div>
        <div key={radio ? "animated" : "non-animated"}>
          {radio ? (
            <p
              style={{
                color: "#ffffff",
                fontFamily: "Geometric",
                fontSize: 64,
              }}
              className={`${
                animate ? `text-anime-${textAnime ? "secound" : "first"}` : ""
              }`}>
              SERVICE
            </p>
          ) : (
            <p
              style={{
                color: "#ffffff",
                fontFamily: "Geometric",
                fontSize: 64,
              }}
              className={`${
                animate ? `text-anime-${textAnime ? "secound" : "first"}` : ""
              }`}>
              PRODUCT
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
