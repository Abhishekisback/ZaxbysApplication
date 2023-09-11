"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css";
import localfont from "next/font/local";
import locator from "../../../public/Images/location.png";
import { FaBars, FaTimes } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";
import image2 from "../../../public/Images/waiting.png";

const gfont = localfont({ src: "../fonts/Poppins-Regular.ttf" });

export default function Navbar() {
  const [openmenu, setopenmenu] = useState(false);
  const [navbardata, setnavbardata] = useState();
  const navigateto = useRouter();
  function getNavbarfields() {
    axios
      .get("https://zaxbys-strapi.onrender.com/api/get-navbar-fields")
      .then((res) => {
        if (res.status === 200) {
          setnavbardata(res?.data);
          console.log(navbardata.data[0].attributes.NavbarArray.startorderbtn);
          res?.data?.data[0]?.attributes?.NavbarArray?.navitems.map((ele, i) =>
            console.log(ele)
          );
        }
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getNavbarfields();
  }, []);

  function handleclick() {
    setopenmenu(!openmenu);
  }

  function closemobilemenu() {
    setopenmenu(false);
  }

  function Navigatetohome() {
    setopenmenu(false);
    navigateto.push("/main");
  }

  return (
    <>
      {navbardata?.data[0]?.attributes ? (
        <nav className={style.navbar}>
          <div className={style.menuicon}>
            {openmenu ? (
              <FaTimes
                size={30}
                color="#A6192E"
                onClick={handleclick}
              ></FaTimes>
            ) : (
              <FaBars size={30} color="#A6192E" onClick={handleclick}></FaBars>
            )}
          </div>
          <Image
            className={style.logoimg}
            src={navbardata.data[0].attributes.NavbarArray.logo_img_url}
            width={150}
            height={60}
            alt="Zaxbys Logo img"
            onClick={Navigatetohome}
          />
          <div className={openmenu ? style.navmenumobile : style.navmenus}>
            <button
              className={style.startorderingbtn}
              style={gfont.style}
              onClick={Navigatetohome}
            >
              {navbardata.data[0].attributes.NavbarArray.startorderbtn}
            </button>
            {navbardata.data[0].attributes.NavbarArray.navitems.map(
              (ele, i) => (
                <React.Fragment key={i}>
                  <Link
                    href=""
                    onClick={closemobilemenu}
                    className={style.navlink}
                    style={gfont.style}
                  >
                    {ele}
                  </Link>
                </React.Fragment>
              )
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
              <Link href="" style={gfont.style} className={style.selectstore}>
                Select Store
              </Link>
              <Image src={locator} width={30} height={35} alt="location" />
            </div>
          </div>
        </nav>
      ) : (
        <div className={style.Loaders}>
          <p style={gfont.style}>Loading...</p>
        </div>
      )}
    </>
  );
}
