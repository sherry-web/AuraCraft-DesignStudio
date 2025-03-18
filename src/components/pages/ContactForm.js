import React, { useState, useEffect } from "react";
import "../styles/ContactForm.css";

// Assets
import ConnectIllustration from "../../assets/Connect.svg";

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    projectType: "",
    timeline: "",
    budget: "",
    requirements: [],
    message: "",
  });

  // Form validation state
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  // Form step state
  const [currentStep, setCurrentStep] = useState(1);
  const [suggestions, setSuggestions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Check if current step is complete
  const isStepComplete = (step) => {
    switch(step) {
      case 1:
        return formData.name && formData.email && formData.industry && 
               !errors.name && !errors.email;
      case 2:
        return formData.projectType && formData.timeline && formData.budget;
      case 3:
        return true; // Requirements are optional
      default:
        return false;
    }
  };

  // Validate form fields
  const validateField = (name, value) => {
    let error = "";
    
    switch(name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      default:
        break;
    }
    
    return error;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Mark field as touched
    if (!touched[name]) {
      setTouched({
        ...touched,
        [name]: true,
      });
    }
    
    // Validate field
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });

    // Generate suggestions based on user input
    if (name === "industry" || name === "projectType") {
      generateSuggestions(name, value);
    }
  };

  // Handle input blur for validation
  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    // Mark field as touched
    setTouched({
      ...touched,
      [name]: true,
    });
    
    // Validate field
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const updatedRequirements = checked
      ? [...formData.requirements, value]
      : formData.requirements.filter((req) => req !== value);
    
    setFormData({
      ...formData,
      requirements: updatedRequirements,
    });
  };

  // Generate suggestions based on user input
  const generateSuggestions = (field, value) => {
    // This is where you would implement your prediction logic
    if (field === "industry") {
      // E-commerce related suggestions
      if (value.toLowerCase().includes("ecommerce") || value.toLowerCase().includes("retail")) {
        setSuggestions([
          "Consider integrating payment gateways",
          "Product catalog management might be essential",
          "User authentication and account management",
        ]);
      } 
      // Tech related suggestions
      else if (value.toLowerCase().includes("tech") || value.toLowerCase().includes("software")) {
        setSuggestions([
          "API integration might be necessary",
          "Consider backend infrastructure requirements",
          "Scalability should be a priority",
        ]);
      }
      // Healthcare suggestions
      else if (value.toLowerCase().includes("health") || value.toLowerCase().includes("medical")) {
        setSuggestions([
          "HIPAA compliance will be necessary",
          "Secure patient data management",
          "Integration with electronic health records",
        ]);
      }
      // Default suggestions
      else {
        setSuggestions([]);
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // Here you would handle form submission, API calls, etc.
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      
      // Show success message
      setSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          industry: "",
          projectType: "",
          timeline: "",
          budget: "",
          requirements: [],
          message: "",
        });
        setCurrentStep(1);
        setSubmitted(false);
        setTouched({});
        setErrors({});
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle next step
  const handleNextStep = () => {
    if (isStepComplete(currentStep)) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Mark all fields in current step as touched to show validation errors
      const currentStepFields = getFieldsForStep(currentStep);
      const newTouched = { ...touched };
      
      currentStepFields.forEach(field => {
        newTouched[field] = true;
        const error = validateField(field, formData[field]);
        setErrors(prev => ({
          ...prev,
          [field]: error
        }));
      });
      
      setTouched(newTouched);
    }
  };

  // Get fields for current step
  const getFieldsForStep = (step) => {
    switch(step) {
      case 1:
        return ["name", "email", "industry"];
      case 2:
        return ["projectType", "timeline", "budget"];
      case 3:
        return ["message"];
      default:
        return [];
    }
  };

  // Handle previous step
  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Recommended requirements based on industry and project type
  const getRecommendedRequirements = () => {
    const { industry, projectType } = formData;
    
    // Web development projects
    if (projectType.toLowerCase().includes("web")) {
      return [
        "Responsive Design",
        "CMS Integration",
        "SEO Optimization",
        "Analytics Integration",
        "User Authentication",
      ];
    }
    
    // Mobile app projects
    if (projectType.toLowerCase().includes("mobile")) {
      return [
        "iOS Development",
        "Android Development",
        "Push Notifications",
        "Offline Functionality",
        "In-App Purchases",
      ];
    }
    
    // E-commerce projects
    if (projectType.toLowerCase().includes("ecommerce")) {
      return [
        "Payment Gateway Integration",
        "Inventory Management",
        "Shopping Cart System",
        "User Reviews & Ratings",
        "Order Tracking",
      ];
    }
    
    // Default recommendations
    return [
      "UI/UX Design",
      "Front-end Development",
      "Back-end Development",
      "Database Design",
      "API Integration",
    ];
  };

  // Progress calculation
  const calculateProgress = () => {
    const totalSteps = 3;
    const completedSteps = currentStep - 1;
    const currentStepProgress = isStepComplete(currentStep) ? 1 : 0;
    return Math.round(((completedSteps + currentStepProgress) / totalSteps) * 100);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="grid-layout">
          {/* Left Side: Text Content */}
          <div className="hero-text">
            <h1 className="hero-title">Get in Touch</h1>
            <p className="hero-subtext">Let's Create Something Amazing Together</p>
            <p className="hero-description">
              Answer a few questions about your project, and we'll help bring your ideas to life.
            </p>
          </div>

          {/* Right Side: Connect Illustration */}
          <div className="hero-image">
            <img src={ConnectIllustration} alt="Connect With Us" />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-text">
          <h2 className="contact-header">We'd love to hear from you</h2>
          <p className="contact-note">
            Fill out the details below and we'll be in touch with personalized solutions for your project.
          </p>
          
          {/* Help Text */}
          <div className="help-box">
            <h4>Need help?</h4>
            <p>Call us: <strong>(555) 123-4567</strong></p>
            <p>Email: <strong>support@example.com</strong></p>
            <p className="availability">Available Mon-Fri, 9am-5pm EST</p>
          </div>
        </div>

        {/* Multi-step Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Success Message */}
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Thank you for your submission!</h3>
              <p>We've received your request and will get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              {/* Progress Bar */}
              <div className="progress-bar-container">
                <div className="progress-text">
                  Step {currentStep} of 3
                  <span className="progress-percentage">{calculateProgress()}% Complete</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${calculateProgress()}%` }}
                  ></div>
                </div>
              </div>

              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="form-step">
                  <h3>Step 1: Tell us about yourself</h3>
                  <div className={`form-element ${touched.name && errors.name ? 'error' : ''}`}>
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Doe"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                    />
                    {touched.name && errors.name && <div className="error-message">{errors.name}</div>}
                  </div>
                  <div className={`form-element ${touched.email && errors.email ? 'error' : ''}`}>
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="john@example.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                    />
                    {touched.email && errors.email && <div className="error-message">{errors.email}</div>}
                  </div>
                  <div className="form-element">
                    <label htmlFor="industry">Your Industry</label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                    >
                      <option value="">Select Your Industry</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="education">Education</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="technology">Technology</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button 
                    type="button" 
                    className={`submit-button ${!isStepComplete(1) ? 'disabled' : ''}`}
                    onClick={handleNextStep}
                    disabled={!isStepComplete(1)}
                    aria-label="Go to step 2"
                  >
                    Next Step
                  </button>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="form-step">
                  <h3>Step 2: Project Details</h3>
                  <div className="form-element">
                    <label htmlFor="projectType">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      aria-required="true"
                    >
                      <option value="">Select Project Type</option>
                      <option value="website">Website</option>
                      <option value="mobileApp">Mobile App</option>
                      <option value="ecommerce">E-commerce Platform</option>
                      <option value="webApp">Web Application</option>
                      <option value="branding">Branding & Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-element">
                    <label htmlFor="timeline">Project Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      aria-required="true"
                    >
                      <option value="">When do you need it?</option>
                      <option value="1month">Less than 1 month</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6+months">6+ months</option>
                    </select>
                  </div>
                  <div className="form-element">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      aria-required="true"
                    >
                      <option value="">What's your budget?</option>
                      <option value="<5k">Less than $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k+">$25,000+</option>
                    </select>
                  </div>
                  <div className="form-navigation">
                    <button 
                      type="button" 
                      className="back-button" 
                      onClick={handlePrevStep}
                      aria-label="Go back to step 1"
                    >
                      Back
                    </button>
                    <button 
                      type="button" 
                      className={`submit-button ${!isStepComplete(2) ? 'disabled' : ''}`}
                      onClick={handleNextStep}
                      disabled={!isStepComplete(2)}
                      aria-label="Go to step 3"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Requirements */}
              {currentStep === 3 && (
                <div className="form-step">
                  <h3>Step 3: Project Requirements</h3>
                  <p className="requirements-intro">
                    Based on your industry and project type, we recommend the following features:
                  </p>
                  <div className="form-element requirements-list">
                    {getRecommendedRequirements().map((req, index) => (
                      <div className="requirement-item" key={index}>
                        <input
                          type="checkbox"
                          id={`req-${index}`}
                          name="requirements"
                          value={req}
                          checked={formData.requirements.includes(req)}
                          onChange={handleCheckboxChange}
                          aria-label={req}
                        />
                        <label htmlFor={`req-${index}`}>{req}</label>
                      </div>
                    ))}
                  </div>
                  
                  {suggestions.length > 0 && (
                    <div className="suggestions-container">
                      <h4>Suggestions based on your input:</h4>
                      <ul className="suggestions-list">
                        {suggestions.map((suggestion, index) => (
                          <li key={index}>{suggestion}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="form-element">
                    <label htmlFor="message">Additional Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share more about your project goals, challenges, or specific requirements..."
                      rows="4"
                      aria-label="Additional project details"
                    ></textarea>
                  </div>
                  
                  {/* Terms and Privacy */}
                  <div className="form-element terms-checkbox">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      onChange={() => {}}
                      required
                    />
                    <label htmlFor="terms">
                      I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                    </label>
                  </div>
                  
                  <div className="form-navigation">
                    <button 
                      type="button" 
                      className="back-button" 
                      onClick={handlePrevStep}
                      aria-label="Go back to step 2"
                    >
                      Back
                    </button>
                    <button 
                      type="submit" 
                      className="submit-button"
                      disabled={isSubmitting}
                      aria-label="Submit form"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </button>
                  </div>
                </div>
              )}
              
              {/* Progress Indicator */}
              <div className="progress-indicator">
                <div className={`step-indicator ${currentStep >= 1 ? "active" : ""}`} aria-label="Step 1">1</div>
                <div className="step-line"></div>
                <div className={`step-indicator ${currentStep >= 2 ? "active" : ""}`} aria-label="Step 2">2</div>
                <div className="step-line"></div>
                <div className={`step-indicator ${currentStep >= 3 ? "active" : ""}`} aria-label="Step 3">3</div>
              </div>
            </>
          )}
        </form>
      </section>
    </div>
  );
};

export default ContactForm;