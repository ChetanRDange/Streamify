import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
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
        <div className="w-full min-h-screen bg-[#1F1E24] text-white">
            {/* Header Section */}
            <div className="px-4 py-6 flex flex-wrap  justify-between
              items-center gap-4">
                <h1 className="text-2xl font-semibold text-zinc-400 flex items-center">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer mr-2"
                    ></i>
                    Popular
                </h1>

                {/* Navigation Section */}
                <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-4">
                    <Topnav />
                    <Dropdown
                        title="Category"
                        options={["tv", "movie"]}
                        func={(e) => setCategory(e.target.value)}
                    />
                </div>

            </div>

            {/* Popular Cards with Infinite Scroll */}
            <InfiniteScroll
                dataLength={popular.length}
                next={getPopular}
                hasMore={hasMore}
                loader={<h1 className="text-center text-lg font-medium">Loading...</h1>}
                className="px-4"
            >
                <Cards data={popular} title={category} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
};

export default Popular;
