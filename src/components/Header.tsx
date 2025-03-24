import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    const handleClose = () => setToggle(false);

    return (
        <header className="flex justify-between px-5 py-2 bg-secondary fixed w-full z-10">
            {/* bg-secondary */}
            <a href="/" className="logo text-2xl font-bold text-black">
                Max Ohm
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
                <ul className="flex">
                    <li>
                        <a className="font-bold hover:text-[#fe93de]" href="/#about" onClick={handleClose}>About</a>
                    </li>
                    <li>
                        <a className="font-bold hover:text-[#fe93de]" href="/#projects" onClick={handleClose}>Projects</a>
                    </li>
                    <li>
                        <a className="font-bold hover:text-[#fe93de]" href="/#contact" onClick={handleClose}>Contact</a>
                    </li>
                    <li>
                        <a className="font-bold hover:text-[#fe93de]" target="_blank" href={require("../assets/files/Resume.pdf")} download="Max's Resume" onClick={handleClose}>
                            <span className="inline-flex space-x-2 items-center">
                                <IoMdDownload /> <span> Resume </span>
                            </span>
                        </a>

                    </li>
                </ul>
            </nav>

            {/* Mobile Nav */}
            <nav
                className={!toggle ? "mobile-nav left-[-100%] bg-secondary" : "mobile-nav left-0 bg-secondary"}
            >
                <ul className="flex flex-col bg-secondary">
                    <li>
                        <a className="font-bold hover:text-[#fe93de]" href="/#about" onClick={handleClose}>About</a>
                    </li>
                    <li>
                        <a className="font-bold hover:text-[#fe93de]" href="/#projects" onClick={handleClose}>Projects</a>
                    </li>
                    <li>
                        <a className="font-bold hover:text-[#fe93de]" href="/#contact" onClick={handleClose}>Contact</a>
                    </li>
                    <li>
                        <a className="font-bold hover:text-[#fe93de]" target="_blank" href={require("../assets/files/Resume.pdf")} download="Max's Resume" onClick={handleClose}>
                            <span className="inline-flex space-x-2 items-center">
                                <IoMdDownload /> <span> Resume </span>
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Toggle button */}
            <button onClick={handleToggle} className="block md:hidden">
                {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
            </button>
        </header>
    );
};

export default Header;