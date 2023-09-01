import React from 'react'
import Image from 'next/image'
import nextarrow from "../../../../public/Images/Arrowback.png"
import style from "./style.module.css"
export default function PrevArrow({onClick})
{
  return(
    <div onClick={onClick} className={style.prevArrow} >
      <Image src={nextarrow} alt='Pre-Arrow' width={50} height={50}></Image>
    </div>
  )
}
