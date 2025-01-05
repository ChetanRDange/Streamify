import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import React from 'react';
import axios from "../utils/axios"
import InfiniteScroll from "react-infinite-scroll-component"
import Topnav from "./partials/Topnav"
import Dropdown from "./partials/Dropdown"
import Cards from "./partials/Cards"
import Loading from "./Loading"

const Movies = () => {

    const navigate = useNavigate()
    const [category, setcategory] = useState("now_playing")
    const [movie, setmovie] = useState([])
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    document.title = "Streamify | Movies " + category.toUpperCase()

    const GetMovie = async () => {
        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`)
            if (data.results.length > 0) {
                setmovie((prevState) => [...prevState, ...data.results])
                setpage(page + 1)
            } else {
                sethasMore(false)
            }
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    const refreshhandler = () => {
        if (movie.length === 0) {
            GetMovie()
        } else {
            setpage(1)
            setmovie([])
            GetMovie()
        }
    }

    useEffect(() => {
        refreshhandler()
    }, [category])

    return movie.length > 0 ? (
        <div className="w-screen h-screen">

            <div className="px-[5%] w-full flex flex-wrap sm:flex-nowrap items-center justify-between mb-5 mt-3">
                <h1 className="text-2xl font-semibold text-zinc-400">
                    <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>Movie
                    <small className="ml-2 text-sm text-zinc-600">({category})</small>
                </h1>
                <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 w-full sm:w-[80%]">
                    <Topnav />
                    <Dropdown
                        title="Category"
                        options={["popular", "top_rated", "upcoming", "now_playing"]}
                        func={(e) => setcategory(e.target.value)}
                    />
                </div>

            </div>

            <InfiniteScroll
                dataLength={movie.length}
                next={GetMovie}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
            >
                <Cards data={movie} title="movie" />
            </InfiniteScroll>

        </div>
    ) : <Loading />

}

export default Movies;
