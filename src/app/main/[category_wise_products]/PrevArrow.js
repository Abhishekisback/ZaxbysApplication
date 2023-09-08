import React from 'react'
import Image from 'next/image'
import nextarrow from "../../../../public/Images/Arrowback.png"
import style from "./style.module.css"
export default function PrevArrow({onClick})
{
  return(
    <div onClick={onClick} className={style.prevArrow} >
      <Image className={style.arrowimg} src={nextarrow} alt='Pre-Arrow' width={30} height={30}></Image>
    </div>
  )
}
