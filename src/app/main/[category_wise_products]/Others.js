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
import { useRouter } from "next/navigation";
import PrevArrow from "./PrevArrow";
import { API_URL } from "@/app/Consts";

const gfont = localfont({ src: "../../fonts/Poppins-Regular.ttf" });

export default function Others({ category_wise_products, category, id }) {
  useEffect(() => {
    window.scroll(0, 0);
    getproducts();
  }, []);

  const [products, setproducts] = useState([]);
  const router = useRouter();

  function getproducts() {
    axios
      .get(
        `${API_URL}/categorywiseproductlists?filters[category][$eq]=${category}`
      )
      .then((res) => {
        if (res.status === 200 && res.data) {
          setproducts(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function navigateto(path) {
    window.scroll(0, 0);

    router.push(`${category_wise_products}/${path}`);
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PrevArrow></PrevArrow>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {products.length != 0 && (
        <p className={style.categoryname} style={gfont.style}>
          {category}
        </p>
      )}
      <p>{id}</p>
      {products.length != 0 && (
        <>
          <div className={style.wrapper}>
            <Slider {...settings}>
              {products.map((ele, i) => {
                const { imageurl, Productname, Price } = ele.attributes;

                return (
                  <div
                    className={style.cards}
                    key={i}
                    onClick={() => {
                      navigateto(ele.id);
                    }}
                  >
                    <Image
                      src={imageurl}
                      className={style.prodimage}
                      width={150}
                      height={130}
                      alt="image"
                    ></Image>
                    <p style={gfont.style} className={style.producttitle}>
                      {Productname}
                    </p>
                    <div className={style.addsection}>
                      <p className={style.productprice} style={gfont.style}>
                        Price :{Price}$
                      </p>
                      <button style={gfont.style} className={style.addbtn}>
                        Add
                      </button>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </>
      )}
    </div>
  );
}
