import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import { Footer } from "@/Components/Footer";

export default function Welcome(props) {
    return (
        <>
            <Head title="Akeem Amusat | Software Engineer" />
            <Navbar />
            <Footer />
        </>
    );
}
