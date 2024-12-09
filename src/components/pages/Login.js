import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated authentication
    if (username === 'user' && password === 'password') {
      onLogin(); // Update login status in parent or context
      navigate('/dashboard'); // Navigate to the dashboard
    } else {
      alert('Invalid login credentials!');
    }
  };

  return (
    <div className="login-container">
      <div>
        <h1>Login Page</h1>
        <p>Welcome back! Please log in to your account.</p>
      </div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
