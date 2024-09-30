import React from "react";
import projectA from "../assets/projectA.png";
import projectB from "../assets/projectB.png";
import projectC from "../assets/projectC.png";
const MyProjects = ({ theme }) => {
    return (
        <div className="mt-24">
            <h1 className="text-5xl mb-2 font-bold text-center">My Projects</h1>
            <h1 className="text-base mb-2 text-center mt-6">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus <br /> netus in. Aliquet donec morbi convallis
                pretium. Turpis tempus pharetra
            </h1>
            <div className="mt-8">
                <div className="flex flex-wrap gap-3 justify-center">
                    <div className="btn btn-sm ">All</div>
                    <div className="btn btn-sm ">UI/UX</div>
                    <div className="btn btn-sm bg-[#FD6F00] text-white hover:bg-[#FD6F00] border-0 ">
                        Web Design
                    </div>
                    <div className="btn btn-sm ">App Design</div>
                    <div className="btn btn-sm ">Graphic Design</div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-9 px-4 py-3 mt-8 ">
                    <div className=" ">
                        <img src={projectA} />
                        <h1 className="text-[#FD6F00] text-sm mt-4">
                            Web Design
                        </h1>
                        <h1
                            className={`text-lg font-bold mt-2 ${
                                theme === "dark" ? "text-black" : "text-white"
                            }`}
                        >
                            AirCalling Landing Page Design{" "}
                        </h1>
                    </div>
                    <div className=" ">
                        <img src={projectB} />
                        <h1 className="text-[#FD6F00] text-sm mt-4">
                            Web Design
                        </h1>
                        <h1
                            className={`text-lg font-bold mt-2 ${
                                theme === "dark" ? "text-black" : "text-white"
                            }`}
                        >
                            Business Landing Page Design
                        </h1>
                    </div>
                    <div className=" ">
                        <img src={projectC} />
                        <h1 className="text-[#FD6F00] text-sm mt-4">
                            Web Design
                        </h1>
                        <h1
                            className={`text-lg font-bold mt-2 ${
                                theme === "dark" ? "text-black" : "text-white"
                            }`}
                        >
                            Ecom Web Page Design
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
