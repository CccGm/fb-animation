import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./app.css";
import { FUnNsvg } from "../../../assets/svg/FUnNsvg";
import { BOREsvg } from "../../../assets/svg/BOREsvg";

const Motion = ({ isOn, ...rest }) => {
  const customClassName = `toggleSwitch ${isOn ? "on" : "off"} h-fit`;

  return (
    <motion.div animate className={customClassName} {...rest}>
      <motion.div layout style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 5,
            width: "100%",
          }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              marginLeft: isOn ? "0%" : "-65%",
              opacity: isOn ? 1 : 0.1,
              gap: 2,
            }}
            className="rightToggle">
            <p
              style={{
                color: "#787878",
                fontFamily: "Geometric",
                fontSize: 20,
                textAlign: "center",
              }}>
              BORE
            </p>
            {isOn && <BOREsvg />}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 2,
              opacity: isOn ? 0.1 : 1,
              marginRight: isOn ? "-65%" : "0%",
            }}
            className="rightToggle">
            {!isOn && <FUnNsvg />}
            <p
              style={{
                color: "#ffffff",
                fontFamily: "Geometric",
                fontSize: 20,
                textAlign: "center",
              }}>
              FUuN
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  return <Motion isOn={isOn} onClick={() => setIsOn(!isOn)} />;
};

export default Switch;
