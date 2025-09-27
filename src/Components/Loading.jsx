import AlertComponent from './AlertComponent';
import React from "react";
const Loading = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-[#1F1E24]">
            <AlertComponent />

            {/* Custom Loading Animation */}
            <div className="flex flex-col items-center">
                {/* Spinner */}
                <div className="relative">
                    <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-zinc-700 border-t-[#6556CD] rounded-full animate-spin"></div>
                    <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 border-4 border-transparent border-r-[#6556CD] rounded-full animate-spin animation-delay-150"></div>
                </div>

                {/* Loading Text */}
                <div className="mt-8 text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center">
                        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
                        Streamify
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base animate-pulse">
                        Getting things ready for you...
                    </p>
                </div>

                {/* Loading Dots */}
                <div className="flex space-x-2 mt-6">
                    <div className="w-2 h-2 bg-[#6556CD] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#6556CD] rounded-full animate-bounce animation-delay-100"></div>
                    <div className="w-2 h-2 bg-[#6556CD] rounded-full animate-bounce animation-delay-200"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
