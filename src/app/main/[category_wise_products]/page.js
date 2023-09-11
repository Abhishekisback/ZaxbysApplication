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
import Link from "next/link";
const gfont = localfont({ src: "../../fonts/Poppins-Regular.ttf" });

export default function CategoryWiseProducts({ params }) {
  const [openmenu, setopenmenu] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
    getproducts();
    getCategoryNavmenus();
  }, []);

  console.log("params", params.category_wise_products);

  let Cleanedcategory = params.category_wise_products.includes("%20")
    ? params.category_wise_products.replace(/%20/g, "")
    : params.category_wise_products;

  console.log("cleaned", Cleanedcategory);

  const [products, setproducts] = useState([]);
  const [catgeorymenu, setcatgeorymenu] = useState([]);

  const router = useRouter();

  function getproducts() {
    axios
      .get(
        `https://zaxbys-strapi.onrender.com/api/categorywiseproductlists?filters[category][$eq]=${Cleanedcategory}`
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

  function getCategoryNavmenus() {
    axios
      .get(`https://zaxbys-strapi.onrender.com/api/categorywiseproductlists`)
      .then((res) => {
        if (res.status === 200 && res.data) {
          var filteredcategorynavbar = Array.from(
            new Set(
              res.data.data.map((ele) => {
                return ele.attributes.category;
              })
            )
          );
          console.log("filtered", filteredcategorynavbar);

          setcatgeorymenu(filteredcategorynavbar);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log("products", products);
  console.log("category menu ", catgeorymenu);

  function navigateto(path) {
    window.scroll(0, 0);
    console.log("path", path);
    router.push(`${params.category_wise_products}/${path}`);
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
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
    <>
      <nav className={style.navbar}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            className={style.logoimg}
            src="https://res.cloudinary.com/dxzixgrne/image/upload/v1693539585/zaxbyslogo_shvqnj.png"
            width={150}
            height={60}
            alt="Zaxbys Logo img"
          />
          <div>
            <p className={style.carve} style={gfont.style}>One Stop For All your Cravings..</p>
          </div>
        </div>

        <div className={style.navmenus}>
          {catgeorymenu.map((item, i) => {
            return (
              <div key={i}>
                <Link className={style.navlinks} href={`#${i}`}>
                  {item}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
      <div className={style.container}>
        {products.length != 0 && (
          <p className={style.categoryname} style={gfont.style}>
            {params.category_wise_products}
          </p>
        )}

        {products.length != 0 && (
          <>
            <div className={style.wrapper}>
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

        {catgeorymenu.map((categories, i) => {
          return (
            <div key={i} id={i}>
              <Others
                category_wise_products={params.category_wise_products}
                category={categories}
              ></Others>
            </div>
          );
        })}
      </div>
    </>
  );
}
