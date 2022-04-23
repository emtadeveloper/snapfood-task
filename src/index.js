// react

import React from "react";

// react dom

import ReactDOM from "react-dom/client";

// component

import { Compose } from "./components";

// router

import { BrowserRouter } from "react-router-dom";

// component

import App from "./App";

// providers

import ReduxProvider from "./providers/ReduxProvider";

// styles

import "./styles/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Compose components={[React.StrictMode, ReduxProvider, BrowserRouter]}>
        <App />
    </Compose>
);
