import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = lazy(() => import("../components/Home/Home"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const Services = lazy(() => import("../components/Services"));
const Projects = lazy(() => import("../components/Projects/Projects"));
const ContactForm = lazy(() => import("../components/pages/ContactForm"));
const GetStarted = lazy(() => import("../components/pages/GetStarted"));
const Articles = lazy(() => import("../components/pages/Articles"));
const NotFound = lazy(() => import("../components/NotFound"));

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/terms" element={<div>Terms of Service Page</div>} />
        <Route path="/privacy" element={<div>Privacy Policy Page</div>} />
        <Route path="/legal" element={<div>Legal Page</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;