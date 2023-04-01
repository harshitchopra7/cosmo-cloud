import React from "react";

// assets
import icon1 from "../../../assets/Section1/icon1.png";
import icon2 from "../../../assets/Section1/icon2.png";
import icon3 from "../../../assets/Section1/icon3.png";
import icon4 from "../../../assets/Section1/icon4.png";
import icon5 from "../../../assets/Section1/icon5.png";
import icon6 from "../../../assets/Section1/icon6.png";

// internal deps
import Section1Cards from "./Section1Cards";

const cardsData = [
  {
    icon: icon1,
    title: "Complex APIs",
    description:
      "Build the most complex API use cases, not limited to just CRUD",
  },
  {
    icon: icon2,
    title: "Elastic scalability",
    description:
      "Scale as per your needs, from 100 users daily to millions of API calls per second.",
  },
  {
    icon: icon3,
    title: "Pay as you go",
    description:
      "No hassles of complicated pricing. You pay only for the resources you use.",
  },
  {
    icon: icon4,
    title: "Ultra performance",
    description:
      "No compromises on the performance of your application, and it also features concurrency and multi-threading.",
  },
  {
    icon: icon5,
    title: "Built in security",
    description:
      "With no compromise on security, we also provide battle-ready User Pools for authentication.",
  },
  {
    icon: icon6,
    title: "Full text search, Kafka, etc.",
    description:
      "Whether FTS Search, Kafka/Queues, or Caches and CDN, everything is provided on one platform.",
  },
];

function Section1() {
  return (
    <div>
      <p className="text-center text-3xl">
        Make your developers <span className="text-[#E08880]">10x</span> more
        productive
      </p>
      <div className="flex flex-wrap mt-[60px] mb-[60px] items-center justify-center">
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
