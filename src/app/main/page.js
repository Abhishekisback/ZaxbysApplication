
import style from "./style.module.css";
import VideoSection from "./Video/page";
import Mainheader from "./Mainheader/page";
import FeedingCrowdComponent from "./FeedingCrowdSection/page";
import { MakeApiCall } from "../MakeAPICall";
import ProductDetailCard from "./ProductDetailCard/page";

import localfont from "next/font/local";
import Footer from "./Footer/page";


const gfont = localfont({ src: "../fonts/Poppins-Regular.ttf" });

export default async function Maincontent() {
  let homeproducts = await MakeApiCall(
    "https://zaxbys-strapi.onrender.com/api/home-page-products",
    "GET"
  );

  console.log("home products", homeproducts);

  homeproducts?.data?.map((prod) => console.log(prod.attributes.imageurl));

  return (
    <div >
      <VideoSection />
      <Mainheader />

      {homeproducts?.data ? (
        <div className={style.homeproductspage}>
          {homeproducts.data.map((product, i) => {
            return (
              <>
                <ProductDetailCard
                  category={product.attributes.category}
                  imageurl={product.attributes.imageurl}
                  title={product.attributes.Productname}
                  key={i}
                />
              </>
            );
          })}
          <FeedingCrowdComponent />
        </div>
      ) : (
        <div className={style.loadingpagerr}>
          {/* <Loaders></Loaders> */}
          <p style={{marginTop:"100px"}} >Loading..</p>
        </div>
      )}
      <Footer  ></Footer>
    </div>
  );
}
