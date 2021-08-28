import { Link } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";

const Hero = (props) => {
    const typingDelay = 200;
    const erasingDelay = 10;
    const newTextDelay = 100; // Delay between current and next text
    const [textArrayIndex, setTextArrayIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [type, setType] = useState();
    const [erase, setErase] = useState();
    const [textArray, setTextArray] = useState([
        "Software Engineer",
        "Web developer",
        "AI/ML Enthusiast",
    ]);

    useEffect(() => {
        const typedTextSpan = document.querySelector(".typed-text");
        const cursorSpan = document.querySelector(".cursor");

        setType(() => {
            if (charIndex < textArray[textArrayIndex].length) {
                if (!cursorSpan.classList.contains("typing"))
                    cursorSpan.classList.add("typing");
                typedTextSpan.textContent +=
                    textArray[textArrayIndex].charAt(charIndex);
                setCharIndex((previous) => {
                    return previous + 1;
                });
                setTimeout(type, typingDelay);
            } else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay);
            }
        });

        setErase(() => {
            if (charIndex > 0) {
                // add class 'typing' if there's none
                if (!cursorSpan.classList.contains("typing")) {
                    cursorSpan.classList.add("typing");
                }
                typedTextSpan.textContent = textArray[textArrayIndex].substring(
                    0,
                    0
                );
                setCharIndex((previous) => {
                    return previous - 1;
                });
                setTimeout(erase, erasingDelay);
            } else {
                cursorSpan.classList.remove("typing");
                setTextArrayIndex((previous) => {
                    return previous + 1;
                });
                if (textArrayIndex >= textArray.length) {
                    setTextArrayIndex(0);
                }
                setTimeout(type, typingDelay);
            }
        });

        if (textArray.length) setTimeout(type, newTextDelay + 250);
    });

    return (
        <section id="home" className="w3l-banner py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-12 mt-lg-0 mt-4 text-center">
                        <span className="title-small">Hello</span>
                        <h1 className="mb-2 title">
                            <span>I'm</span> Akeem Amusat
                        </h1>
                        <h1 className="mb-4 title">
                            a <span className="typed-text">AI/ML Enthusi</span>
                            <span className="cursor typing">&nbsp;</span>
                        </h1>
                        <p className="">
                            Hi, my name is Akeem Amusat. I'm a Software
                            Engineer, located in Lagos, Nigeria. I enjoy
                            creating high quality and delightful websites and
                            web applications.
                        </p>
                        <div className="mt-sm-5 mt-4">
                            <Link
                                className="btn btn-primary btn-style mr-2"
                                href="/contact"
                            >
                                Hire Me
                            </Link>
                            <Link
                                className="btn btn-outline-primary btn-style mr-2"
                                href="/portfolio"
                            >
                                Portfolio
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10 mt-lg-0 mt-4">
                        <div className="img-effect text-lg-center">
                            <img
                                src="/img/akeem.png"
                                alt="Akeem"
                                className="img-fluid radius-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
