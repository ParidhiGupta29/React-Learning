import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1", {
//     id:"heading"
// }, "Hello World...!!!")

const parent = React.createElement("div",
    { id: "parent" },
    [
        React.createElement("div", { id: "child1", key: "child-1" },
            [
                React.createElement("h1", { key: "c1-h1" }, "I am h1 tag"),
                React.createElement("h2", { key: "c1-h2" }, "I am h2 tag")
            ]),
        React.createElement("div", { id: "child2", key: "child-2" },
            [
                React.createElement("h1", { key: "c2-h1" }, "I am h1 tag"),
                React.createElement("h2", { key: "c2-h2" }, "I am h2 tag")
            ])
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);