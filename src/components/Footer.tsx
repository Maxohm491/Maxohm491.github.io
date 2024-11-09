import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-center bg-primary py-4">
      <div
        className="text-center text-black"> Made by and for Max Ohm
      </div>
      <div
        className="text-center text-black px-6"> |
      </div>
      <a className="font-bold text-black hover:text-[#fe93de]" href="https://github.com/Maxohm491/Maxohm491.github.io/tree/master" target="_blank">
        Source Code
      </a>
    </div>
  );
};

export default Footer;