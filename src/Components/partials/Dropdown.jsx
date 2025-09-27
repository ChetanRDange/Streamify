import React from "react";

const Dropdown = ({ title, options, func }) => {
    return (
        <div className="relative">
            <select
                defaultValue="0"
                onChange={func}
                name="format"
                id="format"
                className="
                    appearance-none bg-gradient-to-r from-zinc-800 to-zinc-700 text-white 
                    border border-zinc-600/50 shadow-lg backdrop-blur-sm
                    rounded-2xl px-6 py-3 pr-12 text-base font-medium
                    focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20
                    hover:from-zinc-700 hover:to-zinc-600 transition-all duration-300 cursor-pointer 
                    w-full sm:w-auto min-w-[160px] active:scale-95
                "
                style={{ touchAction: 'manipulation', fontSize: '16px' }} // Prevents zoom on iOS
            >
                <option value="0" disabled className="text-zinc-400 bg-zinc-800">
                    {title}
                </option>
                {options.map((o, i) => (
                    <option key={i} value={o} className="bg-zinc-800 text-white py-2">
                        {o.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </option>
                ))}
            </select>

            {/* Enhanced Custom Arrow with animation */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <div className="bg-blue-500/20 p-1 rounded-full">
                    <i className="ri-arrow-down-s-line text-blue-400 text-lg transition-transform duration-200 hover:rotate-180"></i>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
