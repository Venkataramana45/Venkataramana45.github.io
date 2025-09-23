import React from 'react'

export const LeftArrow = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <defs>
    <linearGradient id="arrowGradientLeft" x1="24" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
      <stop stopColor="#f472b6" /> 
      <stop offset="0.5" stopColor="#8b5cf6" />
      <stop offset="1" stopColor="#facc15" /> 
    </linearGradient>
  </defs>
  <path
    d="M16 4l-8 8 8 8"
    stroke="url(#arrowGradientLeft)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />
</svg>
  );
