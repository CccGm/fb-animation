import React, { useState, useEffect } from "react";
import "./app.css";

export const AnimatedInput = ({
  placeholder: passedPlaceholder = "",
  ...passedProps
}) => {
  const [placeholder, setPlaceholder] = useState(passedPlaceholder.slice(0, 0));
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [completed, setComplated] = useState(false);

  useEffect(() => {
    const intr = setInterval(() => {
      setPlaceholder(passedPlaceholder.slice(0, placeholderIndex) + "|");
      if (completed) {
        if (placeholderIndex === 0) {
          // setPlaceholderIndex(0);
          setComplated(false);
        } else {
          setPlaceholderIndex(placeholderIndex - 1);
        }
      } else {
        if (placeholderIndex + 1 > passedPlaceholder.length) {
          // setPlaceholderIndex(0);
          setComplated(true);
        } else {
          setPlaceholderIndex(placeholderIndex + 1);
        }
      }
    }, 280);
    return () => {
      clearInterval(intr);
    };
  });

  return (
    <input
      {...passedProps}
      placeholder={placeholder}
      className="placeholderCss"
    />
  );
};
