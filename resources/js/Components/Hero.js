import { Link } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";
import Typist from "react-typist";

const Hero = (props) => {
    return (
        <section id="home" className="w3l-banner py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-12 mt-lg-0 mt-4">
                        <span className="title-small">Hello</span>
                        <h1 className="mb-2 title">
                            <span>My name is</span> Akeem
                        </h1>
                        <h3 className="mb-4 title">
                            <Typist
                                cursor={{ hideWhenDone: true }}
                                avgTypingDelay={100}
                            >
                                Software Engineer
                                <Typist.Delay ms={400} />
                                <Typist.Backspace count={17}></Typist.Backspace>
                                <Typist.Delay ms={1000}></Typist.Delay>
                                Backend Developer
                            </Typist>
                        </h3>
                        <p className="text-justify">
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
