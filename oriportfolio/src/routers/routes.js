import React from "react";
import { Route, BrowserRouter, Navigate } from "react-router-dom";

import Home from '../pages/about'
import About from "../pages/about";
import Projects from "../pages/projects";
import Myblogs from "../pages/myblogs";
import Contact from "../pages/contact";


const Routers = () => {
    return(
        <BrowserRouter>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/myblogs" element={<Myblogs />} />
            <Route path="/contact" element={<Contact />} />
        </BrowserRouter>
    )
}

export default Routers;