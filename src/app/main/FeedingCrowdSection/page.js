import { MakeApiCall } from "@/app/MakeAPICall";
import React from "react";
import style from "./style.module.css"
import localfont from "next/font/local";
const gfont=localfont({src:"../../fonts/Poppins-Regular.ttf"})

export default async function FeedingCrowdComponent() {

    let feedingcrowd= await MakeApiCall("https://zaxbys-strapi.onrender.com/api/feeding-crowds","GET");

    const {feedingline,feedingmenu,btn_order}=feedingcrowd.data[0].attributes.feedingcrowdsection

  return (
    
      <>
      {
        feedingcrowd?.data?.[0]?.attributes ?(
          <div className={style.feedingacrowd}>
        <p style={gfont.style} className={style.feed}>
          {feedingline}
          <span style={gfont.style} className={style.feedmenu}>
            
            {feedingmenu}
          </span>
        </p>
        <a href="/main/Food">
        <button className={style.ordernow} style={gfont.style}>
         {btn_order}
        </button>
        </a>
      </div>
        ):(
          <div>
            <p style={gfont.style}>Loading....</p>
          </div>
        )
      }

      </>
    
  );
}
