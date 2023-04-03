import React, { useState, useEffect } from "react";
import Section3Cards from "./Section3Cards";

// data
import { data } from "./data";

function Section3Mobile() {
  return (
    <div className="mt-[70px] mb-[70px] pl-[7%] pr-[7%]">
      <p className="font-medium text-3xl">Consectetur adipiscing elit</p>
      <div className="flex">
        <div style={{ flex: "0.3" }} className="mr-8">
          {data.map((val) => (
            <Section3Cards
              id={val.id}
              title={val.title}
              description={val.description}
            />
          ))}
        </div>
        {/* <div
          className="w-[500px] f-full bg-[#1D1B2D] mt-7 rounded-lg"
          style={{
            flex: "0.7",
          }}
        >
          {data[selectedId - 1].illustration}
        </div> */}
      </div>
    </div>
  );
}

export default Section3Mobile;
