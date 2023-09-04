"use client";
import { MakeApiCall } from "@/app/MakeAPICall";
import style from "./style.module.css";
import React, {useState, useEffect } from "react";
import axios from "axios";

function page({ params }) {
  console.log("individual product", params.Individualproduct);
  let url = `https://zaxbys-strapi.onrender.com/api/categorywiseproductlists?filters[Productname][$eq]=${params.Individualproduct}`;


  useEffect(() => {
    loadproducts();
  }, []);

  const [products,setproducts]=useState({})

  function loadproducts() {
    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setproducts(res.data);
        }
      })
      .catch(() => {});
  }

  return (
    <div>
      <p>Individual product{params.Individualproduct}</p>
      {
        products ?(
          <>
          <p>hdhvchvc</p>
          </>

        ):(
          <>
          <p>noo</p>
          </>
        )
      }

      <div className={style.productcontainer}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default page;
