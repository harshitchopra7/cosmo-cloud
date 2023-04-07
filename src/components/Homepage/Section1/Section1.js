import React from "react";

// assets
import Autograph from "./assets/Autograph";
import Currency from "./assets/Currency";
import DataObject from "./assets/DataObject";
import FindInPage from "./assets/FindInPage";
import FitPage from "./assets/FitPage";
import Lock from "./assets/Lock";

// internal deps
import Section1Cards from "./Section1Cards";

const cardsData = [
  {
    icon: <DataObject />,
    title: "Complex APIs",
    description:
      "Build the most complex API use cases, not limited to just CRUD",
  },
  {
    icon: <FitPage />,
    title: "Elastic scalability",
    description:
      "Scale as per your needs, from 100 users daily to millions of API calls per second.",
  },
  {
    icon: <Currency />,
    title: "Pay as you go",
    description:
      "No hassles of complicated pricing. You pay only for the resources you use.",
  },
  {
    icon: <Autograph />,
    title: "Ultra performance",
    description:
      "No compromises on the performance of your application, and it also features concurrency and multi-threading.",
  },
  {
    icon: <Lock />,
    title: "Built in security",
    description:
      "With no compromise on security, we also provide battle-ready User Pools for authentication.",
  },
  {
    icon: <FindInPage />,
    title: "Full text search, Kafka, etc.",
    description:
      "Whether FTS Search, Kafka/Queues, or Caches and CDN, everything is provided on one platform.",
  },
];

function Section1() {
  return (
    <div className="pl-[9%] pr-[9%]">
      <p className="text-center text-[32px] largeMobile:text-[16px] largeMobile:font-bold">
        Make your developers <span className="text-[#E08880]">10x</span> more
        productive
      </p>
      <div className="flex flex-wrap mt-[60px] mb-[60px] items-center justify-center largeMobile:mt-[20px]">
        {cardsData.map((val) => (
          <Section1Cards
            icon={val.icon}
            title={val.title}
            description={val.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Section1;
