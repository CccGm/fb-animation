import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [slidertabColor, setSlidertabColor] = useState("#ED1D24");
  const [fuggyColor, setFuggyColor] = useState("#ED1D24");

  return (
    <AppContext.Provider
      value={{ slidertabColor, setSlidertabColor, fuggyColor, setFuggyColor }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
