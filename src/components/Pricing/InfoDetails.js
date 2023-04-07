import React from "react";

import { MdOutlineInfo } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

const InfoDetails = ({ text }) => {
  return (
    <div className="mt-2 flex items-center h-[25px]">
      <p className="text-[16px] font-medium text-[#BFB8B8]">{text}</p>
      <div>
        <Tooltip title="Know more" placement="top">
          <IconButton style={{ color: "#BFB8B8" }}>
            <MdOutlineInfo size={18} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default InfoDetails;
