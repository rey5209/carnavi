import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Chatbot from "./components/Chatbot";
import Home from "./pages/home";
import Navbar from "./ui/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HeroSlider from "./ui/HeroSlider";

function App() {
  return (
    <BrowserRouter>
     
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Chatbot />
      

    </BrowserRouter>
  );
}

export default App;