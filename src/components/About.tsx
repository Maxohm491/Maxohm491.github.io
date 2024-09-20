import React from "react";

const About = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi there! I'm Max Ohm. nblbasdlfkasdklfalwkejbf,awbjefkajwbef,awbef,mawbef,mawbnefawef
          </p>
          <p className="pb-5">
            I am proficient in  a bunch of stuff
          </p>

          <p>And more stuff</p>

          <p>
            In my spare time I do more stuff
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;