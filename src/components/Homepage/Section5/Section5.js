import React from "react";

// assets
import mongo_db_logo from "../../../assets/mongo_db_logo.png";

function Section5() {
  return (
    <div className="flex items-center justify-center flex-col mb-[70px]">
      <p className="text-[#95949E] text-[18px] font-semibold largeMobile:text-[16px]">
        Powered by
      </p>
      <img className="mt-5 mobile:mt-3 mobile:h-[30px]" src={mongo_db_logo} alt="Mongo DB Logo" />
      <p className="text-[#BFB8B8] font-semibold mt-5 w-[50%] text-center text-[18px] mobile:w-[90%] mobile:font-normal mobile:mt-3 largeMobile:text-[16px]">
        Cosmocloud is powered by MongoDB Atlas, which gives you flexibility,
        security, and scalability out of the box.
      </p>

      {/* NOTE: Don't delete Need to comment out when used  */}

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
