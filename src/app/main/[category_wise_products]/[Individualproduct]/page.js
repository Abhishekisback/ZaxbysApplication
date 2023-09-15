"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from "./style.module.css";
import localfont from "next/font/local";
import { useRouter } from "next/navigation";
import { BUY_NOW_BTN, CLOSE, NOT_ABLE_FIND } from "@/app/Consts";
import Loading from "../../spinner/page";

const gfont = localfont({ src: "../../../fonts/Poppins-Regular.ttf" });

function Page({ params }) {
  const router = useRouter();
  const [product, setproduct] = useState({});
  const url = `https://zaxbys-strapi.onrender.com/api/categorywiseproductlists?filters[id][$eq]=${params.Individualproduct}`;
  function navigateto() {
    window.scroll(0, 0);
    router.push(`/main/${params.category_wise_products}`);
  }
  useEffect(() => {
    getproduct();
  }, [url]);

  function getproduct() {
    axios
      .get(url)
      .then((res) => {
        setproduct(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (product?.attributes) {
    var { Price, Productname, description, imageurl } = product?.attributes;
  }

  return (
    <div className={style.content}>
      {product === undefined ? (
        <>
          <p className={style.notfound} style={gfont.style}>
            {NOT_ABLE_FIND}
          </p>
        </>
      ) : (
        <>
          {product?.attributes ? (
            <div style={gfont.style} className={style.mainwrapper}>
              <div className={style.product}>
                <Image
                  className={style.productimg}
                  src={imageurl}
                  width={250}
                  height={230}
                  alt="images"
                ></Image>
                <p className={style.title} style={gfont.style}>
                  {Productname}
                </p>
              </div>
              <div className={style.descwrapper}>
                <p style={gfont.style} className={style.productdesc}>
                  {description}
                </p>
                <p style={gfont.style}>Price :{Price}$</p>
                <div className={style.btnsection}>
                  <button className={style.buynow} style={gfont.style}>
                    {BUY_NOW_BTN}
                  </button>
                  <button
                    className={style.buynow}
                    style={gfont.style}
                    onClick={navigateto}
                  >
                    {CLOSE}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div style={gfont.style} className={style.onerror}>
              <Loading/>
              Loading....
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Page;
