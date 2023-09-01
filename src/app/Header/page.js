import { MakeApiCall } from "../MakeAPICall";
import style from "./style.module.css";
import SignupLoginbtn from "../login-signup-btn/page";
import localfont from "next/font/local";
import Loaders from "../loader/page";
import image2 from "../../../public/Images/waiting.png"
import Image from "next/image";

const gfont = localfont({ src: "../fonts/Pacifico-Regular.ttf" });

export default async function Header() {
  let headerdata = await MakeApiCall(
    "https://zaxbys-strapi.onrender.com/api/get-header-datas",
    "GET"
  );
  
  return (
    <>
      { headerdata?.data?.[0]?.attributes?.Headerdata? (
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
            <Loaders/>
            <p style={{textAlign:"center",fontSize:"30px"}}>
            <Image src={image2} width={50} height={50} alt="img" />
              
              Unable to load Header of the page ......</p>
          </div>
        
      )}
    </>
  );
}
