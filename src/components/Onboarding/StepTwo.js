import React, { useState } from "react";

const StepTwo = ({ nextStep, prevStep }) => {
  const [userData, setUserData] = useState("");

  return (
    <div className="onboarding-step">
      <h2>Tell us about yourself</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={userData}
        onChange={(e) => setUserData(e.target.value)}
      />
      <div className="buttons">
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default StepTwo;
