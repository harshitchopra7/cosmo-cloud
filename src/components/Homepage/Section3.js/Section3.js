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
    }, 2000);
    return () => clearInterval(interval);
  }, [selectedId]);

  return (
    <div className="mt-[70px] mb-[70px] pl-[7%] pr-[7%]">
      <p className="font-medium text-[32px] font-medium largeMobile:text-[20px]">
        Consectetur adipiscing elit
      </p>
      <div className="flex largeMobile:hidden">
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
          className="w-[500px] f-full bg-[#1D1B2D] mt-7 rounded-lg"
          style={{
            flex: "0.7",
          }}
        >
          {data[selectedId - 1].illustration}
        </div>
      </div>

      <div className="hidden largeMobile:block flex flex-col items-center justify-center">
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
