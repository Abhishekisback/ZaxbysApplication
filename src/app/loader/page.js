"use client"
import React,{useState} from 'react'
import {BeatLoader} from "react-spinners"
export default function Loaders({loader}) {

    const [load,setload]=useState(true)

    return (
        <div>
            <BeatLoader size={20} color='blue' loading={true} >

            </BeatLoader>
        </div>
    )
}
