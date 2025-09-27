import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import axios from "../../utils/axios";
import noimage from "/no_images.png";
import React from "react";

function Topnav() {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSerches = useCallback(async () => {
    if (query.trim()) {
      try {
        const { data } = await axios.get(`/search/multi?query=${query}`);
        setsearches(data.results || []);
      } catch (error) {
        console.log("Error:", error);
        setsearches([]);
      }
    } else {
      setsearches([]);
    }
  }, [query]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      GetSerches();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [GetSerches]);

  return (
    <div className="w-full relative">
      {/* Responsive Search Bar */}
      <div className="relative">
        <div className="flex items-center bg-zinc-800 md:bg-gradient-to-r md:from-zinc-800 md:to-zinc-700 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-lg border border-zinc-600/30">
          <i className="text-blue-400 text-lg md:text-xl ri-search-line mr-3 md:mr-4"></i>
          <input
            onChange={(e) => setquery(e.target.value)}
            value={query}
            className="flex-1 text-white bg-transparent outline-none placeholder-zinc-400 text-base md:text-lg font-medium"
            type="text"
            placeholder={window?.innerWidth > 768 ? "Search for movies, TV shows, and people..." : "What would you like to watch?"}
            style={{ fontSize: '16px' }} // Prevents zoom on iOS
          />
          {query.length > 0 && (
            <button
              onClick={() => setquery("")}
              className="p-2 rounded-full bg-zinc-600 hover:bg-zinc-500 transition-all duration-200 ml-3"
            >
              <i className="text-white text-sm md:text-lg ri-close-line"></i>
            </button>
          )}
        </div>        {/* Enhanced Search Results */}
        {query.length > 0 && (
          <div className="absolute top-full left-0 w-full mt-3 bg-zinc-800 rounded-2xl shadow-2xl border border-zinc-600/50 z-50 max-h-96 overflow-hidden backdrop-blur-sm">
            {searches.length > 0 ? (
              <div className="max-h-[60vh] overflow-y-auto">
                {searches.slice(0, 6).map((s, i) => (
                  <Link
                    to={`/${s.media_type}/details/${s.id}`}
                    key={i}
                    onClick={() => setquery("")}
                    className="hover:bg-zinc-700 transition-all duration-200 w-full p-4 flex items-center border-b border-zinc-700/50 last:border-b-0 group"
                  >
                    <div className="relative flex-shrink-0 mr-4">
                      <img
                        className="w-14 h-14 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-200"
                        src={
                          s.backdrop_path || s.profile_path || s.poster_path
                            ? `https://image.tmdb.org/t/p/w200${s.backdrop_path || s.profile_path || s.poster_path}`
                            : noimage
                        }
                        alt=""
                      />
                      {s.vote_average && (
                        <div className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                          {s.vote_average.toFixed(1)}
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-white font-semibold text-base truncate group-hover:text-blue-400 transition-colors">
                        {s.title || s.original_name || s.name || s.original_title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-zinc-400 text-sm capitalize bg-zinc-700 px-2 py-1 rounded-full">
                          {s.media_type}
                        </span>
                        {s.release_date && (
                          <span className="text-zinc-400 text-sm">
                            {s.release_date.split('-')[0]}
                          </span>
                        )}
                      </div>
                    </div>
                    <i className="ri-arrow-right-s-line text-zinc-400 text-xl group-hover:text-blue-400 transition-colors"></i>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <i className="ri-search-line text-4xl text-zinc-500 mb-3"></i>
                <p className="text-zinc-400">No results found</p>
                <p className="text-zinc-500 text-sm mt-1">Try different keywords</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Topnav;
