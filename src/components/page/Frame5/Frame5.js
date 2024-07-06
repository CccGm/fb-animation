import React, { useState } from "react";
import popcorn from "../../../assets/images/page5/popcorn.png";
import food from "../../../assets/images/page5/food.png";
import murti from "../../../assets/images/page5/murti.png";
import mahel from "../../../assets/images/page5/mahal.png";
import piano from "../../../assets/images/page5/piano.png";
import house from "../../../assets/images/page5/house.png";
import radio from "../../../assets/images/page5/radio.png";
import "./Frame5.css";

export const Frame5 = () => {
  const [hover, setHovere] = useState(false);

  return (
    <div className="w-full bg-black min-h-screen">
      {/* <div className="h-[412px] w-full bg-app-red flex pl-40 pr-56 justify-between items-center">
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
        <img src={popcorn} alt="popcorn" style={{ width: 124, height: 222 }} />
      </div> */}
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
      {/* image screen 2 */}
      <div className=" hidden">
        <div className="hover:scale-150 h-fit">
          <img src={mahel} alt="mahel" />
          <div className="flex justify-between p-7 items-center">
            <div>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontFamily: "Poppins",
                }}>
                Palace Hunting with Saloni
              </p>
              <p
                style={{
                  color: "#787878",
                  fontSize: 14,
                  fontFamily: "Poppins",
                }}>
                2.3 lakh views
              </p>
            </div>
            <div className="border-r border-b border-app-green p-3">
              <p
                style={{
                  color: "#00E94F",
                  fontSize: 14,
                  fontFamily: "Poppins",
                }}>
                # FuzzyBox Travel
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={piano} alt="piano" />
          <div className="flex justify-between p-7 items-center">
            <div>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontFamily: "Poppins",
                }}>
                The Corporate Music Talent Show
              </p>
              <p
                style={{
                  color: "#787878",
                  fontSize: 14,
                  fontFamily: "Poppins",
                }}>
                1.13 lakh views
              </p>
            </div>
            <div className="border-r border-b border-app-orange p-3">
              <p
                style={{
                  color: "#FFA616",
                  fontSize: 14,
                  fontFamily: "Poppins",
                }}>
                # FuzzyBox Travel
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* image screen 3 */}
      <div className=" hidden">
        <div>
          <img src={house} alt="house" />
          <div className="flex justify-between p-7 items-center">
            <div>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontFamily: "Poppins",
                }}>
                Unrevealing the Secrets of the Abandoned House
              </p>
              <p
                style={{
                  color: "#787878",
                  fontSize: 14,
                  fontFamily: "Poppins",
                }}>
                98k views
              </p>
            </div>
            <div className="border-r border-b border-app-blue p-3">
              <p
                style={{
                  color: "#0093FF",
                  fontSize: 14,
                  fontFamily: "Poppins",
                }}>
                # FuzzyBox Travel
              </p>
            </div>
          </div>
        </div>
        <div className="hover:scale-150 h-fit">
          <img src={radio} alt="radio" />
          <div className="flex justify-between p-7 items-center">
            <div>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontFamily: "Poppins",
                }}>
                GenZ’s vs Millenials
              </p>
              <p
                style={{
                  color: "#787878",
                  fontSize: 14,
                  fontFamily: "Poppins",
                }}>
                89k views
              </p>
            </div>
            <div className="border-r border-b border-app-pink p-3">
              <p
                style={{
                  color: "#FF1F9F",
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
