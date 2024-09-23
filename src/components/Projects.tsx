import React from "react";
import snakefeet from "../assets/snakefeet.png";
import yalemedicine from "../assets/yalemedlogo.png";
import grassroot from "../assets/grassroot.png";
import jhuapl from "../assets/jhuapl.png";

const Projects = () => {
    const projects = [
        {
            img: snakefeet,
            title: "Snakefeet Studios",
            desc: " I programmed at 11 person indie game studio, using Unity and focusing mainly on scalable multiplayer systems. ",
            link: "https://www.snakefeet.io/",
            link_name: "Website",
        },
        {
            img: yalemedicine,
            title: "OBE Clinical Study",
            desc: " I worked with an MD/MS student at the Yale School of Medicine on a clincal study. We simulated out-of-body experiences (a common hallucination) in virtual reality! ",
            link: "https://github.com/Maxohm491/OBEProject",
            link_name: "Code",
        },
        {
            img: jhuapl,
            title: "JHUAPL Internship",
            desc: " I completed an 8-week internship at the Johns Hopkins University Applied Physics Laboratory, where I worked in the IT Service Desk division and developed an internal log summarization tool. ",
            link: "https://www.jhuapl.edu/",
            link_name: "Info",
        },
        {
            img: grassroot,
            title: "Grassroot",
            desc: " I helped develop an iOS app for a startup, designed to streamline scheduling and business management for small home service companies. ",
            link: "https://www.maxohm.com",
            link_name: "Website",
        }
    ];

    return (
        <section className="bg-primary text-black px-5 py-32" id="projects">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="about-info mb-5">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                        My Work
                    </h2>

                    <p className="pb-5">
                        These are some of the projects that I've been a part of!
                    </p>
                </div>

                <div className="about-img"></div>
            </div>

            <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
                {projects.map((project, i) => {
                    return (
                        <div className="relative flex justify-center items-center" key={i}>
                            <img src={project.img} alt={project.title} />
                            <div className="flex absolute left-0 right-0 top-0 bottom-0 mx-auto bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-95 ">
                                <p className="py-5 text-center font-bold px-2 text-black">
                                    {project.desc}
                                </p>

                                <div className="mx-auto space-x-3">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="bg-accent border-2 border-[#7477FF] text-black px-5 py-2 hover:bg-transparent font-bold duration-250"
                                    >
                                        {project.link_name}
                                    </a>
                                    {/* <a
                                        // href={project.link}
                                        className="bg-accent border-2 border-[#7477FF] text-white px-5 py-2 hover:bg-transparent duration-250"
                                    >
                                        Info
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;