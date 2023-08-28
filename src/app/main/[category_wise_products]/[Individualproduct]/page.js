"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import style from "./style.module.css";
import localfont from "next/font/local"
const myfont4 = localfont({ src: "../../../fonts/zaxscript-regular.woff" });
const myfont3 = localfont({ src: "../../../fonts/zaxsans-regular.woff" });
export default function page({ params }) {
  console.log("params2", params.Individualproduct);
  const [products, setproducts] = useState({});
  useEffect(() => {
    loadproductdetails();
  }, []);
  async function loadproductdetails() {
    await axios
      .get(
        `http://localhost:1337/api/categorywiseproductlists?filters[Productname][$eq]=${params.Individualproduct}`
      )
      .then((res) => {
        if (res.status === 200 && res.data) {
          console.log("pname", res.data.data[0].attributes.Price);
          setproducts(res.data.data[0].attributes);
        }
      });
  }
  console.log("products state", products?.Price);

  return (
    <div className={style.mainwrapper}>
      <div className={style.singleproductcard}>
        <div>
          <Image src={products?.imageurl} width={300} height={300} alt="img" />
          <p style={myfont4.style} className={style.productname}  >{products?.Productname}</p>
        </div>
       <div className={style.descwrapper}>
       <p style={myfont4.style} className={style.description} >{products?.description}</p>
        <p style={myfont4.style}
        className={style.price}
        >Price:{products?.Price} $</p>

        <button style={myfont3.style}
        className={style.buynow}
        onClick={()=>{
            alert("Out Of Stock ... will be available soon")
        }}
        >Buy NOW!!</button>
       </div>
      </div>
    </div>
  );
}
