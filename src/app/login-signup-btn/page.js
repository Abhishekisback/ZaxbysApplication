"use client"
import style from "./style.module.css"

export default function SignupLoginbtn() {
    return (
        <div className={style.SignupLoginbtn}>
            <p onClick={()=>alert("sign")}>Sign Up</p>
            <p >|</p>
            <p onClick={()=>alert("log")}>Log in</p>   
        </div>
    )
}
