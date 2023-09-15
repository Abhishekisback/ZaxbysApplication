import { MakeApiCall } from "../MakeAPICall";
import style from "./style.module.css";
import SignupLoginbtn from "../login-signup-btn/page";
import localfont from "next/font/local";


const gfont = localfont({ src: "../fonts/Poppins-Regular.ttf" });

export default async function Header() {
  let headerdata = await MakeApiCall(
    "https://zaxbys-strapi.onrender.com/api/get-header-datas",
    "GET"
  );

  const isdataavailable=!!headerdata?.data?.[0]?.attributes?.Headerdata

  const {line1,line2,line3}=headerdata?.data?.[0]?.attributes?.Headerdata
  return (
    <>
      {headerdata === undefined ? (
        <>
          <p style={gfont.style}>Not Able to Find</p>
        </>
      ) : (
        <div >
          {isdataavailable ? (
            <div className={style.headerSection}>
              <h3 style={gfont.style} className={style.headerline1}>
                {line1}
              </h3>
              <h4 className={style.headerline2} style={gfont.style}>
               {line2}
              </h4>
              <h4 className={style.headerline3} style={gfont.style}>
                {line3}
              </h4>
              <div
              className={style.signuploginbtn}
               
              >
                <SignupLoginbtn />
              </div>
            </div>
          ) : (
            <div style={gfont.style} className={style.headerSection}>
             Loading....
            </div>
          )}
        </div>
      )}
    </>
  );
}
