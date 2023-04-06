import React from "react";

// assets
import logoMain from "../../assets/logoMain.png";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#1D1B2D]">
      <div className="flex items-center justify-between h-[50px] pt-8 pb-8 pl-[2%] pr-[2%]">
        <p className="text-[#BFB8B8] font-semibold largeMobile:hidden flex-[0.2]">
          Cosmocloud Pvt. Ltd.{" "}
        </p>

        <div className="flex items-center justify-center largeMobile:hidden">
          <FaLinkedinIn className="mr-3 cursor-pointer text-[#BFB8B8] h-[20px]" />
          <FaTwitter className="mr-3 cursor-pointer text-[#BFB8B8] h-[20px]" />
          <FaInstagram className="mr-3 cursor-pointer text-[#BFB8B8] h-[20px]" />
        </div>
        <div className="flex items-center font-semibold text-[#BFB8B8] largeMobile:hidden">
          <p className="ml-3 cursor-pointer">Terms</p>
          <p className="ml-3 cursor-pointer">Privacy</p>
          <p className="ml-3 cursor-pointer">Careers</p>
        </div>
      </div>

      <div className="hidden largeMobile:block largeMobile:flex largeMobile:items-center largeMobile:justify-between largeMobile:mt-[-40px] largeMobile:mb-[20px] largeMobile:pl-[2%]  largeMobile:pr-[2%]">
        <img className="h-[25px] ml-4" src={logoMain} alt="" />
        <div className="flex items-center">
          <FaLinkedinIn className="mr-3 cursor-pointer text-[#BFB8B8] h-[20px]" />
          <FaTwitter className="mr-3 cursor-pointer text-[#BFB8B8] h-[20px]" />
          <FaInstagram className="mr-3 cursor-pointer text-[#BFB8B8] h-[20px]" />
        </div>
      </div>

      <div className="font-semibold text-[#BFB8B8] hidden largeMobile:block ml-4 mb-4 largeMobile:pl-[2%] largeMobile:pr-[2%]">
        <p className="mt-2 cursor-pointer text-sm">Terms</p>
        <p className="mt-2 cursor-pointer text-sm">Privacy</p>
        <p className="mt-2 cursor-pointer text-sm">Careers</p>
        <p className="mt-4 text-sm">© 2023 Cosmocloud Pvt. Ltd. </p>
      </div>
    </div>
  );
}

export default Footer;
