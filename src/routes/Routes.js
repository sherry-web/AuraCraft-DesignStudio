import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Projects from "../components/Projects/Projects";
import ContactForm from "../components/pages/ContactForm";
import GetStarted from "../components/pages/GetStarted";
import LearnMore from "../components/pages/LearnMore";
import Analyze from "../components/pages/Analyze";
import Articles from "../components/pages/Articles";
import IntroJourney from "../components/IntroJourney";
import Login from "../components/pages/Login";
import Dashboard from "../components/pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  const isAuthenticated = localStorage.getItem("auth") === "true";

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/learn-more" element={<LearnMore />} />
      <Route path="/analyze" element={<Analyze />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/intro-journey" element={<IntroJourney />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
