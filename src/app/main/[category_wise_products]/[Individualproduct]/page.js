"use client";
import React,{useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import style from "./style.module.css";
import localfont from "next/font/local";
import image2 from "../../../../../public/Images/sad.png";

const gfont = localfont({ src: "../../../fonts/Pacifico-Regular.ttf" });

export default function page({ params }) 
{
  console.log("params2", params.Individualproduct);
  const [products, setproducts] = useState({});

  useEffect(() => {
    loadproductdetails();
  }, [loadproductdetails]);

  async function loadproductdetails()
   {
    await axios
      .get(
        `https://zaxbys-strapi.onrender.com/api/categorywiseproductlists?filters[Productname][$eq]=${params.Individualproduct}`
      )
      .then((res) => {
        if (res.status === 200 && res.data) {
          console.log("pname", res?.data?.data[0]?.attributes?.Price);
          setproducts(res?.data?.data[0]?.attributes);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log("products state", products?.Price);

  return (
    <>
      {products?.imageurl && products?.Productname ? (
        <>
          <p style={gfont.style} className={style.productname1}>
            {products?.Productname}
          </p>
          <div className={style.mainwrapper}>
            <div className={style.singleproductcard}>
              <div>
                <Image
                  src={products?.imageurl}
                  width={350}
                  height={300}
                  alt="img"
                />
                <p style={gfont.style} className={style.productname}>
                  {products?.Productname}
                </p>
              </div>
              <div className={style.descwrapper}>
                <p style={gfont.style} className={style.description}>
                  {products?.description}
                </p>
                <p style={gfont.style} className={style.price}>
                  Price:{products?.Price} $
                </p>

                <button
                  style={gfont.style}
                  className={style.buynow}
                  onClick={() => {
                    alert("Out Of Stock ... will be available soon");
                  }}
                >
                  Buy NOW!!
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className={style.notfound} style={gfont.style}>
          Oops...Currently
          <Image src={image2} width={50} height={50} alt="img" />
          <span style={{ color: "red" }}>{params.Individualproduct}</span> not
          Found.... .Please Try Reloading
        </p>
      )}
    </>
  );
}
