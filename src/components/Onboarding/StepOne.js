import React from "react";

const StepOne = ({ nextStep }) => {
  return (
    <div className="onboarding-step">
      <h2>Welcome to AuraCraft Design Studio!</h2>
      <p>Let's get started on creating your journey.</p>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default StepOne;
