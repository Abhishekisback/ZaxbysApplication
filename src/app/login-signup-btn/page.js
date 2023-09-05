"use client";
import style from "./style.module.css";
import localfont from "next/font/local";
const gfont = localfont({ src: "../fonts/Pacifico-Regular.ttf" });

export default function SignupLoginbtn() {
  return (
    <div className={style.SignupLoginbtn}>
      <p style={gfont.style}>Sign Up</p>
      <p>|</p>
      <p style={gfont.style}>Log in</p>
    </div>
  );
}
