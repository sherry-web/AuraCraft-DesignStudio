import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/IntroJourney.css";

import WelcomeImage from "../assets/welcome.svg";
import ServicesImage from "../assets/services.svg";
import StartImage from "../assets/start.svg";

const steps = [
  {
    id: 1,
    title: "Welcome to AuraCraft",
    content: "Dive into our journey of creativity and craftsmanship.",
    image: WelcomeImage,
    journey: "design",
  },
  {
    id: 2,
    title: "Our Services",
    content: "Discover how we transform ideas into reality through design and development.",
    image: ServicesImage,
    journey: "development",
  },
  {
    id: 3,
    title: "Start Your Journey",
    content: "Let’s work together to bring your vision to life.",
    image: StartImage,
    journey: "marketing",
  },
];

const IntroJourney = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleStartJourney = () => {
    const selectedJourney = steps[currentStep].journey;
    localStorage.setItem("selectedJourney", selectedJourney);
    navigate("/home"); // Navigate to Home
  };

  return (
    <div className="intro-journey-wrapper">
      <div className="main-content">
        <div className="intro-container">
          <div className="intro-card">
            <div className="image-wrapper">
              <img
                src={steps[currentStep].image}
                alt={steps[currentStep].title}
                className="step-image"
              />
            </div>
            <h3 className="step-title">{steps[currentStep].title}</h3>
            <p className="step-content">{steps[currentStep].content}</p>

            <div className="button-group">
              {currentStep < steps.length - 1 && (
                <button className="next-button" onClick={handleNext}>
                  Next
                </button>
              )}
              {currentStep === steps.length - 1 && (
                <button className="start-button" onClick={handleStartJourney}>
                  Start Your Journey
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroJourney;
