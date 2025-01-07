import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom'; // No need for BrowserRouter here
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { HeroProvider } from './components/context/HeroContext';
import PrivateRoute from './routes/PrivateRoute';
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
const IntroJourney = lazy(() => import('./components/IntroJourney'));

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('auth', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('auth', 'false');
  };

  return (
    <div className="App">
      <NavBar />
      <HeroProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/intro-journey" element={<IntroJourney />} />
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
