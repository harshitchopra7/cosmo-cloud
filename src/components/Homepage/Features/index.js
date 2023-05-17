import React from "react";
import { ReactComponent as FlowDesignerImage } from "../../../assets/features/flowEngine2.svg";
import { ReactComponent as TemplatesImage } from "../../../assets/features/templates.svg";
import { ReactComponent as ModelSchemaImage } from "../../../assets/features/modelSchema.svg";
import { ReactComponent as ConfigsImage } from "../../../assets/features/configs.svg";
import { ReactComponent as ReleasesImage } from "../../../assets/features/releases.svg";

const data = [
  {
    title: "API flow designer",
    description:
      "Our flow engine allows you to effortlessly create API flows without requiring any coding skills. With our no-code flow builder, you can design and automate workflows with ease, saving time and resources.",
    image: (
      <FlowDesignerImage className="w-[640px] h-[400px] tablet:w-[320px] tablet:h-[200px]" />
    ),
  },
  {
    title: "Functional templates",
    description:
      "You can quickly build APIs and models by using functional templates that are customizable and easy to set up. These templates provide a foundation for building software with pre-existing code, saving development time and resources.",
    image: (
      <TemplatesImage className="w-[640px] h-[400px] tablet:w-[320px] tablet:h-[200px]" />
    ),
  },
  {
    title: "One click deployment",
    description:
      "You can deploy your project with a single click, thanks to a hassle-free process that's both quick and easy. This streamlined deployment method saves time and effort, allowing you to focus on building and improving your project.",
    image: (
      <ReleasesImage className="w-[640px] h-[400px] tablet:w-[320px] tablet:h-[200px]" />
    ),
  },
  {
    title: "Define nested models",
    description:
      "By defining nested models within the API workflow, you can execute intricate operations with ease. Nested models provide a way to organize and manage complex tasks, simplifying the development process and improving performance.",
    image: (
      <ModelSchemaImage className="w-[640px] h-[400px] tablet:w-[320px] tablet:h-[200px]" />
    ),
  },
  {
    title: "Authentication",
    description:
      "You can customize and set your own authentication settings to ensure maximum security for your application. With our authentication functionality, you have the flexibility to choose and implement security measures that align with your specific needs and requirements, giving you peace of mind knowing that your users' information is safe.",
    image: (
      <ConfigsImage className="w-[640px] h-[400px] tablet:w-[320px] tablet:h-[200px]" />
    ),
  },
];

const Features = () => {
  return (
    <div className="mt-[100px] mb-[70px] mx-[auto] w-[1180px] mobile:w-[330px] smallLaptop:w-[1050px] tablet:w-[700px] largeMobile:w-[576px] flex flex-col gap-[100px] largeMobile:gap-[50px]">
      {data.map((info, index) => {
        return (
          <div
            className={`flex items-center flex-row justify-between tablet:justify-center gap-[20px] ${
              index & 1 && "flex-row-reverse"
            } largeMobile:flex-col-reverse`}
            key={crypto.randomUUID()}
          >
            <div className="flex flex-col h-[auto] justify-center bg-green w-[400px] gap-[30px] tablet:w-[300px]">
              <h3 className="font-medium text-[32px] largeMobile:text-[20px]">
                {info.title}
              </h3>
              <p className="text-[16px] tracking-wide">{info.description}</p>
            </div>
            <div className="bg-white">{info.image}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
