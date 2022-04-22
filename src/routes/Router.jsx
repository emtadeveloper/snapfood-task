// react router

import { Routes, Route } from "react-router-dom";

// Pages

import { Home, Vendor } from "../pages";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vendor" element={<Vendor />} />
        </Routes>
    );
};
export default Router;
