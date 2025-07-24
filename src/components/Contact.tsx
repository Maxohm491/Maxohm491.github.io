import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondary px-5 py-16 fade-in" id="contact">
      <div className="mx-auto max-w-xl bg-white rounded-xl shadow-lg p-10 text-black">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-accent pb-2">
          Contact Me
        </h2>
        <p className="py-2">
          <span className="font-bold">Email:</span>{" "}
          <a
            href="mailto:maxdemohm@gmail.com"
            className="text-black hover:text-[#fe93de] transition-colors"
          >
            maxdemohm@gmail.com
          </a>
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span>{" "}
          <a
            href="tel:2026428377"
            className="text-black hover:text-[#fe93de] transition-colors"
          >
            (202) 642-8377
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;