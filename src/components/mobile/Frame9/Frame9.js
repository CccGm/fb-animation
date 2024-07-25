import React, { useState } from "react";
import kerfin from "../../../assets/images/page9/Kerfin7_NEA_2530 2.png";
import { Sendsvg } from "../../../assets/svg/Sendsvg";
import { AnimatedInput } from "../../common/AnimatedInput/app";

export const MFrame9 = () => {
  const [name, setName] = useState("");
  const [looking, setLooking] = useState("");
  const [contact, setContact] = useState("");
  const [reachMe, setReachMe] = useState("");

  return (
    <div className="w-full bg-app-purple h-screen overflow-scroll snap-start  px-5 py-6">
      <div className="grid grid-cols-2 h-fit">
        <div>
          <p style={{ color: "#C1FE00", fontSize: 12, fontFamily: "Feeling" }}>
            Let’s Collaborate
          </p>
          <p
            style={{
              color: "#ffffff",
              fontSize: 44,
              fontFamily: "Geometric",
              marginTop: 10,
              lineHeight: 1.2,
            }}>
            JUST <br /> SEND <br /> IT
          </p>
        </div>
        <div className=" flex justify-center">
          <img src={kerfin} alt="kerfin" style={{ height: 220 }} />
        </div>
      </div>
      {/* input */}
      <div className="grid grid-flow-row gap-5">
        <div className="flex flex-col gap-3 w-full">
          <p
            style={{
              color: "#ffffff",
              fontSize: 14,
              fontFamily: "Poppins",
            }}>
            Hey, I am
          </p>

          <AnimatedInput
            value={name}
            placeholder="my name"
            onChange={(e) => setName(e.target.value)}
            style={{
              height: 32,
              fontSize: 14,
            }}
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <p
            style={{
              color: "#ffffff",
              fontSize: 14,
              fontFamily: "Poppins",
            }}>
            and I am looking for
          </p>

          <AnimatedInput
            value={looking}
            placeholder="my message"
            onChange={(e) => setLooking(e.target.value)}
            style={{
              height: 32,
              fontSize: 14,
            }}
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <p
            style={{
              color: "#ffffff",
              fontSize: 14,
              fontFamily: "Poppins",
            }}>
            You can connect me on
          </p>

          <AnimatedInput
            value={contact}
            placeholder="my email"
            onChange={(e) => setContact(e.target.value)}
            style={{
              height: 32,
              fontSize: 14,
            }}
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <p
            style={{
              color: "#ffffff",
              fontSize: 14,
              fontFamily: "Poppins",
            }}>
            or reach me at
          </p>

          <AnimatedInput
            value={reachMe}
            placeholder="my phone"
            onChange={(e) => setReachMe(e.target.value)}
            style={{
              width: "auto",
              height: 32,
              fontSize: 14,
            }}
          />

          <p
            style={{
              color: "#ffffff",
              fontSize: 14,
              fontFamily: "Poppins",
            }}>
            It will be a great unfold!
          </p>
        </div>
      </div>
      {/* button */}
      <div className="flex justify-end mt-2 w-full">
        <div className="bg-pulse p-1 rounded-full bg-app-offBlack">
          <button
            className="flex gap-2 bg-app-lightGreen w-24 h-8 justify-center rounded-full text-app-purple text-base items-center pulseBb"
            style={{ fontFamily: "Poppins" }}>
            Send <Sendsvg isMobile />
          </button>
        </div>
      </div>
    </div>
  );
};
