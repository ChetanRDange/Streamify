import { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import React from 'react';

import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import DropDown from "./partials/Dropdown";
import HorizontalCards from "./partials/HorizontalCards"
import Loading from "./Loading";
const Home = () => {
    document.title = "Streamify | HomePage  "
    const [wallpepar, setwallpepar] = useState(null);
    const [trending, settrending] = useState(null);
    const [category, setcategory] = useState("all");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); 

    // Function to toggle the drawer state
    const toggleDrawer = () => {
        setIsDrawerOpen((prev) => !prev);
    };


    //this give you a header wallpepar
    const GetHeaderWallpepar = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`)
            let reamdomdata = await data.results[(Math.random() * data.results.length).toFixed()];
            setwallpepar(reamdomdata)
        }
        catch (error) {
            console.log("Error: ", error)
        }
    }



    const GetTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`)
            settrending(data.results)
        }
        catch (error) {
            console.log("Error: ", error)
        }
    }

    useEffect(() => {
        GetTrending();
        !wallpepar && GetHeaderWallpepar();
    }, [category])



    return wallpepar && trending ? (
        <>

            {/* Drawer toggle button */}
            <button
                className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md shadow-md 2xl:hidden"
                onClick={toggleDrawer}
            >
                {isDrawerOpen ? "Close Menu" : "Open Menu"}
            </button>

            {/* Sidenav with drawer logic */}
            <div
                className={`fixed top-0 left-0 h-full z-40 bg-gray-900 transition-transform duration-300 ease-in-out ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"
                    } 2xl:translate-x-0 2xl:relative 2xl:w-[20%]`}
            >
                <Sidenav />
            </div>


            <div className="w-[100%] h-full overflow-auto overflow-x-hidden">
                <Topnav />
                <Header data={wallpepar} />

                <div className="  flex justify-between p-1 pr-3 pl-3 mt-2 ">
                    <h1 className="text-3xl mb-1 font-semibold text-zinc-400">
                        Trending
                    </h1>

                    <DropDown title="Filter" options={["tv", "movie", "all"]} func={((e) => setcategory(e.target.value))} />

                </div>
                <HorizontalCards data={trending} func={setcategory} />
            </div>

        </>
    ) : < Loading />
}
export default Home;

