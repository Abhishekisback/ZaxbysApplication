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
import Others from "./Others";
const gfont = localfont({ src: "../../fonts/Poppins-Regular.ttf" });

export default function CategoryWiseProducts({ params }) {
  useEffect(() => {
    window.scroll(0, 0);
    getproducts();
  }, []);

  console.log("params", params.category_wise_products.toLowerCase());

  let Cleanedcategory = params.category_wise_products.includes("%20")
    ? params.category_wise_products.replace(/%20/g, "")
    : params.category_wise_products;

  console.log("cleaned", Cleanedcategory);
  const [products, setproducts] = useState([]);
  const router = useRouter();

  function getproducts() {
    axios
      .get(
        `https://zaxbys-strapi.onrender.com/api/categorywiseproductlists?filters[category][$eq]=${Cleanedcategory.toLowerCase()}`
      )
      .then((res) => {
        if (res.status === 200 && res.data) {
          console.log(
            res.data.data.map((ele) => console.log(ele.attributes.Productname))
          );
          setproducts(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log("products", products);

  function navigateto(path) {
    window.scroll(0,0)
    console.log("path", path);
    router.push(`${params.category_wise_products}/${path}`);
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PrevArrow></PrevArrow>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className={style.container}>
      {products.length != 0 && (
        <p className={style.categoryname} style={gfont.style}>
          {params.category_wise_products}
        </p>
      )}

      {products.length != 0 && (
        <>
        <div className={style.wrapper} >
          <Slider {...settings}>
            {products.map((ele, i) => {
              return (
                <div
                className={style.cards}
                
                  key={i}
                  onClick={() => {
                    navigateto(ele.id);
                  }}
                >
                  <Image
                    src={ele.attributes.imageurl}
                    className={style.prodimage}
                    width={150}
                    height={130}
                    alt="image"
                  ></Image>
                  <p style={gfont.style} className={style.producttitle}>
                    {ele.attributes.Productname}
                  </p>
                  <div className={style.addsection}>
                    <p className={style.productprice} style={gfont.style}>
                      Price :{ele.attributes.Price}$
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

      <Others category_wise_products={params.category_wise_products} />
    </div>
  );
}
