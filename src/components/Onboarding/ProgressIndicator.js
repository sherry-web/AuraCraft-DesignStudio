import React from "react";

const ProgressIndicator = ({ step }) => {
  return (
    <div className="progress-indicator">
      <div className={`dot ${step === 1 ? "active" : ""}`}></div>
      <div className={`dot ${step === 2 ? "active" : ""}`}></div>
      <div className={`dot ${step === 3 ? "active" : ""}`}></div>
    </div>
  );
};

export default ProgressIndicator;
