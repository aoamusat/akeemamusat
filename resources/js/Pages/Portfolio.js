import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";

const Portfolio = () => {
    return (
        <React.Fragment>
            <Head title="Akeem Amusat | Portfolio" />
            <Navbar />
            <section className="w3l-about-breadcrumb text-center">
                <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
                    <div className="container py-2">
                        <h2 className="title">My Portfolio</h2>
                        <ul className="breadcrumbs-custom-path mt-2">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li className="active">
                                <span
                                    className="fa fa-arrow-right mx-2"
                                    aria-hidden="true"
                                ></span>{" "}
                                Portfolio{" "}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="text-11 py-5">
                <div className="text11 py-lg-5 py-md-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 item">
                                <div className="card">
                                    Loremdalksdlaskjdhkajsdkj
                                    abjhdkjahsbdjahSBDADBHSAKJDA
                                    ASDJAkjhdahdkaHSDKA
                                    askdbkjaHBDKJAhjasjdakjdhabhdakshd
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Portfolio;
