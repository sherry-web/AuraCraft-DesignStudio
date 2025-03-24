import React from "react";
import { useNavigate } from "react-router-dom";

const StepThree = ({ prevStep }) => {
  const navigate = useNavigate();

  return (
    <div className="onboarding-step">
      <h2>You're all set!</h2>
      <p>Click below to start exploring.</p>
      <div className="buttons">
        <button onClick={prevStep}>Back</button>
        <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
      </div>
    </div>
  );
};

export default StepThree;
