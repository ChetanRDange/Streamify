import { Link, useNavigate } from "react-router-dom";
import React from 'react';

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="flex relative lg:h-screen  flex-col">
            <Link
                onClick={() => navigate(-1)}
                className="hover:text-[#6556CD] absolute top-5 left-4 sm:left-9 text-2xl sm:text-4xl bg-zinc-900 ri-arrow-left-line">
            </Link>

            <div className="bg-zinc-900 gap-6 lg:gap-[15%] sm:h-[150vh] w-screen min-h-screen flex flex-col lg:flex-row items-center p-6 lg:p-10 text-white">
                {/* Image Section */}
                <div className="flex-shrink-0">
                    <img
                        className="object-cover w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto mx-auto lg:ml-10"
                        src="/photo.jpeg"
                        alt="Chetan"
                    />
                </div>

                {/* Content Section */}
                <div className="flex flex-col items-center lg:items-start w-full text-center lg:text-left">
                    {/* Header Section with Icons */}
                    <div className="flex items-center justify-center lg:justify-start w-full max-w-4xl">
                        <div className="text-2xl sm:text-4xl flex gap-4 sm:gap-6 mt-4">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="tel:8459011161"
                                aria-label="Phone"
                                className="hover:text-blue-400">
                                <i className="ri-smartphone-line"></i>
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:dangechetan3@gmail.com?subject=Hello&body=I%20hope%20this%20finds%20you%20well!"
                                aria-label="Email"
                                className="hover:text-blue-600">
                                <i className="ri-mail-line"></i>
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/chetan-dange/"
                                aria-label="LinkedIn"
                                className="hover:text-blue-500">
                                <i className="ri-linkedin-fill"></i>
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/chetanRDange/"
                                aria-label="GitHub"
                                className="hover:text-blue-400">
                                <i className="ri-github-line"></i>
                            </a>
                        </div>
                    </div>

                    {/* About Content */}
                    <div className="max-w-3xl mt-6 sm:mt-8 space-y-6">
                        <h1 className="text-3xl sm:text-5xl font-bold">About Me</h1>
                        <p className="text-sm sm:text-lg leading-relaxed">
                            Hi, I'm <span className="font-semibold">Chetan</span>. I'm a software engineer passionate about technology and design. Currently, I'm working on a project called <span className="font-semibold">Streamify</span>, a React web app that lets users stream movies, TV shows, and music. It features new movie releases, with trailers available to watch. Built with Axios for API integration and Redux for state management, it ensures a smooth and engaging streaming experience.
                        </p>
                        <div className="flex flex-col items-start space-y-2">
                            <div>Email: <a href="mailto:dangechetan3@gmail.com" className="hover:underline">dangechetan3@gmail.com</a></div>
                            <div>Mobile: <a href="tel:8459011161" className="hover:underline">8459011161</a></div>
                            <div>LinkedIn: <a href="https://www.linkedin.com/in/chetan-dange/" className="hover:underline">linkedin.com/in/chetan-dange</a></div>
                            <div>GitHub: <a href="https://github.com/chetanRDange/" className="hover:underline">github.com/ChetanRDange</a></div>
                        </div>
                    </div>

                    {/* Decorative Separator */}
                    <div className="border-t border-zinc-600 w-full max-w-2xl mt-6 sm:mt-10"></div>

                    {/* Additional Skills Section */}
                    <div className="max-w-3xl mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                        <h2 className="text-2xl sm:text-4xl font-semibold">Skills</h2>
                        <p className="text-sm sm:text-lg">
                            Proficient in <span className="text-blue-400 font-medium">Front-End Technology</span> and Expert in <span className="text-blue-400 font-medium">React.js</span>, <span className="text-blue-400 font-medium">Redux</span>, <span className="text-blue-400 font-medium">API</span>, <span className="text-blue-400 font-medium">JavaScript</span>, and exploring the full MERN stack.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
