import React from 'react';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Works from './components/Works';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <AboutUs />
      <Services />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
