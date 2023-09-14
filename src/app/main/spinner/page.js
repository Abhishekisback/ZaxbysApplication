"use client"
import React,{useState} from 'react';
import localfont from "next/font/local";
import { BeatLoader } from "react-spinners";



export default function Loading() {
    const [loading,setloading]=useState(true)
  return (
    <div style={{textAlign:"center", alignItems:"center",marginTop:"300px", width:"100%"}} >
      <BeatLoader color="#000" loading={loading} size={25} />
    </div>
  );
}
