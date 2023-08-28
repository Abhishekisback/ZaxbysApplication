import { MakeApiCall } from "../../MakeAPICall";
import style from "./style.module.css"

export default async function VideoSection() {
  const introvideo = await MakeApiCall(
    "http://localhost:1337/api/zaxbys-behind-scene-videos",
    "GET"
  );

  return (
    <>
      <video className={style.video} controls autoPlay loop>
        <source src={introvideo.data[0].attributes.video_url}></source>
      </video>
    </>
  );
}
