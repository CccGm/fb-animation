import React, { useEffect, useRef, useState } from "react";
import kerfin from "../../../assets/images/page9/Kerfin7_NEA_2530 2.png";
import { Sendsvg } from "../../../assets/svg/Sendsvg";
import { AnimatedInput } from "../../common/AnimatedInput/app";
import "./Frame9.css";
import { useAppContext } from "../../context";

export const Frame9 = () => {
  const {
    setSlidertabColor,
    setSliderShow,
    setFuggyColor,
    setFuggyRotate,
    setFuggyHide,
  } = useAppContext();
  const animeRef = useRef(null);
  const [name, setName] = useState("");
  const [looking, setLooking] = useState("");
  const [contact, setContact] = useState("");
  const [reachMe, setReachMe] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSlidertabColor("#C1FE00");
          setFuggyColor("#C1FE00");
          setFuggyRotate(true);
          setSliderShow(true);
          setFuggyHide(false);
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
    <div className="w-full bg-app-purple h-screen snap-start overflow-hidden">
      <div className="flex gap-8 items-center min-h-screen justify-center py-20">
        <div>
          <img src={kerfin} alt="kerfin" />
        </div>
        <div>
          {/* text */}
          <div ref={animeRef}>
            <p
              style={{ color: "#C1FE00", fontSize: 28, fontFamily: "Feeling" }}>
              Let’s Collaborate
            </p>
            <p
              style={{
                color: "#ffffff",
                fontSize: 128,
                fontFamily: "Geometric",
              }}>
              JUST SEND IT
            </p>
          </div>
          {/* input */}
          <div className="grid grid-flow-row gap-5 mt-10">
            <div className="flex gap-3">
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 28,
                  fontFamily: "Poppins",
                }}>
                Hey, I am
              </p>

              <AnimatedInput
                value={name}
                placeholder="my name"
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: 400,
                  height: 48,
                }}
              />
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 28,
                  fontFamily: "Poppins",
                }}>
                and I am looking for
              </p>
            </div>
            <div>
              <AnimatedInput
                value={looking}
                placeholder="my message"
                onChange={(e) => setLooking(e.target.value)}
                style={{
                  width: 835,
                  height: 48,
                }}
              />
            </div>
            <div className="flex gap-3">
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 28,
                  fontFamily: "Poppins",
                }}>
                You can connect me on
              </p>

              <AnimatedInput
                value={contact}
                placeholder="my email"
                onChange={(e) => setContact(e.target.value)}
                style={{
                  width: 490,
                  height: 48,
                }}
              />
            </div>
            <div className="flex gap-3">
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 28,
                  fontFamily: "Poppins",
                }}>
                or reach me at
              </p>

              <AnimatedInput
                value={reachMe}
                placeholder="my phone"
                onChange={(e) => setReachMe(e.target.value)}
                style={{
                  width: 275,
                  height: 48,
                }}
              />
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 28,
                  fontFamily: "Poppins",
                }}>
                It will be a great unfold!
              </p>
            </div>
          </div>

          {/* button */}
          <div className="flex justify-end mt-5">
            <div className="bg-pulse p-2 rounded-full bg-app-offBlack">
              <button
                className="flex gap-2 bg-app-lightGreen w-36 h-14 justify-center rounded-full text-app-purple text-2xl items-center pulseBb"
                style={{ fontFamily: "Poppins" }}>
                Send <Sendsvg />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
