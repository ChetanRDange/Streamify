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

const Popular = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("movie");
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    document.title = `Streamify | Popular ${category.toUpperCase()}`;

    const getPopular = async () => {
        try {
            const { data } = await axios.get(`${category}/popular?page=${page}`);
            if (data.results.length > 0) {
                setPopular((prevState) => [...prevState, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const refreshHandler = () => {
        if (popular.length === 0) {
            getPopular();
        } else {
            setPage(1);
            setPopular([]);
            getPopular();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return popular.length > 0 ? (
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
                                Popular
                            </h1>
                            <p className="text-sm text-zinc-500 capitalize">
                                {category}
                            </p>
                        </div>
                    </div>

                    {/* Search and Filter */}
                    <div className="space-y-3">
                        <Topnav />
                        <div className="flex justify-center">
                            <Dropdown
                                title="Category"
                                options={["movie", "tv"]}
                                func={(e) => setCategory(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Cards with Infinite Scroll */}
            <InfiniteScroll
                dataLength={popular.length}
                next={getPopular}
                hasMore={hasMore}
                loader={
                    <div className="flex justify-center items-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6556CD]"></div>
                        <span className="ml-3 text-zinc-400">Loading more content...</span>
                    </div>
                }
                endMessage={
                    <div className="text-center py-8">
                        <p className="text-zinc-500">You have seen all popular content!</p>
                    </div>
                }
            >
                <Cards data={popular} title={category} />
            </InfiniteScroll>

            {/* Bottom Navigation */}
            <BottomNav />
        </div>
    ) : (
        <Loading />
    );
};

export default Popular;
