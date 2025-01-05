import { useState, useEffect } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import Loading from "./Loading";

const Tvshows = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    document.title = "Streamify | Tv shows " + category.toUpperCase();

    const GetTv = async () => {
        try {
            const { data } = await axios.get(`/tv/${category}?page=${page}`);
            if (data.results.length > 0) {
                settv((prevState) => [...prevState, ...data.results]);
                setpage(page + 1);
            } else {
                sethasMore(false);
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const refreshhandler = () => {
        if (tv.length === 0) {
            GetTv();
        } else {
            setpage(1);
            settv([]);
            GetTv();
        }
    };

    useEffect(() => {
        refreshhandler();
    }, [category]);

    return tv.length > 0 ? (
        <div className="w-screen h-screen">
            <div className="px-[5%] w-full md:flex items-center justify-between mb-5 mt-3">
                <h1 className="text-2xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line"
                    ></i>
                    Tv Shows{" "}
                    <small className="ml-2 text-sm text-zinc-600">({category})</small>
                </h1>
                <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 w-full sm:w-[80%]">
                    <Topnav />
                    <Dropdown
                        title="Category"
                        options={["on_the_air", "popular", "top_rated", "airing_today"]}
                        func={(e) => setcategory(e.target.value)}
                    />
                </div>
            </div>

            <InfiniteScroll
                dataLength={tv.length}
                next={GetTv}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
            >
                <Cards data={tv} title="tv"></Cards>
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
};

export default Tvshows;
