import React from 'react'
import Image from 'next/image'
import nextarrow from "../../../../public/Images/nextarrow.png"
import style from "./style.module.css"
export default function NextArrow({onClick})
{
  return(
    <div onClick={onClick} className={style.NextArrow}>
      <Image src={nextarrow} width={50} height={50}></Image>
    </div>
  )
}
