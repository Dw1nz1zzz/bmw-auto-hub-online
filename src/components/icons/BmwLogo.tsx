
import React from "react";

const BmwLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Outer white circle */}
      <circle cx="18" cy="18" r="18" fill="white" />
      
      {/* Colorful outer rings */}
      <path d="M18 0C8.06 0 0 8.06 0 18C0 27.94 8.06 36 18 36C27.94 36 36 27.94 36 18C36 8.06 27.94 0 18 0ZM18 2C26.84 2 34 9.16 34 18C34 26.84 26.84 34 18 34C9.16 34 2 26.84 2 18C2 9.16 9.16 2 18 2Z" fill="white" />
      
      {/* Blue top arc */}
      <path d="M18 2C20.6 2 23.1 2.6 25.3 3.8C27.5 4.9 29.3 6.5 30.7 8.4C32.1 10.4 33 12.6 33.5 15C33.9 17.3 33.9 19.7 33.5 22C33.5 22 21.1 22 21.1 22C21.1 22 21.1 2 21.1 2C21.1 2 18 2 18 2Z" fill="#0066B1" />
      
      {/* Blue bottom-right arc */}
      <path d="M33.5 22C33 24.4 32.1 26.6 30.7 28.6C29.3 30.5 27.5 32.1 25.3 33.2C23.1 34.4 20.6 35 18 35C18 35 18 31.9 18 31.9C18 31.9 33.5 22 33.5 22Z" fill="#0066B1" />
      
      {/* Red bottom-left arc */}
      <path d="M18 35C15.4 35 12.9 34.4 10.7 33.2C8.5 32.1 6.7 30.5 5.3 28.6C3.9 26.6 3 24.4 2.5 22C2.5 22 18 31.9 18 31.9C18 31.9 18 35 18 35Z" fill="#E94B35" />
      
      {/* Main BMW logo circle */}
      <circle cx="18" cy="18" r="11" stroke="white" strokeWidth="0.5" fill="black" />
      
      {/* Inner quadrants */}
      <path d="M18 18H27C27 23 23 27 18 27V18Z" fill="#0066B1" />
      <path d="M18 18V27C13 27 9 23 9 18H18Z" fill="white" />
      <path d="M18 18H9C9 13 13 9 18 9V18Z" fill="#0066B1" />
      <path d="M18 18V9C23 9 27 13 27 18H18Z" fill="white" />
      
      {/* BMW text */}
      <path d="M14 15.5C14 15.2 14.1 15 14.3 14.8C14.5 14.6 14.7 14.5 15 14.5H16C16.3 14.5 16.5 14.6 16.7 14.8C16.9 15 17 15.2 17 15.5V16.5H16V15.5H15V20.5H16V19.5H17V20.5C17 20.8 16.9 21 16.7 21.2C16.5 21.4 16.3 21.5 16 21.5H15C14.7 21.5 14.5 21.4 14.3 21.2C14.1 21 14 20.8 14 20.5V15.5Z" fill="white" />
      <path d="M22 14.5V21.5H21V17.4L19.7 21.5H19.3L18 17.4V21.5H17V14.5H18.3L19.5 18.5L20.7 14.5H22Z" fill="white" />
      <path d="M23 18V17H24.5L23.7 15.6L24.5 14.5H26L24.5 16.5L26 18H24.5L23.7 17.4V18H23Z" fill="white" />
    </svg>
  );
};

export default BmwLogo;
