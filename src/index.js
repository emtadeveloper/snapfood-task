import React from "react";
// react dom

import ReactDOM from "react-dom/client";

// component

import Compose from "./components/Compose";

// router

import { BrowserRouter } from "react-router-dom";

// component

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Compose components={[React.StrictMode, BrowserRouter]}>
        <App />
    </Compose>
);
