import React from "react";
import pfp from "../assets/circle.png";

import {
    AiOutlineGithub,
    AiOutlineLinkedin,
} from "react-icons/ai";

const Hero = () => {
    return (
        <section className="bg-primary px-5 text-black py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="pb-5 md:pb-0">
                    <h1 className="text-4xl lg:text-8xl">
                        Hi, <br />I'm Max. <br />
                    </h1>

                    {/* <p className="py-5">
                        Welcome to my personal website! I'm a passionate 
                    </p> */}

                    <div className="flex py-5 ">
                        <a
                            href="https://github.com/Maxohm491"
                            target="_blank"
                            className="pr-4 inline-block text-accent hover:text-[#fe93de]"
                        >
                            {" "}
                            <AiOutlineGithub size={40} />{" "}
                        </a>
                        {/* <a
                            href="https://www.maxohm.com/"
                            className="pr-4 inline-block text-accent hover:text-[#fe93de]"
                        >
                            {" "}
                            <AiOutlineLinkedin size={40} />{" "}
                        </a> */}
                    </div>

                    <div className="py-10">
                        <a
                            href="/#projects"
                            className="hover:bg-[#fe93de] hover:border-[#fe93de] bg-accent border-2 border-accent rounded text-black px-8 py-5 font-bold"
                        >
                            My Work
                        </a>
                    </div>
                </div>

                <div className="hero-img">
                    <img
                        src={pfp}
                        alt="Me!"
                        className="ml-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;