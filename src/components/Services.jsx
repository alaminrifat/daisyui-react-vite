import React from "react";
import ux from "../assets/ux.png";
import web from "../assets/web.png";
import app from "../assets/app.png";
import graphic from "../assets/graphics.png";

const Services = ({ theme }) => {
    console.log(theme);
    return (
        <div className={`text-black mt-24 p-4`}>
            <h1 className={`text-5xl mb-2 font-bold text-center  ${theme === 'dark' ? 'text-black' : 'text-white'}`}>Services</h1>
            <h1 className={`text-base mb-2 mt-6 text-justify ${theme === 'dark' ? 'text-black' : 'text-white'}`}>
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus <br /> netus in. Aliquet donec morbi convallis
                pretium. Turpis tempus pharetra
            </h1>
            <div className="mt-8">
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-9 px-4 py-3 items-center  ">
                    <div className="w-[330px] h-[346px] bg-[#F8F8F8] rounded-md">
                        <div className=" p-4">
                            <img
                                src={ux}
                                alt="home"
                                className="w-[60px] h-[60px] mt-12"
                            />
                            <h1 className={`text-2xl font-bold mt-4 }`}>UI/UX</h1>
                            <h1 className={`text-base  mt-4 `}>
                                Lorem ipsum dolor sit amet consectetur.
                                Tristique amet sed massa nibh lectus netus in.
                                Aliquet donec morbi convallis pretium. Turpis
                                tempus pharetra
                            </h1>
                        </div>
                    </div>
                    <div className="w-[330px] h-[346px] bg-[#F8F8F8] rounded-md">
                        <div className=" p-4">
                            <img
                                src={web}
                                alt="home"
                                className="w-[60px] h-[60px] mt-12"
                            />
                            <h1 className="text-2xl font-bold mt-4">
                                Web Design
                            </h1>
                            <h1 className="text-base  mt-4">
                                Lorem ipsum dolor sit amet consectetur.
                                Tristique amet sed massa nibh lectus netus in.
                                Aliquet donec morbi convallis pretium. Turpis
                                tempus pharetra
                            </h1>
                        </div>
                    </div>
                    <div className="w-[330px] h-[346px] bg-[#F8F8F8] rounded-md">
                        <div className=" p-4">
                            <img
                                src={app}
                                alt="home"
                                className="w-[40px] h-[60px] mt-12"
                            />
                            <h1 className="text-2xl font-bold mt-4">
                                App Design
                            </h1>
                            <h1 className="text-base  mt-4">
                                Lorem ipsum dolor sit amet consectetur.
                                Tristique amet sed massa nibh lectus netus in.
                                Aliquet donec morbi convallis pretium. Turpis
                                tempus pharetra
                            </h1>
                        </div>
                    </div>
                    <div className="w-[330px] h-[346px] bg-[#F8F8F8] rounded-md">
                        <div className=" p-4">
                            <img
                                src={graphic}
                                alt="home"
                                className="w-[60px] h-[60px] mt-12"
                            />
                            <h1 className="text-2xl font-bold mt-4">
                                Graphic Design
                            </h1>
                            <h1 className="text-base  mt-4">
                                Lorem ipsum dolor sit amet consectetur.
                                Tristique amet sed massa nibh lectus netus in.
                                Aliquet donec morbi convallis pretium. Turpis
                                tempus pharetra
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
