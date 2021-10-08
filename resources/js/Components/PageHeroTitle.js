import { Link } from "@inertiajs/inertia-react";
import React from "react";

export const PageHeroTitle = ({ heading, subtitle }) => {
    return (
        <section className="w3l-about-breadcrumb text-center">
            <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
                <div className="container py-2">
                    <h2 className="title">{heading}</h2>
                    <ul className="breadcrumbs-custom-path mt-2">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li className="active">
                            <span
                                className="fa fa-arrow-right mx-2"
                                aria-hidden="true"
                            ></span>{" "}
                            {subtitle}{" "}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
