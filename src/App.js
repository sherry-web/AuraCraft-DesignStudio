import React, { useState, Suspense } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/Routes";
import ScrollToTop from "./components/ScrollToTop";
import ScrollButton from "./components/ScrollButton";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {/* Ensures page starts at top on navigation */}
      <ScrollToTop />
      <div className="App">
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes />
        </Suspense>
        <Footer />
      </div>
      {/* Button to scroll to top */}
      <ScrollButton />
    </>
  );
};

export default App;
