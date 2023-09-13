"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from "./style.module.css";
import localfont from "next/font/local";
import { useRouter } from "next/navigation";
import Header from "@/app/Header/page";
import Navbar from "@/app/Navbar/page";

const gfont = localfont({ src: "../../../fonts/Poppins-Regular.ttf" });


function Page({ params }) {
  const router = useRouter();
  const [product, setproduct] = useState({});
  console.log(params);


  function navigateto() {
    window.scroll(0,0)
    router.push(`/main/${params.category_wise_products}`);
  }


  const url = `https://zaxbys-strapi.onrender.com/api/categorywiseproductlists?filters[id][$eq]=${params.Individualproduct}`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
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
            Not able to find the product
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
                  width={250}
                  height={230}
                  alt="images"
                ></Image>
                <p className={style.title} style={gfont.style}>
                  {product?.attributes?.Productname}
                </p>
              </div>
              <div className={style.descwrapper}>
                <p style={gfont.style} className={style.productdesc}>
                  {product?.attributes?.description}
                </p>
                <p style={gfont.style}>Price :{product?.attributes?.Price}$</p>
                <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
                <button className={style.buynow} style={gfont.style}>
                  Buy Now
                </button>
                <button className={style.buynow} style={gfont.style}
                onClick={navigateto}
                >
                  Close
                </button>
                </div>
              </div>
            </div>
          ) : (
            <div style={gfont.style} className={style.onerror}>
              Loading....
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Page;
