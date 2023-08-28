import Image from "next/image";
import style from "./style.module.css";
import VideoSection from "./Video/page";
import Mainheader from "./Mainheader/page";
import FeedingCrowdComponent from "./FeedingCrowdSection/page";
import { MakeApiCall } from "../MakeAPICall";
import ProductDetailCard from "./ProductDetailCard/page";


export default async function Maincontent() {
  let homeproducts = await MakeApiCall(
    "http://localhost:1337/api/home-page-products",
    "GET"
  );
  console.log("home products", homeproducts);
  homeproducts.data.map((prod) => console.log(prod.attributes.imageurl));

  return (
    <>
      <VideoSection />
      <Mainheader />
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
    </>
  );
}
