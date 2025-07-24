import React from "react";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const Footer = () => {
  const [ref, visible] = useFadeInOnScroll();

  return (
    <footer
      ref={ref}
      className={`flex flex-col sm:flex-row items-center justify-center bg-primary py-4 gap-2 sm:gap-0 transition-opacity duration-700 ${visible ? "fade-in" : "opacity-0 translate-y-8"}`}
    >
      <div className="text-center text-black"> Made by and for Max Ohm </div>
      <div className="text-center text-black px-0 sm:px-6"> | </div>
      <a className="font-bold text-black hover:text-[#fe93de]" href="https://github.com/Maxohm491/Maxohm491.github.io/tree/master" target="_blank" rel="noopener noreferrer">
        Source Code
      </a>
    </footer>
  );
};

export default Footer;