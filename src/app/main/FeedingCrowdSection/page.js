import { MakeApiCall } from "@/app/MakeAPICall";
import React from "react";
import style from "./style.module.css"
import localfont from "next/font/local";
// const myfont4 = localfont({ src: "../../fonts/zaxscript-regular.woff" });
// const myfont3 = localfont({ src: "../../fonts/zaxsans-regular.woff" });
const gfont=localfont({src:"../../fonts/Pacifico-Regular.ttf"})

export default async function FeedingCrowdComponent() {

    let feedingcrowd= await MakeApiCall("http://localhost:1337/api/feeding-crowds","GET");

  return (
    
      <div className={style.feedingacrowd}>
        <p style={gfont.style} className={style.feed}>
          {feedingcrowd.data[0].attributes.feedingcrowdsection.feedingline}
          <span style={gfont.style} className={style.feedmenu}>
            {feedingcrowd.data[0].attributes.feedingcrowdsection.feedingmenu}
          </span>
        </p>
        <button className={style.ordernow} style={gfont.style}>
          {feedingcrowd.data[0].attributes.feedingcrowdsection.btn_order}
        </button>
      </div>
    
  );
}
