import React from 'react';

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header({ data }) {
  const { pathname } = useLocation();

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
        backgroundPosition: "top 10% center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        
      }}
      className="w-full h-[60vh] flex flex-col justify-end rounded-lg items-start p-[5%]"
    >
      <h1 className="w-[70%] text-5xl font-block text-white">
        {data.title || data.original_name || data.name || data.original_title}
      </h1>
      <p className="w-[70%] mt-3 mb-3 text-white">
        {data.overview.slice(0, 200)}...
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link>
      </p>
      <p className="text-white flex gap-x-1">
        <i className="ml-5 text-yellow-500 ri-megaphone-fill"></i>
        {data.release_date || "No Information"}
        <i className="text-yellow-500 ri-album-fill"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`}  className="p-4 rounded text-white bg-[#6556CD]">Watch trailer</Link>
    </div>
  );
}

export default Header;
