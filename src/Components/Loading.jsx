import AlertComponent from './AlertComponent';
import React from 'react';

const Loading = () => {
    return (
        <>

           <AlertComponent></AlertComponent>
           
            <div className="w-screen h-screen flex justify-center items-center bg-black">
                <img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3o2ZHI3dXNsaWw0d2Vnc2NscTg0NmhhbXZsZWtqOW1memJ2Mmd4NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RgzryV9nRCMHPVVXPV/giphy.gif"
                    alt="Loading animation"
                    className="w-[50%] h-screen object-cover"
                />
            </div>

        </>
    );
};

export default Loading;
