import React from "react";
import about from "../assets/about.png";
import Progress from "./Progress";

const Aboutme = ({ theme }) => {
    return (
        <div className="w-full lg:w-full  mt-10 ">
            <div
                className={` grid grid-cols-1 xl:grid-cols-2 gap-14 px-4 pt-3  mt-4 ${
                    theme === "dark"
                        ? "bg-white text-black"
                        : "bg-gray-900 text-white"
                }`}
            >
                <div className="flex flex-col items-start"> 
                    <img src={about} alt="home" className="w-[65%]" />
                </div>

                <div className="mt-24">
                    <h1 className="text-5xl mb-2 font-bold text-center ">About Me</h1>
                    <h1 className="text-base mb-2 w-full md:w-3/4 text-justify">
                        Lorem ipsum dolor sit amet consectetur. Tristique amet
                        sed massa nibh lectus netus in. Aliquet donec morbi
                        convallis pretium. Turpis tempus pharetra
                    </h1>
                    <h1 className="text-md mb-2 font-bold ">UX</h1>
                    <Progress percent="90%" />
                    <h1 className="text-md mb-2 font-bold ">Website Design</h1>
                    <Progress percent="86%" />
                    <h1 className="text-md mb-2 font-bold ">App Design</h1>
                    <Progress percent="88%" />
                    <h1 className="text-md mb-2 font-bold ">Graphic Design</h1>
                    <Progress percent="90%" />
                </div>
            </div>
            
        </div>
    );
};

export default Aboutme;
