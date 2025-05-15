
import React from "react";

const BmwLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="18" cy="18" r="17" stroke="#000000" strokeWidth="2" />
      <path
        d="M18 1C8.61116 1 1 8.61116 1 18C1 27.3888 8.61116 35 18 35C27.3888 35 35 27.3888 35 18C35 8.61116 27.3888 1 18 1Z"
        stroke="#000000"
        strokeWidth="0.5"
      />
      <path d="M18 18H35C35 27.3888 27.3888 35 18 35V18Z" fill="#0066B1" />
      <path d="M18 18V35C8.61116 35 1 27.3888 1 18H18Z" fill="#0066B1" />
      <path d="M18 18H1C1 8.61116 8.61116 1 18 1V18Z" fill="#0066B1" />
      <path d="M18 18V1C27.3888 1 35 8.61116 35 18H18Z" fill="#0066B1" />
    </svg>
  );
};

export default BmwLogo;
