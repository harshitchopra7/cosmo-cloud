import React, { useState, useEffect } from "react";

// internald deps
import Section3Cards from "./Section3Cards";
import Section3MobileCards from "./Section3MobileCards";

import { data } from "./data";

function Section3() {
  const [selectedId, setSelectedId] = useState(1);

  const onClick = (id) => {
    setSelectedId(id);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedId === data.length) {
        setSelectedId(1);
        return;
      }
      setSelectedId((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [selectedId]);

  return (
    <div className="mt-[70px] mb-[70px] mx-[auto] w-[1184px] mobile:w-[330px] smallLaptop:w-[1050px] tablet:w-[850px] smallTablet:w-[700px]">
      <p className="font-medium text-[32px] largeMobile:text-[20px]">
        Our core features
      </p>
      <div className="flex smallTablet:hidden">
        <div style={{ flex: "0.3" }} className="mr-8">
          {data.map((val) => (
            <Section3Cards
              id={val.id}
              title={val.title}
              description={val.description}
              selectedId={selectedId}
              onClick={onClick}
            />
          ))}
        </div>
        <div
          className="w-[500px] f-full bg-[#1D1B2D] mt-7 rounded-lg flex-[0.7] flex items-center justify-center"
        >
          <img className='w-4/5 h-auto' src={data[selectedId - 1].illustration} alt="" />
        </div>
      </div>

      <div className="hidden smallTablet:flex flex-col items-center justify-center smallTablet:w-[700px] smallTablet:mx-[auto]">
        <div>
          {data.map((val) => (
            <Section3MobileCards
              id={val.id}
              title={val.title}
              description={val.description}
              illustration={val.illustration}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section3;
