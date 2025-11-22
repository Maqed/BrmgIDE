import * as React from "react";

const NodejsIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    viewBox="0 0 44 50"
    {...props}
  >
    <defs>
      <linearGradient
        id="main"
        x1="30.33"
        x2="14.9"
        y1="8.56"
        y2="44.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3F8B3D"></stop>
        <stop offset="0.64" stopColor="#3F873F"></stop>
        <stop offset="0.93" stopColor="#3DA92E"></stop>
        <stop offset="1" stopColor="#3DAE2B"></stop>
      </linearGradient>
      <linearGradient
        id="r1"
        x1="18.8"
        x2="68"
        y1="26.8"
        y2="0.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.14" stopColor="#3F873F"></stop>
        <stop offset="0.4" stopColor="#52A044"></stop>
        <stop offset="0.71" stopColor="#64B749"></stop>
        <stop offset="0.91" stopColor="#6ABF4B"></stop>
      </linearGradient>
      <linearGradient
        id="r2"
        x1="0.25"
        x2="44"
        y1="24.5"
        y2="24.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.09" stopColor="#6ABF4B"></stop>
        <stop offset="0.29" stopColor="#64B749"></stop>
        <stop offset="0.6" stopColor="#52A044"></stop>
        <stop offset="0.86" stopColor="#3F873F"></stop>
      </linearGradient>
      <clipPath id="hexClip">
        <path d="M22.873.417a2.36 2.36 0 0 0-2.348 0L1.151 11.669C.414 12.086 0 12.873 0 13.707v22.551c0 .834.46 1.621 1.15 2.038l19.375 11.253a2.36 2.36 0 0 0 2.348 0l19.374-11.253c.737-.417 1.15-1.204 1.15-2.038V13.707c0-.834-.46-1.62-1.15-2.038z"></path>
      </clipPath>
    </defs>
    <path
      fill="url(#main)"
      d="M22.873.417a2.36 2.36 0 0 0-2.348 0L1.151 11.669C.414 12.086 0 12.873 0 13.707v22.551c0 .834.46 1.621 1.15 2.038l19.375 11.253a2.36 2.36 0 0 0 2.348 0l19.374-11.253c.737-.417 1.15-1.204 1.15-2.038V13.707c0-.834-.46-1.62-1.15-2.038z"
    ></path>
    <path
      fill="url(#r1)"
      d="m21.699-1.047 21.506 12.995L21.7 51.073.153 38.055z"
      clipPath="url(#hexClip)"
    ></path>
    <path
      fill="url(#r2)"
      d="M21.699-1.047.153 11.948l21.546 39.125 21.506-13.018z"
      clipPath="url(#hexClip)"
    ></path>
  </svg>
);

export default NodejsIcon;
