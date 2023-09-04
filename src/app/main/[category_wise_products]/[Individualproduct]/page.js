"use clients";
import axios from "axios";
import React, { useState, useEffect } from "react";

function page({ params }) {
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(() => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <button>hello</button>
    </div>
  );
}

export default page;
