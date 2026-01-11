import React from "react";
import "./BackgroundWrapper.css";

function BackgroundWrapper({ children, offsetTop = false }) {
  return (
    <div className={`background-wrapper ${offsetTop ? "offset-top" : ""}`}>
      {children}
    </div>
  );
}

export default BackgroundWrapper;
