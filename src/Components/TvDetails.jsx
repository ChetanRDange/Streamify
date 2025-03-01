import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadtv, removetv } from "../Store/actions/tvActions";
import Loading from "../Components/Loading";
import HorizontalCards from "./partials/HorizontalCards";

const TvDetails = () => {
  const { pathname } = useLocation();
  const { info } = useSelector((state) => state.tv);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "top 10% center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen min-h-screen px-4 sm:px-6 lg:px-16"
    >
      {/* Navigation */}
      <nav className="w-full h-[10vh] text-zinc-100 flex items-center gap-4 sm:gap-6 text-base sm:text-lg lg:text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
          <i className="ri-earth-fill"></i>
        </a>
        <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>
          IMDb
        </a>
      </nav>

      {/* Poster and Details */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 mt-6">
        <img
          className="rounded-lg shadow-lg h-64 md:h-[50vh] w-auto object-cover"
          src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`}
          alt=""
        />
        <div className="content text-white text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-black">
            {info.detail.name || info.detail.original_name || info.detail.original_title || info.detail.title}
            <small className="text-xl md:text-2xl font-bold text-zinc-200">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>
          <div className="flex flex-wrap mt-3 mb-5 items-center justify-center md:justify-start gap-4">
            <span className="text-white rounded-full text-xl font-semibold w-10 h-10 flex justify-center items-center bg-yellow-600">
              {(info.detail.vote_average * 10).toFixed()}<sup>%</sup>
            </span>
            <h1 className="w-[60px] font-semibold text-lg md:text-2xl">User Score</h1>
            <h1>{info.detail.first_air_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            {info.detail.runtime && <h1>{info.detail.runtime} min</h1>}
          </div>
          <h1 className="text-lg md:text-xl font-semibold italic text-zinc-200">{info.detail.tagline}</h1>
          <h1 className="text-lg md:text-2xl mb-3 mt-5">Overview</h1>
          <p>{info.detail.overview}</p>
          <h1 className="text-lg md:text-2xl mb-3 mt-5">TV Translated</h1>
          <p className="mb-10">{info.translations.join(", ")}</p>
          <Link
            className="p-3 bg-[#6556CD] rounded-lg inline-block"
            to={`${pathname}/trailer`}
          >
            <i className="text-xl mr-2 ri-play-fill"></i>Play Trailer
          </Link>
        </div>
      </div>

      {/* Available on Platform */}
      <div className="w-full mt-10 flex flex-col gap-5">
        {info.watchproviders?.flatrate && (
          <div className="flex flex-wrap gap-4 items-center text-white">
            <h1 className="text-lg font-bold">Available On Platform</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                title={w.provider_name}
                className="w-12 h-12 object-cover rounded-md"
                key={i}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {/* Rent */}
        {info.watchproviders?.rent && (
          <div className="flex flex-wrap gap-4 items-center text-white">
            <h1 className="text-lg font-bold">Available On Rent</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                title={w.provider_name}
                className="w-12 h-12 object-cover rounded-md"
                key={i}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {/* Buy */}
        {info.watchproviders?.buy && (
          <div className="flex flex-wrap gap-4 items-center text-white">
            <h1 className="text-lg font-bold">Available To Buy</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                title={w.provider_name}
                className="w-12 h-12 object-cover rounded-md"
                key={i}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* Seasons */}
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-2xl md:text-3xl font-bold text-white">Seasons</h1>
      <div className="w-full flex flex-wrap gap-6 p-5">
        {info.detail.seasons.length > 0 ? (
          info.detail.seasons.map((s, i) => (
            <div key={i} className="w-32 md:w-40">
              <img
                className="rounded-lg shadow-lg h-40 md:h-60 object-cover"
                src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
                alt=""
              />
              <h1 className="text-lg md:text-xl text-zinc-300 mt-2 font-semibold text-center">
                {s.name || s.title || s.original_title || s.original_name}
              </h1>
            </div>
          ))
        ) : (
          <h1 className="text-2xl text-white font-black text-center mt-5">Nothing to show</h1>
        )}
      </div>

      {/* Recommendations */}
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-2xl md:text-3xl font-bold text-white">Recommendations & Similar Stuff</h1>
      <HorizontalCards data={info.recommendations.length > 0 ? info.recommendations : info.similar} />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default TvDetails;
