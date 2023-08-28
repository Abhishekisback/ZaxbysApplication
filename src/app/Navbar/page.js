"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MakeApiCall } from "../MakeAPICall";
import Link from "next/link";
import style from "./style.module.css";
import localfont from "next/font/local";
import locator from "../../../public/Images/location.png";
import { FaBars, FaTimes } from "react-icons/fa";
import axios from "axios";

const myfont26 = localfont({ src: "../fonts/zaxsans-rough/ZaxSansRough.ttf" });

export default function Navbar() {
  const [openmenu, setopenmenu] = useState(false);
  const [navbardata, setnavbardata] = useState();
  function getNavbarfields() {
    axios
      .get("http://localhost:1337/api/get-navbar-fields")
      .then((res) => {
        if (res.status === 200) {
          setnavbardata(res.data);
          //console.log(navbardata.data[0].attributes.NavbarArray.startorderbtn);
          res.data.data[0].attributes.NavbarArray.navitems.map((ele, i) =>
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
  return (
    <>
      {navbardata ? (
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
            src={navbardata.data[0].attributes.NavbarArray.logo_img_url}
            width={150}
            height={60}
            alt="Zaxbys Logo img"
          />
          <div className={openmenu ? style.navmenumobile : style.navmenus}>
          
            <button className={style.startorderingbtn}>
              {navbardata.data[0].attributes.NavbarArray.startorderbtn}
            </button>
            {navbardata.data[0].attributes.NavbarArray.navitems.map(
              (ele, i) => (
                <React.Fragment key={i}>
                  <Link
                    href=""
                    onClick={closemobilemenu}
                    className={style.navlink}
                    style={myfont26.style}
                  >
                    {ele}
                  </Link>
                </React.Fragment>
              )
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
              <Link
                href=""
                style={myfont26.style}
                className={style.selectstore}
              >
                Select Store
              </Link>
              <Image src={locator} width={30} height={35} alt="location" />
            </div>
          </div>
        </nav>
      ) : (
        <p style={{textAlign:"center"}}>loading...</p>
      )}
    </>
  );
}
