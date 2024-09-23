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
                    <h1 className="text-4xl lg:text-6xl">
                        Hi, <br />I'm Max <br />
                    </h1>

                    <p className="py-5">
                        Welcome to my personal website.
                    </p>

                    <div className="flex py-5 ">
                        <a
                            href="https://github.com/Maxohm491"
                            target="_blank"
                            className="pr-4 inline-block text-accent hover:text-black"
                        >
                            {" "}
                            <AiOutlineGithub size={40} />{" "}
                        </a>
                        <a
                            href="https://www.maxohm.com/"
                            className="pr-4 inline-block text-accent hover:text-black"
                        >
                            {" "}
                            <AiOutlineLinkedin size={40} />{" "}
                        </a>
                    </div>

                    <div className="pt-10">
                        <a
                            href="/#projects"
                            className="bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent duration-250 font-bold"
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