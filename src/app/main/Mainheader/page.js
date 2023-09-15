import React from "react";
import style from "./style.module.css";
import localfont from "next/font/local";
import { START_YOUR,ORDER_NOW } from "@/app/Consts";
const gfont=localfont({src:"../../fonts/Poppins-Regular.ttf"})

export default function Mainheader() {
  return (
    <>
      <div className={style.maintitle}>
        <p style={gfont.style} className={style.title1}>
          {START_YOUR}
        </p>
        <p style={gfont.style} className={style.title2}>
         {ORDER_NOW}
        </p>
      </div>
    </>
  );
}
