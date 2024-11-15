import notfound from "../../public/Ghost.gif"
import React from 'react';


const Notfound = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black">
            <img
                src={notfound}
                alt="Loading animation"
                className="w-[50%] object-cover"
            />
        </div>
    );
};

export default Notfound;
