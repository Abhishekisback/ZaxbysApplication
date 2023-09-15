"use client";
import { LOGIN_BTN,  SIGNUP_BTN } from "../Consts";
import style from "./style.module.css";
import localfont from "next/font/local";
const gfont = localfont({ src: "../fonts/Poppins-Regular.ttf" });

export default function SignupLoginbtn() {
  return (
    <div className={style.SignupLoginbtn}>
      <p style={gfont.style}>{SIGNUP_BTN}</p>
      <p>|</p>
      <p style={gfont.style}>{LOGIN_BTN}</p>
    </div>
  );
}
