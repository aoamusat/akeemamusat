import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import axios from "axios";

const Blog = () => {
    const [posts, setPosts] = useState([]);

    const fetchBlogPosts = () => {
        const config = {
            method: "get",
            url: "/api/posts",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "api-key": "eu5yT5cYajfrGjj9WKR492eK",
                "Content-Type": "application/json",
            },
        };
        axios(config)
            .then(function (response) {
                setPosts(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchBlogPosts();
    }, []);

    return (
        <React.Fragment>
            <Head title="Akeem Amusat | Blog Posts" />
            <Navbar />
            <section className="w3l-about-breadcrumb text-center">
                <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
                    <div className="container py-2">
                        <h2 className="title">Latest Blog Posts</h2>
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
            <section className="text-11 py-5">
                <div className="text11 py-lg-5 py-md-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 text11-content">
                                {posts.length <= 0 ? (
                                    <h3 className="text-center">Loading...</h3>
                                ) : (
                                    posts.map((post, index) => {
                                        return (
                                            <div className="item">
                                                <div className="card">
                                                    <div className="card-header p-0 position-relative border-0">
                                                        <a
                                                            href={
                                                                "/blog/" +
                                                                post.slug +
                                                                "/" +
                                                                post.id
                                                            }
                                                        >
                                                            <img
                                                                className="card-img-bottom d-block radius-image"
                                                                src={
                                                                    post.cover_image
                                                                }
                                                                alt={post.title}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="card-body p-0 blog-details">
                                                        <h6 className="mt-4">
                                                            {
                                                                post.published_timestamp
                                                            }
                                                        </h6>
                                                        <a
                                                            href="#"
                                                            className="admin"
                                                        >
                                                            - by Akeem Amusat
                                                        </a>
                                                        <br />
                                                        <a
                                                            href={
                                                                "/blog/" +
                                                                post.slug +
                                                                "/" +
                                                                post.id
                                                            }
                                                            className="blog-desc"
                                                        >
                                                            {post.title}
                                                        </a>
                                                        <p>
                                                            {post.description}
                                                        </p>
                                                        <a
                                                            href={
                                                                "/blog/" +
                                                                post.slug +
                                                                "/" +
                                                                post.id
                                                            }
                                                            className="read"
                                                        >
                                                            Read more
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12 mt-lg-0 mt-5">
                                <aside className="sidebar">
                                    <div className="sidebar-widget popular-posts">
                                        <div className="sidebar-title">
                                            <h4>Recent Posts</h4>
                                        </div>

                                        <article className="post">
                                            <figure className="post-thumb">
                                                <img
                                                    src="assets/images/p1.jpg"
                                                    alt=""
                                                />
                                            </figure>
                                            <div className="text">
                                                <a href="blog-single.html">
                                                    How Designers have decorated
                                                </a>
                                            </div>
                                            <div className="post-info">
                                                May 11, 2020
                                            </div>
                                        </article>

                                        <article className="post">
                                            <figure className="post-thumb">
                                                <img
                                                    src="assets/images/p2.jpg"
                                                    alt=""
                                                />
                                            </figure>
                                            <div className="text">
                                                <a href="blog-single.html">
                                                    How to become a Web designer
                                                </a>
                                            </div>
                                            <div className="post-info">
                                                May 12, 2020
                                            </div>
                                        </article>

                                        <article className="post">
                                            <figure className="post-thumb">
                                                <img
                                                    src="assets/images/p3.jpg"
                                                    alt=""
                                                />
                                            </figure>
                                            <div className="text">
                                                <a href="blog-single.html">
                                                    How to improve work
                                                    performance
                                                </a>
                                            </div>
                                            <div className="post-info">
                                                May 13, 2020
                                            </div>
                                        </article>
                                    </div>
                                    <div className="sidebar-sticky">
                                        <div className="sidebar-sticky-fix">
                                            <div className="sidebar-widget sidebar-blog-category archive">
                                                <div className="sidebar-title">
                                                    <h4>Twitter</h4>
                                                </div>
                                                <ul className="blog-cat twitter-feed">
                                                    <li>
                                                        <a href="#url">
                                                            {" "}
                                                            @W3layouts help
                                                            Developers,
                                                            Designers, Website
                                                            owners create
                                                            Sstunning Websites
                                                            #design…
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#url">
                                                            @W3layouts Delog
                                                            starter just
                                                            evolved. has
                                                            acquired the ability
                                                            to generate sitemaps
                                                            in production…
                                                            @gatsbyjs
                                                            @NetlifyCMS
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sidebar-widget popular-tags">
                                                <div className="sidebar-title">
                                                    <h4>Tags</h4>
                                                </div>
                                                <a href="#url">Design</a>
                                                <a href="#url">Inspiration</a>
                                                <a href="#url">Art</a>
                                                <a href="#url">Portfolio</a>
                                                <a href="#url">Ideas</a>
                                                <a href="#url">Project</a>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Blog;
