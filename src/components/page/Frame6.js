import React from "react";
import phone from "../../assets/images/page6/phone.png";
import movie from "../../assets/images/page6/movies cd.png";
import camera from "../../assets/images/page6/camera man.png";
import lady from "../../assets/images/page6/ladie.png";

export const Frame6 = () => {
  return (
    <div className="w-full bg-black grid grid-cols-2 gap-3">
      <div className="grid grid-rows-2 gap-3">
        <div className="flex gap-3">
          <img src={phone} alt="phone" style={{ width: "100%" }} />
          <img src={movie} alt="movie cd" style={{ width: "100%" }} />
        </div>
        <div className="flex gap-3">
          <img src={camera} alt="camera" style={{ width: "100%" }} />
          <img src={lady} alt="lady" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center bg-app-orange">
        <div>
          <p
            className=" underline"
            style={{
              color: "#5A0FE8",
              fontFamily: "Feeling",
              fontSize: 24,
            }}>
            FuzzyBox
          </p>
          <p
            style={{
              color: "#ffffff",
              fontFamily: "Geometric",
              fontSize: 128,
            }}>
            GOSSIP <br /> GAZETTE
          </p>
        </div>
      </div>
    </div>
  );
};
