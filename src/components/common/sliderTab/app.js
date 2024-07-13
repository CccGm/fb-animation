import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./app.css";

export const SliderTab = ({ show, closeSidebar }) => {
  const [currentPosition, setCurrentPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className={`sidenav-menu side-menu-${show ? "active" : "closing"}`}>
      <SlideTabs
        newPosition={currentPosition}
        setNewPoisiton={setCurrentPosition}
        close={closeSidebar}
      />
    </div>
  );
};

const SlideTabs = ({ newPosition, setNewPoisiton, close }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const setCurrentPosition = () => {
    setNewPoisiton(position);
    close();
  };

  return (
    <ul
      onMouseLeave={() => {
        setPosition(newPosition);
      }}
      className="relative mx-auto flex w-fit rounded-full  bg-app-offBlack p-2 ">
      <Tab setPosition={setPosition} position={setCurrentPosition}>
        Home
      </Tab>
      <Tab setPosition={setPosition} position={setCurrentPosition}>
        About
      </Tab>
      <Tab setPosition={setPosition} position={setCurrentPosition}>
        Gallery
      </Tab>
      <Tab setPosition={setPosition} position={setCurrentPosition}>
        Contact
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, position }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={position}
      className="relative z-10 block cursor-pointer px-3 py-1.5  text-white md:px-5 md:py-3 md:text-base"
      style={{ fontSize: 18, fontFamily: "Poppins" }}>
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-app-red md:h-12"
    />
  );
};
