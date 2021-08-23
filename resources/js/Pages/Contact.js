import React, { useState } from "react";
import { Footer } from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Link, Head, useForm, usePage } from "@inertiajs/inertia-react";

const Contact = (props) => {
    const { errors, flash } = usePage().props;

    const { post, processing, data, setData } = useForm({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleContactFormSubmit = (event) => {
        event.preventDefault();
        post("/contact");
    };

    return (
        <>
            <Head title="Akeem Amusat | Software Engineer" />
            <Navbar />
            <section className="w3l-about-breadcrumb text-center">
                <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
                    <div className="container py-2">
                        <h2 className="title">Contact Me</h2>
                        <ul className="breadcrumbs-custom-path mt-2">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li className="active">
                                <span
                                    className="fa fa-arrow-right mx-2"
                                    aria-hidden="true"
                                ></span>{" "}
                                Contact{" "}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="w3l-contact-1 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        <div className="d-grid contact-view">
                            <div className="cont-details">
                                <div className="cont-top">
                                    <div className="cont-left text-center">
                                        <span className="fa fa-phone text-primary"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h6>Call Me</h6>
                                        <p>
                                            <a href="tel:+2348068809861">
                                                +2348068809861
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="cont-top margin-up">
                                    <div className="cont-left text-center">
                                        <span className="fa fa-envelope-o text-primary"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h6>Email Me</h6>
                                        <p>
                                            <a
                                                href="mailto:aoamusat@gmail.com"
                                                className="mail"
                                            >
                                                aoamusat@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="cont-top margin-up">
                                    <div className="cont-left text-center">
                                        <span className="fa fa-map-marker text-primary"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h6>Location</h6>
                                        <p>
                                            Victoria Island, Lagos, Nigeria -
                                            106105.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="map-content-9">
                                {flash.message && (
                                    <div
                                        className="alert alert-info alert-dismissible fade show"
                                        role="alert"
                                    >
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="alert"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">
                                                &times;
                                            </span>
                                            <span className="sr-only">
                                                Close
                                            </span>
                                        </button>
                                        <strong>{flash.message}</strong>
                                    </div>
                                )}
                                <form onSubmit={handleContactFormSubmit}>
                                    <div className="twice-two">
                                        <div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                id="name"
                                                placeholder="Name"
                                                value={data.name}
                                                required=""
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.name && (
                                                <small className="form-text text-danger">
                                                    {errors.name}
                                                </small>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                value={data.email}
                                                placeholder="Email"
                                                required=""
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.email && (
                                                <small className="form-text text-danger">
                                                    {errors.email}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                    <div className="twice">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            id="subject"
                                            placeholder="Subject"
                                            value={data.subject}
                                            required=""
                                            onChange={(e) =>
                                                setData(
                                                    "subject",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.subject && (
                                            <small className="form-text text-danger">
                                                {errors.subject}
                                            </small>
                                        )}
                                    </div>
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        id="message"
                                        value={data.message}
                                        placeholder="Message"
                                        required=""
                                        onChange={(e) =>
                                            setData("message", e.target.value)
                                        }
                                    ></textarea>
                                    {errors.message && (
                                        <small className="form-text text-danger">
                                            {errors.message}
                                        </small>
                                    )}
                                    <div className="text-left">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="btn btn-primary btn-style mt-4"
                                        >
                                            {processing
                                                ? "Please Wait..."
                                                : "Send Message"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="map-iframe">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81904.22689871883!2d3.347210396074242!3d6.439477587668086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e7648d%3A0x4d01e5de6b847fe5!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1629635809538!5m2!1sen!2sng"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    style={{ border: "0px" }}
                    allowFullScreen=""
                ></iframe>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
