import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="26" height="26" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M48 96C21.523 96 0 74.477 0 48C0 21.523 21.523 0 48 0C74.477 0 96 21.523 96 48C96 74.477 74.477 96 48 96ZM48 18.7522C31.8787 18.7522 18.7522 31.8787 18.7522 48C18.7522 64.1213 31.8787 77.2478 48 77.2478C64.1213 77.2478 77.2478 64.1213 77.2478 48C77.2478 31.8787 64.1213 18.7522 48 18.7522Z" fill="url(#paint0_linear_236_1476)"/>
      <path d="M63.6752 46.0402V44.7807H71.372V41.4221H63.5352V34.1451H58.2174L52.06 44.2209V38.9032H48.7014V50.9381H47.5819V38.9032H43.9434V44.5008L37.786 34.1451H32.1883V41.4221H24.3516V44.7807H32.1883V46.1801H24.3516V49.5387H32.1883V61.5737L38.4857 61.7137V45.4804L46.6023 58.6349H49.4011L57.5177 45.4804V61.4338H63.6752V49.6787H71.5119V46.0402H63.6752Z" fill="#FCC804"/>
      <defs>
      <linearGradient id="paint0_linear_236_1476" x1="35.2129" y1="1.56903" x2="60.8377" y2="94.6147" gradientUnits="userSpaceOnUse">
      <stop stopColor="#D8A62E"/>
      <stop offset="0.2765" stopColor="#FBCA02"/>
      <stop offset="0.5084" stopColor="#F6F583"/>
      <stop offset="0.757" stopColor="#FBCA02"/>
      <stop offset="1" stopColor="#C69752"/>
      </linearGradient>
      </defs>
    </svg>
  );
};

export default Icon;
