import React from "react";
import home from "../assets/home.png";
const Home = ({ theme }) => {
    return (
        <>
            <div
                className={`min-h-screen grid grid-cols-1 xl:grid-cols-2 gap-14 px-4 pt-3  mt-4 ${
                    theme === "dark"
                        ? "bg-white text-black"
                        : "bg-gray-900 text-white"
                }`}
            >
                <div className="mt-28">
                    <h1 className="text-lg mb-2 font-bold">Hi I am</h1>
                    <h1 className="text-lg mb-2 font-bold text-[#FD6F00]">
                        Muhammad Umar
                    </h1>
                    <h1 className="text-6xl  mb-2 font-bold">UI & UX</h1>
                    <h1 className="text-6xl  mb-2 font-bold ml-24">Designer</h1>
                    <h1 className="text-base mb-2 ">
                        Lorem ipsum dolor sit amet consectetur. Tristique amet
                        sed massa nibh lectus netus in. Aliquet donec morbi
                        convallis pretium. Turpis tempus pharetra
                    </h1>
                    <a className="mt-4 btn btn-sm bg-[#FD6F00] text-white hover:bg-[#FD6F00] border-0">
                        Hire Me
                    </a>
                </div>

                <div className="flex flex-col items-end">
                    <img src={home} alt="home" className="w-[65%]" />
                </div>
            </div>
        </>
    );
};

export default Home;
