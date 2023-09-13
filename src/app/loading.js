import React from 'react';
import localfont from "next/font/local";
import { BeatLoader } from "react-spinners";

const gfont = localfont({ src: "./fonts/Poppins-Regular.ttf" });

export default function Loading() {
  return (
    <div style={{textAlign:"center", alignItems:"center", width:"100%"}} >
      <BeatLoader color="#000" loading={true} size={15} />
    </div>
  );
}
