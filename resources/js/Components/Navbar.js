import { Link } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

const Navbar = () => {
    const switchTheme = (event) => {
        if (event.target.checked) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    };

    useEffect(() => {
        const toggleSwitch = document.querySelector(
            '.theme-switch input[type="checkbox"]'
        );
        const currentTheme = localStorage.getItem("theme");

        if (currentTheme) {
            document.documentElement.setAttribute("data-theme", currentTheme);

            if (currentTheme === "dark") {
                toggleSwitch.checked = true;
            }
        }
        toggleSwitch.addEventListener("change", switchTheme, false);
    }, []);

    return (
        <header id="site-header" className="fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg stroke">
                    <Link className="navbar-brand" href="/">
                        <span className="fa fa-laptop"></span> Akeem
                    </Link>
                    <button
                        className="navbar-toggler collapsed bg-gradient"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarToggler"
                        aria-controls="navbarToggler"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                        <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarToggler"
                    >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" href="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item @@portfolio__active">
                                <Link className="nav-link" href="/portfolio">
                                    Portfolio
                                </Link>
                            </li>
                            <li className="nav-item @@contact__active">
                                <Link className="nav-link" href="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item @@Blog__active">
                                <Link className="nav-link" href="/blog">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-position">
                        <nav className="navigation">
                            <div className="theme-switch-wrapper">
                                <label
                                    className="theme-switch"
                                    htmlFor="checkbox"
                                >
                                    <input type="checkbox" id="checkbox" />
                                    <div
                                        className="mode-container"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <i className="gg-sun"></i>
                                        <i className="gg-moon"></i>
                                    </div>
                                </label>
                            </div>
                        </nav>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
