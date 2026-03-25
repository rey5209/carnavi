import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Chatbot from "./components/Chatbot";
import Home from "./pages/Home";
import Navbar from "./ui/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Compatibility from "./pages/Compatibility";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import HeroSlider from "./ui/HeroSlider";

function App() {
  const [cart, setCart] = useState([]);

  
  useEffect(() => {
    console.clear();

    console.log(
      "%c⚠️ Bawal Scammer ",
      "color:red; font-size:40px; font-weight:bold;"
    );

    console.warn(
      "This is a browser feature intended for developers."
    );

    console.warn(
      "Need more info? Find Rey… if you can."
    );

    console.error(
      "Do not paste anything here unless you understand it."
    );
  }, []);
  

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };
  return (
    <BrowserRouter>
     
     <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart}/>} />
        <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
        <Route path="/compatibility" element={<Compatibility addToCart={addToCart} />} />
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