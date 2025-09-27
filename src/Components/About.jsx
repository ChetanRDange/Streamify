import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "./partials/BottomNav";
import MobileMenu from "./partials/MobileMenu";

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-screen pb-20 md:pb-8 bg-[#1F1E24]">
            {/* Mobile Menu */}
            <MobileMenu />

            {/* Header */}
            <div className="sticky top-0 bg-[#1F1E24] z-30 border-b border-zinc-800">
                <div className="px-4 py-4">
                    <div className="flex items-center">
                        <button
                            onClick={() => navigate(-1)}
                            className="mr-4 p-2 text-zinc-400 hover:text-[#6556CD] hover:bg-zinc-800 rounded-full transition-colors"
                        >
                            <i className="ri-arrow-left-line text-xl"></i>
                        </button>
                        <h1 className="text-xl md:text-2xl font-semibold text-white">
                            About
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="px-4 py-8 md:px-8 lg:px-12 max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
                    {/* Image Section */}
                    <div className="flex-shrink-0">
                        <img
                            className="object-cover w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl shadow-2xl"
                            src="/photo.jpeg"
                            alt="Chetan"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col w-full text-center lg:text-left text-white">
                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start gap-4 mb-6">
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/chetan-dange/"
                                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                                rel="noopener noreferrer"
                            >
                                <i className="ri-linkedin-fill text-xl"></i>
                            </a>
                            <a
                                target="_blank"
                                href="https://github.com/ChetanRDange"
                                className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                                rel="noopener noreferrer"
                            >
                                <i className="ri-github-fill text-xl"></i>
                            </a>
                            <a
                                href="mailto:dangechetan3@gmail.com"
                                className="p-3 bg-red-600 hover:bg-red-700 rounded-full transition-colors"
                            >
                                <i className="ri-mail-fill text-xl"></i>
                            </a>
                            <a
                                href="tel:8459011161"
                                className="p-3 bg-green-600 hover:bg-green-700 rounded-full transition-colors"
                            >
                                <i className="ri-phone-fill text-xl"></i>
                            </a>
                        </div>

                        {/* About Content */}
                        <div className="space-y-6">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#6556CD]">
                                About Me
                            </h1>
                            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-zinc-300">
                                Hi, I'm <span className="font-semibold text-white">Chetan</span>. I'm a software engineer passionate about technology and design. Currently, I'm working on a project called <span className="font-semibold text-[#6556CD]">Streamify</span>, a React web app that lets users stream movies, TV shows, and music. It features new movie releases, with trailers available to watch. Built with Axios for API integration and Redux for state management, it ensures a smooth and engaging streaming experience.
                            </p>

                            {/* Contact Info */}
                            <div className="bg-zinc-800 rounded-lg p-6 space-y-3">
                                <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                    <div className="flex items-center">
                                        <i className="ri-mail-line text-[#6556CD] mr-3"></i>
                                        <a href="mailto:dangechetan3@gmail.com" className="hover:text-[#6556CD] transition-colors">
                                            dangechetan3@gmail.com
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="ri-phone-line text-[#6556CD] mr-3"></i>
                                        <a href="tel:8459011161" className="hover:text-[#6556CD] transition-colors">
                                            8459011161
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="ri-linkedin-line text-[#6556CD] mr-3"></i>
                                        <a href="https://www.linkedin.com/in/chetan-dange/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6556CD] transition-colors">
                                            LinkedIn Profile
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="ri-github-line text-[#6556CD] mr-3"></i>
                                        <a href="https://github.com/chetanRDange/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6556CD] transition-colors">
                                            GitHub Profile
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Skills Section */}
                            <div className="bg-zinc-800 rounded-lg p-6">
                                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#6556CD]">Skills & Technologies</h2>
                                <div className="flex flex-wrap gap-2">
                                    {['React.js', 'Redux', 'JavaScript', 'API Integration', 'HTML/CSS', 'Tailwind CSS', 'Git', 'Responsive Design'].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-[#6556CD] text-white text-sm rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <BottomNav />
        </div>
    );
};

export default About;