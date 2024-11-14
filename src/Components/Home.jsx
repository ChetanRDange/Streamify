import { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
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
            <Sidenav />
            <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
                <Topnav />
                <Header data={wallpepar} />

                <div className="  flex justify-between p-1 pr-3 pl-3 mt-2 ">
                    <h1 className="text-3xl mb-1 font-semibold text-zinc-400">
                        Trending
                    </h1>

                    <DropDown title="Filter" options={["tv", "movie", "all"]} func={((e) =>setcategory(e.target.value))} />

                </div>
                <HorizontalCards data={trending} func={setcategory} />
            </div>

        </>
    ) : < Loading/>
}
export default Home;

