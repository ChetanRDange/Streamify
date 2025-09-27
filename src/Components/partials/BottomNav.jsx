import { Link, useLocation } from "react-router-dom";
import React from "react";

const BottomNav = () => {
    const location = useLocation();

    const navItems = [
        { path: "/", icon: "ri-home-fill", activeIcon: "ri-home-fill", label: "Home", color: "text-blue-500" },
        { path: "/trending", icon: "ri-fire-line", activeIcon: "ri-fire-fill", label: "Trending", color: "text-red-500" },
        { path: "/movie", icon: "ri-movie-line", activeIcon: "ri-movie-2-fill", label: "Movies", color: "text-purple-500" },
        { path: "/tv", icon: "ri-tv-line", activeIcon: "ri-tv-2-fill", label: "TV Shows", color: "text-green-500" },
        { path: "/people", icon: "ri-team-line", activeIcon: "ri-team-fill", label: "People", color: "text-yellow-500" }
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900 via-zinc-800/95 to-zinc-800/90 backdrop-blur-xl border-t border-zinc-700/50 z-50 md:hidden">
            {/* Navigation Items */}
            <div className="flex justify-around items-center px-2 py-1 safe-area-bottom">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`relative flex flex-col items-center py-3 px-4 rounded-2xl min-w-[70px] transition-all duration-300 ${isActive
                                    ? `${item.color} bg-white/10 backdrop-blur-sm transform scale-110`
                                    : "text-zinc-400 hover:text-zinc-300 active:scale-95"
                                }`}
                            style={{ touchAction: 'manipulation' }} // Better touch response
                        >
                            {/* Icon with background glow for active state */}
                            <div className={`relative ${isActive ? 'mb-1' : 'mb-2'}`}>
                                {isActive && (
                                    <div className={`absolute inset-0 ${item.color.replace('text-', 'bg-')} opacity-20 rounded-full blur-lg scale-150`}></div>
                                )}
                                <i className={`${isActive ? item.activeIcon : item.icon} text-2xl relative z-10`}></i>
                            </div>

                            {/* Label with better typography */}
                            <span className={`text-xs font-semibold ${isActive ? 'opacity-100' : 'opacity-80'} transition-opacity`}>
                                {item.label}
                            </span>

                            {/* Active indicator dot */}
                            {isActive && (
                                <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 ${item.color.replace('text-', 'bg-')} rounded-full`}></div>
                            )}
                        </Link>
                    );
                })}
            </div>

            {/* Home indicator for iPhone-like experience */}
            <div className="flex justify-center pb-1">
                <div className="w-32 h-1 bg-white/20 rounded-full"></div>
            </div>
        </div>
    );
};

export default BottomNav;