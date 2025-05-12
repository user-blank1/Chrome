import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../assets/popup.css";
const test = (
    <div id="wrap">
        <h1 className="fs-1 fw-bold">Hello, world!</h1>
        <img src="banner.png"></img>
    </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);
