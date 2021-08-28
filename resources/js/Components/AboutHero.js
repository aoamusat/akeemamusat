import { Link } from "@inertiajs/inertia-react";
import React from "react";

export const AboutHero = () => {
    return (
        <section className="w3l-index3" id="about">
            <div className="midd-w3 py-5">
                <div className="container py-lg-5 py-md-3">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="position-relative">
                                <img
                                    src="/img/akeem.jpg"
                                    alt="Akeem"
                                    className="radius-image img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-lg-8 mt-lg-0 mt-5 text-center">
                            <h5 className="title-small mb-2">Who am I?</h5>
                            <h3 className="title-big">
                                I'm Akeem Amusat, a Software Engineer &amp; Web
                                Developer
                            </h3>
                            <p className="mt-4 text-center">
                                I'm a diverse &amp; multifaceted asset ready to
                                be part of your team. I have a strong PHP,
                                JavaScript and python skill set with a focus on
                                the backend development using python, WAMP and
                                MERN stacks. I can quickly learn new ideas and
                                trends in technology.
                            </p>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://drive.google.com"
                                className="btn btn-style btn-primary mt-lg-5 mt-4"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
