import React, { useState } from 'react';
import './styles/IntroJourney.css';

// Import images
import WelcomeImage from '../assets/welcome.svg';
import ServicesImage from '../assets/services.svg';
import StartImage from '../assets/start.svg';

// Steps for the journey
const steps = [
  {
    id: 1,
    title: 'Welcome to AuraCraft',
    content: 'Dive into our journey of creativity and craftsmanship.',
    image: WelcomeImage,
  },
  {
    id: 2,
    title: 'Our Services',
    content: 'Discover how we transform ideas into reality through design and development.',
    image: ServicesImage,
  },
  {
    id: 3,
    title: 'Start Your Journey',
    content: 'Let’s work together to bring your vision to life.',
    image: StartImage,
  },
];

const IntroJourney = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSkip = () => {
    setCurrentStep(steps.length - 1);
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
                <button
                  className="start-button"
                  onClick={() => (window.location.href = '/home')}
                >
                  Start Your Journey
                </button>
              )}

              <button className="skip-button" onClick={handleSkip}>
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroJourney;
