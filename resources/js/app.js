require("./bootstrap");

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

const appName = "Akeem Amusat | Software Engineer";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        return render(<App {...props} />, el);
    },
});

const theme = localStorage.getItem("theme");
let color;

if (theme) {
    if (theme == "dark") {
        color = "#e3f2fd";
    } else {
        color = "#1b5e20";
    }
} else {
    color = "#1b5e20";
}

InertiaProgress.init({ color: color });
