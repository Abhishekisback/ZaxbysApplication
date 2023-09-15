"use client";
import React, { useState } from "react";
import { BeatLoader } from "react-spinners";

export default function Loading() {
  const [loading, setloading] = useState(true);
  return (
    <div className={style.beatloader}>
      <BeatLoader color="#000" loading={loading} size={25} />
    </div>
  );
}
