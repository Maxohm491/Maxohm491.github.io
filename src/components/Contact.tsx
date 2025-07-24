import React from "react";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const Contact = () => {
  const [ref, visible] = useFadeInOnScroll();

  return (
    <section
      ref={ref}
      className={`bg-secondary px-3 sm:px-5 py-12 sm:py-16 transition-opacity duration-700 ${visible ? "fade-in" : "opacity-0 translate-y-8"}`}
      id="contact"
    >
      <div className="mx-auto w-full max-w-xl bg-white rounded-xl shadow-lg p-5 sm:p-10 text-black">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-accent pb-2">
          Contact Me
        </h2>
        <p className="py-2">
          <span className="font-bold">Email:</span>{" "}
          <a
            href="mailto:maxdemohm@gmail.com"
            className="text-black hover:text-[#fe93de] transition-colors break-all"
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