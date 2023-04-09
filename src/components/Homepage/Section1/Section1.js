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
    <div>
      <p className="text-center text-[32px] mobile:text-[16px] mobile:font-semibold mobile:w-[330px] mobile:mx-[auto] tablet:w-[850px] mx-[auto] smallTablet:w-[700px] largeMobile:w-[576px] largeMobile:text-2xl">
        Make your developers <span className="text-[#E08880]">10x</span> more
        productive
      </p>
      <div className="flex justify-center">
        <div className="mt-12 grid grid-cols-3 gap-5 mobile:mt-5 mobile:flex mobile:flex-col mobile:items-center mobile:gap-4 tablet:w-[850px] tablet:mx-auto tablet:items-stretch smallTablet:w-[700px] smallTablet:grid-cols-2 largeMobile:w-[576px]">
          {cardsData.map((val) => (
            <Section1Cards
            icon={val.icon}
            title={val.title}
            description={val.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section1;
