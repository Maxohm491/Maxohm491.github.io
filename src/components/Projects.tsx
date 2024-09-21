import React from "react";
import snakefeet from "../assets/snakefeet.png";
import yalemedicine from "../assets/yalemedlogo.png";


const Projects = () => {
    const projects = [
        {
            img: snakefeet,
            title: "Snakefeet Studios",
            desc: " An 11 person indie game studio. We worked in Unity and focused on scalable multiplayer systems. ",
            link: "https://www.snakefeet.io/",
            link_name: "Website",
        },
        {
            img: yalemedicine,
            title: "OBE Clinical Study",
            desc: " I worked with an MD/MS student at the Yale School of Medicine on a clincal study. We simulated out-of-body experiences (a common hallucination) in virtual reality. ",
            link: "https://github.com/Maxohm491/OBEProject",
            link_name: "Code",
        }
    ];

    return (
        <section className="bg-primary text-white px-5 py-32" id="projects">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="about-info mb-5">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                        Projects
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
                            <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-95 ">
                                <p className="py-5 text-center font-bold px-2 text-white">
                                    {project.desc}
                                </p>

                                <div className="mx-auto space-x-3">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="px-5 py-2 bg-transparent border-2 border-[#7477FF] text-white hover:bg-accent font-bold"
                                    >
                                        {project.link_name}
                                    </a>
                                    <a
                                        // href={project.link}
                                        className="px-5 py-2 bg-transparent border-2 border-[#7477FF] text-white hover:bg-accent font-bold"
                                    >
                                        Info
                                    </a>
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