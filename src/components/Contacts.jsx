import React from "react";

const Contacts = ({ theme }) => {
    return (
        <div
            className={`mt-24 text-black ${
                theme === "dark" ? "text-black" : "text-white"
            }`}
        >
            <h1 className="text-5xl mb-2 font-bold text-center">
                Lets Design Together
            </h1>
            <h1 className="text-base mb-2 text-center mt-6 mx-2 lg:mx-0">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus <br /> netus in. Aliquet donec morbi convallis
                pretium. Turpis tempus pharetra
            </h1>

            <div className="my-8 flex justify-center mx-4 lg:mx-0" >
                <input
                    type="text"
                    placeholder="Enter Your Email "
                    className="input input-bordered w-full max-w-xs input-sm rounded-md bg-slate-100 text-black"
                />
                <div className="ml-4 btn  btn-sm bg-[#FD6F00] text-white hover:bg-[#FD6F00] border-0 rounded-md" >Contact Me</div>
            </div>
        </div>
    );
};

export default Contacts;
