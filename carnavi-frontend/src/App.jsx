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
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import HeroSlider from "./ui/HeroSlider";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };
  return (
    <BrowserRouter>
     
     <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart}/>} />
        <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Chatbot />
      

    </BrowserRouter>
  );
}

export default App;