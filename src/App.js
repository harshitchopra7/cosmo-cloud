import "./App.css";

import { useState } from "react";

// routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// internal deps
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./container/AboutUs";
import ContactUs from "./container/ContactUs";
import HomePage from "./container/HomePage";
import Pricing from "./container/Pricing";

function App() {
  const [hideOverFlowY, setHideOverFlowY] = useState(false);

  return (
    <BrowserRouter>
      <div
        className={`text-[#ffffff] flex flex-col justify-between ${
          hideOverFlowY && "overflow-y-hidden"
        }`}
        style={{ minHeight: "100vh" }}
      >
        <Navbar setHideOverFlowY={setHideOverFlowY} />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
