import {Link, useNavigate } from "react-router-dom"
import React from 'react';

const About = () => {


    
    const navigate = useNavigate()
    return (
        <div className="flex relative  flex-col">
              <Link
              onClick={() => navigate(-1)} 
              className="hover:text-[#6556CD] absolute top-5 left-9 text-4xl  bg-zinc-900  ri-arrow-left-line"></Link>
 
            <div className=" bg-zinc-900 gap-[15%] w-screen h-full  w-full text-white flex  items-center p-10">

                <div>
                    <img className="object-cover ml-10 h-[50vh] " src="../../public/photo.jpeg" alt="" />
                </div>

                {/* Header Section with Icons */}
                <div>

                    <div className="flex items-center justify-between w-full max-w-4xl">
                        <div className="text-4xl flex gap-6 mt-4">
                            <a target="_blank" rel="noopener noreferrer" href="tel:8459011161" aria-label="Website" className="hover:text-blue-400">
                                <i className="ri-smartphone-line"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="mailto:dangechetan3@gmail.com?subject=Hello&body=I%20hope%20this%20finds%20you%20well!" aria-label="Facebook" className="hover:text-blue-600">
                                <i className="ri-mail-line"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chetan-dange/" aria-label="LinkedIn" className="hover:text-blue-500">
                                <i className="ri-linkedin-fill"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/chetanRDange/" aria-label="Twitter" className="hover:text-blue-400">
                                <i className="ri-github-line"></i>
                            </a>
                        </div>
                    </div>

                    {/* About Content */}
                    <div className="text-center max-w-3xl mt-8 space-y-6">
                        <h1 className="text-5xl font-bold">About Me</h1>
                        <p className="text-lg leading-relaxed">
                            Hi, I'm <span className="font-semibold">Chetan</span>. I'm a software engineer passionate about technology and design. Currently, I'm working on a project called <span className="font-semibold">Streamify</span> is a React web app that lets users stream movies, TV shows, and music. It features new movie releases, with trailers available to watch. Built with Axios for API integration and Redux for state management, it ensures a smooth and engaging streaming experience.
                        </p>
                        <div className="flex flex-col justify-start">
                            <div>Email :- <a href="mailto:dangechetan3@gmail.com?subject=Hello&body=I%20hope%20this%20finds%20you%20well!">dangechetan3@gmail.com</a></div>
                            <div>Mobile No:- <a href="tel:8459011161">8459011161</a></div>
                            <div>Linkedin:- <a href="https://www.linkedin.com/in/chetan-dange/"> linkedin.com/in/ chetan-dange </a></div>
                            <div>Git hub:- <a href="https://github.com/chetanRDange/">github.com/ChetanRDange </a> </div>
                        </div>

                    </div>

                    {/* Decorative Separator */}
                    <div className="border-t border-zinc-600 w-full max-w-2xl mt-10"></div>

                    {/* Additional Skills Section */}
                    <div className="text-center max-w-3xl mt-8 space-y-6">
                        <h2 className="text-4xl font-semibold">Skills</h2>
                        <p className="text-lg">
                            Proficient in <span className="text-blue-400 font-medium">Frond End Technology</span> and Expert in <span className="text-blue-400 font-medium">React js</span>, <span className="text-blue-400 font-medium">Redux</span>, <span className="text-blue-400 font-medium">Api</span>, <span className="text-blue-400 font-medium">Java Script</span>, and exploring the full MERN stack.
                        </p>

                    </div>

                </div>
            </div>


        </div>


    )
}

export default About;
