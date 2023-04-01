import React from "react";

// routing
import { useNavigate } from "react-router-dom";

// internal deps
import Button from "../common/Button";

// assets
import logoMain from "../assets/logoMain.png";

const items = ["Home", "About", "Contact us"];

function Navbar() {
  const navigate = useNavigate();

  const handleNavbarRedirection = (page) => {
    switch (page) {
      case "Home":
        navigate("/");
        return;
      case "About":
        navigate("/about-us");
        return;
      case "Pricing":
        navigate("/pricing");
        return;
      case "Contact us":
        navigate("/contact-us");
        return;
      default:
        return;
    }
  };

  return (
    <div className="flex items-center justify-between pt-4 pb-4 pl-[2%] pr-[2%]">
      <div style={{ flex: "0.11" }} className="font-semibold cursor-pointer">
        <img src={logoMain} alt="" />
      </div>
      <div className="flex justify-center" style={{ flex: "0.88" }}>
        {items.map((val) => (
          <p
            className="mr-8 hover:bg-[#3A3564] p-2 pl-4 pr-4 rounded-full cursor-pointer font-semibold text-sm"
            onClick={() => handleNavbarRedirection(val)}
          >
            {val}
          </p>
        ))}
      </div>
      <div style={{ flex: "0.11" }}>
        <Button text="Join the waitlist" />
      </div>
    </div>
  );
}

export default Navbar;
