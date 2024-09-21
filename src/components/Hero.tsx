import React from "react";
import HeroImg from "../assets/me.jpg";

import {
    AiOutlineGithub,
    AiOutlineLinkedin,
} from "react-icons/ai";

const Hero = () => {
    return (
        <section className="bg-primary px-5 text-white py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="pb-5 md:pb-0">
                    <h1 className="text-4xl lg:text-6xl">
                        Hi, <br />I am Max <br />
                        Bleeh bleeh blah
                    </h1>

                    <p className="py-5">
                        Lorem ipsum etc. etc.
                    </p>

                    <div className="flex py-5 ">
                        <a
                            href="https://github.com/Maxohm491"
                            target="_blank"
                            className="pr-4 inline-block text-accent hover:text-white"
                        >
                            {" "}
                            <AiOutlineGithub size={40} />{" "}
                        </a>
                        <a
                            href="https://www.maxohm.com/"
                            className="pr-4 inline-block text-accent hover:text-white"
                        >
                            {" "}
                            <AiOutlineLinkedin size={40} />{" "}
                        </a>
                        {/* <a
              href="https://www.facebook.com/CoderAmrin/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>lgw-[80%]  */}
                    </div>

                    <a
                        href="/#projects"
                        className="bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
                    >
                        My Work
                    </a>
                </div>

                <div className="hero-img">
                    <img
                        src={HeroImg}
                        alt="Me!"
                        className="ml-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;