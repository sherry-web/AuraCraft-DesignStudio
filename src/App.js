import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/Routes";
import ScrollToTop from "./components/ScrollToTop";
import ScrollButton from "./components/ScrollButton";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <ScrollToTop />
        <div className="App">
          <NavBar />
          <main>
            <ErrorBoundary>
              <AppRoutes />
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
        <ScrollButton />
      </ErrorBoundary>
    </>
  );
};

export default App;