import React from "react";

export const TopRightArrow = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="arrowGradient"
        x1="0"
        y1="48"
        x2="48"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#d946ef" />
        <stop offset="0.5" stopColor="#8b5cf6" />
        <stop offset="1" stopColor="#fdba74" />
      </linearGradient>
    </defs>
    <path
      d="M12 36 L36 12 M36 12 H20 M36 12 V28"
      stroke="url(#arrowGradient)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
