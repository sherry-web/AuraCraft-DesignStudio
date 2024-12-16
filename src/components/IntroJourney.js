import React, { useState } from 'react';
import './styles/IntroJourney.css';

// Import images
import WelcomeImage from '../assets/welcome.svg';
import ServicesImage from '../assets/services.svg';
import GoalsIcon from '../assets/goals.svg'; 

const prompts = [
  {
    id: 1,
    question: "What brings you to AuraCraft today?",
    options: [
      "I need a website designed",
      "I’m looking for design inspiration",
      "I want to learn about UX/UI design",
    ],
  },
  {
    id: 2,
    question: "What’s your primary goal?",
    options: [
      "Build my online presence",
      "Improve an existing design",
      "Collaborate on a creative project",
    ],
  },
  {
    id: 3,
    question: "How soon do you want to get started?",
    options: ["Immediately", "In the next month", "Just exploring for now"],
  },
];

const IntroJourney = ({ setHeroContent }) => {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [userResponses, setUserResponses] = useState([]);

  const handleResponse = (response) => {
    const newResponses = [...userResponses, response];
    setUserResponses(newResponses);

    if (currentPrompt < prompts.length - 1) {
      setCurrentPrompt(currentPrompt + 1);
    } else {
      // All prompts answered
      setHeroContent(newResponses); // Pass responses to dynamically update hero
    }
  };

  return (
    <div className="intro-journey-wrapper">
      {currentPrompt < prompts.length ? (
        <div className="prompt-container">
          <h3 className="prompt-question">{prompts[currentPrompt].question}</h3>
          <div className="options-wrapper">
            {prompts[currentPrompt].options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleResponse(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="final-message">
          <h3>Thank you for your responses!</h3>
          <p>Your journey with AuraCraft starts here. You can log in or create an account to get started.</p>
          <div className="button-group">
            <button
              className="login-button"
              onClick={() => (window.location.href = '/login')}
            >
              Log In
            </button>
            <button
              className="create-account-button"
              onClick={() => (window.location.href = '/signup')}
            >
              Create Account
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroJourney;
