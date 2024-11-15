import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically send a request to your backend to verify the credentials
    if (username === 'user' && password === 'password') {
      onLogin();  // Update login status in parent or context
      history.push('/dashboard');  // Redirect to dashboard
    } else {
      alert('Invalid login credentials!');
    }
  };

  return (
    <div className="login-container">
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