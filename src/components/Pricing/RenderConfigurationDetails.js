import React from "react";

const RenderConfigurationDetails = ({ title, description, type }) => {
  return (
    <div className="flex items-center justify-between text-sm font-medium mb-4">
      <p className="text-[#BFB8B8]">{title}</p>
      <p>
        {type === "priceBreakdown" && <span>₹</span>}
        {description}
        {type === "priceBreakdown" && <span>/month</span>}
      </p>
    </div>
  );
};

export default RenderConfigurationDetails;
