import React from "react";
import "./Divider.css";

function Divider() {
  return (
    <div className="my-[70px] flex items-center justify-center mobile:my-[48px]">
      <hr className="divider" />
    </div>
  );
}

export default Divider;
