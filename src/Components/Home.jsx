import { useEffect, useState } from "react";
import React from "react";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import DropDown from "./partials/Dropdown";
import HorizontalCards from "./partials/HorizontalCards";
import BottomNav from "./partials/BottomNav";
import MobileMenu from "./partials/MobileMenu";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Home = () => {
    document.title = "Streamify | Discover Movies & TV Shows"
    const [featuredMovie, setFeaturedMovie] = useState(null);
    const [trending, setTrending] = useState(null);
    const [popular, setPopular] = useState(null);
    const [upcoming, setUpcoming] = useState(null);
    const [topRated, setTopRated] = useState(null);
    const [category, setCategory] = useState("all");

    // Get featured movie for hero section
    const GetFeaturedMovie = async () => {
        try {
            const { data } = await axios.get(`/trending/movie/day`)
            let randomData = data.results[Math.floor(Math.random() * data.results.length)];
            setFeaturedMovie(randomData)
        }
        catch (error) {
            console.log("Error: ", error)
        }
    }

    const GetTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`)
            setTrending(data.results.slice(0, 10))
        }
        catch (error) {
            console.log("Error: ", error)
        }
    }

    const GetPopular = async () => {
        try {
            const { data } = await axios.get(`/movie/popular`)
            setPopular(data.results.slice(0, 10))
        }
        catch (error) {
            console.log("Error: ", error)
        }
    }

    const GetUpcoming = async () => {
        try {
            const { data } = await axios.get(`/movie/upcoming`)
            setUpcoming(data.results.slice(0, 10))
        }
        catch (error) {
            console.log("Error: ", error)
        }
    }

    const GetTopRated = async () => {
        try {
            const { data } = await axios.get(`/movie/top_rated`)
            setTopRated(data.results.slice(0, 10))
        }
        catch (error) {
            console.log("Error: ", error)
        }
    }

    useEffect(() => {
        GetTrending();
        !featuredMovie && GetFeaturedMovie();
        !popular && GetPopular();
        !upcoming && GetUpcoming();
        !topRated && GetTopRated();
    }, [category])



    return featuredMovie && trending ? (
        <div className="w-full min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 pb-20 md:pb-0 overflow-x-hidden">
            {/* Mobile Menu - Only show on mobile */}
            <div className="md:hidden">
                <MobileMenu />
            </div>

            {/* Desktop Sidebar - Only show on desktop */}
            <div className="hidden md:block fixed left-0 top-0 h-full w-64 bg-zinc-900 border-r border-zinc-700 z-40">
                <div className="p-6">
                    <div className="flex items-center mb-8">
                        <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-3">
                            <i className="ri-tv-fill text-xl text-white"></i>
                        </div>
                        <h1 className="text-xl font-bold text-white">Streamify</h1>
                    </div>

                    <nav className="space-y-2">
                        <Link to="/" className="flex items-center py-3 px-4 rounded-xl text-white bg-blue-600 font-medium">
                            <i className="ri-home-fill mr-3 text-lg"></i>
                            Home
                        </Link>
                        <Link to="/trending" className="flex items-center py-3 px-4 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 font-medium">
                            <i className="ri-fire-line mr-3 text-lg"></i>
                            Trending
                        </Link>
                        <Link to="/movie" className="flex items-center py-3 px-4 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 font-medium">
                            <i className="ri-movie-line mr-3 text-lg"></i>
                            Movies
                        </Link>
                        <Link to="/tv" className="flex items-center py-3 px-4 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 font-medium">
                            <i className="ri-tv-line mr-3 text-lg"></i>
                            TV Shows
                        </Link>
                        <Link to="/people" className="flex items-center py-3 px-4 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 font-medium">
                            <i className="ri-team-line mr-3 text-lg"></i>
                            People
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Main Content with proper responsive layout */}
            <div className="w-full ml-0 md:ml-64">
                {/* Top Navigation */}
                <div className="px-4 md:px-8 py-3 bg-gradient-to-b from-black/50 to-transparent relative z-10">
                    <Topnav />
                </div>

                {/* Featured Movie Hero Section */}
                <div className="relative -mt-16 pt-16">
                    <Header data={featuredMovie} />
                </div>

                {/* Quick Access Categories - Mobile Only */}
                <div className="px-4 md:px-8 mt-8 md:hidden">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-white">Explore</h2>
                        <Link to="/trending" className="text-blue-400 text-sm font-medium">
                            View All
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <Link to="/movie" className="bg-gradient-to-r from-red-600 to-red-700 p-4 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                                <i className="ri-movie-2-line text-2xl text-white mb-1"></i>
                                <p className="text-white font-semibold">Movies</p>
                            </div>
                        </Link>
                        <Link to="/tv" className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                                <i className="ri-tv-line text-2xl text-white mb-1"></i>
                                <p className="text-white font-semibold">TV Shows</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Trending Now Section */}
                <div className="px-4 md:px-8 mb-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div className="flex items-center gap-2">
                            <i className="ri-fire-line text-red-500 text-xl"></i>
                            <h2 className="text-2xl md:text-3xl font-bold text-white">Trending Now</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <DropDown
                                title="Filter"
                                options={["all", "movie", "tv"]}
                                func={(e) => setCategory(e.target.value)}
                            />
                        </div>
                    </div>
                    <HorizontalCards data={trending} />
                </div>

                {/* Popular Movies Section */}
                {popular && (
                    <div className="px-4 md:px-8 mb-8">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-2">
                                <i className="ri-star-line text-yellow-500 text-xl"></i>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Popular Movies</h2>
                            </div>
                            <Link to="/popular" className="text-blue-400 text-sm font-medium hover:text-blue-300">
                                View All →
                            </Link>
                        </div>
                        <HorizontalCards data={popular} />
                    </div>
                )}

                {/* Upcoming Movies Section */}
                {upcoming && (
                    <div className="px-4 md:px-8 mb-8">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-2">
                                <i className="ri-calendar-line text-green-500 text-xl"></i>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Coming Soon</h2>
                            </div>
                            <Link to="/movie" className="text-blue-400 text-sm font-medium hover:text-blue-300">
                                View All →
                            </Link>
                        </div>
                        <HorizontalCards data={upcoming} />
                    </div>
                )}

                {/* Top Rated Section */}
                {topRated && (
                    <div className="px-4 md:px-8 mb-8">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-2">
                                <i className="ri-award-line text-purple-500 text-xl"></i>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Top Rated</h2>
                            </div>
                            <Link to="/movie" className="text-blue-400 text-sm font-medium hover:text-blue-300">
                                View All →
                            </Link>
                        </div>
                        <HorizontalCards data={topRated} />
                    </div>
                )}

                {/* Discover More Section - Mobile Only */}
                <div className="px-4 md:px-8 mb-8 md:hidden">
                    <h2 className="text-xl font-bold text-white mb-4">Discover More</h2>
                    <div className="grid grid-cols-1 gap-3">
                        <Link to="/people" className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-xl flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <i className="ri-user-star-line text-2xl text-white"></i>
                                <div>
                                    <p className="text-white font-semibold">Popular People</p>
                                    <p className="text-indigo-200 text-sm">Actors, Directors & More</p>
                                </div>
                            </div>
                            <i className="ri-arrow-right-s-line text-white text-xl"></i>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation for Mobile */}
            <BottomNav />
        </div>
    ) : <Loading />
}
export default Home;

