import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadperson, removeperson } from "../Store/actions/personAction";
import Loading from "../Components/Loading"
import HorizontalCards from "./partials/HorizontalCards"
import Dropdown from "./partials/Dropdown"


const PersonDetails = () => {
    const { pathname } = useLocation();
    const { info } = useSelector(state => state.person)
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch();
    const [category, setcategory] = useState("movie")
    useEffect(() => {
        dispatch(asyncloadperson(id))
        return () => {
            dispatch(removeperson())
        }
    }, [id])

    console.log(info)
    return info ? <div className="px-[10%] w-screen bg-[#1F1E24] h-[150vh] overflow-y-auto">

        {/* part 1 navigation*/}
        <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl  ">

            <Link
                onClick={() => navigate(-1)}
                className="hover:text-[#6556CD]  ri-arrow-left-line"></Link>


        </nav>

        <div className="w-full flex ">
            {/* {part2 :- left poster and details} */}
            <div className="w-[20%]">
                <img
                    className="rounded-lg shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[35vh] object-cover"
                    src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
                    alt="" />
                <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
                {
                    // links
                }
                <div className="text-2xl text-white flex gap-x-5">

                    <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
                        <i className="ri-earth-fill"></i>
                    </a>
                    <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}>
                        <i className="ri-facebook-circle-fill"></i>
                    </a>
                    <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}>
                        <i className="ri-instagram-fill"></i>
                    </a>
                    <a target="_blank" href={`https://x.com/${info.externalid.twitter_id}`}>
                        <i className="ri-twitter-x-fill"></i>
                    </a>
                    {console.log(info)}


                </div>

                {/* {personal info} */}
                <h1 className="text-2xl text-zinc-400 font-semibold my-5">
                    Person Info
                </h1>
                <h1 className="text-lg text-zinc-400 font-semibold">
                    Known For
                </h1>
                <h1 className=" text-zinc-400 ">
                    {info.detail.known_for_department}
                </h1>

                <h1 className="text-lg text-zinc-400 font-semibold mt-3">
                    Gender
                </h1>
                <h1 className=" text-zinc-400 ">
                    {info.detail.gender === 2 ? "Male" : "Female"}
                </h1>
                <h1 className="text-lg text-zinc-400 font-semibold mt-3">
                    Brithday
                </h1>
                <h1 className=" text-zinc-400 ">
                    {info.detail.birthday}
                </h1>
                <h1 className="text-lg text-zinc-400 font-semibold mt-3">
                    Deathday
                </h1>
                <h1 className=" text-zinc-400 ">
                    {info.detail.deathday ? info.detail.deathday : "Still Alive"}
                </h1>
                <h1 className="text-lg text-zinc-400 font-semibold mt-3">
                    Place of the death
                </h1>
                <h1 className=" text-zinc-400 ">
                    {info.detail.place_of_birth}
                </h1>
                <h1 className="text-lg text-zinc-400 font-semibold mt-3">
                    also known as
                </h1>
                <h1 className=" text-zinc-400 ">
                    {info.detail.also_known_as}
                </h1>

            </div>
            {console.log(info)}
            {/* {
                part 3 right deatils and information} */}

            <div className="w-[80%] ml-[5%] ">
                <h1 className="text-6xl text-zinc-400 font-semibold font-black my-5">
                    {info.detail.name}
                </h1>
                <h1 className="text-xl text-zinc-400 font-semibold">
                    Biography
                </h1>
                <p className="text-zinc-400 mt-3">{info.detail.biography}</p>
                <h1 className="mt-5 text-lg text-zinc-400 font-semibold">
                    Known For
                </h1>
                <HorizontalCards data={info.combinedCredits.cast} />

                <div className="w-full flex justify-between ">
                    <h1 className="mt-5 text-xl text-zinc-400 font-semibold">
                        Acting
                    </h1>
                    <Dropdown title="Category"
                        options={["tv", "movie"]}
                        func ={(e) => setcategory(e.target.value)} >
                    </Dropdown>
                </div>

                <div className="list-disc text-zinc-400 w-full mt-5 h-[50vh] overflow-x-hidden overflow-y-auto shadow-xl border-zinc-700 p-5 border-2 shadow-[rgba(255,255,255,.3)]">

                    {info[category + "Credits"].cast.map((c, i) => (
                        <li key={i} className="hover:text-white duration-300 mb-5 cursor-pointer">
                            <Link to={`/${category}/details/${c.id}`} >
                                <span className="inline"> {c.name ||
                                    c.original_name ||
                                    c.original_title ||
                                    c.title} </span>
                                <span className="block mt-5 ml-2"> {c.character && `Character Name:${c.character}`}</span>
                            </Link>
                        </li>
                    ))}


                </div>

            </div>
        </div>
    </div> : <Loading />

}
export default PersonDetails;