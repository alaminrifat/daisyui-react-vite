import React from "react";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
const Testimonials = ({ theme }) => {
    return (
        <div
            className={`mt-24 text-black ${
                theme === "dark" ? "text-black" : "text-white"
            }`}
        >
            <h1 className="text-5xl mb-2 font-bold text-center">
                Testimonials
            </h1>
            <h1 className="text-base mb-2 text-center mt-6">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus <br/> netus in. Aliquet donec morbi convallis pretium.
                Turpis tempus pharetra
            </h1>
            <div className="mt-8">
                <div class="grid grid-cols-1 xl:grid-cols-3 gap-16 px-1 py-3   ">
                    <div class="flex justify-center bg-[#F8F8F8] mx-auto px-8 py-8 rounded-md opacity-25">
                        <img
                            src={user2}
                            alt="home"
                            className="w-[120px] h-[120px]  rounded-md"
                        />
                        <div className="ml-4">
                            <p className="text-black ">
                                <span className="text-[#FD6F00] font-semibold">
                                    "
                                </span>{" "}
                                Lorem ipsum dolor sit amet consectetur. In enim
                                cursus odio accumsan.
                                <span className="text-[#FD6F00] font-semibold">
                                    "
                                </span>
                            </p>
                            <p className="font-semibold">Name</p>
                            <p>CEO</p>
                        </div>
                    </div>
                    <div class="flex justify-center bg-[#F8F8F8] mx-auto px-8 py-8 rounded-md">
                        <img
                            src={user1}
                            alt="home"
                            className="w-[120px] h-[120px]  rounded-md"
                        />
                        <div className="ml-4">
                            <p className="text-black ">
                                <span className="text-[#FD6F00] font-semibold">
                                    "
                                </span>{" "}
                                Lorem ipsum dolor sit amet consectetur. In enim
                                cursus odio accumsan.
                                <span className="text-[#FD6F00] font-semibold">
                                    "
                                </span>
                            </p>
                            <p className="font-semibold">Name</p>
                            <p>CEO</p>
                        </div>
                    </div>
                    <div class="flex justify-center bg-[#F8F8F8] mx-auto px-8 py-8 rounded-md opacity-25">
                        <img
                            src={user2}
                            alt="home"
                            className="w-[120px] h-[120px]  rounded-md"
                        />
                        <div className="ml-4">
                            <p className="text-black ">
                                <span className="text-[#FD6F00] font-semibold">
                                    "
                                </span>{" "}
                                Lorem ipsum dolor sit amet consectetur. In enim
                                cursus odio accumsan.
                                <span className="text-[#FD6F00] font-semibold">
                                    "
                                </span>
                            </p>
                            <p className="font-semibold">Name</p>
                            <p>CEO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-3 mt-4 justify-center ">
                <div className="w-6 h-2 bg-gray-300 rounded-xl"></div>
                <div className="w-6 h-2 bg-[#FD6F00] rounded-xl"></div>
                <div className="w-6 h-2 bg-gray-300 rounded-xl"></div>
                <div className="w-6 h-2 bg-gray-300 rounded-xl"></div>
            </div>
        </div>
    );
};

export default Testimonials;
