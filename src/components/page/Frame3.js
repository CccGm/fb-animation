import React from "react";
import karfin from "../../assets/images/page3/Kerfin7_NEA_2526 2.png";

export const Frame3 = () => {
  return (
    <div className="w-full bg-black h-screen">
      <div
        style={{
          width: 200,
          height: 142,
          justifyContent: "center",
          display: "flex",
          position: "absolute",
          top: 0,
          right: 0,
        }}>
        <p
          className=" underline mt-8"
          style={{
            color: "#C1FE00",
            fontFamily: "Feeling",
            fontSize: 24,
          }}>
          FuzzyBox
        </p>
      </div>
      <div className="p-24  absolute w-full h-full">
        <div className="border flex h-full relative w-full">
          {/* border */}
          <>
            <div className="absolute border border-app-gray h-64 top-0 left-0" />
            <div className="absolute border border-app-gray w-64 top-0 left-0" />
            <div className="absolute border border-app-gray h-64 bottom-0 left-0" />
            <div className="absolute border border-app-gray w-64 bottom-0 left-0" />
            <div className="absolute border border-app-gray h-64 top-0 right-0" />
            <div className="absolute border border-app-gray w-64 top-0 right-0" />
            <div className="absolute border border-app-gray h-64 bottom-0 right-0" />
            <div className="absolute border border-app-gray w-64 bottom-0 right-0" />

            {/* plus */}
            <div className="absolute border border-app-gray h-10 top-1/2 left-1/2" />
            <div className="absolute border border-app-gray h-10 rotate-90 top-1/2 left-1/2" />
          </>
          {/* image */}
          <div className="absolute -bottom-0 right-0">
            <img src={karfin} alt="popcorn karfin" />
          </div>

          {/* rec & battery */}
          <div className="p-10 flex justify-between h-fit w-full">
            {/* rec */}
            <div className="flex w-fit gap-2 items-center">
              <div className="bg-app-red w-5 h-5 rounded-full" />
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 22,
                  fontFamily: "Geometric",
                  fontWeight: 800,
                }}>
                REC
              </p>
            </div>
            {/* battery */}
            <div className="flex items-center">
              <div className="w-2 border-white h-5 border-2 -mr-[2px] " />
              <div className="border-2 border-white h-10 p-1 grid grid-flow-col gap-1">
                <div className="w-2" />
                <div className="bg-app-green w-[10px]" />
                <div className="bg-app-green w-[10px]" />
                <div className="bg-app-green w-[10px]" />
                <div className="bg-app-green w-[10px]" />
              </div>
            </div>
          </div>
          {/* 4k */}
          <div className="absolute bottom-0 left-0 p-10 flex gap-3 items-center">
            <p
              style={{
                color: "#ffffff",
                fontSize: 22,
                fontFamily: "Geometric",
                fontWeight: 800,
              }}>
              HD
            </p>
            <div className="px-4 bg-white rounded-lg">
              <p
                style={{
                  color: "#000000",
                  fontSize: 22,
                  fontFamily: "Geometric",
                  fontWeight: 800,
                }}>
                4K
              </p>
            </div>
            <p
              style={{
                color: "#ffffff",
                fontSize: 22,
                fontFamily: "Geometric",
                fontWeight: 800,
              }}>
              8K
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
