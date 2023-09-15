"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./style.module.css";

import {
  COPYWRITE,
  EMAILID,
  PHONE_NO,
  FOLLOW_US,
  PRIVACY_POLICY,
  FAQ,
  TERMS_CONDITIONS,
  QUICK_LINKS,
  CONTACT_US,
  ABOUT_US,
  LEAVE_SITE_WARNING,
  ABOUTUSMSG,
} from "@/app/Consts";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import localfont from "next/font/local";
const gfont = localfont({ src: "../fonts/Poppins-Regular.ttf" });
const Footer = () => {
  function ShowSiteleaving() {
    function OnConfirm() {
      toast.dismiss();
      const newWindow = window.open(
        "https://www.linkedin.com/in/abhishek-y-88615b216/",
        "_blank" // This opens the link in a new window or tab
      );
      if (newWindow) {
        newWindow.focus();
      }
    }

    function Closepopup() {
      toast.dismiss();
    }

    toast.warn(
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p style={{ ...gfont.style, color: "red" }}>
          {LEAVE_SITE_WARNING}
        </p>

        <div
          className={style.buttonsection}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <button className={style.confirmbtn} onClick={OnConfirm}>
            Confirm
          </button>
          <button className={style.cancelbtn} onClick={Closepopup}>
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

  const color="white"

  return (
    <div className={style.main}>
      <div className={style.footersection}>
        <ToastContainer />
        <div
        className={style.aboutus}
        >
          <div>
            <h1>{ABOUT_US}</h1>
          </div>
          <br />
          <div>{ABOUTUSMSG}</div>
        </div>

        <div className={style.quicklinks}>
          <div>
            <h1 style={gfont.style}>{QUICK_LINKS}</h1>
          </div>

          <div
           className={style.quicklinks}
          >
            <a  className={style.links} href="">
              {FAQ}&apos;
            </a>
            <a className={style.links} href="">
              {TERMS_CONDITIONS}
            </a>
            <a  className={style.links} href="">
              {PRIVACY_POLICY}
            </a>
          </div>

          <p style={gfont.style} className={style.followus}>{FOLLOW_US}</p>
          <div className={style.sociallinks}>
            <FaFacebookSquare
              className={style.icons}
              onClick={ShowSiteleaving}
              color={color}
              size={30}
            ></FaFacebookSquare>

            <FaInstagram
              className={style.icons}
              onClick={ShowSiteleaving}
              color={color}
              size={30}
            ></FaInstagram>

            <FaTwitter
              className={style.icons}
              onClick={ShowSiteleaving}
              color={color}
              size={30}
            ></FaTwitter>

            <FaYoutube
              className={style.icons}
              onClick={ShowSiteleaving}
              color={color}
              size={30}
            ></FaYoutube>

            <FaLinkedin
              className={style.icons}
              color={color}
              onClick={ShowSiteleaving}
              size={30}
            ></FaLinkedin>
          </div>
        </div>

        <div className={style.contactsec}>
          <div>
            <h2 style={gfont.style}>{CONTACT_US}</h2>
          </div>
          <div>
            <p>Ph : {PHONE_NO}</p>
            <br></br>
            <p>
              Email:
              <a
                style={{ color: "#0c2340" }}
                href="mailto:26abhishek.y@gmail.com"
              >
                {EMAILID}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class={style.copyright}> &copy;{COPYWRITE}</div>
    </div>
  );
};

export default Footer;
