"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./style.module.css";
import { useRouter } from "next/navigation";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import localfont from "next/font/local";
const gfont = localfont({ src: "../../fonts/Poppins-Regular.ttf" });
const Footer = () => {
  const navigate = useRouter();

  function ShowSiteleaving() {
    toast.warn(
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p style={{ ...gfont.style, color: "red" }}>
          You are About to Leave Zaxbys Site
        </p>

        <div
          className={style.buttonsection}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <button
            className={style.confirmbtn}
            onClick={() => {
              toast.dismiss();
              const newWindow = window.open(
                "https://www.linkedin.com/in/abhishek-y-88615b216/",
                "_blank" // This opens the link in a new window or tab
              );
              if (newWindow) {
                newWindow.focus(); // Focus on the new window/tab
              }
            }}
          >
            Confirm
          </button>
          <button
            className={style.cancelbtn}
            onClick={() => {
              toast.dismiss();
            }}
          >
            Cancel
          </button>
        </div>
      </div>,
      {
        hideProgressBar: true,
        position: "top-center",
        autoClose: false,
        className: style.customtoast,
      }
    );
  }

  return (
    <div style={{backgroundColor:"#E65100"}}>
      <div className={style.footersection} >
        <ToastContainer />
        <div
          style={{
            ...gfont.style,
            width: "400px",
            textAlign: "justify",
            marginTop: "30px",
          }}
        >
          <div>
            <h1> About Us </h1>
          </div>
          <br />
          <div>
            Zaxby&apos;s is known for its diverse menu featuring various chicken
            options. Their signature items include hand-breaded chicken fingers,
            traditional and boneless chicken wings, chicken sandwiches, and
            salads. Customers can choose from a range of sauces and dressings to
            customize their orders. Zaxby&apos;s offers a unique Southern flavor
            experience, with a mix of savory and spicy flavors that cater to a
            wide range of tastes. The food is often described as flavorful and
            satisfying.
          </div>
        </div>

        <div className={style.quicklinks}>
          <div>
            <h1 style={gfont.style}>Quick Links</h1>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <a style={{color:"#0c2340"}} className={style.links} href="">
              FAQ&apos;s
            </a>
            <a style={{color:"#0c2340"}} className={style.links} href="">
              Terms and Conditions
            </a>
            <a style={{color:"#0c2340"}} className={style.links} href="">
              Privacy Policy
            </a>
          </div>

          <p style={{ ...gfont.style, fontSize: "20px" }}>
            Follow us On Social Media
          </p>
          <div className={style.sociallinks}>
            <FaFacebookSquare
              className={style.icons}
              onClick={ShowSiteleaving}
              color="black"
              size={30}
            ></FaFacebookSquare>

            <FaInstagram
              className={style.icons}
              onClick={ShowSiteleaving}
              color="black"
              size={30}
            ></FaInstagram>

            <FaTwitter
              className={style.icons}
              onClick={ShowSiteleaving}
              color="black"
              size={30}
            ></FaTwitter>

            <FaYoutube
              className={style.icons}
              onClick={ShowSiteleaving}
              color="black"
              size={30}
            ></FaYoutube>

            <FaLinkedin
              className={style.icons}
              color="black"
              onClick={ShowSiteleaving}
              size={30}
            ></FaLinkedin>
          </div>
        </div>

        <div className={style.contactsec}>
          <div>
            <h2 style={gfont.style}>Contact Us</h2>
          </div>
          <div>
            <p>Ph : +91 9611346606</p>
            <br></br>
            <p>
              Email:
              <a style={{color:"#0c2340"}} href="mailto:26abhishek.y@gmail.com">26abhishek.y@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      
      <div class={style.copyright}>
        &copy; 2023 Abhishek Designs. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
