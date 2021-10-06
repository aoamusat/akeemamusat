import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import { Footer } from "@/Components/Footer";
import Hero from "@/Components/Hero";
import { AboutHero } from "@/Components/AboutHero";
import ResumeComponent from "@/Components/ResumeComponent";
import Testimonials from "@/Components/Testimonials";

export default function Welcome(props) {
    return (
        <>
            <Head title="Akeem Amusat | Software Engineer" />
            <Navbar />
            <Hero />
            <ResumeComponent />
            <Testimonials />
            <Footer />
        </>
    );
}
