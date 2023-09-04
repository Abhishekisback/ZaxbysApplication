"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./style.module.css";
import localfont from "next/font/local";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slickstyle.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { useRouter } from "next/navigation";
const gfont = localfont({ src: "../../fonts/Pacifico-Regular.ttf" });


export default function Others({category_wise_products}) {

  
  const router = useRouter();
  const [homeproducts, sethomeproducts] = useState([]);
  async function gethomeproducts() {
    await axios
      .get("https://zaxbys-strapi.onrender.com/api/home-page-products")
      .then((res) => {
        if (res.status === 200 && res.data) {
          sethomeproducts(res.data?.data);
          console.log(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }

  function navigateto(path) {
    console.log("path", path);
    router.push(`${category_wise_products}/${path}`);
  }
  useEffect(() => {
    gethomeproducts();
  }, []);
  console.log("homeprod", homeproducts);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PrevArrow></PrevArrow>,
  };

  return (
    <>
      <p className={style.categoryname} style={gfont.style}>
        Try our New Dishes..
      </p>
      {homeproducts ? (
        <div className={style.wrapper}>
          <Slider {...settings}>
            {homeproducts.map((ele, i) => {
              return (
                <div
                  className={style.cards}
                  key={i}
                  onClick={() => {
                    navigateto(ele.attributes.Productname);
                  }}
                >
                  <Image
                    src={ele.attributes.imageurl}
                    className={style.prodimage}
                    width={200}
                    height={200}
                    alt="image"
                  ></Image>
                  <p className={style.producttitle}  style={gfont.style}>{ele.attributes.Productname}</p>
                  <div className={style.addsection}>
                    <p className={style.producttitle}  style={gfont.style}>Price :9$</p>
                    <button style={gfont.style} className={style.addbtn}>
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      ) : (
        <div>
          <p className={style.Notfoundmsg} style={gfont.style}>
            Unable to load products....!!!
          </p>
        </div>
      )}
    </>
  );
}
