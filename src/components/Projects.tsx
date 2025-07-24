import React from "react";
import snakefeet from "../assets/snakefeet.png";
import ohmengine from "../assets/ohmengine.png";
import itchio from "../assets/itchlogo.png";
import yalemedicine from "../assets/yalemedlogo.png";
import grassroot from "../assets/grassroot.png";
import { Link } from "react-router-dom";
import jhuapl from "../assets/jhuapl.png";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const Projects = () => {
    const [ref, visible] = useFadeInOnScroll();

    const projects = [
        {
            date: "January 2025 - July 2025",
            img: ohmengine,
            title: "Ohm Engine",
            desc: "A lightweight and flexible 2D game engine built by me, from scratch, with Dlang. It is fully functional and open source, with a focus on performance and ease of use. I've already used it for several projects, all linked below.",
            link: "https://github.com/Maxohm491/OhmEngine",
            link_name: "Code",
            third_link: "https://www.youtube.com/watch?v=rEVy8WC1mtE",
            third_link_name: "Demo"
        },
        {
            date: "April 2024 - May 2025",
            img: yalemedicine,
            title: "OBE Clinical Study",
            desc: " I coauthored a peer-reviewed publication with a team at the Yale School of Medicine. We simulated out-of-body experiences (a common hallucination) in virtual reality.",
            link: "https://github.com/Maxohm491/OBEProject",
            link_name: "Code",
            second_link: "../assets/files/Poster.pdf",
            second_link_name: "Poster"
        },
        {
            date: "",
            img: itchio,
            title: "Game Jams",
            desc: "I love participating in game jams as often as possible, with a team or alone! Most recently, my game was ranked in the top 3% of 1930 submissions in the Ludum Dare 56 game jam.",
            link: "https://kirbyborgir.itch.io/",
            link_name: "Live Games",
        },
        {
            date: "July 2023 - May 2024",
            img: snakefeet,
            title: "Snakefeet Studios",
            desc: " I programmed at 11 person indie game studio, using Unity and focusing mainly on scalable multiplayer systems. ",
            link: "https://www.snakefeet.io/",
            link_name: "Website"
            // route: "/projects/dlang-engine",
            // route_name: "Test",
        },
        {
            date: "July 2022 - August 2022",
            img: jhuapl,
            title: "JHUAPL Internship",
            desc: " I completed an 8-week internship at the Johns Hopkins University Applied Physics Laboratory, where I worked in the IT Service Desk division and developed an internal log summarization tool. ",
            link: "https://www.jhuapl.edu/",
            link_name: "Info",
        }
        // {
        //     date: "May 2024 - Present",
        //     img: grassroot,
        //     title: "Grassroot",
        //     desc: " I helped develop an iOS app for a startup, designed to streamline scheduling and business management for small home service companies. ",
        //     link: "https://www.maxohm.com",
        //     link_name: "Website",
        // }
    ];


    return (
        <section
            ref={ref}
            className={`bg-primary text-black px-3 sm:px-5 py-16 sm:py-32 transition-opacity duration-700 ${visible ? "fade-in" : "opacity-0 translate-y-8"}`}
            id="projects"
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:justify-between">
                <h2 className="text-3xl sm:text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-accent pb-2 fade-in">
                    My Work
                </h2>
            </div>
            <div className="projects container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {projects.map((project, i) => (
                    <div
                        className="relative flex flex-col justify-between items-center bg-white rounded-xl shadow-lg fade-in border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-[#fe93de] z-10 hover:z-20 will-change-transform"
                        key={i}
                        style={{ animationDelay: `${i * 0.15 + 0.2}s` }}
                    >
                        <div className="flex justify-center items-center w-full bg-gray-100" style={{ minHeight: "8rem" }}>
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-auto h-24 sm:h-32 max-h-40 max-w-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col p-5 h-full w-full">
                            <p className="text-lg sm:text-xl font-bold text-black mb-1">{project.title}</p>
                            <p className="text-xs sm:text-sm text-gray-500 mb-2">{project.date}</p>
                            <p className="py-2 text-left text-black flex-1">{project.desc}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:bg-[#fe93de] hover:border-[#fe93de] bg-accent border-2 border-accent rounded text-black px-4 py-2 font-bold transition"
                                    >
                                        {project.link_name}
                                    </a>
                                )}
                                {project.third_link && (
                                    <a
                                        href={project.third_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:bg-[#fe93de] hover:border-[#fe93de] bg-accent border-2 border-accent rounded text-black px-4 py-2 font-bold transition"
                                    >
                                        {project.third_link_name}
                                    </a>
                                )}
                                {project.second_link && (
                                    <a
                                        href={require("../assets/files/Poster.pdf")}
                                        download="Poster"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:bg-[#fe93de] hover:border-[#fe93de] bg-accent border-2 border-accent rounded text-black px-4 py-2 font-bold transition"
                                    >
                                        {project.second_link_name}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;