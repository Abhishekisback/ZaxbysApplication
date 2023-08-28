"use client";
import React, {useEffect, useState} from "react";
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

const myfont6 = localfont({ src: "../../fonts/zaxscript-rough.woff" });
const myfont3 = localfont({ src: "../../fonts/zaxsans-regular.woff" });

export default function CategoryWiseProducts({ params }) {
  console.log("params", params.category_wise_products.toLowerCase());
  const [products, setproducts] = useState([]);
 
  const router=useRouter()
  async function getproducts() {
    await axios
      .get(
        `http://localhost:1337/api/categorywiseproductlists?filters[category][$eq]=${params.category_wise_products.toLowerCase()}`
      )
      .then((res) => {
        if (res.status === 200 && res.data) {
          console.log(res.data.data.map((ele)=>(console.log(ele.attributes.Productname))))
          setproducts(res.data.data)
        }
      });
  }
  console.log("products",products)

  function navigateto(path)
  {
   console.log("path",path)
   router.push(`${params.category_wise_products}/${path}`)
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
    slidesToScroll: 3,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PrevArrow></PrevArrow>
  };

  return (
    <div className={style.container}>
      <p className={style.categoryname}
      style={myfont6.style}
      >{params.category_wise_products}</p>

   {
    products.length!=0?(
      <div className={style.wrapper}>
      <Slider {...settings}>
        {products.map((ele, i) => {
          return (
            <div className={style.cards} key={i} onClick={()=>{
              navigateto(ele.attributes.Productname)
            }}>
              <Image
                src={ele.attributes.imageurl}
                className={style.prodimage}
                width={200}
                height={200}
                alt="image"
              ></Image>
              <p style={myfont3.style}>{ele.attributes.Productname}</p>
              <div className={style.addsection}>
                <p style={myfont3.style}>Price :{ele.attributes.Price}$</p>
                <button style={myfont6.style} className={style.addbtn}>
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
    ):(
      <div>
        <p className={style.Notfoundmsg} style={myfont6.style}>Currently Zax {params.category_wise_products} not found ...please try after some time</p>
        <p className={style.tryout} style={myfont6.style}>There are new dishes available try now ....</p>
        </div>
    )
   }
     <Others/>
     
     
    </div>
  );
}
