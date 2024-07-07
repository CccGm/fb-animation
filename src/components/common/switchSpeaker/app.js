import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./app.css";
import headphone from "../../../assets/images/page4/Headphone.png";
import speaker from "../../../assets/images/page4/Speaker.png";

const Motion = ({ isOn, ...rest }) => {
  return (
    <span class="theme__toggle-wrap">
      <input
        id="theme"
        class="theme__toggle"
        type="checkbox"
        role="switch"
        name="theme"
        value="dark"
      />
      <div>
        <img src={speaker} alt="speaker" />
      </div>
      <div>
        <img src={headphone} alt="headphone" />
      </div>
    </span>
  );
};

const SwitchSpeaker = ({ bore, setBore }) => {
  return <Motion isOn={bore} onClick={() => setBore(!bore)} />;
};

export default SwitchSpeaker;
