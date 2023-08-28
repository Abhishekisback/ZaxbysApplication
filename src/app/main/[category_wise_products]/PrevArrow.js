import React from 'react'
import Image from 'next/image'
import prevarrow from "../../../../public/Images/prearrow.png"
import style from "./style.module.css"
export default function PrevArrow({onClick})
{
  return(
    <div onClick={onClick} className={style.prevArrow} >
      <Image src={prevarrow} width={50} height={50}></Image>
    </div>
  )
}
