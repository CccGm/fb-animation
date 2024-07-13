import React, { useState } from "react";
import popcorn from "../../../assets/images/page5/popcorn.png";
import food from "../../../assets/images/page5/food.png";
import murti from "../../../assets/images/page5/murti.png";
import "./Frame5.css";

export const Frame5 = () => {
  const [hover, setHovere] = useState(false);

  return (
    <div className="w-full bg-black min-h-screen snap-start">
      <div className="h-[412px] w-full bg-app-red flex pl-40 pr-56 justify-between overflow-hidden items-center popcorn-container-hide">
        <div>
          <p
            className=" underline mt-8"
            style={{
              color: "#EEF51B",
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
            CREATIONS
          </p>
        </div>
        <img
          src={popcorn}
          alt="popcorn"
          style={{ width: 124, height: 222 }}
          className="popcotn-rotate"
        />
      </div>
      {/* image screen 1 */}
      <div className="flex ease-in-out duration-700 container1">
        <div
          className={`h-fit ${
            hover ? "w-1/2" : "w-3/4"
          } ease-in-out duration-500 image1`}>
          <img src={food} alt="food" style={{ width: "100%" }} />
          <div className="flex justify-between p-7 items-center">
            <div>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontFamily: "Poppins",
                }}>
                Exploring Pav Bhaji on the Streets of Mumbai
              </p>
              <p
                style={{
                  color: "#787878",
                  fontSize: 14,
                  fontFamily: "Poppins",
                }}>
                2.2 lakh views
              </p>
            </div>
            <div className="border-r border-b border-app-yellow p-3">
              <p
                style={{
                  color: "#EEF51B",
                  fontSize: 14,
                  fontFamily: "Poppins",
                }}>
                # FuzzyBox Travel
              </p>
            </div>
          </div>
        </div>
        <div
          className={`h-fit ${
            hover ? "w-3/4" : "w-1/2"
          } ease-in-out duration-500 image2`}
          onMouseEnter={() => setHovere(true)}
          onMouseLeave={() => setHovere(false)}>
          <img src={murti} alt="murti" style={{ width: "100%" }} />
          <div className="flex justify-between p-7 items-center ">
            <div>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontFamily: "Poppins",
                }}>
                Antique stuffs from Jodhpur
              </p>
              <p
                style={{
                  color: "#787878",
                  fontSize: 14,
                  fontFamily: "Poppins",
                }}>
                1.8 lakh views
              </p>
            </div>
            <div className="border-r border-b border-app-red p-3">
              <p
                style={{
                  color: "#ED1D24",
                  fontSize: 14,
                  fontFamily: "Poppins",
                }}>
                # FuzzyBox Travel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
