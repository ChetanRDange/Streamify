import { Link } from "react-router-dom";
import noimage from "/no_images.png";
import React from "react";

function Cards({ data, title }) {
    return (
        <div className="w-full pb-24 md:pb-8">
            {/* Enhanced Grid with better mobile spacing */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5 px-4">
                {data.map((c, i) => (
                    <Link
                        to={`/${c.media_type || title}/details/${c.id}`}
                        className="group block"
                        key={i}
                        style={{ touchAction: 'manipulation' }}
                    >
                        {/* Enhanced Card Container */}
                        <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 group-hover:scale-105 group-active:scale-95 border border-zinc-700/30">
                            {/* Image Container with improved aspect ratio */}
                            <div className="relative aspect-[2/3] overflow-hidden">
                                <img
                                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                                    src={
                                        c.poster_path || c.backdrop_path || c.profile_path
                                            ? `https://image.tmdb.org/t/p/w500/${c.poster_path || c.backdrop_path || c.profile_path}`
                                            : noimage
                                    }
                                    alt={c.name || c.title || "Image"}
                                    loading="lazy"
                                />

                                {/* Enhanced Rating Badge */}
                                {c.vote_average && (
                                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1.5 rounded-full flex items-center shadow-lg">
                                        <i className="ri-star-fill text-yellow-400 mr-1 text-xs"></i>
                                        <span className="font-bold">
                                            {c.vote_average.toFixed(1)}
                                        </span>
                                    </div>
                                )}

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                        <i className="ri-play-fill text-white text-2xl"></i>
                                    </div>
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Enhanced Content Section */}
                            <div className="p-4">
                                <h3 className="text-white text-sm font-bold line-clamp-2 leading-tight mb-2 group-hover:text-blue-400 transition-colors">
                                    {c.name || c.title || c.original_title || c.original_name}
                                </h3>

                                {/* Meta Information with better styling */}
                                <div className="flex items-center justify-between text-xs">
                                    {c.media_type && (
                                        <span className="capitalize bg-zinc-700 text-zinc-300 px-2 py-1 rounded-full font-medium">
                                            {c.media_type}
                                        </span>
                                    )}
                                    {(c.release_date || c.first_air_date) && (
                                        <span className="text-zinc-400 font-medium">
                                            {new Date(c.release_date || c.first_air_date).getFullYear()}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Cards;
