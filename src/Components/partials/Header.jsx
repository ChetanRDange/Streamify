import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden md:rounded-2xl">
      {/* Background Image with Overlay */}
      <div
        style={{
          background: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0"
      />

      {/* Multi-layer Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 via-transparent to-zinc-900/40" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12">
        {/* Featured Badge - Responsive */}
        <div className="mb-4 md:mb-6">
          <span className="inline-flex items-center px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold bg-red-600/90 text-white backdrop-blur-sm">
            <i className="ri-fire-line mr-1"></i>
            Featured Today
          </span>
        </div>

        {/* Title - Responsive sizing */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 md:mb-6 leading-tight tracking-tight max-w-4xl">
          {data.title || data.original_name || data.name || data.original_title}
        </h1>

        {/* Meta Information */}
        <div className="flex items-center gap-4 mb-4 text-sm md:text-base">
          {data.release_date && (
            <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded-lg backdrop-blur-sm">
              <i className="text-yellow-400 ri-calendar-line"></i>
              <span className="text-white font-medium">{new Date(data.release_date).getFullYear()}</span>
            </div>
          )}
          <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded-lg backdrop-blur-sm">
            <i className="text-blue-400 ri-film-line"></i>
            <span className="text-white font-medium capitalize">{data.media_type || 'movie'}</span>
          </div>
          {data.vote_average && (
            <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded-lg backdrop-blur-sm">
              <i className="text-yellow-400 ri-star-fill"></i>
              <span className="text-white font-medium">{data.vote_average.toFixed(1)}</span>
            </div>
          )}
        </div>

        {/* Overview - Responsive text */}
        <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-6 md:mb-8 leading-relaxed max-w-2xl lg:max-w-3xl font-light">
          {data.overview?.slice(0, window?.innerWidth > 768 ? 200 : 120) || "Discover this amazing content and explore new worlds of entertainment."}
          {data.overview?.length > (window?.innerWidth > 768 ? 200 : 120) && "..."}
        </p>

        {/* Action Buttons - Better responsive layout */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <Link
            to={`/${data.media_type || 'movie'}/details/${data.id}`}
            className="px-6 md:px-8 py-3 md:py-4 rounded-full text-black bg-white hover:bg-gray-100 transition-all font-bold text-center text-sm md:text-base shadow-xl flex items-center justify-center gap-2 transform hover:scale-105"
          >
            <i className="ri-play-fill text-lg md:text-xl"></i>
            Watch Now
          </Link>
          <Link
            to={`/${data.media_type || 'movie'}/details/${data.id}`}
            className="px-6 md:px-8 py-3 md:py-4 rounded-full text-white bg-white/20 hover:bg-white/30 transition-all font-semibold text-center text-sm md:text-base backdrop-blur-sm border border-white/30 flex items-center justify-center gap-2"
          >
            <i className="ri-information-line text-lg md:text-xl"></i>
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
