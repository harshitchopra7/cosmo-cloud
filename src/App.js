import "./App.css";

// routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// internal deps
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./container/AboutUs";
import ContactUs from "./container/ContactUs";
import HomePage from "./container/HomePage";
import Pricing from "./container/Pricing";
import TermsOfService from "./container/TermsOfService";
import PrivacyPolicy from "./container/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <div
        className={`text-[#ffffff] flex flex-col justify-between w-full`}
        style={{ minHeight: "100vh" }}
      >
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
