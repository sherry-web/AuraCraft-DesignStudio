// src/App.js
import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/Routes";
import ScrollToTop from "./components/ScrollToTop";
import ScrollButton from "./components/ScrollButton";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

// Make sure this is a function component with proper export
const App = () => {
  return (
    <>
      <ErrorBoundary>
        <ScrollToTop />
        <div className="App">
          <NavBar />
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
          <Footer />
        </div>
        <ScrollButton />
      </ErrorBoundary>
    </>
  );
};

// Add this default export
export default App;