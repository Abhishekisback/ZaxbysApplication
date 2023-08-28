import React from "react";
import style from "./style.module.css";
import localfont from "next/font/local";
// ../fonts/zaxscript-rough.woff
// const myfont6 = localfont({ src: "../../fonts/zaxscript-rough.woff" });
const myfont6=localfont({src:"../../fonts/Pacifico-Regular.ttf"})
// const myfont24 = localfont({
//   src: "../../fonts/zaxsans-rough/ZaxSansRough.woff",
// });
export default function Mainheader() {
  return (
    <>
      <div className={style.maintitle}>
        <p style={myfont6.style} className={style.title1}>
          Start Your
        </p>
        <p style={myfont6.style} className={style.title2}>
          Order Now
        </p>
      </div>
    </>
  );
}
