import React from "react";
import Logo from "./../assets/logo.png";
import facebook from "./../assets/facebook.png";
import twitter from "./../assets/twitter.png";
import instagram from "./../assets/instagram.png";
import linkedin from "./../assets/LinkedIn.png";
const Footer = ({ theme }) => {
  return (
    <div
      className={`mt-24  text-black ${
        theme === "dark" ? "text-black bg-[#f8f8f8]" : "text-white bg-[#11827]"
      }`}
    >
      <div className="flex justify-center items-center ">
        <img src={Logo} alt={"menu"} className="w-10 h-10 mr-2 mt-12" />
        <p className="text-2xl font-bold mt-12">M</p>
        <p className="text-2xl mt-12">umair</p>
      </div>
      <div>
        <ul
          className="flex flex-wrap justify-center items-center gap-8 mt-8 cursor-pointer"
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex  flex-wrap justify-center items-center mt-12">
        <img src={facebook} alt={"menu"} className="w-6 h-6 mr-2 " />
        <img src={twitter} alt={"menu"} className="w-6 h-6 mr-2 " />
        <img src={instagram} alt={"menu"} className="w-6 h-6 mr-2 " />
        <img src={linkedin} alt={"menu"} className="w-6 h-6 mr-2 " />
      </div>
      <div>
        <p className="text-center mt-12 bg-[#545454] py-3 text-white">© 2023 <span className="text-[#FD6F00]">Mumair </span> All rights reserved, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
