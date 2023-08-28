import { MakeApiCall } from "../MakeAPICall";
import style from "./style.module.css";
import SignupLoginbtn from "../login-signup-btn/page";
import localfont from "next/font/local"
const myfont6 = localfont({ src: "../fonts/zaxscript-rough.woff" });
const myfont3 = localfont({ src: "../fonts/zaxsans-regular.woff" });
const gfont=localfont({src:"../fonts/Pacifico-Regular.ttf"})

export default async function Header() 

{
  let headerdata = await MakeApiCall(
    "http://localhost:1337/api/get-header-datas",
    "GET"
  );
  console.log(headerdata.data[0].attributes.Headerdata);
  return (
    <>
      <div className={style.headerSection}>
        <h3 style={gfont.style} className={style.headerline1}  >{headerdata.data[0].attributes.Headerdata.line1}</h3>
        <h4 className={style.headerline2} style={myfont3.style}>{headerdata.data[0].attributes.Headerdata.line2}</h4>
        <h4 className={style.headerline3} style={myfont3.style}>{headerdata.data[0].attributes.Headerdata.line3}</h4>
        <div
          style={{
            flexDirection: "row-reverse",
            marginRight: "50px",
            display: "flex",
          }}
        >
          <SignupLoginbtn />
        </div>
      </div>
    </>
  );
}
