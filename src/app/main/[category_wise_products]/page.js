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
import image2 from "../../../../public/Images/sad.png"

// const myfont6 = localfont({ src: "../../fonts/zaxscript-rough.woff" });
// const myfont3 = localfont({ src: "../../fonts/zaxsans-regular.woff" });
const gfont = localfont({ src: "../../fonts/Poppins-Regular.ttf" });
export default function CategoryWiseProducts({ params }) {
  console.log("params", params.category_wise_products.toLowerCase());
  const [products, setproducts] = useState([]);

  const router = useRouter();
  async function getproducts() {
    await axios
      .get(
        `https://zaxbys-strapi.onrender.com/api/categorywiseproductlists?filters[category][$eq]=${params.category_wise_products.toLowerCase()}`
      )
      .then((res) => {
        if (res.status === 200 && res.data) {
          console.log(
            res.data.data.map((ele) => console.log(ele.attributes.Productname))
          );
          setproducts(res.data.data);
        }
      }).catch((err)=>{console.log(err)});
  }
  console.log("products", products);

  function navigateto(path) {
    console.log("path", path);
    router.push(`${params.category_wise_products}/${path}`);
  }
  useEffect(() => {
    getproducts();
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PrevArrow></PrevArrow>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={style.container}>
      <p className={style.categoryname} style={gfont.style}>
        {params.category_wise_products}
      </p>
      {products.length != 0 ? (
        <div className={style.wrapper}>
          <Slider {...settings}>
            {products.map((ele, i) => {
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
                  <p style={gfont.style}
                    className={style.producttitle}
                  >{ele.attributes.Productname}</p>
                  <div className={style.addsection}>
                    <p className={style.producttitle} style={gfont.style}>Price :{ele.attributes.Price}$</p>
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
            Currently Zax {params.category_wise_products} not found
            <Image src={image2} width={50} height={50} alt="img" />
             ...please
            try after some time

          </p>
          <p className={style.tryout} style={gfont.style}>
            There are new dishes available try now ....
          </p>
        </div>
      )}
      <Others 
         category_wise_products={params.category_wise_products}
      />
    </div>
  );
}
