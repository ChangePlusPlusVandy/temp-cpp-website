import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@mantine/core/styles.css";
import "./App.css";

import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
