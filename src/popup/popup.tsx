import React from "react";
import { createRoot } from "react-dom/client";
import "..//assets/tailwind.css";
const test = (
    <div>
        <h1 className="text-5xl text-green-500 ">Hello, world!</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque dicta commodi at, necessitatibus nesciunt officiis aliquam! Illum nam hic voluptates
            ipsa repellat nihil aspernatur, architecto commodi numquam laboriosam, amet voluptatum dicta rerum? Porro optio delectus aliquam sunt blanditiis
            dolorem id.
        </p>
    </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);
