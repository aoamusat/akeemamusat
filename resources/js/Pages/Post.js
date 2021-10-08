import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import { PageHeroTitle } from "@/Components/PageHeroTitle";
import { Footer } from "@/Components/Footer";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Post = ({ post }) => {
    return (
        <React.Fragment>
            <Head
                title={
                    post ? (
                        post.title + " | By Akeem Amusat"
                    ) : (
                        <Skeleton width={50} />
                    )
                }
            />
            <Navbar />
            <PageHeroTitle
                heading={post ? post.title : <Skeleton />}
                subtitle="Post"
            />
            <section className="text-11 py-5">
                <div className="text11 py-lg-5 py-md-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 text11-content">
                                {post ? (
                                    <img
                                        src={post.cover_image}
                                        className="img-fluid"
                                        alt=""
                                    />
                                ) : (
                                    <Skeleton height={250} />
                                )}
                                <h4 className="">
                                    {post ? post.description : <Skeleton />}
                                </h4>
                                <h6>
                                    {post ? (
                                        new Date(
                                            post.published_timestamp
                                        ).toDateString()
                                    ) : (
                                        <Skeleton />
                                    )}
                                </h6>
                                <h6>
                                    <a href="#admin" className="admin">
                                        &nbsp;-&nbsp;by Akeem Amusat
                                    </a>
                                </h6>

                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            {post ? (
                                                <ReactMarkdown
                                                    children={
                                                        post.body_markdown
                                                    }
                                                    remarkPlugins={[remarkGfm]}
                                                />
                                            ) : (
                                                <Skeleton height={250} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="social-share-blog mt-5">
                                    <ul className="column3 social m-0 p-0">
                                        <li>
                                            <p className="m-0 mr-4">
                                                Share this post :
                                            </p>
                                        </li>
                                        <li>
                                            <a
                                                href="#facebook"
                                                className="facebook"
                                            >
                                                <span className="fa fa-facebook"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#twitter"
                                                className="twitter"
                                            >
                                                <span className="fa fa-twitter"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#instagram"
                                                className="instagram"
                                            >
                                                <span className="fa fa-instagram"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#linkedin"
                                                className="linkedin"
                                            >
                                                <span className="fa fa-linkedin"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="comments">
                                    <h3 className="aside-title">Comments</h3>
                                </div>
                            </div>
                            <div
                                className="
                        sidebar-side
                        col-lg-4 col-md-12 col-sm-12
                        mt-lg-0 mt-5
                    "
                            >
                                <aside className="sidebar">
                                    <div className="sidebar-widget popular-posts">
                                        <div className="sidebar-title">
                                            <h4>Recent Posts</h4>
                                        </div>

                                        <article className="post">
                                            <figure className="post-thumb">
                                                <img
                                                    src="/img/code.svg"
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
                                                    src="/img/code.svg"
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
                                                    src="/img/code.svg"
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
                                            <div
                                                className="
                                        sidebar-widget sidebar-blog-category
                                        archive
                                    "
                                            >
                                                <div className="sidebar-title">
                                                    <h4>Twitter</h4>
                                                </div>
                                                <ul className="blog-cat twitter-feed">
                                                    <li>
                                                        <a href="#url">
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
            <Footer />
        </React.Fragment>
    );
};

export default Post;
