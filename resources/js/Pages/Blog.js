import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";

const Blog = () => {
    return (
        <React.Fragment>
            <Head title="Akeem Amusat | Blog Posts" />
            <Navbar />
            <section className="w3l-about-breadcrumb text-center">
                <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
                    <div className="container py-2">
                        <h2 className="title">Blog Posts</h2>
                        <ul className="breadcrumbs-custom-path mt-2">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li className="active">
                                <span
                                    className="fa fa-arrow-right mx-2"
                                    aria-hidden="true"
                                ></span>{" "}
                                Blog{" "}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="w3l-about-breadcrumb text-center">
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: 0,
                        paddingTop: "141.4286%",
                        paddingBottom: "48px",
                        boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                        marginTop: "1.6em",
                        marginBottom: "0.9em",
                        overflow: "hidden",
                        borderRadius: "8px",
                        willChange: "transform",
                    }}
                >
                    <iframe
                        loading="lazy"
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            border: "none",
                            padding: 0,
                            margin: 0,
                        }}
                        src="https://www.canva.com/design/DAEQrEo1arA/view?embed"
                    ></iframe>
                </div>
                <a
                    href="https://www.canva.com/design/DAEQrEo1arA/view?utm_content=DAEQrEo1arA&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
                    target="_blank"
                    rel="noopener noreferrer"
                    rel="noopener"
                >
                    Akeem Resume
                </a>{" "}
                by Akeem Amusat
            </section>
        </React.Fragment>
    );
};

export default Blog;
