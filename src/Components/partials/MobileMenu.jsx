import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const mainMenuItems = [
        { path: "/", icon: "ri-home-fill", label: "Home", description: "Discover trending content" },
        { path: "/trending", icon: "ri-fire-fill", label: "Trending", description: "What's hot right now" },
        { path: "/popular", icon: "ri-star-fill", label: "Popular", description: "Most loved content" },
        { path: "/movie", icon: "ri-movie-2-fill", label: "Movies", description: "Latest cinema releases" },
        { path: "/tv", icon: "ri-tv-2-fill", label: "TV Shows", description: "Binge-worthy series" },
        { path: "/people", icon: "ri-team-fill", label: "People", description: "Stars & celebrities" }
    ];

    const otherMenuItems = [
        { path: "/about", icon: "ri-information-fill", label: "About", description: "Learn more about us" },
        { path: "/contact", icon: "ri-phone-fill", label: "Contact", description: "Get in touch" }
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Enhanced Hamburger Button */}
            <button
                onClick={toggleMenu}
                className={`fixed top-6 right-4 z-50 p-4 rounded-2xl shadow-xl transition-all duration-300 md:hidden ${isOpen
                        ? 'bg-red-600 hover:bg-red-700 rotate-90'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                    } text-white`}
                style={{ touchAction: 'manipulation' }}
            >
                <i className={`${isOpen ? 'ri-close-line' : 'ri-menu-3-line'} text-xl transition-transform duration-300`}></i>
            </button>

            {/* Enhanced Overlay with blur */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
                    onClick={toggleMenu}
                />
            )}

            {/* Enhanced Side Menu */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 backdrop-blur-xl border-l border-zinc-600/50 z-50 transform transition-all duration-500 ease-out md:hidden ${isOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
                }`}>
                <div className="flex flex-col h-full">
                    {/* Header Section */}
                    <div className="p-6 pt-20 border-b border-zinc-700/50">
                        <div className="flex items-center justify-center mb-4">
                            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
                                <i className="ri-tv-fill text-2xl text-white"></i>
                            </div>
                        </div>
                        <h1 className="text-2xl text-white font-bold text-center mb-2">Streamify</h1>
                        <p className="text-zinc-400 text-sm text-center">Your Movie & TV Guide</p>
                    </div>

                    {/* Main Navigation */}
                    <div className="flex-1 p-6 overflow-y-auto">
                        <div className="space-y-1 mb-8">
                            <h2 className="text-zinc-300 font-semibold text-sm uppercase tracking-wide mb-4 px-2">Explore</h2>
                            {mainMenuItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={toggleMenu}
                                    className={`group flex items-center py-4 px-4 rounded-2xl transition-all duration-300 ${location.pathname === item.path
                                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                                            : "text-zinc-300 hover:bg-zinc-700/50 hover:text-white active:scale-95"
                                        }`}
                                    style={{ touchAction: 'manipulation' }}
                                >
                                    <div className={`p-2 rounded-xl mr-4 ${location.pathname === item.path
                                            ? "bg-white/20"
                                            : "bg-zinc-700/50 group-hover:bg-zinc-600/50"
                                        }`}>
                                        <i className={`${item.icon} text-xl`}></i>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-base">{item.label}</div>
                                        <div className={`text-xs mt-0.5 ${location.pathname === item.path
                                                ? "text-white/70"
                                                : "text-zinc-500 group-hover:text-zinc-400"
                                            }`}>
                                            {item.description}
                                        </div>
                                    </div>
                                    <i className="ri-arrow-right-s-line text-lg opacity-50 group-hover:opacity-100 transition-opacity"></i>
                                </Link>
                            ))}
                        </div>

                        {/* Separator */}
                        <div className="border-t border-zinc-700/50 my-6"></div>

                        {/* Secondary Navigation */}
                        <div className="space-y-1">
                            <h2 className="text-zinc-300 font-semibold text-sm uppercase tracking-wide mb-4 px-2">More</h2>
                            {otherMenuItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={toggleMenu}
                                    className={`group flex items-center py-4 px-4 rounded-2xl transition-all duration-300 ${location.pathname === item.path
                                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                            : "text-zinc-300 hover:bg-zinc-700/50 hover:text-white active:scale-95"
                                        }`}
                                    style={{ touchAction: 'manipulation' }}
                                >
                                    <div className={`p-2 rounded-xl mr-4 ${location.pathname === item.path
                                            ? "bg-white/20"
                                            : "bg-zinc-700/50 group-hover:bg-zinc-600/50"
                                        }`}>
                                        <i className={`${item.icon} text-xl`}></i>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-base">{item.label}</div>
                                        <div className={`text-xs mt-0.5 ${location.pathname === item.path
                                                ? "text-white/70"
                                                : "text-zinc-500 group-hover:text-zinc-400"
                                            }`}>
                                            {item.description}
                                        </div>
                                    </div>
                                    <i className="ri-arrow-right-s-line text-lg opacity-50 group-hover:opacity-100 transition-opacity"></i>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;