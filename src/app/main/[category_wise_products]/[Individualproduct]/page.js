"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from "./style.module.css";
import localfont from "next/font/local";
import emoji from "../../../../../public/Images/sad.png";
const gfont = localfont({ src: "../../../fonts/Pacifico-Regular.ttf" });
function Page({ params }) {
  const [product, setproduct] = useState({});

  const url = `https://zaxbys-strapi.onrender.com/api/categorywiseproductlists?filters[Productname][$eq]=${params.Individualproduct}`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.data[0]);
        setproduct(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("prod", product);
  return (
    <div className={style.content}>
      {product?.attributes ? (
        <div style={gfont.style} className={style.mainwrapper}>
          <div className={style.product}>
            <Image
              className={style.productimg}
              src={product?.attributes?.imageurl}
              width={350}
              height={300}
            ></Image>
            <p className={style.title} style={gfont.style}>{product?.attributes?.Productname}</p>
          </div>
          <div className={style.descwrapper}>
            <p style={gfont.style}>{product?.attributes?.description}</p>
            <p style={gfont.style}>Price :{product?.attributes?.Price}$</p>
            <button className={style.buynow} style={gfont.style}>
              Buy Now
            </button>
          </div>
        </div>
      ) : (
        <div className={style.onerror}>
          <Image src={emoji} width={50} height={50}></Image>
          <p style={gfont.style}>
            Ooops ..... Error occured While Fetching the details{" "}
          </p>
          <p style={gfont.style}>Please Try Reloading the page..</p>
        </div>
      )}
    </div>
  );
}

export default Page;
