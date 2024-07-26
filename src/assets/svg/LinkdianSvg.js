import React from "react";

export const LinkdianSvg = ({ notWhite }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 7C6.10457 7 7 6.10457 7 5C7 3.89543 6.10457 3 5 3C3.89543 3 3 3.89543 3 5C3 6.10457 3.89543 7 5 7Z"
        fill={notWhite ? "#5A0FE8" : "white"}
      />
      <path
        d="M9.17459 9.28939V20.999H12.9636V15.2084C12.9636 13.6804 13.2632 12.2006 15.2376 12.2006C17.1849 12.2006 17.209 13.9476 17.209 15.3048V21H21V14.5785C21 11.4241 20.2923 9 16.45 9C14.6053 9 13.3687 9.97138 12.8631 10.8907H12.8118V9.28939H9.17459ZM3 9.28939H6.79503V20.999H3V9.28939Z"
        fill={notWhite ? "#5A0FE8" : "white"}
      />
    </svg>
  );
};
