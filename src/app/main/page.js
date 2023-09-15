import style from "./style.module.css";
import VideoSection from "./Video/page";
import Mainheader from "./Mainheader/page";
import FeedingCrowdComponent from "./FeedingCrowdSection/page";
import { MakeApiCall } from "../MakeAPICall";
import ProductDetailCard from "./ProductDetailCard/page";

import localfont from "next/font/local";
import Footer from "../Footer/page";

const gfont = localfont({ src: "../fonts/Poppins-Regular.ttf" });

export default async function Maincontent() {
  let homeproducts = await MakeApiCall(
    "https://zaxbys-strapi.onrender.com/api/home-page-products",
    "GET"
  );

  return (
    <div>
      <VideoSection />
      <Mainheader />

      {homeproducts?.data ? (
        <div className={style.homeproductspage}>
          {homeproducts.data.map((product, i) => {
            const { category, imageurl, Productname } = product.attributes;

            return (
              <>
                <ProductDetailCard
                  category={category}
                  imageurl={imageurl}
                  title={Productname}
                  key={i}
                />
              </>
            );
          })}
          <FeedingCrowdComponent />
        </div>
      ) : (
        <div className={style.loadingpagerr}>
          <p style={gfont.style} className={style.loading}>Loading..</p>
        </div>
      )}
      <Footer/>
    </div>
  );
}
