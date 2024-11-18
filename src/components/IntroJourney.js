import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/IntroJourney.css';

const IntroJourney = () => {
  const navigate = useNavigate();

  const steps = [
    { id: 1, title: 'Welcome to AuraCraft', content: 'Discover our story and values.', image: '/assets/welcome.svg' },
    { id: 2, title: 'Our Services', content: 'Explore how we bring your vision to life.', image: '/assets/services.svg' },
    { id: 3, title: 'Start Your Journey', content: 'Let’s craft something amazing together.', image: '/assets/start.svg' },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/home'); // Redirect to Home after the last step
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    navigate('/home'); // Skip to Home
  };

  return (
    <div className="intro-journey">
      <AnimatePresence>
        <motion.div
          className="journey-step"
          key={currentStep}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
        >
          <img src={steps[currentStep].image} alt={steps[currentStep].title} className="journey-image" />
          <h2>{steps[currentStep].title}</h2>
          <p>{steps[currentStep].content}</p>
        </motion.div>
      </AnimatePresence>

      <div className="journey-navigation">
        <button onClick={handlePrevious} disabled={currentStep === 0}>
          Previous
        </button>
        <button onClick={handleNext}>
          {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
        <button onClick={handleSkip} className="skip-button">
          Skip
        </button>
      </div>

      <div className="progress-indicator">
        {steps.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentStep ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default IntroJourney;
