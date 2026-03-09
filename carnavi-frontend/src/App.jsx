import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Chatbot from "./components/Chatbot";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Home />
      <Chatbot />
    </>
  );
}

export default App;