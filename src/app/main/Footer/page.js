import React from "react";
import style from "./style.module.css";
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
  return (
    <div className={style.footersection}>
      <div style={{ ...gfont.style, width: "400px", textAlign: "justify", marginTop: "30px" }}>
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

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <a className={style.links} href="">FAQ&apos;s</a>
          <a className={style.links} href="">Terms and Conditions</a>
          <a className={style.links} href="">Privacy Policy</a>
        </div>

        <p style={{ ...gfont.style, fontSize: "20px" }}>
          Follow us On Social Media
        </p>
        <div className={style.sociallinks}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abhishek-y-88615b216/"
          >
            {" "}
            <FaFacebookSquare size={30}></FaFacebookSquare>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abhishek-y-88615b216/"
          >
            {" "}
            <FaInstagram size={30}></FaInstagram>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abhishek-y-88615b216/"
          >
            {" "}
            <FaTwitter size={30}></FaTwitter>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abhishek-y-88615b216/"
          >
            <FaYoutube size={30}></FaYoutube>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abhishek-y-88615b216/"
          >
            <FaLinkedin size={30}></FaLinkedin>
          </a>
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
            <a href="mailto:26abhishek.y@gmail.com">26abhishek.y@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
