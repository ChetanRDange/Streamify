import React from "react";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "../utils/axios"
import InfiniteScroll from "react-infinite-scroll-component"
import Topnav from "./partials/Topnav"
import Cards from "./partials/Cards"
import BottomNav from "./partials/BottomNav"
import MobileMenu from "./partials/MobileMenu"
import Loading from "./Loading"




const People = () => {

    const navigate = useNavigate()
    const [category, setcategory] = useState("popular")
    const [person, setperson] = useState([])
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    document.title = "Streamify | person shows " + category.toUpperCase()



    const GetPerson = async () => {
        try {
            const { data } = await axios.get(`/person/${category}?page=${page}`)
            if (data.results.length > 0) {
                // setperson(data.results)
                setperson((prevState) => [...prevState, ...data.results])
                setpage(page + 1)
            }
            else {
                sethasMore(false)
            }
        }
        catch (error) {
            console.log("Error: ", error)
        }
    }

    const refreshhandler = () => {
        if (person.length === 0) {
            GetPerson()
        } else {
            setpage(1)
            setperson([])
            GetPerson()
        }
    }


    useEffect(() => {
        refreshhandler()
    }, [category])


    return person.length > 0 ? (
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
                                People
                            </h1>
                            <p className="text-sm text-zinc-500">
                                Popular celebrities
                            </p>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="space-y-3">
                        <Topnav />
                    </div>
                </div>
            </div>

            {/* People Grid with Infinite Scroll */}
            <InfiniteScroll
                dataLength={person.length}
                next={GetPerson}
                hasMore={hasMore}
                loader={
                    <div className="flex justify-center items-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6556CD]"></div>
                        <span className="ml-3 text-zinc-400">Loading more people...</span>
                    </div>
                }
                endMessage={
                    <div className="text-center py-8">
                        <p className="text-zinc-500">You have seen all popular people!</p>
                    </div>
                }
            >
                <Cards data={person} title="person" />
            </InfiniteScroll>

            {/* Bottom Navigation */}
            <BottomNav />
        </div>
    ) : <Loading />



}
export default People;