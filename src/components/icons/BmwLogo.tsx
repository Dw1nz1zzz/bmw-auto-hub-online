
import React from "react";

const BmwLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Outer circle */}
      <circle cx="18" cy="18" r="17" stroke="#000000" strokeWidth="2" />
      {/* Inner circle */}
      <circle cx="18" cy="18" r="16.5" stroke="#000000" strokeWidth="0.5" />
      {/* Colored quadrants */}
      <path d="M18 18H35C35 27.3888 27.3888 35 18 35V18Z" fill="#0066B1" />
      <path d="M18 18V35C8.61116 35 1 27.3888 1 18H18Z" fill="#FFFFFF" />
      <path d="M18 18H1C1 8.61116 8.61116 1 18 1V18Z" fill="#0066B1" />
      <path d="M18 18V1C27.3888 1 35 8.61116 35 18H18Z" fill="#FFFFFF" />
      {/* BMW text if needed */}
      <path
        d="M12 29H10.5V27H12C12.8284 27 13.5 27.6716 13.5 28.5C13.5 28.8978 13.342 29.2794 13.0607 29.5607C12.7794 29.842 12.3978 30 12 30V29Z"
        fill="#000000"
      />
    </svg>
  );
};

export default BmwLogo;
