"use client"
import React from 'react'
import { usePathname } from "next/navigation";
import Header from './Header/page';

function Conditionallayout() {
    const pathname = usePathname();
    const  ishomepage=pathname === "/" || pathname === "/main"
    return (
        <>
            {
          ishomepage&& <Header/>
        }
        </>
    )
}

export default Conditionallayout
