"use client";
import style from "./style.module.css";
import localfont from "next/font/local";
import Image from "next/image";
import { useRouter } from "next/navigation";
// const myfont3 = localfont({ src: "../../fonts/zaxsans-regular.woff" });
const gfont=localfont({src:"../../fonts/Pacifico-Regular.ttf"})
export default function ProductDetailCard({ category, imageurl, title, key }) {
  const NavigateTo = useRouter();

  function CategoryRelatedProducts() {
    NavigateTo.push(`/main/${category}`);
  }

  return (
    <div
      className={style.productcard}
      key={key}
      onClick={CategoryRelatedProducts}
    >
      <Image
        src={imageurl}
        width={280}
        height={180}
        className={style.productimage}
        alt="dish image"
      ></Image>
      <p style={gfont.style} className={style.productname}>
        {title}
      </p>
    </div>
  );
}
