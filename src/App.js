import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import only Routes and Route
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import IntroJourney from './components/IntroJourney';
import PrivateRoute from './routes/PrivateRoute';
import { HeroProvider } from './components/context/HeroContext'; // Import HeroProvider
import HeroSection from './components/HeroSection/HeroSection'; // Import HeroSection
import './App.css';

// Lazy-loaded components
const Home = lazy(() => import('./components/Home/Home'));
const Login = lazy(() => import('./components/pages/Login'));
const Dashboard = lazy(() => import('./components/pages/Dashboard'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Services = lazy(() => import('./components/Services'));
const Works = lazy(() => import('./components/Works'));
const ContactForm = lazy(() => import('./components/pages/ContactForm'));
const GetStarted = lazy(() => import('./components/pages/GetStarted'));

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <div className="App">
      <NavBar />
      {/* Wrap the main content with HeroProvider to make the HeroSection accessible */}
      <HeroProvider>
        <HeroSection /> {/* Display HeroSection here */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Intro Journey */}
            <Route path="/" element={<IntroJourney />} />

            {/* Other Routes */}
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login onLogin={login} />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Dashboard onLogout={logout} />
                </PrivateRoute>
              }
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </Suspense>
      </HeroProvider>
      <Footer />
    </div>
  );
};

export default App;
