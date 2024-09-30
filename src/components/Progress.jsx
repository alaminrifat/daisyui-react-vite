import React from "react";

const Progress = ({percent = "90%"}) => {
    return (
        <div className="w-[75%]">
            <div className="py-1 relative min-w-full">
                <div className="h-2 bg-gray-200 rounded-full">
                    <div
                        className="absolute h-2 rounded-full bg-[#FD6F00]"
                        style={{ width: percent }}
                    ></div>
                    <div
                        className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white border-2 border-[#FD6F00] shadow   -ml-2 top-0 cursor-pointer"
                        style={{ left: percent }}
                    >
                        <div className="relative -mt-2 w-1">
                            <div
                                className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                                style={{ marginLeft: "-20.5px" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;
