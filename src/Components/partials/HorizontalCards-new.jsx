import { Link } from "react-router-dom";
import noimage from "/no_images.png";
import React from "react";

const HorizontalCards = ({ data }) => {
    return (
        <div className="w-full">
            {data && data.length > 0 ? (
                <div className="flex overflow-x-auto scrollbar-hide gap-3 pb-4 px-1">
                    {data.map((item, i) => (
                        <Link
                            to={`/${item.media_type || 'movie'}/details/${item.id}`}
                            key={i}
                            className="flex-shrink-0 group"
                        >
                            {/* Card Container */}
                            <div className="w-32 md:w-40 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl border border-zinc-700/50">
                                {/* Image Container */}
                                <div className="relative overflow-hidden">
                                    <img
                                        className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                                        src={
                                            item.poster_path || item.backdrop_path
                                                ? `https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path}`
                                                : noimage
                                        }
                                        alt={item.title || item.name || "Movie poster"}
                                        loading="lazy"
                                    />

                                    {/* Rating Badge */}
                                    {item.vote_average && (
                                        <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                                            <i className="ri-star-fill text-yellow-400 text-xs"></i>
                                            <span className="text-white text-xs font-semibold">
                                                {item.vote_average.toFixed(1)}
                                            </span>
                                        </div>
                                    )}

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                            <i className="ri-play-fill text-white text-xl"></i>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-3">
                                    <h3 className="text-white text-sm font-bold mb-1 line-clamp-2 leading-tight">
                                        {item.title || item.original_name || item.name || item.original_title}
                                    </h3>

                                    {/* Meta info */}
                                    <div className="flex items-center justify-between text-xs text-zinc-400">
                                        <span className="capitalize">
                                            {item.media_type || 'movie'}
                                        </span>
                                        {item.release_date && (
                                            <span>{new Date(item.release_date).getFullYear()}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="flex items-center justify-center h-32 text-zinc-500">
                    <div className="text-center">
                        <i className="ri-film-line text-4xl mb-2 opacity-50"></i>
                        <p>No content available</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HorizontalCards;