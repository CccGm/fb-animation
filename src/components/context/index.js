import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  // slider
  const [slidertabColor, setSlidertabColor] = useState("#ED1D24"); // color
  const [sliderAnimation, setSliderAnimation] = useState("slideAnime1"); // animation
  const [sliderShow, setSliderShow] = useState(true); // hidden

  // switch
  const [bore, setBore] = useState(true); // grayScale

  // fuggy text
  const [fuggyColor, setFuggyColor] = useState("#ED1D24"); // color
  const [fuggyRotate, setFuggyRotate] = useState(false); // rotate
  const [fuggyHide, setFuggyHide] = useState(false); // hidden
  const [fuggyANimation, setFuggyAnimation] = useState("fuggyAnime1");

  return (
    <AppContext.Provider
      value={{
        slidertabColor,
        setSlidertabColor,
        fuggyColor,
        setFuggyColor,
        sliderShow,
        setSliderShow,
        sliderAnimation,
        setSliderAnimation,
        bore,
        setBore,
        fuggyRotate,
        setFuggyRotate,
        fuggyHide,
        setFuggyHide,
        fuggyANimation,
        setFuggyAnimation,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
