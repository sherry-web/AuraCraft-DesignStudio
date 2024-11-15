import React from 'react';
import Button from './Button';  
import Footer from './Footer';  
import IconWrapper from './IconWrapper';  
import MenuIconAntMenu from './MenuIconAntMenu';  
import './styles/style.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to AuraCraft Design Studio</h1>
      {/* Other content here */}
      <Button label="Get Started" onClick={() => alert('Get Started clicked')} />
      <Footer />
      {/* Add other components like IconWrapper and MenuIconAntMenu as needed */}
    </div>
  );
};

export default Home;
