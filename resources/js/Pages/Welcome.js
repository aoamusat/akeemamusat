import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import { Footer } from "@/Components/Footer";
import Hero from "@/Components/Hero";
import { AboutHero } from "@/Components/AboutHero";

export default function Welcome(props) {
    return (
        <>
            <Head title="Akeem Amusat | Software Engineer" />
            <Navbar />
            <Hero
                textArray={[
                    "Software Engineer",
                    "Web developer",
                    "AI/ML Enthusiast",
                ]}
            />
            <AboutHero />
            <Footer />
        </>
    );
}
