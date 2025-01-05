import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadperson, removeperson } from "../Store/actions/personAction";
import Loading from "../Components/Loading";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";

const PersonDetails = () => {
    const { pathname } = useLocation();
    const { info } = useSelector((state) => state.person);
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const [category, setCategory] = useState("movie");

    useEffect(() => {
        dispatch(asyncloadperson(id));
        return () => {
            dispatch(removeperson());
        };
    }, [id, dispatch]);

    return info ? (
        <div className="px-[10%] w-screen bg-[#1F1E24] h-[150vh] overflow-y-auto">
            {/* Navigation */}
            <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
                <Link
                    onClick={() => navigate(-1)}
                    className="hover:text-[#6556CD] ri-arrow-left-line"
                ></Link>
            </nav>

            <div className="w-full sm:flex">
                {/* Left Panel: Poster and Details */}
                <div className="w-full sm:w-[40%] md:w-[25%] lg:w-[20%]">
                    <img
                        className="rounded-lg shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-full h-auto object-cover"
                        src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
                        alt=""
                    />

                    <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

                    {/* Social Links */}
                    <div className="text-2xl text-white flex gap-x-5">
                        <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`} rel="noreferrer">
                            <i className="ri-earth-fill"></i>
                        </a>
                        <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`} rel="noreferrer">
                            <i className="ri-facebook-circle-fill"></i>
                        </a>
                        <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`} rel="noreferrer">
                            <i className="ri-instagram-fill"></i>
                        </a>
                        <a target="_blank" href={`https://x.com/${info.externalid.twitter_id}`} rel="noreferrer">
                            <i className="ri-twitter-x-fill"></i>
                        </a>
                    </div>



                    {/* Personal Info */}
                    <h1 className="text-2xl text-zinc-400 font-semibold my-5">Person Info</h1>
                    <div className="text-lg text-zinc-400">
                        <div>
                            <span className="font-semibold">Known For:</span> {info.detail.known_for_department}
                        </div>
                        <div>
                            <span className="font-semibold">Gender:</span> {info.detail.gender === 2 ? "Male" : "Female"}
                        </div>
                        <div>
                            <span className="font-semibold">Birthday:</span> {info.detail.birthday}
                        </div>
                        <div>
                            <span className="font-semibold">Deathday:</span> {info.detail.deathday || "Still Alive"}
                        </div>
                        <div>
                            <span className="font-semibold">Place of Birth:</span> {info.detail.place_of_birth}
                        </div>
                        <div>
                            <span className="font-semibold">Also Known As:</span> {info.detail.also_known_as.join(", ")}
                        </div>
                    </div>
                </div>

                <hr className="block sm:hidden" />

                {/* Right Panel: Additional Details */}
                <div className="w-[80%] ml-[5%]">
                    <h1 className="text-6xl text-zinc-400 font-bold my-5">{info.detail.name}</h1>
                    <div>
                        <h2 className="text-xl text-zinc-400 font-semibold">Biography</h2>
                        <p className="text-zinc-400 mt-3">{info.detail.biography}</p>
                    </div>

                    <h2 className="mt-5 text-lg text-zinc-400 font-semibold">Known For</h2>
                    <HorizontalCards data={info.combinedCredits.cast} />

                    <div className="w-full sm:flex justify-between mt-5">
                        <h2 className="text-xl text-zinc-400 font-semibold">Acting</h2>
                        <Dropdown
                            title="Category"
                            options={["tv", "movie"]}
                            func={(e) => setCategory(e.target.value)}
                        />
                    </div>

                    <div className="list-disc text-zinc-400 w-full mt-5 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-x-hidden overflow-y-auto shadow-xl border-zinc-700 p-5 border-2 shadow-[rgba(255,255,255,.3)]">
                        {info[`${category}Credits`].cast.map((c, i) => (
                            <li key={i} className="hover:text-white duration-300 mb-5 cursor-pointer">
                                <Link to={`/${category}/details/${c.id}`}>
                                    <span className="inline">{c.name || c.original_name || c.original_title || c.title}</span>
                                    {c.character && <span className="block mt-2 ml-2">Character Name: {c.character}</span>}
                                </Link>
                            </li>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    ) : (
        <Loading />
    );
};

export default PersonDetails;
