// Error handling for login
const handleLogin = async (credentials) => {
    try {
      // Validate credentials before making the API call
      const validationErrors = validateForm(credentials);
      if (Object.keys(validationErrors).length > 0) {
        throw new Error("Please fill in all required fields.");
      }
  
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Invalid email or password.");
      }
  
      const data = await response.json();
      // Redirect to dashboard or handle successful login
      console.log("Login successful:", data);
      return data;
    } catch (error) {
      console.error("Login error:", error.message);
      throw error; // Re-throw the error for the calling function to handle
    }
  };
  
  // Form validation
  const validateForm = (formData) => {
    const errors = {};
  
    // Email validation
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
  
    // Password validation
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
  
    return errors;
  };
  
  // Handle form submission
  const handleFormSubmit = async (formData) => {
    try {
      // Validate form data
      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        throw new Error("Form validation failed. Please check your inputs.");
      }
  
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Form submission failed.");
      }
  
      const data = await response.json();
      console.log("Form submitted successfully:", data);
      return data;
    } catch (error) {
      console.error("Form submission error:", error.message);
      throw error; // Re-throw the error for the calling function to handle
    }
  };
  
  // Handle project submission
  const handleProjectSubmission = async (projectDetails) => {
    try {
      // Validate project details
      if (!projectDetails || Object.keys(projectDetails).length === 0) {
        throw new Error("Project details are required.");
      }
  
      const response = await fetch("/api/submit-project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectDetails),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Project submission failed.");
      }
  
      const data = await response.json();
      console.log("Project submitted successfully:", data);
      return data;
    } catch (error) {
      console.error("Project submission error:", error.message);
      throw error; // Re-throw the error for the calling function to handle
    }
  };
  
  export { handleLogin, validateForm, handleFormSubmit, handleProjectSubmission };