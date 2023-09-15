"use client";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import style from "./style.module.css"
export default function Loading() {
  const [loading, setloading] = useState(true);
  return (
    <div className={style.beatloader}>
      <ClipLoader color="#000" loading={loading} size={25} />
    </div>
  );
}
