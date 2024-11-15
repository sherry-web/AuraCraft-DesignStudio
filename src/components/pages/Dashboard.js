import React from 'react';
import { Navigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = ({ onLogout }) => {
  const history = useHistory();

  const handleLogout = () => {
    onLogout();  // Update the logout status in parent or context
    history.push('/login');  // Redirect to login page
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to your Dashboard</h2>
      <p>Here you can manage your settings and account.</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Dashboard;
