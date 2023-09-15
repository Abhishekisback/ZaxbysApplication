import { MakeApiCall } from "../../MakeAPICall";
import style from "./style.module.css";
import localfont from "next/font/local";

const gfont = localfont({ src: "../../fonts/Poppins-Regular.ttf" });

export default async function VideoSection() {
  const introvideo = await MakeApiCall(
    "https://zaxbys-strapi.onrender.com/api/zaxbys-behind-scene-videos",
    "GET"
  );
  
  const { video_url } = introvideo.data[0].attributes;
  
  return (
    <>
      {introvideo?.data?.[0]?.attributes?.video_url ? (
        <div>
          <video className={style.video} loop autoPlay muted controls>
            <source
              src={video_url}
              type="video/mp4"
            />
          </video>
        </div>
      ) : (
        <div className={style.VideoSection}>
          <p style={gfont.style}>Loading Behind The scene video...</p>
        </div>
      )}
    </>
  );
}
