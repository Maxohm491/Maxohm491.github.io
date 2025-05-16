import React from "react";

const About = () => {
    return (
        <section className="bg-secondary text-black px-5 py-32" id="about">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
                <div className="about-info">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-accent pb-2">
                        About Me
                    </h2>

                    <p className="pb-5">
                        Welcome to my website!
                    </p>
                    <p className="pb-5">
                        I'm a student with a broad interest in anything related to computer science or mathematics. My primary focus has been on backend architecture, cybersecurity, and game development. I thought I'd explore web development a bit, which has led to the creation of this site. Feel free to reach out via the contact information below!
                    </p>
                    <p>
                        Currently, I'm pursuing a combined B.S./M.S. in Computer Science at Yale University. In my spare time I read, work on personal projects, and go on outdoor rock climbing trips.
                    </p>
                </div>

                {/* <div className="about-img hidden md:block">
                    <p>
                        Test test
                    </p>
                </div> */}
            </div>
        </section>
    );
};

export default About;