import React from "react";

// assets
import mongo_db_logo from "../../../assets/mongo_db_logo.png";
import open_in_new from "../../../assets/open_in_new.png";

function Section5() {
  return (
    <div className="flex items-center justify-center flex-col mb-[70px]">
      <p className="text-[#95949E] text-[18px] font-semibold largeMobile:text-[16px]">
        Powered by
      </p>
      <img className="mt-5" src={mongo_db_logo} alt="Mongo DB Logo" />
      <p className="text-[#BFB8B8] font-semibold mt-5 w-[50%] text-center text-[18px] mobile:w-[90%] largeMobile:text-[16px]">
        Cosmocloud is powered by MongoDB Atlas, which gives you flexibility,
        security, and scalability out of the box.
      </p>
      {/* <div className="flex items-center mt-5">
        <p className="font-semibold">Learn more</p>
        <img
          className="ml-2 w-[20px] cursor-pointer"
          src={open_in_new}
          alt="Arrow"
        />
      </div> */}
    </div>
  );
}

export default Section5;
