import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import BottomNav from "./partials/BottomNav";
import MobileMenu from "./partials/MobileMenu";
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
        <div className="w-full min-h-screen pb-20 md:pb-8">
            {/* Mobile Menu */}
            <MobileMenu />

            {/* Header */}
            <div className="sticky top-0 bg-[#1F1E24] z-30 border-b border-zinc-800">
                <div className="px-4 py-4">
                    {/* Title and Back Button */}
                    <div className="flex items-center mb-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="mr-4 p-2 text-zinc-400 hover:text-[#6556CD] hover:bg-zinc-800 rounded-full transition-colors"
                        >
                            <i className="ri-arrow-left-line text-xl"></i>
                        </button>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold text-white">
                                TV Shows
                            </h1>
                            <p className="text-sm text-zinc-500 capitalize">
                                {category.replace('_', ' ')}
                            </p>
                        </div>
                    </div>

                    {/* Search and Filter */}
                    <div className="space-y-3">
                        <Topnav />
                        <div className="flex justify-center">
                            <Dropdown
                                title="Category"
                                options={["airing_today", "on_the_air", "popular", "top_rated"]}
                                func={(e) => setcategory(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* TV Shows Grid with Infinite Scroll */}
            <InfiniteScroll
                dataLength={tv.length}
                next={GetTv}
                hasMore={hasMore}
                loader={
                    <div className="flex justify-center items-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6556CD]"></div>
                        <span className="ml-3 text-zinc-400">Loading more shows...</span>
                    </div>
                }
                endMessage={
                    <div className="text-center py-8">
                        <p className="text-zinc-500">You have seen all TV shows!</p>
                    </div>
                }
            >
                <Cards data={tv} title="tv" />
            </InfiniteScroll>

            {/* Bottom Navigation */}
            <BottomNav />
        </div>
    ) : (
        <Loading />
    );
};

export default Tvshows;
