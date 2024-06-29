import React, { useEffect, useState } from "react";
import "./Test.css";

const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3",
];

export const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialRotationDone, setInitialRotationDone] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Initial delay before starting the rotation
    const initialTimeout = setTimeout(() => {
      setInitialRotationDone(true);
    }, 5000); // 1 second for the initial rotation

    return () => clearTimeout(initialTimeout);
  }, []);

  useEffect(() => {
    if (!initialRotationDone) return;

    // Delay before starting the animation
    const animationDelay = setTimeout(() => {
      setAnimationStarted(true);
    }, 5000); // 1 second delay before the animation starts

    return () => clearTimeout(animationDelay);
  }, [initialRotationDone]);

  useEffect(() => {
    if (!animationStarted) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [animationStarted]);

  return (
    <div className="image-container">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className={`image ${index === currentIndex ? "active" : ""} ${
            index ===
            (currentIndex === 0 ? images.length - 1 : currentIndex - 1)
              ? "fade-out"
              : ""
          } ${index === 0 && !initialRotationDone ? "rotate" : ""} ${
            animationStarted ? "start-animation" : ""
          }`}
        />
      ))}
    </div>
  );
};
