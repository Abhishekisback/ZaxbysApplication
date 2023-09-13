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

  return (
    <>
      {headerdata === undefined ? (
        <>
          <p style={gfont.style}>Not Able to Find</p>
        </>
      ) : (
        <div >
          {headerdata?.data?.[0]?.attributes?.Headerdata ? (
            <div className={style.headerSection}>
              <h3 style={gfont.style} className={style.headerline1}>
                {headerdata.data[0].attributes.Headerdata.line1}
              </h3>
              <h4 className={style.headerline2} style={gfont.style}>
                {headerdata.data[0].attributes.Headerdata.line2}
              </h4>
              <h4 className={style.headerline3} style={gfont.style}>
                {headerdata.data[0].attributes.Headerdata.line3}
              </h4>
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
