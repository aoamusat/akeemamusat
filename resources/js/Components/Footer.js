import React, { useEffect } from "react";

export const Footer = () => {
    const scrollFunction = () => {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            document.getElementById("movetop").style.display = "block";
        } else {
            document.getElementById("movetop").style.display = "none";
        }
    };

    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    useEffect(() => {
        window.onscroll = () => {
            scrollFunction();
        };
    }, []);

    return (
        <section className="w3l-footer py-sm-5 py-4">
            <div className="container">
                <div className="footer-content">
                    <div className="row">
                        <div className="col-lg-8 footer-left">
                            <p className="m-0">Akeem &copy; Copyright 2021.</p>
                        </div>
                        <div className="col-lg-4 footer-right text-lg-right text-center mt-lg-0 mt-3">
                            <ul className="social m-0 p-0">
                                <li>
                                    <a href="https://facebook.com/aoamusat">
                                        <span className="fa fa-facebook-official"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/in/aoamusat">
                                        <span className="fa fa-linkedin-square"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/sr.hakeem">
                                        <span className="fa fa-instagram"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/hakimcode">
                                        <span className="fa fa-twitter"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Move to top */}
            <button onClick={topFunction} id="movetop" title="Go to top">
                <span className="fa fa-angle-up"></span>
            </button>
            {/* End Move to top */}
        </section>
    );
};
