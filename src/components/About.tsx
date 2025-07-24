import React from "react";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const About = () => {
    const [ref, visible] = useFadeInOnScroll();

    return (
        <section
            ref={ref}
            className={`bg-secondary text-black px-3 sm:px-5 py-16 sm:py-32 transition-opacity duration-700 ${visible ? "fade-in" : "opacity-0 translate-y-8"}`}
            id="about"
        >
            <div className="container mx-auto flex justify-end">
                <div className="about-info border-l-4 border-accent pl-4 max-w-2xl w-full text-left md:border-l-0 md:border-r-4 md:pl-0 md:pr-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-accent pb-2 md:ml-auto md:text-right">
                        About Me
                    </h2>
                    <p className="pb-5">Welcome to my website!</p>
                    <p className="pb-5">
                        I'm a student with a broad interest in anything related to computer science or mathematics. My primary focus has been on backend architecture, cybersecurity, and game development. I thought I'd explore web development a bit, which has led to the creation of this site. Feel free to reach out via the contact information below!
                    </p>
                    <p>
                        Currently, I'm pursuing a combined B.S./M.S. in Computer Science at Yale University. In my spare time I read, work on personal projects, and go on outdoor rock climbing trips.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;