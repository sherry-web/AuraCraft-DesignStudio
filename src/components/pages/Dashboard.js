import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">Logo</div>
        <nav className="sidebar-menu">
          <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#calendar">Calendar</a></li>
          </ul>
        </nav>
        <div className="sidebar-promo">
          <button>Start a Project</button>
        </div>
        <div className="sidebar-settings">
          <ul>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#logout">Logout</a></li>
          </ul>
        </div>
      </aside>

      {/* Main Dashboard Section */}
      <main className="dashboard-main">
        {/* Top Nav */}
        <header className="top-nav">
          <input type="text" placeholder="Search..." className="search-bar" />
          <div className="top-nav-icons">
            <span className="notification-icon">🔔</span>
            <img src="/path/to/avatar.png" alt="User Avatar" className="user-avatar" />
            <button className="cta-start">Start a Project</button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="card">Completed Tasks</div>
          <div className="card">New Tasks</div>
          <div className="card">Upcoming Deals</div>
          <div className="card">All Tasks</div>
        </section>

        {/* Middle Section */}
        <section className="middle-section">
          <div className="card">To Do</div>
          <div className="card">In Progress</div>
          <div className="card">Done</div>
        </section>

        {/* Footer Section */}
        <section className="footer-section">
          <div className="card">My Projects</div>
          <div className="card">Total Tasks</div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
