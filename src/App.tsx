import "@mantine/core/styles.css";
import "@gfazioli/mantine-flip/styles.css";
import "./App.css";

import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";

function App() {
    return (
        <BrowserRouter basename="/temp-cpp-website">
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
