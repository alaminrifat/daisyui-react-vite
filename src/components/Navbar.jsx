import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import Logo from "./../assets/logo.png";
const Navbar = ({ theme, toggleTheme }) => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>About Me</a>
                        </li>
                        <li>
                            <a>Services</a>
                        </li>
                        <li>
                            <a>Projects</a>
                        </li>
                        <li>
                            <a>Testimonials</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
                <img src={Logo} alt={"menu"} className="w-10 h-10 mr-2" />
                <p className="text-2xl font-bold">M</p>
                <p className="text-2xl">umair</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About Me</a>
                    </li>
                    <li>
                        <a>Services</a>
                    </li>
                    <li>
                        <a>Projects</a>
                    </li>
                    <li>
                        <a>Testimonials</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
                <a className="ml-2 btn btn-sm bg-[#FD6F00] text-white hover:bg-[#FD6F00] border-0">
                    Download CV{" "}
                </a>
            </div>
        </div>
    );
};

export default Navbar;
