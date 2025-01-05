import React from 'react';
import { Link } from "react-router-dom";
import noimage from "../../../public/no_images.png";

function Cards({ data, title }) {
    return (
        <div className="flex flex-wrap justify-center w-full min-h-screen px-4 py-8 bg-[#1F1E24]">
            {data.map((c, i) => (
                <Link
                    to={`/${c.media_type || title}/details/${c.id}`}
                    className="relative w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[18%] p-2 hover:scale-105 transition-transform"
                    key={i}
                >
                    <img
                        className="rounded-lg shadow-lg h-[40vh] md:h-[50vh] object-cover w-full"
                        src={
                            c.poster_path || c.backdrop_path || c.profile_path
                                ? `https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`
                                : noimage
                        }
                        alt={c.name || c.title || "Image"}
                    />
                    <h1 className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 mt-3 font-semibold truncate">
                        {c.name || c.title || c.original_title || c.original_name}
                    </h1>
                    {c.vote_average && (
                        <div className="text-white absolute bottom-4 right-4 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center bg-yellow-600">
                            {(c.vote_average * 10).toFixed()}<sup>%</sup>
                        </div>
                    )}
                </Link>
            ))}
        </div>
    );
}

export default Cards;
