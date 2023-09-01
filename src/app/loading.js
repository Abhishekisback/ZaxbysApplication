import React from 'react'
import localfont from "next/font/local";
const gfont = localfont({ src: "./fonts/Pacifico-Regular.ttf" });


export default function loading()
 {
    return (
        <div>
            <p style={gfont.style} >Loading.....</p>
        </div>
    )
}
