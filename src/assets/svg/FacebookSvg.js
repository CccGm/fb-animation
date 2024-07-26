import React from "react";

export const FacebookSvg = ({ notWhite }) => {
  return (
    <svg
      width="14"
      height="24"
      viewBox="0 0 14 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.99482 24V13.0703H12.9437L13.5307 8.79094H8.99482V6.06518C8.99482 4.83032 9.36329 3.98485 11.2613 3.98485H13.6663V0.169586C12.4962 0.0524886 11.3199 -0.00405133 10.1431 0.00022559C6.65263 0.00022559 4.25617 1.98987 4.25617 5.64245V8.78294H0.333008V13.0623H4.26474V24H8.99482Z"
        fill={notWhite ? "#5A0FE8" : "white"}
      />
    </svg>
  );
};
