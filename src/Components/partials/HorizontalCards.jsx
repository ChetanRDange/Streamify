import {Link}  from "react-router-dom"
import noimage from "../../../public/no_images.png"
const HorizontalCards = ({ data }) => {
    return (
      
            
            <div  className="w-full flex  overflow-y-hidden mb-5  p-5 ">
                {data.length > 0 ?data.map((item, i) => (
                    <Link to={`/${item.media_type}/details/${item.id}`} key={i} className="min-w-[15%] h-[37vh] bg-zinc-900 hover:scale-105 rounded-lg mr-5 mb-5">
                         <img className="w-full h-[55%] rounded-lg object-cover" src={item.backdrop_path || item.poster_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path || item.poster_path}` : noimage } alt="" />

                        <div className="text-white p-3 h-[45%] overflow-y-auto">
                            <h1 className="text-xl font-semibold ">
                                {item.title || item.original_name || item.name || item.original_title}
                            </h1>
                            <p className="  ">
                                {item.overview.slice(0, 40)}...
                                <span className="text-zinc-500">more</span>
                            </p>
                        </div>
                    </Link>
                )):
                <h1 className="text-3xl text-white font-black text-center mt-5">Nothing to show </h1>}
            </div>
        
    );
};

export default HorizontalCards;
