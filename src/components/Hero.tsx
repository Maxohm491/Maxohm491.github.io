import React, { useEffect, useState } from "react";
import pfp from "../assets/me2-modified.png";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FaGoodreadsG } from "react-icons/fa";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const TITLES = [
    "Hi,",
    "I'm a developer.",
    "I'm a student.",
    "I'm Max."
];

// Helper to determine font size based on title length
function getFontSize(title: string) {
    if (title.length > 15) return "text-2xl lg:text-6xl";
    if (title.length > 12) return "text-3xl lg:text-7xl";
    return "text-4xl lg:text-8xl";
}

const Hero = () => {
    const [lines, setLines] = useState<string[]>([""]);
    const [titleIdx, setTitleIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [isFrozen, setIsFrozen] = useState(false);

    // Calculate the maximum number of lines (for minHeight)
    const maxLines = TITLES.length;

    // Dynamically set font size so all lines fit in the container without overflow
    const containerRef = React.useRef<HTMLHeadingElement>(null);
    const [dynamicFontSize, setDynamicFontSize] = useState(56); // px, initial guess for text-4xl

    // Fade-in on scroll
    const [ref, visible] = useFadeInOnScroll();

    useEffect(() => {
        if (!containerRef.current) return;
        const resizeFont = () => {
            const container = containerRef.current;
            if (!container) return;
            let fontSize = 56; // px, text-4xl
            container.style.fontSize = fontSize + "px";
            let fits = false;
            while (!fits && fontSize > 20) {
                fits = Array.from(container.children).every((child) => {
                    const span = child as HTMLElement;
                    return span.scrollWidth <= span.offsetWidth && span.offsetHeight <= fontSize * 1.3;
                });
                if (container.scrollWidth > container.offsetWidth) fits = false;
                if (!fits) {
                    fontSize -= 2;
                    container.style.fontSize = fontSize + "px";
                }
            }
            setDynamicFontSize(fontSize);
        };
        resizeFont();
        window.addEventListener("resize", resizeFont);
        return () => window.removeEventListener("resize", resizeFont);
    }, [lines]);

    useEffect(() => {
        if (isFrozen) return;

        let timeout: NodeJS.Timeout;

        if (titleIdx < TITLES.length) {
            if (charIdx < TITLES[titleIdx].length) {
                timeout = setTimeout(() => {
                    setLines((prev) => {
                        const newLines = [...prev];
                        newLines[titleIdx] = TITLES[titleIdx].slice(0, charIdx + 1);
                        return newLines;
                    });
                    setCharIdx((c) => c + 1);
                }, 60);
            } else if (titleIdx < TITLES.length - 1) {
                timeout = setTimeout(() => {
                    setLines((prev) => [...prev, ""]);
                    setTitleIdx((idx) => idx + 1);
                    setCharIdx(0);
                }, 600);
            } else {
                setIsFrozen(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [charIdx, titleIdx, isFrozen]);

    // --- NEW: Pre-allocate the box for all lines ---
    // This ensures the box is always at its final height, even before all lines are typed.
    const placeholderLines = Array.from({ length: maxLines - lines.length }, () => "");

    return (
        <section
            ref={ref}
            className={`bg-primary px-3 sm:px-5 text-black py-16 sm:py-32 transition-opacity duration-700 ${visible ? "fade-in" : "opacity-0 translate-y-8"}`}
        >
            <div className="container mx-auto flex flex-col md:grid md:grid-cols-2 items-center justify-center md:justify-between gap-8">
                <div className="pb-5 md:pb-0 w-full">
                    <h1
                        ref={containerRef}
                        className="flex flex-col items-start font-bold leading-tight break-words w-full"
                        style={{
                            fontSize: dynamicFontSize,
                            lineHeight: 1.1,
                            transition: "font-size 0.2s",
                            maxWidth: "100%",
                            wordBreak: "break-word",
                            overflowWrap: "break-word",
                            minHeight: `calc(${maxLines} * 1.1em)`
                        }}
                    >
                        {lines.map((line, idx) => (
                            <span
                                key={idx}
                                className="pr-2 w-full block"
                                style={{
                                    maxWidth: "100%",
                                    overflowWrap: "break-word",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    position: "relative"
                                }}
                            >
                                {line}
                                {idx === titleIdx && !isFrozen && (
                                    <span
                                        style={{
                                            display: "inline-block",
                                            verticalAlign: "bottom",
                                            borderRight: "2px solid var(--color-accent, #fe93de)",
                                            height: "1em",
                                            marginLeft: "2px",
                                            animation: "blink 1s steps(2, start) infinite"
                                        }}
                                    >
                                        &nbsp;
                                    </span>
                                )}
                            </span>
                        ))}
                        {/* ...placeholder lines... */}
                    </h1>
                    <div className="flex py-5 flex-wrap gap-2">
                        {/* ...social links... */}
                    </div>
                    <div className="py-6 sm:py-10">
                        <div className="flex py-5 flex-wrap gap-4 mb-6">
                            <a
                                href="https://github.com/Maxohm491"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-[#ffafe7] hover:text-[#fe93de] transition-colors duration-300"
                            >
                                <AiOutlineGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/max-ohm/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-[#ffafe7] hover:text-[#fe93de] transition-colors duration-300"
                            >
                                <AiOutlineLinkedin />
                            </a>
                            <a
                                href="https://www.goodreads.com/user/show/72820993-max-ohm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-[#ffafe7] hover:text-[#fe93de] transition-colors duration-300"
                            >
                                <FaGoodreadsG />
                            </a>
                        </div>
                        <a
                            href="/#projects"
                            className="hover:bg-[#fe93de] bg-accent border-2 border-accent rounded text-black px-6 py-3 sm:px-8 sm:py-5 font-bold shadow-lg transition text-base sm:text-lg"
                        >
                            My Work
                        </a>
                    </div>
                </div>
                <div className="hero-img flex justify-center md:justify-end items-center h-full w-full">
                    <img
                        src={pfp}
                        alt="Me!"
                        className="ml-auto rounded-full shadow-xl animate-float w-40 h-40 sm:w-60 sm:h-60 md:w-auto md:h-auto md:max-w-[20rem] md:max-h-[20rem] aspect-square object-cover"
                    />
                </div>
            </div>
            <style>
                {`
          .animate-float {
            animation: float 3.5s ease-in-out infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px);}
            50% { transform: translateY(-18px);}
          }
        `}
            </style>
        </section>
    );
};

export default Hero;