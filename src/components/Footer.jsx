import React from "react";

const Footer = ({ theme }) => {
    return <div className={`footer ${theme === "dark" ? "text-black bg-[#F8F8F8]" : "text-white bg-[#121212]"}`}>Footer</div>;
};

export default Footer;
