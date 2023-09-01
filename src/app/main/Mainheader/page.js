import React from "react";
import style from "./style.module.css";
import localfont from "next/font/local";
const gfont=localfont({src:"../../fonts/Pacifico-Regular.ttf"})

export default function Mainheader() {
  return (
    <>
      <div className={style.maintitle}>
        <p style={gfont.style} className={style.title1}>
          Start Your
        </p>
        <p style={gfont.style} className={style.title2}>
          Order Now
        </p>
      </div>
    </>
  );
}
