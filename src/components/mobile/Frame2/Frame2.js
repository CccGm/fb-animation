import React from "react";

export const MFrame2 = () => {
  const LinesData = [
    { name: "we are believers Copy", show: false },
    { name: "fablers", show: true },
    { name: "seekers", show: true },
    { name: "explorers", show: false },
    { name: "dreamers", show: true },
    { name: "romanticists", show: true },
    { name: "chroniclers", show: true },
    { name: "creators", show: false },
    { name: "adventurers", show: true },
    { name: "influencers", show: true },
    { name: "narrators", show: true },
    { name: "innovators", show: false },
    { name: "mystics", show: true },
    { name: "we are storytellers", show: true },
  ];

  return (
    <div className="w-full bg-app-pink h-dvh snap-start">
      <div className="flex flex-col gap-2 h-full relative">
        <div className="pl-5 pt-5">
          <div className="w-56 border-white border h-full grid grid-flow-row">
            {LinesData.map((data, index) => {
              return (
                <div
                  className="border border-white hover:bg-app-yellow h-9 flex justify-start transition-colors ease-out duration-1000"
                  key={index}>
                  {data?.show && (
                    <div className="absolute ">
                      <div className="bg-white h-4 w-32 -mt-2" />
                    </div>
                  )}
                  <div className="flex w-full items-center justify-end pr-3">
                    <p
                      style={{
                        color: "#FF1F9F",
                        fontSize: 14,
                        fontFamily: "Poppins",
                      }}>
                      {data.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pl-5">
          <p
            style={{
              color: "#ffffff",
              fontSize: 64,
              fontFamily: "Geometric",
              lineHeight: 1.3,
            }}>
            WE LIVE
            <br /> STORIES
          </p>
        </div>
      </div>
    </div>
  );
};
