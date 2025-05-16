import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondary px-5 py-8" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-black">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-accent pb-2">
          Contact Me
        </h2>
        <p className="py-2">
          <span className="font-bold">Email:</span> maxdemohm@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> (202) 642-8377
        </p>
      </div>
    </section>
  );
};

export default Contact;