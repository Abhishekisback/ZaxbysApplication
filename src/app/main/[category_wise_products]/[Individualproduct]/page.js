"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from "./style.module.css";
import localfont from "next/font/local";
import emoji from "../../../../../public/Images/sad.png";
const gfont = localfont({ src: "../../../fonts/Poppins-Regular.ttf" });
function Page({ params }) {
  const [product, setproduct] = useState({});
  console.log(product);
  console.log(params.Individualproduct);

  let Cleanedproductname = params.Individualproduct.includes("%20")
    ? params.Individualproduct.replace(/%20/g, "")
    : params.Individualproduct;
  



  const url = `https://zaxbys-strapi.onrender.com/api/categorywiseproductlists?filters[Productname][$eq]=${Cleanedproductname}`;
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
  }, [url]);

  return (
    <div className={style.content}>
      {product === undefined ? (
        <>
          <p style={{ ...gfont.style, textAlign: "center", marginTop: "50px" }}>
            Not able to find the product {Cleanedproductname}
          </p>
        </>
      ) : (
        <>
          {product?.attributes ? (
            <div style={gfont.style} className={style.mainwrapper}>
              <div className={style.product}>
                <Image
                  className={style.productimg}
                  src={product?.attributes?.imageurl}
                  width={350}
                  height={300}
                  alt="images"
                ></Image>
                <p className={style.title} style={gfont.style}>
                  {product?.attributes?.Productname}
                </p>
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
            <div style={gfont.style} className={style.onerror}>
              Loading..
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Page;
