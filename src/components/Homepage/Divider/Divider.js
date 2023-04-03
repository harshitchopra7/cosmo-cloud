import React from "react";
import "./Divider.css";

function Divider() {
  return (
    <div className="mt-[70px] mb-[70px] flex items-center justify-center">
      <hr
        className="test"
        // style={{
        //   border: "0.05px solid red",
        //   background: "linear-gradient(to right, red, yellow)",
        //   // "radial-gradient(50% 50% at 50% 50%, #646273 0%, rgba(100, 98, 115, 0) 100%)",
        // }}
      />
    </div>
  );
}

export default Divider;
